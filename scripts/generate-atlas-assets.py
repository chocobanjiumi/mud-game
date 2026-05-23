#!/usr/bin/env python3
import json
import math
import random
from pathlib import Path
from typing import Any

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
PLAN_PATH = ROOT / "docs/atlas/phase4-atlas-plan.json"
PUBLIC_MANIFEST = ROOT / "client/public/images/atlas/manifest.json"
TS_MANIFEST = ROOT / "client/src/generated/atlasManifest.ts"
ATLAS_SIZE = (1600, 1000)
OUTPUT_SIZE = 512

CATEGORY_LABEL = {
    "npc": "NPC",
    "monster": "MOB",
    "item": "ITEM",
    "material": "MAT",
}

CATEGORY_TINT = {
    "npc": (77, 191, 166),
    "monster": (196, 82, 92),
    "item": (216, 174, 79),
    "material": (116, 152, 224),
}


def load_font(size: int) -> ImageFont.ImageFont:
    candidates = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
        "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/Library/Fonts/Arial.ttf",
    ]
    for candidate in candidates:
        path = Path(candidate)
        if path.exists():
            return ImageFont.truetype(str(path), size)
    return ImageFont.load_default()


FONT_L = load_font(42)
FONT_M = load_font(22)
FONT_S = load_font(15)


def stable_seed(value: str) -> int:
    seed = 2166136261
    for char in value:
        seed ^= ord(char)
        seed = (seed * 16777619) & 0xFFFFFFFF
    return seed


def clamp(value: int) -> int:
    return max(0, min(255, value))


def color_for(target: dict[str, Any]) -> tuple[int, int, int]:
    base = CATEGORY_TINT[target["category"]]
    seed = stable_seed(target["id"])
    return (
        clamp(base[0] + ((seed >> 0) & 63) - 31),
        clamp(base[1] + ((seed >> 6) & 63) - 31),
        clamp(base[2] + ((seed >> 12) & 63) - 31),
    )


def initials(target_id: str) -> str:
    parts = [part for part in target_id.replace("-", "_").split("_") if part]
    if not parts:
        return "?"
    if len(parts) == 1:
        return parts[0][:3].upper()
    return "".join(part[0] for part in parts[:3]).upper()


def draw_centered(draw: ImageDraw.ImageDraw, xy: tuple[int, int, int, int], text: str, font: ImageFont.ImageFont, fill: tuple[int, int, int, int]) -> None:
    bbox = draw.textbbox((0, 0), text, font=font)
    width = bbox[2] - bbox[0]
    height = bbox[3] - bbox[1]
    x0, y0, x1, y1 = xy
    draw.text((x0 + (x1 - x0 - width) / 2, y0 + (y1 - y0 - height) / 2), text, font=font, fill=fill)


def draw_emblem(draw: ImageDraw.ImageDraw, target: dict[str, Any], rect: tuple[int, int, int, int]) -> None:
    x0, y0, x1, y1 = rect
    w = x1 - x0
    h = y1 - y0
    cx = x0 + w / 2
    cy = y0 + h / 2
    color = color_for(target)
    light = tuple(clamp(c + 70) for c in color)
    dark = tuple(clamp(c - 80) for c in color)
    white = (238, 242, 230, 235)

    if target["category"] == "npc":
        draw.ellipse((cx - w * 0.18, y0 + h * 0.18, cx + w * 0.18, y0 + h * 0.54), fill=light + (255,), outline=white, width=3)
        draw.polygon([(cx, y0 + h * 0.48), (x0 + w * 0.22, y1 - h * 0.14), (x1 - w * 0.22, y1 - h * 0.14)], fill=dark + (240,), outline=white)
    elif target["category"] == "monster":
        points = []
        for i in range(10):
            angle = -math.pi / 2 + i * math.pi * 2 / 10
            radius = w * (0.31 if i % 2 == 0 else 0.18)
            points.append((cx + math.cos(angle) * radius, cy + math.sin(angle) * radius))
        draw.polygon(points, fill=dark + (245,), outline=white)
        draw.ellipse((cx - w * 0.12, cy - h * 0.08, cx + w * 0.12, cy + h * 0.08), fill=light + (255,))
        draw.ellipse((cx - w * 0.035, cy - h * 0.035, cx + w * 0.035, cy + h * 0.035), fill=(20, 18, 25, 255))
    elif target["category"] == "material":
        crystal = [
            (cx, y0 + h * 0.13),
            (x1 - w * 0.2, cy),
            (cx + w * 0.14, y1 - h * 0.12),
            (x0 + w * 0.22, y1 - h * 0.28),
            (x0 + w * 0.18, cy),
        ]
        draw.polygon(crystal, fill=light + (248,), outline=white)
        draw.line((cx, y0 + h * 0.13, cx + w * 0.14, y1 - h * 0.12), fill=dark + (255,), width=3)
    else:
        draw.rounded_rectangle((x0 + w * 0.23, y0 + h * 0.18, x1 - w * 0.23, y1 - h * 0.18), radius=int(w * 0.08), fill=dark + (245,), outline=white, width=3)
        draw.polygon([(cx, y0 + h * 0.11), (x1 - w * 0.16, cy), (cx, y1 - h * 0.11), (x0 + w * 0.16, cy)], outline=light + (255,), width=5)


