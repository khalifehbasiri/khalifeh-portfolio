"use client";

import { useRef, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function PortfolioMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(() => {
    const sections = Array.from(
      root.current?.querySelectorAll<HTMLElement>(":scope > section") ?? [],
    );
    const hero = sections[0];
    if (!hero) return;

    const media = gsap.matchMedia();

    media.add("(prefers-reduced-motion: no-preference)", () => {
      const enter = (
        targets: gsap.TweenTarget,
        trigger: Element,
        options: gsap.TweenVars = {},
      ) => gsap.from(targets, {
        y: 24,
        opacity: 0.4,
        duration: 0.75,
        ease: "power3.out",
        clearProps: "transform,opacity",
        scrollTrigger: { trigger, start: "top 92%", once: true },
        ...options,
      });

      gsap.timeline({ defaults: { ease: "power3.out", clearProps: "transform,opacity" } })
        .from(hero.querySelector("h1"), { y: 30, opacity: 0.35, duration: 0.85 })
        .from(hero.querySelectorAll(":scope > p"), {
          y: 18, opacity: 0.45, duration: 0.65, stagger: 0.1,
        }, 0.1)
        .from(hero.querySelectorAll(":scope > div > a"), {
          y: 18, opacity: 0.5, duration: 0.5, stagger: 0.06,
        }, 0.25);

      for (const section of sections.slice(1)) {
        const heading = section.querySelector("h2");
        if (!heading) continue;
        const description = heading.nextElementSibling;
        const intro = description?.tagName === "P" ? [heading, description] : [heading];
        enter(intro, heading, { y: 22, stagger: 0.1 });
      }

      for (const rail of root.current!.querySelectorAll<HTMLElement>("[role='region']")) {
        const cards = Array.from(rail.querySelectorAll("article"));
        // Follow visual order, including the rail's existing CSS ordering.
        cards.sort((a, b) => a.offsetLeft - b.offsetLeft);
        enter(cards, rail, {
          y: 38, scale: 0.97, rotation: 0.6, duration: 0.85, stagger: 0.09,
        });
      }

      const skills = root.current!.querySelector("#skills h2")?.nextElementSibling;
      if (skills) enter(skills.children, skills, { y: 24, opacity: 0.55, stagger: 0.1 });

      for (const entry of root.current!.querySelectorAll("#experience .space-y-10 > div")) {
        enter(entry, entry, { x: -24, y: 0, opacity: 0.5 });
      }

      const about = root.current!.querySelectorAll("#about p");
      if (about.length) enter(about, about[0], { y: 20, stagger: 0.12 });

      const form = root.current!.querySelector("#contact form");
      if (form) enter(form, form, { y: 18, opacity: 0.6, duration: 0.7 });
    });

    media.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.to(hero, {
        y: -32,
        opacity: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: hero, start: "top top", end: "bottom top", scrub: 0.45,
        },
      });
    });

    media.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      const removeListeners: (() => void)[] = [];

      for (const card of root.current!.querySelectorAll("article")) {
        const preview = card.firstElementChild;
        if (!preview) continue;

        gsap.set(preview, { transformPerspective: 700 });
        const rotateX = gsap.quickTo(preview, "rotationX", { duration: 0.45, ease: "power3.out" });
        const rotateY = gsap.quickTo(preview, "rotationY", { duration: 0.45, ease: "power3.out" });
        const scaleX = gsap.quickTo(preview, "scaleX", { duration: 0.4, ease: "power3.out" });
        const scaleY = gsap.quickTo(preview, "scaleY", { duration: 0.4, ease: "power3.out" });

        const onMove = (event: PointerEvent) => {
          const bounds = card.getBoundingClientRect();
          rotateX((0.5 - (event.clientY - bounds.top) / bounds.height) * 5);
          rotateY(((event.clientX - bounds.left) / bounds.width - 0.5) * 5);
          scaleX(1.035);
          scaleY(1.035);
        };
        const reset = () => {
          rotateX(0);
          rotateY(0);
          scaleX(1);
          scaleY(1);
        };

        card.addEventListener("pointermove", onMove);
        card.addEventListener("pointerleave", reset);
        removeListeners.push(() => {
          card.removeEventListener("pointermove", onMove);
          card.removeEventListener("pointerleave", reset);
        });
      }

      return () => removeListeners.forEach((remove) => remove());
    });

    return () => media.revert();
  }, { scope: root });

  return <main ref={root}>{children}</main>;
}
