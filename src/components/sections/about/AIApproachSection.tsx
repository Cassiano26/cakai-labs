"use client";

import { Brain, Eye, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const cardIcons: LucideIcon[] = [Brain, Eye, Zap];

export default function AIApproachSection() {
  const { t } = useLanguage();
  const cards = t.aiApproach.cards.map((card, i) => ({
    ...card,
    icon: cardIcons[i],
  }));

  return (
    <section className="py-12 md:py-24 bg-neutral-50">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 bg-white rounded-full text-sm text-neutral-600 mb-4 border border-neutral-200">
            {t.aiApproach.badge}
          </div>

          <h2 className="text-4xl font-bold mb-6 text-neutral-900">
            {t.aiApproach.heading}
          </h2>

          <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
            {t.aiApproach.p1}
          </p>

          <p className="text-lg text-neutral-600 leading-relaxed">
            {t.aiApproach.p2}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 border border-neutral-200"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5d4037] to-[#795548] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                  {card.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
