#!/usr/bin/env python3
import json
import os
import sys
from pathlib import Path
from typing import List, Dict, Optional

try:
    from PIL import Image
except Exception as e:
    print("Pillow is required. Install with: pip install pillow", file=sys.stderr)
    raise

IMAGE_EXTS = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".bmp"}
ROOT = Path(__file__).resolve().parents[1]
BG_DIR = ROOT / "images/gamebuilder/backgrounds"
SPR_DIR = ROOT / "images/gamebuilder/spritesheets"


def list_images(folder: Path) -> List[Path]:
    if not folder.exists():
        return []
    files = []
    for p in sorted(folder.iterdir()):
        if p.is_file() and p.suffix.lower() in IMAGE_EXTS:
            files.append(p)
    return files


def probe_dims(image_path: Path) -> Optional[Dict[str, int]]:
    try:
        with Image.open(image_path) as im:
            w, h = im.size
            return {"w": int(w), "h": int(h)}
    except Exception:
        return None


def title_from_filename(p: Path) -> str:
    name = p.stem
    name = name.replace("_", " ").replace("-", " ")
    return name.title()


def write_backgrounds_manifest():
    items = []
    for img in list_images(BG_DIR):
        dims = probe_dims(img) or {}
        items.append({
            "name": title_from_filename(img),
            # src relative to folder (works with builder's manifest handling)
            "src": img.name,
            **({"h": dims.get("h"), "w": dims.get("w")} if dims else {})
        })
    out = BG_DIR / "index.json"
    out.write_text(json.dumps(items, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {out} ({len(items)} items)")


def write_sprites_manifest():
    items = []
    for img in list_images(SPR_DIR):
        dims = probe_dims(img) or {}
        # Default rows/cols if no metadata provided
        item = {
            "name": title_from_filename(img),
            "src": img.name,
            "rows": 4,
            "cols": 3,
        }
        if dims:
            item.update({"h": dims.get("h"), "w": dims.get("w")})
        items.append(item)
    out = SPR_DIR / "index.json"
    out.write_text(json.dumps(items, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {out} ({len(items)} items)")


def main():
    BG_DIR.mkdir(parents=True, exist_ok=True)
    SPR_DIR.mkdir(parents=True, exist_ok=True)
    write_backgrounds_manifest()
    write_sprites_manifest()


if __name__ == "__main__":
    main()
