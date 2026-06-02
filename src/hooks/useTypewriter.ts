"use client";

import { useEffect, useState } from "react";

const DEFAULT_SPEED_MS = 80;
const DEFAULT_PAUSE_MS = 2000;

export function useTypewriter(
  texts: string[],
  speed = DEFAULT_SPEED_MS,
  pauseMs = DEFAULT_PAUSE_MS
): string {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];

    if (!deleting && charIndex === current.length) {
      const timeout = setTimeout(() => setDeleting(true), pauseMs);
      return () => clearTimeout(timeout);
    }

    if (deleting && charIndex === 0) {
      setDeleting(false);
      setTextIndex((i) => (i + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => setCharIndex((i) => (deleting ? i - 1 : i + 1)),
      deleting ? speed / 2 : speed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, speed, pauseMs]);

  return texts[textIndex].slice(0, charIndex);
}
