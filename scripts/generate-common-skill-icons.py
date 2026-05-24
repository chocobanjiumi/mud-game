#!/usr/bin/env python3
"""Generate deterministic 256x256 common/origin skill icons and atlases."""

from __future__ import annotations

import json
import math
from pathlib import Path

from PIL import Image, ImageDraw


ROOT = Path(__file__).resolve().parents[1]
ICON_DIR = ROOT / "client/public/images/skills/icons"
ATLAS_DIR = ROOT / "client/public/images/skills/atlas"
METADATA_PATH = ROOT / "docs/skills/common-origin-skill-atlas-metadata.json"

ICON_SIZE = 256
GRID = 4


SKILLS = [
    ("slash", "揮砍", "crossed steel slash", "#d7d0c3", "#8a3d35", "slash"),
    ("guard", "防禦", "raised shield", "#c8d4dc", "#496273", "shield"),
    ("first_aid", "急救", "bandage and red vial", "#f1e7d2", "#b04a46", "aid"),
    ("inspect", "觀察", "watching eye and lens", "#d9c47d", "#355b70", "eye"),
    ("survival", "求生本能", "campfire and leaf", "#d98c4a", "#3f6f45", "flame"),
    ("pack_sense", "行囊感知", "satchel rune", "#c5975f", "#513a2b", "bag"),
    ("field_awareness", "戰場感知", "compass star", "#90c4d4", "#28495b", "compass"),
    ("steady_hands", "穩定手法", "steady hand craft", "#d8b67a", "#514437", "hand"),
    ("desperate_strike", "孤注一擊", "cracked crimson blade", "#f0d0c0", "#8f2232", "burst"),
    ("race_human_adaptability", "適應力", "four-point human sigil", "#d8d2bb", "#5f5b4c", "star"),
    ("race_elf_keen_senses", "靈敏感知", "leaf and moon eye", "#b7e3a4", "#315e43", "leaf"),
    ("race_dwarf_stoneblood", "石血體質", "stone heart", "#b7b0a6", "#56514f", "gem"),
    ("race_orc_battleblood", "戰血", "blood tusk", "#d86f58", "#703239", "fang"),
    ("race_halfling_lucky_steps", "幸運腳步", "lucky footprint", "#ead37a", "#4f6e52", "foot"),
    ("race_dragonborn_dragonblood", "龍血抗性", "dragon scale", "#df8b5a", "#6b3428", "scale"),
    ("race_shadowkin_shadow_affinity", "幽影親和", "shadow crescent", "#9f8ed9", "#2a2544", "moon"),
    ("faith_aelora_dawn_grace", "黎明恩澤", "dawn sun", "#ffe189", "#8b5c2c", "sun"),
    ("faith_karvos_battle_fervor", "戰意不息", "war ember", "#f06d4c", "#672c26", "burst"),
    ("faith_ithern_whispering_pages", "書頁低語", "arcane page", "#c7d8f0", "#35445f", "book"),
    ("faith_mirak_golden_road", "金路眷顧", "gold road coin", "#f0c85a", "#5c4b25", "road"),
    ("faith_virdan_forest_stride", "林間步伐", "forest stride", "#8fd084", "#2f5a3a", "leaf"),
    ("faith_shalan_moon_whisper", "月下低語", "moon whisper", "#c5b8f0", "#31345c", "moon"),
    ("faith_talorn_stormblood", "風暴血脈", "storm bolt", "#9bd9ff", "#264c70", "bolt"),
    ("faith_oser_dead_whispers", "亡者低語", "spirit skull", "#b9d4c9", "#273f3f", "spirit"),
    ("faith_brokk_forgeheart", "爐心耐性", "forge anvil heart", "#f0a35c", "#5e3325", "anvil"),
    ("faith_nesha_forbidden_echo", "禁識殘響", "forbidden echo rune", "#c090e8", "#3d284f", "rune"),
]


