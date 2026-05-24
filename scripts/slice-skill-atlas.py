#!/usr/bin/env python3
"""Slice a square skill atlas into deterministic square PNG icons."""

from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Slice a square atlas into icon PNGs.")
    parser.add_argument("--atlas", required=True, type=Path)
    parser.add_argument("--out-dir", required=True, type=Path)
    parser.add_argument("--names", required=True, help="Comma-separated output names without .png")
    parser.add_argument("--cols", type=int, default=4)
    parser.add_argument("--rows", type=int, default=4)
    parser.add_argument("--size", type=int, default=256)
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    names = [name.strip() for name in args.names.split(",") if name.strip()]
    expected = args.cols * args.rows
    if len(names) != expected:
        raise SystemExit(f"Expected {expected} names for {args.cols}x{args.rows}, got {len(names)}")

    args.out_dir.mkdir(parents=True, exist_ok=True)
    image = Image.open(args.atlas).convert("RGBA")
    width, height = image.size

    for index, name in enumerate(names):
        row = index // args.cols
        col = index % args.cols
        left = round(col * width / args.cols)
        upper = round(row * height / args.rows)
        right = round((col + 1) * width / args.cols)
        lower = round((row + 1) * height / args.rows)
        icon = image.crop((left, upper, right, lower)).resize((args.size, args.size), Image.Resampling.LANCZOS)
        icon.save(args.out_dir / f"{name}.png")


if __name__ == "__main__":
    main()