def draw_asset(draw: ImageDraw.ImageDraw, target: dict[str, Any], cell: tuple[int, int, int, int]) -> None:
    x0, y0, x1, y1 = cell
    seed = stable_seed(target["id"])
    rng = random.Random(seed)
    color = color_for(target)
    dark = tuple(clamp(c - 95) for c in color)

    draw.rectangle(cell, fill=(10, 12, 20, 255))
    for offset in range(-400, 500, 42):
        shade = tuple(clamp(c + rng.randint(-24, 24)) for c in dark)
        draw.line((x0 + offset, y1, x0 + offset + 520, y0), fill=shade + (165,), width=18)

    margin = max(10, int(min(x1 - x0, y1 - y0) * 0.08))
    inner = (x0 + margin, y0 + margin, x1 - margin, y1 - margin)
    draw.rounded_rectangle(inner, radius=16, outline=color + (230,), width=3)
    draw_emblem(draw, target, inner)

    code = initials(target["targetId"])
    draw_centered(draw, (inner[0], inner[1] + 16, inner[2], inner[1] + 72), code, FONT_L, (248, 245, 224, 255))
    draw.text((inner[0] + 14, inner[3] - 52), CATEGORY_LABEL[target["category"]], font=FONT_S, fill=(230, 236, 220, 210))
    draw.text((inner[0] + 14, inner[3] - 30), target["targetId"][:24], font=FONT_S, fill=(230, 236, 220, 185))


def cell_rect(batch: dict[str, Any], target: dict[str, Any]) -> tuple[int, int, int, int]:
    cell_w = ATLAS_SIZE[0] / batch["columns"]
    cell_h = ATLAS_SIZE[1] / batch["rows"]
    return (
        round(target["column"] * cell_w),
        round(target["row"] * cell_h),
        round((target["column"] + 1) * cell_w),
        round((target["row"] + 1) * cell_h),
    )


def crop_square(image: Image.Image, rect: tuple[int, int, int, int]) -> Image.Image:
    x0, y0, x1, y1 = rect
    size = min(x1 - x0, y1 - y0)
    cx = (x0 + x1) // 2
    cy = (y0 + y1) // 2
    crop = (cx - size // 2, cy - size // 2, cx - size // 2 + size, cy - size // 2 + size)
    return image.crop(crop).resize((OUTPUT_SIZE, OUTPUT_SIZE), Image.Resampling.LANCZOS)


def public_path(output_path: str) -> str:
    return "/mud/" + output_path.removeprefix("client/public/")


def write_ts_manifest(entries: list[dict[str, Any]]) -> None:
    by_category: dict[str, dict[str, str]] = {"npc": {}, "monster": {}, "item": {}, "material": {}}
    for entry in entries:
        by_category[entry["category"]][entry["targetId"]] = public_path(entry["outputPath"])
    TS_MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    body = json.dumps(by_category, ensure_ascii=False, indent=2)
    TS_MANIFEST.write_text(
        "/* Auto-generated by scripts/generate-atlas-assets.py. */\n"
        f"export const ATLAS_ASSETS = {body} as const;\n"
        "export type AtlasCategory = keyof typeof ATLAS_ASSETS;\n",
        encoding="utf-8",
    )


def main() -> None:
    plan = json.loads(PLAN_PATH.read_text(encoding="utf-8"))
    manifest_entries: list[dict[str, Any]] = []

    for batch in plan["batches"]:
        atlas_path = ROOT / batch["sourceAtlasPath"]
        atlas_path.parent.mkdir(parents=True, exist_ok=True)
        atlas = Image.new("RGBA", ATLAS_SIZE, (8, 9, 16, 255))
        draw = ImageDraw.Draw(atlas, "RGBA")
        draw.rectangle((0, 0, ATLAS_SIZE[0] - 1, ATLAS_SIZE[1] - 1), outline=(220, 225, 210, 140), width=4)

        for target in batch["targets"]:
            rect = cell_rect(batch, target)
            draw_asset(draw, target, rect)
            draw.rectangle(rect, outline=(220, 225, 210, 80), width=2)

        atlas.save(atlas_path)

        for target in batch["targets"]:
            out_path = ROOT / target["outputPath"]
            out_path.parent.mkdir(parents=True, exist_ok=True)
            square = crop_square(atlas, cell_rect(batch, target))
            square.save(out_path)
            manifest_entries.append({
                "sourceAtlas": batch["sourceAtlasPath"],
                "row": target["row"],
                "column": target["column"],
                "assetId": target["id"],
                "category": target["category"],
                "targetId": target["targetId"],
                "outputPath": target["outputPath"],
                "publicPath": public_path(target["outputPath"]),
            })

    PUBLIC_MANIFEST.parent.mkdir(parents=True, exist_ok=True)
    PUBLIC_MANIFEST.write_text(json.dumps({
        "generatedAt": plan["generatedAt"],
        "sourcePlan": "docs/atlas/phase4-atlas-plan.json",
        "cellSize": OUTPUT_SIZE,
        "entries": manifest_entries,
    }, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    write_ts_manifest(manifest_entries)
    print(f"Generated {len(plan['batches'])} atlases")
    print(f"Generated {len(manifest_entries)} square assets")
    print(f"Wrote {PUBLIC_MANIFEST.relative_to(ROOT)}")
    print(f"Wrote {TS_MANIFEST.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
