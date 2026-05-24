#!/usr/bin/env python3
import argparse
import json
from pathlib import Path
from typing import Any

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUTPUT_SIZE = 512
MANIFEST_PATH = ROOT / "client/public/images/atlas/manifest.json"


def fit_to_square(image: Image.Image) -> Image.Image:
    image.thumbnail((OUTPUT_SIZE, OUTPUT_SIZE), Image.Resampling.LANCZOS)
    square = Image.new("RGB", (OUTPUT_SIZE, OUTPUT_SIZE), (12, 13, 16))
    x = (OUTPUT_SIZE - image.width) // 2
    y = (OUTPUT_SIZE - image.height) // 2
    square.paste(image, (x, y))
    return square


def crop_cell(image: Image.Image, columns: int, rows: int, column: int, row: int, inset_ratio: float, mode: str) -> Image.Image:
    width, height = image.size
    cell_w = width / columns
    cell_h = height / rows
    x0 = round(column * cell_w)
    y0 = round(row * cell_h)
    x1 = round((column + 1) * cell_w)
    y1 = round((row + 1) * cell_h)

    inset_x = round((x1 - x0) * inset_ratio)
    inset_y = round((y1 - y0) * inset_ratio)
    x0 += inset_x
    y0 += inset_y
    x1 -= inset_x
    y1 -= inset_y

    if mode == "fit":
        return fit_to_square(image.crop((x0, y0, x1, y1)))

    size = min(x1 - x0, y1 - y0)
    cx = (x0 + x1) // 2
    cy = (y0 + y1) // 2
    crop = (cx - size // 2, cy - size // 2, cx - size // 2 + size, cy - size // 2 + size)
    return image.crop(crop).resize((OUTPUT_SIZE, OUTPUT_SIZE), Image.Resampling.LANCZOS)


def public_path(output_path: str) -> str:
    return "/mud/" + output_path.removeprefix("client/public/")


def update_manifest(sheet_path: str, targets: list[dict[str, Any]]) -> None:
    manifest = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
    by_asset = {entry["assetId"]: entry for entry in manifest.get("entries", [])}
    for target in targets:
        entry = by_asset.get(target["assetId"])
        if entry is None:
            manifest.setdefault("entries", []).append({
                "sourceAtlas": sheet_path,
                "row": target["row"],
                "column": target["column"],
                "assetId": target["assetId"],
                "category": target["category"],
                "targetId": target["targetId"],
                "outputPath": target["outputPath"],
                "publicPath": public_path(target["outputPath"]),
            })
        else:
            entry["sourceAtlas"] = sheet_path
            entry["row"] = target["row"]
            entry["column"] = target["column"]
            entry["outputPath"] = target["outputPath"]
            entry["publicPath"] = public_path(target["outputPath"])
    MANIFEST_PATH.write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Crop an AI-generated atlas sheet into square game assets.")
    parser.add_argument("config", help="Path to sheet config JSON")
    parser.add_argument("--inset-ratio", type=float, default=0.04, help="Fraction of each cell to trim before square crop")
    parser.add_argument("--mode", choices=["crop", "fit"], default="crop", help="Use center square crop or fit the whole cell into a square")
    args = parser.parse_args()

    config_path = ROOT / args.config
    config = json.loads(config_path.read_text(encoding="utf-8"))
    sheet_path = config["sheetPath"]
    sheet = Image.open(ROOT / sheet_path).convert("RGB")
    columns = int(config["columns"])
    rows = int(config["rows"])

    for target in config["targets"]:
        square = crop_cell(sheet, columns, rows, int(target["column"]), int(target["row"]), args.inset_ratio, args.mode)
        output_path = ROOT / target["outputPath"]
        output_path.parent.mkdir(parents=True, exist_ok=True)
        square.save(output_path)

    update_manifest(sheet_path, config["targets"])
    print(f"Cropped {len(config['targets'])} assets from {sheet_path}")


if __name__ == "__main__":
    main()