def hex_to_rgb(value: str) -> tuple[int, int, int]:
    value = value.lstrip("#")
    return tuple(int(value[i:i + 2], 16) for i in (0, 2, 4))


def blend(a: tuple[int, int, int], b: tuple[int, int, int], amount: float) -> tuple[int, int, int]:
    return tuple(round(a[i] * (1 - amount) + b[i] * amount) for i in range(3))


def regular_polygon(cx: int, cy: int, radius: int, points: int, rotation: float = 0) -> list[tuple[float, float]]:
    return [
        (
            cx + math.cos(rotation + math.tau * i / points) * radius,
            cy + math.sin(rotation + math.tau * i / points) * radius,
        )
        for i in range(points)
    ]


def draw_symbol(draw: ImageDraw.ImageDraw, symbol: str, fg: tuple[int, int, int], accent: tuple[int, int, int]) -> None:
    cx = cy = ICON_SIZE // 2
    shadow = (12, 14, 18, 180)
    fg_rgba = (*fg, 255)
    accent_rgba = (*accent, 255)

    if symbol == "slash":
        draw.line((76, 188, 185, 70), fill=shadow, width=34)
        draw.line((86, 186, 195, 68), fill=fg_rgba, width=24)
        draw.line((72, 84, 180, 190), fill=accent_rgba, width=16)
    elif symbol == "shield":
        draw.polygon([(128, 48), (186, 72), (172, 166), (128, 210), (84, 166), (70, 72)], fill=fg_rgba)
        draw.polygon([(128, 72), (162, 88), (152, 154), (128, 182), (104, 154), (94, 88)], fill=accent_rgba)
    elif symbol == "aid":
        draw.rounded_rectangle((66, 86, 190, 170), radius=22, fill=fg_rgba)
        draw.rectangle((116, 58, 140, 198), fill=accent_rgba)
        draw.rectangle((70, 116, 186, 140), fill=accent_rgba)
    elif symbol == "eye":
        draw.ellipse((58, 86, 198, 170), fill=fg_rgba)
        draw.ellipse((92, 78, 164, 178), fill=accent_rgba)
        draw.ellipse((114, 100, 142, 150), fill=(10, 14, 22, 255))
    elif symbol == "flame":
        draw.polygon([(128, 42), (172, 130), (145, 212), (93, 198), (82, 133)], fill=accent_rgba)
        draw.polygon([(132, 86), (151, 148), (128, 198), (104, 150)], fill=fg_rgba)
    elif symbol == "bag":
        draw.rounded_rectangle((72, 88, 184, 196), radius=22, fill=fg_rgba)
        draw.arc((92, 42, 164, 128), 190, 350, fill=accent_rgba, width=12)
        draw.polygon(regular_polygon(cx, 142, 28, 4, math.pi / 4), fill=accent_rgba)
    elif symbol == "compass":
        draw.ellipse((60, 60, 196, 196), outline=fg_rgba, width=14)
        draw.polygon([(128, 48), (148, 128), (128, 208), (108, 128)], fill=accent_rgba)
        draw.polygon([(48, 128), (128, 108), (208, 128), (128, 148)], fill=fg_rgba)
    elif symbol == "hand":
        draw.rounded_rectangle((90, 80, 144, 190), radius=24, fill=fg_rgba)
        for x in (118, 142, 166):
            draw.rounded_rectangle((x, 64, x + 24, 150), radius=12, fill=fg_rgba)
        draw.line((62, 188, 190, 90), fill=accent_rgba, width=10)
    elif symbol == "burst":
        draw.polygon(regular_polygon(cx, cy, 86, 8, math.pi / 8), fill=accent_rgba)
        draw.polygon(regular_polygon(cx, cy, 52, 8, 0), fill=fg_rgba)
    elif symbol == "star":
        pts = []
        for i in range(10):
            radius = 82 if i % 2 == 0 else 34
            angle = -math.pi / 2 + i * math.pi / 5
            pts.append((cx + math.cos(angle) * radius, cy + math.sin(angle) * radius))
        draw.polygon(pts, fill=fg_rgba)
        draw.ellipse((104, 104, 152, 152), fill=accent_rgba)
    elif symbol == "leaf":
        draw.ellipse((68, 56, 184, 184), fill=fg_rgba)
        draw.polygon([(74, 184), (184, 72), (154, 204)], fill=accent_rgba)
        draw.line((76, 184, 180, 78), fill=(18, 30, 24, 255), width=8)
    elif symbol == "gem":
        draw.polygon([(128, 44), (190, 96), (166, 196), (90, 196), (66, 96)], fill=fg_rgba)
        draw.polygon([(128, 44), (152, 104), (128, 196), (104, 104)], fill=accent_rgba)
    elif symbol == "fang":
        draw.polygon([(96, 48), (148, 70), (118, 204), (88, 142)], fill=fg_rgba)
        draw.polygon([(148, 54), (190, 92), (138, 204), (132, 132)], fill=accent_rgba)
    elif symbol == "foot":
        draw.ellipse((88, 102, 154, 200), fill=fg_rgba)
        for x, y in [(82, 78), (108, 60), (138, 64), (164, 84)]:
            draw.ellipse((x, y, x + 28, y + 34), fill=accent_rgba)
    elif symbol == "scale":
        for y in (62, 112, 162):
            for x in (76, 128):
                draw.pieslice((x - 42, y - 36, x + 42, y + 48), 200, 340, fill=fg_rgba)
        draw.polygon([(128, 48), (174, 128), (128, 208), (82, 128)], fill=accent_rgba)
    elif symbol == "moon":
        draw.ellipse((70, 50, 190, 190), fill=fg_rgba)
        draw.ellipse((108, 38, 216, 166), fill=(18, 20, 31, 255))
        draw.ellipse((76, 178, 96, 198), fill=accent_rgba)
    elif symbol == "sun":
        for angle in range(0, 360, 30):
            rad = math.radians(angle)
            draw.line((cx, cy, cx + math.cos(rad) * 96, cy + math.sin(rad) * 96), fill=accent_rgba, width=12)
        draw.ellipse((78, 78, 178, 178), fill=fg_rgba)
    elif symbol == "book":
        draw.polygon([(54, 72), (126, 92), (126, 198), (54, 176)], fill=fg_rgba)
        draw.polygon([(130, 92), (202, 72), (202, 176), (130, 198)], fill=fg_rgba)
        draw.line((128, 90, 128, 200), fill=accent_rgba, width=8)
    elif symbol == "road":
        draw.polygon([(108, 210), (148, 210), (136, 66), (120, 66)], fill=fg_rgba)
        draw.ellipse((78, 56, 178, 156), outline=accent_rgba, width=16)
    elif symbol == "bolt":
        draw.polygon([(144, 34), (78, 138), (124, 132), (102, 222), (184, 104), (138, 112)], fill=fg_rgba)
    elif symbol == "spirit":
        draw.ellipse((78, 58, 178, 160), fill=fg_rgba)
        draw.polygon([(78, 128), (104, 210), (130, 158), (158, 210), (178, 128)], fill=fg_rgba)
        draw.ellipse((104, 104, 120, 124), fill=accent_rgba)
        draw.ellipse((136, 104, 152, 124), fill=accent_rgba)
    elif symbol == "anvil":
        draw.rectangle((72, 112, 184, 146), fill=fg_rgba)
        draw.polygon([(92, 146), (164, 146), (146, 196), (110, 196)], fill=accent_rgba)
        draw.rectangle((58, 92, 118, 118), fill=fg_rgba)
    else:  # rune
        draw.polygon(regular_polygon(cx, cy, 78, 6, math.pi / 6), outline=fg_rgba)
        draw.line((128, 62, 128, 194), fill=fg_rgba, width=12)
        draw.arc((78, 78, 178, 178), 20, 320, fill=accent_rgba, width=10)


