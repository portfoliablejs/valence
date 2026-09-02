# @portfoliablejs/valence

Valence is the web component design system used by Portfoliable.

## Install

```bash
npm install @portfoliablejs/valence
```

## Usage

```js
import '@portfoliablejs/valence';
```

## Local development

```bash
npm run dev
npm run build
npm run preview
```

## Thumbnail Mockup Maintainer Guide

This section documents how maintainers add or update device families used by the thumbnail components.

### Supported file types

- Source ingestion for conversion: PNG files under src/stories/assets/mockups
- Runtime catalog and manifest analysis: AVIF files under src/stories/assets/mockups
- Conversion script scope:
	- scripts/thumbnail-generation/convert-mockups.js scans only PNG and writes sibling AVIF files
	- existing AVIF files are skipped by design
- Crop script scope:
	- scripts/thumbnail-generation/crop-mockups.js scans only AVIF and trims in place
	- unchanged files can be fast-skipped on subsequent runs using scripts/thumbnail-generation/.crop-mockups.cache.json
- Manifest generator scope:
	- scripts/generate-thumbnail-manifest.js scans only AVIF and writes thumbnail-manifest.generated.js
	- unchanged files can be fast-skipped on subsequent runs using scripts/.thumbnail-manifest.cache.json
	- mobile entries can include screenImageAnchor/notch metadata for top notch alignment
	- optional overrides in scripts/thumbnail-manifest.overrides.json are merged last and win over generated values
- PNG cleanup scope:
	- scripts/thumbnail-generation/delete-png-leftovers.js removes PNG files only when a sibling AVIF already exists

Practical meaning:

- If you add only PNG, run conversion before manifest generation.
- If you add AVIF directly, conversion is optional, but crop and manifest generation still apply.
- crop script behavior: first run analyzes all files; later runs skip unchanged files that were already confirmed as trimmed.
- manifest behavior: first run analyzes all files; later runs skip unchanged files using the manifest cache.
- mobile notch behavior: when a notched screen profile is detected, manifest pins screen media to top-center so screenshot notch aligns with frame notch.
- override behavior: never edit thumbnail-manifest.generated.js manually. put persistent manual adjustments in scripts/thumbnail-manifest.overrides.json.
- cleanup behavior: PNG leftovers are deleted only when a matching AVIF file exists.

#### Persistent per-device overrides

When a specific device needs exact hand-tuned values, add an entry in scripts/thumbnail-manifest.overrides.json keyed by full manifest path.

Example key format:

- /src/stories/assets/mockups/mobile/apple/Apple iPhone 17/iPhone 17 - Black - Portrait.avif

Wildcard key format (apply one override to many entries):

- /src/stories/assets/mockups/mobile/apple/Apple iPhone 17/iPhone 17 - * - Portrait.avif

Supported override fields include any generated manifest fields, such as:

- bounds
- screenRadius
- screenRadiusCorners
- edgeBleed
- screenImageAnchor
- notch

Run npm run generate:thumbnail-manifest after editing overrides. The generator merges overrides as the final step, so manual values persist across all future runs.

Exact key overrides run first, wildcard runs after in current implementation, so wildcard can overwrite exact values if both match.

### Folder support

Folders are recursive and supported under:

