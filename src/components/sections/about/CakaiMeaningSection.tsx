"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function CakaiMeaningSection() {
  const { t } = useLanguage();
  const layers = t.cakaiMeaning.layers;

  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-block px-3 py-1 bg-neutral-100 rounded-full text-sm text-neutral-600 mb-4">
              {t.cakaiMeaning.badge}
            </div>

            <h2 className="text-4xl font-bold mb-6 text-neutral-900">
              {t.cakaiMeaning.heading}
            </h2>

            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              {t.cakaiMeaning.p1}
            </p>

            <p className="text-lg text-neutral-600 leading-relaxed">
              {t.cakaiMeaning.p2}
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed">
              {t.cakaiMeaning.p3}
            </p>
          </div>
          <div className="space-y-4">
            {layers.map((layer) => (
              <div key={layer.num} className="flex gap-4">
                <div className="text-lg font-bold text-[#5d4037] flex-shrink-0">
                  Layer {layer.num}
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 mb-1">
                    {layer.title}
                  </div>
                  <div className="text-sm text-neutral-600">{layer.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
