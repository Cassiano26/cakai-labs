"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useRef, useEffect } from "react";

const stats = [
  { value: "50+", label: "AI projects delivered" },
  { value: "3×", label: "avg. ROI for clients" },
  { value: "12+", label: "industries served" },
  { value: "100%", label: "production-ready" },
];

export default function HeroSection() {
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let raf: number;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      // Normalize -0.5 to 0.5
      targetX = (e.clientX - rect.left) / rect.width - 0.5;
      targetY = (e.clientY - rect.top) / rect.height - 0.5;
    };

    const animate = () => {
      // Lerp for smooth follow
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${currentX * -60}px, ${currentY * -40}px)`;
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${currentX * 80}px, ${currentY * 60}px)`;
      }

      raf = requestAnimationFrame(animate);
    };

    section.addEventListener("mousemove", handleMouseMove);
    raf = requestAnimationFrame(animate);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-neutral-950 pb-24 pt-16 md:pt-32 h-screen"
    >
      {/* Parallax orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          ref={orb1Ref}
          className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full opacity-25 transition-none"
          style={{
            background: "radial-gradient(circle, #a1745a 0%, transparent 70%)",
          }}
        />
        <div
          ref={orb2Ref}
          className="absolute -bottom-20 -right-20 h-[500px] w-[500px] rounded-full opacity-20 transition-none"
          style={{
            background: "radial-gradient(circle, #5d4037 0%, transparent 70%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(121,85,72,0.1),transparent_60%)]" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#795548 1px, transparent 1px), linear-gradient(90deg, #795548 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1440px] px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#795548]/30 bg-[#795548]/10 px-4 py-1.5 text-sm text-[#c8a882]">
            <Sparkles className="h-3.5 w-3.5" />
            AI Strategy & Consulting
          </div>

          {/* Headline */}
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            From idea to{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #c8a882 0%, #a1745a 50%, #c8a882 100%)",
              }}
            >
              impact,
            </span>
            <br />
            with AI.
          </h1>

          <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-neutral-400">
            Cakai Labs partners with companies and product teams to define AI
            strategy, design responsible models, and deliver practical AI
            solutions that drive measurable business value.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <Link
              href="/contact#brief"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#5d4037] to-[#795548] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#5d4037]/40 md:w-auto"
            >
              Start an AI engagement
              <ArrowRight className="h-5 w-5" />
            </Link>
            <a
              href="#work"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10 md:w-auto"
            >
              View case studies
            </a>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center px-6 py-6 transition-colors duration-200 hover:bg-white/5"
            >
              <span className="text-3xl font-bold text-white">{stat.value}</span>
              <span className="mt-1 text-center text-xs text-neutral-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