def make_icon(skill: tuple[str, str, str, str, str, str]) -> Image.Image:
    skill_id, _name, _theme, fg_hex, accent_hex, symbol = skill
    fg = hex_to_rgb(fg_hex)
    accent = hex_to_rgb(accent_hex)
    bg1 = blend(accent, (8, 10, 16), 0.72)
    bg2 = blend(fg, (8, 10, 16), 0.82)

    image = Image.new("RGBA", (ICON_SIZE, ICON_SIZE), (*bg1, 255))
    draw = ImageDraw.Draw(image, "RGBA")
    for y in range(ICON_SIZE):
        amount = y / (ICON_SIZE - 1)
        color = blend(bg1, bg2, amount)
        draw.line((0, y, ICON_SIZE, y), fill=(*color, 255))

    seed = sum(ord(ch) for ch in skill_id)
    for i in range(10):
        angle = math.tau * (i / 10) + seed * 0.01
        radius = 92 + (seed + i * 17) % 26
        x = ICON_SIZE // 2 + math.cos(angle) * radius
        y = ICON_SIZE // 2 + math.sin(angle) * radius
        draw.ellipse((x - 2, y - 2, x + 2, y + 2), fill=(*fg, 80))

    draw.ellipse((30, 30, 226, 226), outline=(*blend(fg, (255, 255, 255), 0.2), 120), width=5)
    draw_symbol(draw, symbol, fg, accent)
    draw.rounded_rectangle((8, 8, 248, 248), radius=20, outline=(255, 255, 255, 42), width=3)
    return image