- src/stories/assets/mockups/**

Expected hierarchy:

- category/brand/model/[optional state folders]/file.avif

Current built-in categories used by manifest boundary rules:

- desktop
- mobile
- tablet
- television
- wearable

If a new top-level category is introduced, update boundary handling in scripts/generate-thumbnail-manifest.js.

### Naming conventions

Category folder:

- lowercase
- stable canonical names listed above

Brand folder:

- lowercase
- no decorative punctuation

Model folders:

- human-readable model names
- use consistent spacing and casing
- avoid generic state names as model folders

Color/variant filename:

- AVIF/PNG base name should begin with model wording and end with variant/color wording
- format recommendation: <Model Name> <Color or Variant>.png

Generic state wrappers supported and ignored when deriving model keys:

- device
- device with pencil
- device without pencil
- device with shadow
- device open
- device closed
- open
- closed
- with bands
- without bands

This normalization keeps runtime model keys aligned with catalog generation and prevents fallback mismatches.

#### Example: iPhone 17 naming and resulting selector strings

If files are placed in:

- src/stories/assets/mockups/mobile/apple/Apple iPhone 17/

With filenames like:

- iPhone 17 - Black - Landscape.png
- iPhone 17 - Black - Portrait.png

Then generated selector fields are:

- `thumbCategory: mobile`
- `thumbBrand: apple`
- `thumbModel: Apple iPhone 17`
- `thumbColor: iPhone 17 - Black - Landscape` (and equivalent per file)

Why this happens: thumbColor stripping works best when the filename prefix matches thumbModel wording.

If you want cleaner color-only values like Black - Landscape, use this model folder instead:

- src/stories/assets/mockups/mobile/apple/iPhone 17/

With that folder/model alignment, generated values become:

- `thumbCategory`: mobile
- `thumbBrand`: apple
- `thumbModel`: iPhone 17
- `thumbColor`: Black - Landscape (and equivalent per file)

### Maintainer workflow

From Valence root:

```bash
node scripts/thumbnail-generation/convert-mockups.js
node scripts/thumbnail-generation/crop-mockups.js
npm run generate:thumbnail-manifest
node scripts/thumbnail-generation/delete-png-leftovers.js
```

Or run the all-in-one pipeline:

```bash
npm run prepare:thumbnails
```

Then validate in consumer workflow (Portfoliable side) by regenerating thumbnail options and checking selector tuples.

### Consumer verification when using npm link

If Portfoliable maintainers are using npm link (instead of valence:local), validate end-to-end from create-portfoliable:

1. Confirm link mode:
- run `npm run valence:status`
- expect `installed: yes (local-link)`

2. Confirm linked dependency includes new assets:
- inspect `node_modules/@portfoliablejs/valence/src/stories/assets/mockups` and verify new AVIF files are present

3. Confirm linked dependency includes updated manifest:
- inspect `node_modules/@portfoliablejs/valence/src/stories/atoms/Thumbnail/thumbnail-manifest.generated.js` and verify the new device entry exists

4. Confirm Portfoliable consumes linked assets:
- run `npm run portfoliable-thumbnail-options -- --json`
- verify the generated selector catalog contains your new brand/category/model/color path

5. Confirm runtime rendering:
- paste the exact generated selector tuple into case config
- run dev preview and confirm ds-thumbnail resolves the new device without fallback

Check mode
npm run valence:status

If it says npm-package, relink local
npm run valence:local

Start dev
npm run dev -- --host 127.0.0.1 --port 5173

Fast recovery command
If you want one quick command when things look wrong:

npm run valence:local && npm run dev -- ---host 0.0.0.0 --port 5173

When to re-run valence:local

After npm install
After deleting node_modules or package-lock
After switching branches
After any script that may reinstall dependencies
How to confirm you are truly linked
Run npm run valence:status and verify:

installed: yes (local-link)
Practical team habit
Add this as your muscle memory:

status
local
dev


### Consumer verification when using npm publication

If Portfoliable maintainers are consuming Valence from npm (no local link), verify publication-to-consumer propagation:

1. Confirm published version contains your changes:
- publish from Valence release workflow
- run npm view @portfoliablejs/valence version and confirm expected version is live

2. Confirm create-portfoliable resolves npm package mode:
- from create-portfoliable, run npm run valence:status
- expect installed: yes (npm-package)
- confirm installed version matches the published release

3. If needed, align dependency range before install:
- check create-portfoliable/package.json dependency range for @portfoliablejs/valence
- if published version is outside range, update range and reinstall

4. Refresh consumer dependency:
- run npm run valence:npm (or npm install)

5. Confirm new assets and manifest exist in installed package:
- inspect node_modules/@portfoliablejs/valence/src/stories/assets/mockups for the new AVIF files
- inspect node_modules/@portfoliablejs/valence/src/stories/atoms/Thumbnail/thumbnail-manifest.generated.js for new entries

6. Confirm Portfoliable catalog and runtime:
- run npm run portfoliable-thumbnail-options -- --json and verify selector presence
- use exact selector tuple in case config and confirm ds-thumbnail renders without fallback

### Verification checklist

1. New AVIF files exist in the expected category/brand/model path.
2. Manifest file updates successfully inside `src/stories/atoms/Thumbnail/thumbnail-manifest.generated.js`
3. Storybook/dev runtime can resolve category, brand, model, and color.
4. Selector tuples generated in Portfoliable match runtime behavior.
