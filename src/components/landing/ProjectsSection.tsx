"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef, type ReactNode } from "react";
import FadeIn from "./FadeIn";
import { AppStoreButton, LiveProjectButton } from "./Buttons";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const PROJECT_IMAGES: { src: string; contain?: boolean; bg?: string }[] = [
  { src: "https://framerusercontent.com/images/05gyHi5YAF785poD4KnN4ywffuk.png?scale-down-to=2048&width=2788&height=2116" },
  { src: "https://cdn.sanity.io/images/rldpvjbx/production/83f5d850a669e53a7d2bac08ae5eb9acd5de62c6-2592x1738.png?w=3840&q=100&auto=format&fit=max" },
  { src: "/projects/loop.png", contain: true, bg: "#ECEBE7" },
];

const RADIUS = "rounded-[40px] sm:rounded-[50px] md:rounded-[60px]";
const INNER_RADIUS = "rounded-[28px] sm:rounded-[36px] md:rounded-[44px]";

function StackCard({
  index,
  total,
  progress,
  children,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
  children: ReactNode;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);

  return (
    <div className="sticky top-24 flex h-[85vh] items-start justify-center md:top-32">
      <motion.div
        className={`relative w-full origin-top border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 ${RADIUS}`}
        style={{ scale, top: `${index * 28}px` }}
      >
        {children}
      </motion.div>
    </div>
  );
}

function CardHeader({ index, label, name, action }: { index: number; label: string; name: string; action?: ReactNode }) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-4 sm:mb-6 md:mb-8">
      <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
        <span className="hero-heading font-black leading-none" style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex flex-col gap-1 text-[#D7E2EA]">
          <span className="text-xs font-light uppercase tracking-widest opacity-60 sm:text-sm">{label}</span>
          <h3 className="font-medium uppercase" style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}>
            {name}
          </h3>
        </div>
      </div>
      {action}
    </div>
  );
}

function Tags({ tags }: { tags: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-full border border-[#D7E2EA]/30 px-3 py-1 text-xs uppercase tracking-wider text-[#D7E2EA]/80"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function ProjectsSection() {
  const { t } = useLanguage();
  const l = t.landing;
  const featured = t.work.featuredProjects;
  const total = featured.length;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section
      id="projects"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          {l.projectsHeading}
        </h2>
      </FadeIn>

      <div ref={ref} className="mx-auto mt-16 max-w-7xl sm:mt-20 md:mt-28">
        {featured.map((project, i) => (
          <StackCard key={project.name} index={i} total={total} progress={scrollYProgress}>
            <CardHeader
              index={i}
              label={project.label}
              name={project.name}
              action={
                <div className="flex flex-wrap gap-3">
                  <LiveProjectButton label={l.liveProject} href={project.href} />
                  {project.appStore && <AppStoreButton label={l.appStore} href={project.appStore} />}
                </div>
              }
            />
            <div className="flex flex-col gap-3 sm:gap-4 md:flex-row">
              <div
                className={`flex flex-col justify-between gap-6 border border-[#D7E2EA]/15 bg-white/[0.03] p-6 text-[#D7E2EA] md:w-[40%] md:p-8 ${INNER_RADIUS}`}
              >
                <div className="flex flex-col gap-4">
                  <p className="font-light leading-relaxed" style={{ fontSize: "clamp(0.9rem, 1.3vw, 1.15rem)" }}>
                    {project.description}
                  </p>
                  <p className="hidden text-sm font-light leading-relaxed opacity-60 lg:block">
                    {project.longDescription}
                  </p>
                </div>
                <Tags tags={project.tags} />
              </div>
              <div className="md:w-[60%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={PROJECT_IMAGES[i]?.src}
                  alt={project.name}
                  loading="lazy"
                  className={`w-full ${PROJECT_IMAGES[i]?.contain ? "object-contain" : "object-cover"} ${INNER_RADIUS}`}
                  style={{ height: "clamp(200px, 36vw, 520px)", backgroundColor: PROJECT_IMAGES[i]?.bg }}
                />
              </div>
            </div>
          </StackCard>
        ))}
      </div>
    </section>
  );
}
