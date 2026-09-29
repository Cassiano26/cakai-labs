"use client";

import { Bot, Globe, Smartphone, Database, Zap, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const serviceIcons: LucideIcon[] = [Bot, Globe, Smartphone, Database, Zap, Lightbulb];
const serviceAccents = [
  "from-amber-900 to-[#795548]",
  "from-[#5d4037] to-[#795548]",
  "from-[#795548] to-amber-700",
  "from-[#5d4037] to-amber-900",
  "from-amber-800 to-[#795548]",
  "from-[#795548] to-[#5d4037]",
];

export default function ServicesSection() {
  const { t } = useLanguage();
  const services = t.services.items.map((item, i) => ({
    ...item,
    icon: serviceIcons[i],
    accent: serviceAccents[i],
  }));

  return (
    <section id="services" className="relative overflow-hidden bg-white py-12 md:py-24">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(93,64,55,0.05),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-3 block text-sm font-medium uppercase tracking-widest text-[#795548]">
              {t.services.sectionLabel}
            </span>
            <h2 className="text-4xl font-bold text-neutral-900 md:text-5xl">
              {t.services.heading1}
              <br />
              <span className="text-neutral-400">{t.services.heading2}</span>
            </h2>
          </div>
          <p className="max-w-md text-lg text-neutral-600 md:text-right">
            {t.services.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="group relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5d4037]/10 to-[#795548]/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative h-full rounded-2xl border border-neutral-100 bg-neutral-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#5d4037]/30 hover:bg-white hover:shadow-xl">
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} shadow-lg`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-neutral-900">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-neutral-600">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        {/* <div className="mt-12 text-center">
          <Link
            href="/contact#brief"
            className="inline-flex items-center gap-2 rounded-xl border border-[#5d4037]/20 bg-[#5d4037]/5 px-6 py-3 text-sm font-medium text-[#5d4037] transition-all duration-300 hover:bg-[#5d4037] hover:text-white"
          >
            Explore all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
