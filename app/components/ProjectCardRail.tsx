"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import styles from "./project-card.module.css";

export function ProjectCardRail({
  children,
  labelId,
  initialIndex,
}: {
  children: ReactNode;
  labelId: string;
  initialIndex: number;
}) {
  const railRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const desktop = window.matchMedia("(min-width: 1024px)");
    const alignCards = () => {
      const card = rail.querySelectorAll<HTMLElement>("article")[initialIndex];
      if (!card) return;
      rail.scrollTo({
        left: desktop.matches
          ? card.offsetLeft - (rail.clientWidth - card.offsetWidth) / 2
          : 0,
        behavior: "instant",
      });
    };
    alignCards();
    desktop.addEventListener("change", alignCards);
    return () => desktop.removeEventListener("change", alignCards);
  }, [initialIndex]);

  return (
    <div
      ref={railRef}
      className={styles.rail}
      role="region"
      aria-labelledby={labelId}
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
          return;
        const rail = event.currentTarget;
        const cards = Array.from(
          rail.querySelectorAll<HTMLElement>("article"),
        ).sort((a, b) => a.offsetLeft - b.offsetLeft);
        if (!cards.length) return;
        event.preventDefault();
        const desktop = window.matchMedia("(min-width: 1024px)").matches;
        const positions = cards.map((card) =>
          desktop
            ? card.offsetLeft - (rail.clientWidth - card.offsetWidth) / 2
            : card.offsetLeft,
        );
        const current = positions.reduce(
          (nearest, position, index) =>
            Math.abs(position - rail.scrollLeft) <
            Math.abs(positions[nearest] - rail.scrollLeft)
              ? index
              : nearest,
          0,
        );
        const next =
          event.key === "Home"
            ? 0
            : event.key === "End"
              ? cards.length - 1
              : Math.max(
                  0,
                  Math.min(
                    cards.length - 1,
                    current + (event.key === "ArrowRight" ? 1 : -1),
                  ),
                );
        rail.scrollTo({
          left: positions[next],
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        });
      }}
    >
      <div className={styles.track}>{children}</div>
    </div>
  );
}
