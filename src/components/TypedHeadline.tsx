"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

export function TypedHeadline({ phrases }: { phrases: string[] }) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!textRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

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
      Senior Software Engineer | Solutions Architecture
    </span>
  );
}
