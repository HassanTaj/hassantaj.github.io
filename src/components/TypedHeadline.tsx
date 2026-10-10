"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export function TypedHeadline({ phrases }: { phrases: string[] }) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current || !phrases.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    // Typed.js adds existing text to its sequence, so clear the static fallback first.
    textRef.current.textContent = "";
    const typed = new Typed(textRef.current, {
      strings: phrases,
      typeSpeed: 48,
      backSpeed: 28,
      backDelay: 1600,
      loop: true,
      showCursor: true,
      cursorChar: "|",
      contentType: "null",
    });

    return () => typed.destroy();
  }, [phrases]);

  return (
    <span ref={textRef} aria-live="off">
      {phrases[0] ?? ""}
    </span>
  );
}
