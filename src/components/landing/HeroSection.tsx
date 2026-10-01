"use client";

import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import Nav from "./Nav";
import { ContactButton } from "./Buttons";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();
  const l = t.landing;
  // Split trailing "ai" of "cakai" so the AI part can be highlighted
  const greetingMatch = l.hero.greeting.match(/^(.*?)(ai)$/i);
  const greetingPrefix = greetingMatch ? greetingMatch[1] : l.hero.greeting;
  const greetingAccent = greetingMatch ? greetingMatch[2] : "";

  return (
    <section className="relative flex h-screen flex-col" style={{ overflowX: "clip" }}>
      <Nav />

      <div className="overflow-hidden">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[10.5vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[11vw] md:-mt-3">
            {greetingPrefix}
            <span className="hero-heading-accent">{greetingAccent}</span>
          </h1>
        </FadeIn>
      </div>

      <div className="mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
        <FadeIn delay={0.35} y={20}>
          <p
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-[#D7E2EA] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
          >
            {l.hero.tagline}
          </p>
        </FadeIn>
        <FadeIn delay={0.5} y={20} className="relative z-20">
          <ContactButton label={l.hero.cta} />
        </FadeIn>
      </div>

      <div className="absolute left-1/2 top-1/2 z-10 h-[min(46vh,85vw)] w-max -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:h-[70vh] sm:max-h-[720px] sm:translate-y-0">
        <FadeIn delay={0.6} y={30} className="h-full">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="h-full"
          >
            <div className="flex h-full items-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mascot-headphones-wave.png"
                alt="Cakai mascot with headphones waving"
                className="relative z-0 block translate-x-[30%] -translate-y-[5%] h-[74%] w-auto"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mascot-denim.png"
                alt="Cakai mascot in a denim jacket"
                className="relative z-10 block h-full w-auto"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/mascot-hoodie-wave.png"
                alt="Cakai mascot in a grey hoodie waving"
                className="relative z-0 block -translate-x-[30%] -translate-y-[5%] h-[72%] w-auto"
              />
            </div>
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
