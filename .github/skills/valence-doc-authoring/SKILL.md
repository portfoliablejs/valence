---
name: valence-doc-authoring
description: 'Author and review Valence documentation for component docs, architecture docs, changelogs, and sub-atomic standards. Use when creating or updating Storybook MDX docs, enforcing accessibility and token rules, or converting component code into documentation artifacts.'
argument-hint: 'Doc type + target, for example: architecture for ds-button in atoms, changelog for CaseNavigator v1.2.0, or sub-atomic accessibility update.'
---

# Valence Documentation Authoring

Use this skill to produce consistent, release-ready documentation aligned with patterns in:
- src/stories/contributing/
- src/stories/sub-atomic/

## Outcomes

This skill produces one or more of the following:
- Component documentation guidance for CSS, JS, and stories alignment.
- Component architecture MDX content with API and event contracts.
- Component changelog MDX content with versioned release notes.
- Sub-atomic standards updates (for example accessibility, typography, layout).
- A publish checklist and quality gate summary.

## When To Use

Use when the user asks to:
- document a new component or refactor existing docs;
- write or update [ComponentName].Architecture.mdx;
- write or update [ComponentName].Changelog.mdx;
- align docs with Valence accessibility and design-token standards;
- review Storybook MDX docs for completeness and consistency.

## Inputs To Gather First

1. Documentation target:
- Component name and atomic tier (atoms, molecules, organisms, templates), or sub-atomic domain.

2. Intended output type:
- Architecture doc, component doc standard update, changelog, or sub-atomic standard.

3. Source of truth:
- Relevant component files: .js, .css, .stories.js.
- Related standards in src/stories/contributing and src/stories/sub-atomic.

4. Release context (if changelog):
- Version, date, and change classification (Added, Fixed, Changed, Removed).

## Decision Tree

1. If the ask is about implementation contracts or integration behavior:
- Produce or update Architecture documentation.

2. If the ask is about release communication and user impact:
- Produce or update Changelog documentation.

3. If the ask is about visual, token, or platform-wide rules:
- Produce or update Sub-atomic documentation.

4. If the ask is about contributor process or component file expectations:
- Produce or update Contributing documentation.

## Workflow

1. Classify the request
- Identify document type and audience (contributors, consumers, maintainers).

2. Extract facts from code and standards
- From .js: observedAttributes, ARIA delegation, MutationObserver patterns, custom events.
- From .css: token usage, variant states, disabled handling, forced-colors split blocks, a11y host attributes.
- From .stories.js: controls schema, tags/autodocs, play-function interaction coverage.

3. Build the MDX skeleton
- Add Meta title in the correct taxonomy.
- Add clear sections with concise headings and tables where useful.
- Include short code samples only when they clarify contracts.

4. Encode Valence architecture guarantees
- State In / Events Out data flow.
- Shadow DOM encapsulation and slot hygiene.
- Root accessibility class reflection to host attributes.
- Host ARIA scrubbing and delegation to internal focusable primitives.

5. Encode accessibility and compatibility guarantees
- WCAG-oriented focus/contrast guidance.
- Safari/WebKit-safe approach (do not rely on :host-context()).
- Forced colors support via both host attribute and media query blocks.
- Reduced motion and dyslexia mode behavior where applicable.

6. Produce completion checklist
- Confirm required sections exist.
- Confirm naming and Storybook title patterns.
- Confirm release labels and scope language (for changelog).
- Confirm examples are technically accurate and consistent with component behavior.

7. Optional review pass
- Flag missing contracts, vague wording, duplicate claims, and unverifiable statements.

## Document-Specific Requirements

### Architecture Docs

Must include:
- Component purpose and role in atomic hierarchy.
- Unidirectional data flow contract.
- Slot architecture and allowed children.
- API tables (properties/attributes and emitted events).
- Accessibility and host integration behavior.
- At least one integration snippet.

### Changelogs

Must include:
- Version header with date.
- Release summary paragraph.
- Summary table (Classification, Scope/Context, Description).
- Grouped sections using Added/Fixed/Changed/Removed as needed.
- Optional reference to system-wide changelog context.

### Component Documentation Standards

Must validate:
- CSS consumes sub-atomic token variables.
- JS lifecycle and accessibility delegation patterns are explicit.
- Storybook controls and interaction tests are documented.
- Disabled, focus-visible, high-contrast, and forced-colors behavior is covered.

### Sub-Atomic Standards

Must define:
- Semantic token intent and scope.
- Modifier class behaviors and compatibility constraints.
- Implementation examples for CSS and JavaScript where needed.
- Practical usage guidance for downstream component authors.

## Quality Gates

Before finalizing, verify:
- Clarity: language is concrete and outcome-oriented.
- Consistency: naming, taxonomy, and section order follow Valence patterns.
- Correctness: no claims that conflict with source code or standards docs.
- Accessibility: includes keyboard, ARIA, contrast, and reduced-motion concerns where relevant.
- Maintainability: avoids duplication and keeps examples minimal but sufficient.

## Output Format

Return results in this order:
1. Draft documentation content.
2. Quick validation checklist with pass/fail per criterion.
3. Open questions for missing inputs.
4. Suggested next edits or follow-up docs.

## Example Prompts

- Draft a Molecules architecture MDX for ds-case-navigator using State In / Events Out and slot tables.
- Create a component changelog for ds-breadcrumb version 1.1.0 focused on accessibility fixes.
- Review this Button documentation and report gaps against Valence CSS/JS/Storybook standards.
- Update sub-atomic Accessibility guidance to include forced-colors and live-region debugging rules.
