"use client";

import FadeIn from "@/components/landing/FadeIn";
import Magnet from "@/components/landing/Magnet";
import Nav from "@/components/landing/Nav";
import { ContactButton } from "@/components/landing/Buttons";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactHeroSection() {
  const { t } = useLanguage();
  const hero = t.contactHero;
  // Split around the standalone "AI"/"IA" word so it gets the accent gradient, like "cakai" on the home hero
  const headingMatch = hero.heading.match(/^(.*?\b)(AI|IA)(\b.*)$/);

  return (
    <section className="relative flex min-h-screen flex-col" style={{ overflowX: "clip" }}>
      <Nav sectionBase="/" />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center gap-8 px-5 py-20 text-center sm:px-8 md:gap-10 md:px-10">
        <FadeIn delay={0.1} y={20}>
          <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60 sm:text-sm">
            {hero.badge}
          </span>
        </FadeIn>

        <FadeIn delay={0.15} y={40}>
          <h1
            className="hero-heading mx-auto max-w-6xl font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.75rem, 9vw, 140px)" }}
          >
            {headingMatch ? (
              <>
                {headingMatch[1]}
                <span className="hero-heading-accent">{headingMatch[2]}</span>
                {headingMatch[3]}
              </>
            ) : (
              hero.heading
            )}
          </h1>
        </FadeIn>

        <FadeIn delay={0.3} y={20}>
          <p
            className="mx-auto max-w-[620px] font-light leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
          >
            {hero.subheading}
          </p>
        </FadeIn>

        <FadeIn delay={0.45} y={20}>
          <ContactButton label={hero.cta} href="#brief" />
        </FadeIn>

        <FadeIn delay={0.6} y={20} className="flex max-w-3xl flex-col items-center gap-4">
          <p className="text-xs uppercase tracking-wider text-[#D7E2EA]/50 sm:text-sm">{hero.tagline}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {hero.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#D7E2EA]/30 px-3 py-1 text-xs uppercase tracking-wider text-[#D7E2EA]/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Waving mascot only where there's room beside the centred copy */}
      <div className="pointer-events-none absolute bottom-0 right-[3%] hidden h-[42vh] max-h-[460px] xl:block">
        <FadeIn delay={0.7} x={60} y={0} duration={0.9} className="h-full">
          <Magnet padding={120} strength={4} className="h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/mascot-hoodie-wave.png" alt="" className="h-full w-auto" />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
