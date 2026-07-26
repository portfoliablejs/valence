import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync, appendFileSync } from "node:fs";

const REPO_URL = "https://github.com/portfoliablejs/valence";
const isDryRun = process.argv.includes("--dry-run");
const shouldSign = process.env.RELEASE_SIGN === "true";

const target = {
  key: "valence",
  displayName: "@portfoliablejs/valence",
  packageJsonPath: "package.json",
  changelogPath: "CHANGELOG.md",
  tagPrefix: "v",
  paths: ["."],
};

function git(args, options = {}) {
  try {
    return execFileSync("git", args, {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "pipe"],
      ...options,
    }).trim();
  } catch (error) {
    if (options.allowFailure) {
      return "";
    }
    throw error;
  }
}

function getLastTag(tagPrefix) {
  return git(["describe", "--tags", "--match", `${tagPrefix}*`, "--abbrev=0"], {
    allowFailure: true,
  });
}

function getCommitRange(lastTag) {
  if (lastTag) {
    return `${lastTag}..HEAD`;
  }
  const firstCommit = git(["rev-list", "--max-parents=0", "HEAD"]);
  return `${firstCommit}..HEAD`;
}

function parseCommitType(subject) {
  const match = subject.match(/^([a-z]+)(\([^)]+\))?(!)?:\s+/i);
  if (!match) {
    return { type: "", breakingByHeader: false };
  }
  return {
    type: match[1].toLowerCase(),
    breakingByHeader: Boolean(match[3]),
  };
}

function classifyCommit(subject, body) {
  const { type, breakingByHeader } = parseCommitType(subject);
  const hasBreakingBody = /BREAKING CHANGE:/i.test(body);

  if (breakingByHeader || hasBreakingBody) {
    return { level: "major", section: "Breaking Changes" };
  }

  if (type === "feat") {
    return { level: "minor", section: "Features" };
  }

  const patchTypes = new Set([
    "fix",
    "perf",
    "refactor",
    "chore",
    "docs",
    "style",
    "test",
    "build",
    "ci",
  ]);

  if (patchTypes.has(type)) {
    return { level: "patch", section: "Bug Fixes" };
  }

  return { level: "none", section: "Other" };
}

function maxLevel(levels) {
  const rank = { none: 0, patch: 1, minor: 2, major: 3 };
  let best = "none";
  for (const level of levels) {
    if (rank[level] > rank[best]) {
      best = level;
    }
  }
  return best;
}

function readCommits(range, paths) {
  const format = "%H%x01%s%x01%b%x02";
  const output = git(["log", range, `--pretty=format:${format}`, "--", ...paths], {
    allowFailure: true,
  });

  if (!output) {
    return [];
  }

  return output
    .split("\x02")
    .map((record) => record.trim())
    .filter(Boolean)
    .map((record) => {
      const [hash = "", subject = "", body = ""] = record.split("\x01");
      const classification = classifyCommit(subject, body);
      return {
        hash,
        shortHash: hash.slice(0, 7),
        subject,
        body,
        level: classification.level,
        section: classification.section,
      };
    });
}

function bumpVersion(currentVersion, level) {
  const [major, minor, patch] = currentVersion.split(".").map((part) => Number(part));

  if ([major, minor, patch].some((part) => Number.isNaN(part))) {
    throw new Error(`Invalid semver version: ${currentVersion}`);
  }

  if (level === "major") {
    return `${major + 1}.0.0`;
  }
  if (level === "minor") {
    return `${major}.${minor + 1}.0`;
  }
  return `${major}.${minor}.${patch + 1}`;
}

function updatePackageJson(filePath, nextVersion) {
  const raw = readFileSync(filePath, "utf8");
  const pkg = JSON.parse(raw);
  pkg.version = nextVersion;
  writeFileSync(filePath, `${JSON.stringify(pkg, null, 2)}\n`, "utf8");
}

function buildReleaseEntry({ nextVersion, previousTag, nextTag, commits }) {
  const date = new Date().toISOString().slice(0, 10);
  const compareUrl = previousTag
    ? `${REPO_URL}/compare/${previousTag}...${nextTag}`
    : `${REPO_URL}/releases/tag/${nextTag}`;

  const lines = [`## [${nextVersion}](${compareUrl}) (${date})`, ""];
  const sections = ["Breaking Changes", "Features", "Bug Fixes", "Other"];

  for (const section of sections) {
    const sectionCommits = commits.filter((commit) => commit.section === section);
    if (!sectionCommits.length) {
      continue;
    }

    lines.push(`### ${section}`);
    lines.push("");

    for (const commit of sectionCommits) {
      const safeSubject = commit.subject.replace(/\s+/g, " ").trim();
      lines.push(`* ${safeSubject} ([${commit.shortHash}](${REPO_URL}/commit/${commit.hash}))`);
    }

    lines.push("");
  }

  return lines.join("\n").trim();
}

function prependChangelog(filePath, releaseEntry) {
  const existing = readFileSync(filePath, "utf8");
  writeFileSync(filePath, `${releaseEntry}\n\n${existing.trimStart()}\n`, "utf8");
}

function setGithubOutput(name, value) {
  if (!process.env.GITHUB_OUTPUT) {
    return;
  }
  appendFileSync(process.env.GITHUB_OUTPUT, `${name}=${value}\n`);
}

function run() {
  const previousTag = getLastTag(target.tagPrefix);
  const range = getCommitRange(previousTag);
  const commits = readCommits(range, target.paths);
  const releasableCommits = commits.filter((commit) => commit.level !== "none");
  const bump = maxLevel(releasableCommits.map((commit) => commit.level));

  if (bump === "none") {
    setGithubOutput("released_valence", "false");
    setGithubOutput("released_any", "false");
    console.log("No releasable commits detected.");
    return;
  }

  const currentVersion = JSON.parse(readFileSync(target.packageJsonPath, "utf8")).version;
  const nextVersion = bumpVersion(currentVersion, bump);
  const nextTag = `${target.tagPrefix}${nextVersion}`;

  setGithubOutput("released_valence", "true");
  setGithubOutput("released_any", "true");
  setGithubOutput("valence_version", nextVersion);
  setGithubOutput("valence_tag", nextTag);

  console.log(`${target.displayName}: ${currentVersion} -> ${nextVersion} (${bump})`);

  if (isDryRun) {
    console.log("Dry run enabled; skipping file updates, commit, and tags.");
    return;
  }

  updatePackageJson(target.packageJsonPath, nextVersion);
  const releaseEntry = buildReleaseEntry({
    nextVersion,
    previousTag,
    nextTag,
    commits: releasableCommits,
  });
  prependChangelog(target.changelogPath, releaseEntry);

  git(["add", target.packageJsonPath, target.changelogPath]);
  const commitArgs = ["commit", "-m", `chore(release): ${target.displayName}@${nextVersion} [skip ci]`];
  if (shouldSign) {
    commitArgs.splice(1, 0, "-S");
  }
  git(commitArgs);

  const tagExists = git(["rev-parse", "-q", "--verify", `refs/tags/${nextTag}`], {
    allowFailure: true,
  });
  if (!tagExists) {
    const tagArgs = shouldSign
      ? ["tag", "-s", nextTag, "-m", `Release ${nextTag}`]
      : ["tag", "-a", nextTag, "-m", `Release ${nextTag}`];
    git(tagArgs);
  }
}

run();
