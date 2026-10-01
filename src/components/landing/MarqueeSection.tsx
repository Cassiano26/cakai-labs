"use client";

import { useEffect, useRef, type Ref } from "react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type MarqueeVideo = { src: string; position?: string; fit?: "cover" | "contain" };

// One video per tile, in the same order as the `landing.marquee` labels.
// `position` is the CSS object-position used when the video is cropped to the tile;
// `fit: "contain"` shows the whole video instead, letterboxed on black
const VIDEOS: MarqueeVideo[] = [
  // Row 1
  { src: "/marquee/ai-strategy.mp4" },
  { src: "/marquee/llms.mp4" },
  // Frame the robot's head and phone rather than its torso
  { src: "/marquee/ai-agents.mp4", position: "center 30%" },
  // Anchor low so the person at the laptop stays in frame under the ring of text
  { src: "/marquee/prompt-design.mp4", position: "center 85%" },
  // Row 1 drifts right, so tiles enter from the left starting with the last one:
  // last place puts this just off screen at first, then it's the first to slide in.
  // Square logo that fills its frame, so contain it; cropping would cut off the leaf
  { src: "/marquee/apple-intelligence.mp4", fit: "contain" },
  // Row 2
  // The code rain starts at the top of the frame, so anchor there to skip the black middle
  { src: "/marquee/rag.mp4", position: "top" },
  { src: "/marquee/mlops.mp4" },
  { src: "/marquee/chatbots.mp4" },
  { src: "/marquee/technical-consulting.mp4" },
];

function Tile({ label, video }: { label: string; video: MarqueeVideo }) {
  return (
    <div className="relative h-[170px] w-[260px] shrink-0 overflow-hidden rounded-xl sm:h-[270px] sm:w-[420px] sm:rounded-2xl">
      <video
        src={video.src}
        autoPlay muted loop playsInline
        preload="metadata"
        className={`h-full w-full ${video.fit === "contain" ? "bg-black object-contain" : "object-cover"}`}
        style={{ objectPosition: video.position }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <span className="absolute bottom-4 left-4 text-xl sm:bottom-6 sm:left-6 sm:text-3xl font-black uppercase leading-none tracking-tight text-[#D7E2EA]">
        {label}
      </span>
    </div>
  );
}

function Row({
  ref,
  labels,
  startIndex,
}: {
  ref: Ref<HTMLDivElement>;
  labels: readonly string[];
  startIndex: number;
}) {
  // Three copies so the row stays filled while it wraps by one copy's width
  const tripled = [...labels, ...labels, ...labels];
  return (
    <div ref={ref} className="flex w-max gap-2 sm:gap-3" style={{ willChange: "transform" }}>
      {tripled.map((label, i) => (
        <Tile key={i} label={label} video={VIDEOS[startIndex + (i % labels.length)]} />
      ))}
    </div>
  );
}

// The first ROW1_COUNT marquee labels go in the top row, the rest in the bottom row
const ROW1_COUNT = 5;

// Idle drift in px/s; scrolling adds to it (and reverses it while scrolling up)
const BASE_SPEED = 80;
const SCROLL_FACTOR = 0.3;

export default function MarqueeSection() {
  const { t } = useLanguage();
  const row1 = t.landing.marquee.slice(0, ROW1_COUNT);
  const row2 = t.landing.marquee.slice(ROW1_COUNT);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rows = [
      { el: row1Ref.current, dir: 1, x: 0 },
      { el: row2Ref.current, dir: -1, x: 0 },
    ];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const baseSpeed = reduceMotion ? 0 : BASE_SPEED;
    let lastScrollY = window.scrollY;
    let lastTime = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      const scrollDelta = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;

      for (const row of rows) {
        if (!row.el) continue;
        // Width of one copy of the labels; wrapping by it is seamless
        const setWidth = row.el.scrollWidth / 3;
        row.x += row.dir * (baseSpeed * dt + scrollDelta * SCROLL_FACTOR);
        // Keep x in [-setWidth, 0) so copies always cover the viewport
        row.x = ((row.x % setWidth) - setWidth) % setWidth;
        row.el.style.transform = `translateX(${row.x}px)`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="flex flex-col gap-2 overflow-hidden sm:gap-3 bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40">
      <Row ref={row1Ref} labels={row1} startIndex={0} />
      <Row ref={row2Ref} labels={row2} startIndex={ROW1_COUNT} />
    </section>
  );
}
