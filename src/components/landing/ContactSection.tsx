"use client";

import FadeIn from "./FadeIn";
import { ContactButton } from "./Buttons";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactSection({ ctaHref }: { ctaHref?: string }) {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-10 px-5 pb-10 pt-20 text-center sm:px-8 md:gap-14 md:px-10 md:pt-32"
    >
      <FadeIn y={40}>
        <h2
          className="hero-heading mx-auto max-w-6xl font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 7vw, 110px)" }}
        >
          {t.contactCTA.heading}
        </h2>
      </FadeIn>
      <FadeIn delay={0.15} y={20}>
        <p
          className="mx-auto max-w-[560px] font-light leading-relaxed text-[#D7E2EA]"
          style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
        >
          {t.contactCTA.subheading}
        </p>
      </FadeIn>
      <FadeIn delay={0.3} y={20}>
        <ContactButton label={t.contactCTA.cta} href={ctaHref} />
      </FadeIn>

      <footer className="mt-16 flex w-full flex-col items-center justify-between gap-2 border-t border-[#D7E2EA]/15 pt-8 text-xs uppercase tracking-wider text-[#D7E2EA]/50 sm:flex-row md:mt-24">
        <span>Cakai Labs</span>
        <span>{t.footer.copyright}</span>
      </footer>
    </section>
  );
}
