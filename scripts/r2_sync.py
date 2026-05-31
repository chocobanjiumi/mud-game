#!/usr/bin/env python3
"""Cloudflare R2 sync helper. Reads credentials from .env (gitignored).

Usage:
  r2_sync.py test
  r2_sync.py upload <local_dir> <key_prefix>   # uploads every file under local_dir
"""
import os
import sys
import mimetypes
import concurrent.futures
from pathlib import Path

import boto3
from botocore.config import Config

ROOT = Path(__file__).resolve().parent.parent


def load_env(path: Path) -> dict:
    env = {}
    for line in path.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        k, v = line.split("=", 1)
        env[k.strip()] = v.strip()
    return env


def client(env: dict):
    return boto3.client(
        "s3",
        endpoint_url=env["R2_ENDPOINT"],
        aws_access_key_id=env["R2_ACCESS_KEY_ID"],
        aws_secret_access_key=env["R2_SECRET_ACCESS_KEY"],
        region_name="auto",
        config=Config(retries={"max_attempts": 5, "mode": "standard"}),
    )


def cmd_test(env, s3):
    bucket = env["R2_BUCKET"]
    s3.head_bucket(Bucket=bucket)
    resp = s3.list_objects_v2(Bucket=bucket, MaxKeys=5)
    n = resp.get("KeyCount", 0)
    print(f"OK: bucket '{bucket}' reachable. Existing objects (sample): {n}")
    for o in resp.get("Contents", []):
        print(f"   {o['Key']} ({o['Size']} B)")


def cmd_upload(env, s3, local_dir, prefix):
    bucket = env["R2_BUCKET"]
    base = Path(local_dir).resolve()
    files = [p for p in base.rglob("*") if p.is_file()]
    total = len(files)
    print(f"Uploading {total} files from {base} -> r2://{bucket}/{prefix}")

    done = [0]

    def up(p: Path):
        key = prefix + str(p.relative_to(base))
        ctype = mimetypes.guess_type(str(p))[0] or "application/octet-stream"
        s3.upload_file(str(p), bucket, key, ExtraArgs={"ContentType": ctype, "CacheControl": "public, max-age=31536000, immutable"})
        done[0] += 1
        if done[0] % 200 == 0 or done[0] == total:
            print(f"   {done[0]}/{total}")

    with concurrent.futures.ThreadPoolExecutor(max_workers=16) as ex:
        list(ex.map(up, files))
    print(f"Done: {total} files uploaded.")


def main():
    env = load_env(ROOT / ".env")
    s3 = client(env)
    cmd = sys.argv[1] if len(sys.argv) > 1 else "test"
    if cmd == "test":
        cmd_test(env, s3)
    elif cmd == "upload":
        cmd_upload(env, s3, sys.argv[2], sys.argv[3])
    else:
        print(f"unknown command: {cmd}")
        sys.exit(1)


if __name__ == "__main__":
    main()
