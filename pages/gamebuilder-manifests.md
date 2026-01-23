---
layout: page
title: GameBuilder Assets
permalink: /docs/gamebuilder-manifests
---

## Add Your Own Images
- Backgrounds: put files in `images/gamebuilder/bg`.
- Spritesheets: put files in `images/gamebuilder/sprites`.
- Then open GameBuilder and press the "Refresh Assets" button in the Assets panel.

The builder will discover your files via simple JSON manifests (recommended) or by directory listing (may not work on all hosts). Manifests ensure reliable detection on GitHub Pages.

### Recommended: Manifests
- Backgrounds manifest: `images/gamebuilder/bg/index.json`
- Sprites manifest: `images/gamebuilder/sprites/index.json`

Use these formats:

Backgrounds (`index.json`):
```
[
	{ "name": "Sky Kingdom", "src": "clouds.jpg" },
	{ "name": "Alien Planet", "src": "alien_planet.jpg" }
]
```

Spritesheets (`index.json`):
```
[
	{ "name": "Chill Guy", "src": "chillguy.png", "rows": 4, "cols": 3 },
	{ "name": "Tux", "src": "tux.png", "rows": 8, "cols": 11 }
]
```

Notes:
- `src` can be a filename (relative to the manifest folder) or an absolute path.
- `rows` and `cols` define the spritesheet grid; if omitted, defaults to 4x3.
- `h`/`w` fields are optional; if omitted, the builder auto-detects dimensions.
- Supported image extensions: png, jpg, jpeg, gif, webp, bmp.

### Using Your Assets in GameBuilder
- Click "Refresh Assets" to re-scan folders/manifests.
- Pick your background and sprite from the dropdowns.
- If the list shows duplicates, the builder de-duplicates by name automatically.

### Troubleshooting
- If assets don’t appear, ensure manifests exist and paths are correct.
- For GitHub Pages, directory listing is disabled; manifests are required.
- After renaming or removing files, click "Refresh Assets" to update the lists.
