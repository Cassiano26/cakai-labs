"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function QuickStartSection() {
  const { t } = useLanguage();
  return (
    <section className="py-12 md:py-24 bg-[#faf9f7]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-block px-3 py-1 bg-white border border-neutral-200 rounded-full text-sm text-neutral-600 mb-4">
            {t.quickStart.badge}
          </div>
          <h2 className="text-4xl font-bold mb-4 text-neutral-900">
            {t.quickStart.heading}
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            {t.quickStart.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.quickStart.prompts.map((prompt) => (
            <button
              key={prompt.title}
              type="button"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("quickstart-message", { detail: prompt.message }));
                document.getElementById("brief")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group bg-white rounded-2xl border border-neutral-200 p-6 hover:border-[#5d4037]/30 hover:shadow-md transition-all text-left"
            >
              <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-[#5d4037] transition-colors">
                {prompt.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {prompt.desc}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
