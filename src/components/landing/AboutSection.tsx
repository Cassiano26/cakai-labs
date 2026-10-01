"use client";

import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";
import { ContactButton } from "./Buttons";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const DECOR = [
  {
    src: "/about/moon.png",
    className: "top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]",
    delay: 0.1,
    x: -80,
  },
  {
    src: "/about/object.png",
    className: "bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]",
    delay: 0.25,
    x: -80,
  },
  {
    src: "/about/lego.png",
    className: "top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]",
    delay: 0.15,
    x: 80,
  },
  {
    src: "/about/group.png",
    className: "bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]",
    delay: 0.3,
    x: 80,
  },
];

export default function AboutSection() {
  const { t } = useLanguage();
  const l = t.landing;

  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center gap-16 px-5 py-20 sm:gap-20 sm:px-8 md:gap-24 md:px-10"
    >
      {DECOR.map((d) => (
        <FadeIn key={d.src} delay={d.delay} x={d.x} y={0} duration={0.9} className={`absolute ${d.className}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={d.src} alt="" className="w-full" />
        </FadeIn>
      ))}

      <div className="relative z-10 flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            {l.about.heading}
          </h2>
        </FadeIn>
        {/* key forces a remount so the per-character animation re-splits on language change */}
        <AnimatedText
          key={l.about.text}
          text={l.about.text}
          className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />
        <FadeIn delay={0.2} y={30}>
          <div className="flex max-w-[560px] flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:gap-6 sm:text-left">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/about/founder.jpg"
              alt={l.about.founderName}
              className="h-20 w-20 shrink-0 rounded-full object-cover sm:h-24 sm:w-24"
            />
            <div className="flex flex-col gap-1">
              <p className="font-bold text-white">{l.about.founderName}</p>
              <p className="text-sm font-medium uppercase tracking-wide text-[#D7E2EA]/70">
                {l.about.founderRole}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-[#D7E2EA] sm:text-base">{l.about.founderText}</p>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="relative z-10">
        <ContactButton label={l.finalCta} />
      </div>
    </section>
  );
}
