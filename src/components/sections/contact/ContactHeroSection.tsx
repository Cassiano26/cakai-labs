"use client";

import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactHeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-12 md:py-24 overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(93,64,55,0.06),transparent_55%)]" />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d4037]/10 rounded-full border border-[#5d4037]/20 mb-6">
            <span className="text-sm text-[#5d4037]">{t.contactHero.badge}</span>
          </div>

          <h1 className="text-6xl font-bold mb-6 text-neutral-900 leading-tight">
            {t.contactHero.heading}
          </h1>

          <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
            {t.contactHero.subheading}
          </p>

          <div className="flex items-center justify-center gap-4 mb-6">
            <a
              href="#brief"
              className="px-8 py-4 bg-gradient-to-r from-[#5d4037] to-[#795548] text-white rounded-lg hover:shadow-2xl hover:shadow-[#5d4037]/30 transition-all font-medium flex items-center gap-2"
            >
              {t.contactHero.cta}
              <ArrowDown className="w-5 h-5" />
            </a>
            {/* Contact us button hidden until emails are ready */}
          </div>

          <p className="text-sm text-neutral-500 mb-14">
            {t.contactHero.tagline}
          </p>

          <div className="grid grid-cols-2 gap-3 md:flex md:flex-wrap md:items-center md:justify-center">
            {t.contactHero.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white border border-neutral-200 rounded-full text-sm text-neutral-600 shadow-sm text-center flex items-center justify-center"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