def main() -> None:
    ICON_DIR.mkdir(parents=True, exist_ok=True)
    ATLAS_DIR.mkdir(parents=True, exist_ok=True)
    METADATA_PATH.parent.mkdir(parents=True, exist_ok=True)

    icons: list[tuple[tuple[str, str, str, str, str, str], Image.Image]] = []
    for skill in SKILLS:
        icon = make_icon(skill)
        icon.save(ICON_DIR / f"{skill[0]}.png")
        icons.append((skill, icon))

    atlases = []
    for atlas_index in range(2):
        atlas_name = f"common-origin-skills-atlas-{atlas_index + 1:02d}.png"
        atlas = Image.new("RGBA", (ICON_SIZE * GRID, ICON_SIZE * GRID), (7, 9, 14, 255))
        cells = []
        start = atlas_index * GRID * GRID
        for cell_index in range(GRID * GRID):
            skill_index = start + cell_index
            row = cell_index // GRID
            col = cell_index % GRID
            if skill_index < len(icons):
                skill, icon = icons[skill_index]
                atlas.alpha_composite(icon, (col * ICON_SIZE, row * ICON_SIZE))
                cells.append({
                    "row": row,
                    "col": col,
                    "skillId": skill[0],
                    "name": skill[1],
                    "theme": skill[2],
                    "icon": f"/images/skills/icons/{skill[0]}.png",
                })
            else:
                cells.append({
                    "row": row,
                    "col": col,
                    "skillId": f"common_origin_blank_{cell_index:02d}",
                    "name": "保留空格",
                    "theme": "reserved blank slot",
                    "icon": None,
                })
        atlas.save(ATLAS_DIR / atlas_name)
        atlases.append({
            "file": f"/images/skills/atlas/{atlas_name}",
            "promptSummary": "Deterministic dark fantasy RPG icon atlas for adventurer, race, and faith skills; high contrast, no text, no UI frame.",
            "cells": cells,
        })

    METADATA_PATH.write_text(json.dumps({
        "version": 1,
        "grid": {"cols": GRID, "rows": GRID, "iconSize": ICON_SIZE},
        "style": "dark fantasy RPG, painterly glyph silhouettes, high contrast, no text, no UI frame",
        "atlases": atlases,
    }, ensure_ascii=False, indent=2) + "\n")


if __name__ == "__main__":
    main()
