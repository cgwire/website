#!/usr/bin/env python3
"""
compare_md.py — Find lines from doc1 that are missing in doc2.

Usage:
    python3 compare_studios.py clients.md existing.md

Comparison is case-insensitive and ignores blank lines.
Prints each line from doc1 that has no matching line in doc2.
"""

import sys


def load_lines(filepath: str) -> list[str]:
    """Read a file and return non-blank lines, preserving original text."""
    with open(filepath, encoding="utf-8") as f:
        return [line.rstrip("\n") for line in f if line.strip()]


def find_missing(doc1_path: str, doc2_path: str) -> list[str]:
    """Return lines from doc1 (original casing) that are absent from doc2."""
    doc1_lines = load_lines(doc1_path)
    doc2_lines = load_lines(doc2_path)

    doc2_lower = {line.lower() for line in doc2_lines}

    return [line for line in doc1_lines if line.lower() not in doc2_lower]


def main():
    if len(sys.argv) != 3:
        print("Usage: python compare_md.py <doc1.md> <doc2.md>")
        sys.exit(1)

    doc1_path, doc2_path = sys.argv[1], sys.argv[2]

    try:
        missing = find_missing(doc1_path, doc2_path)
    except FileNotFoundError as e:
        print(f"Error: {e}")
        sys.exit(1)

    if not missing:
        print("✅  No missing lines — doc2 contains every line from doc1.")
    else:
        print(f"❌  {len(missing)} line(s) from '{doc1_path}' not found in '{doc2_path}':\n")
        for line in missing:
            print(f"  {line}")


if __name__ == "__main__":
    main()