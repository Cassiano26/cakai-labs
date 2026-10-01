"use client";

import FadeIn from "@/components/landing/FadeIn";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// ProjectBriefSection listens for this event to prefill its message field
export const QUICKSTART_EVENT = "quickstart-message";

export default function QuickStartSection() {
  const { t } = useLanguage();
  const qs = t.quickStart;

  function pick(message: string) {
    window.dispatchEvent(new CustomEvent(QUICKSTART_EVENT, { detail: message }));
    document.getElementById("brief")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section className="rounded-t-[40px] bg-white px-5 pb-32 pt-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:pb-36 sm:pt-24 md:rounded-t-[60px] md:px-10 md:pb-44 md:pt-32">
      <div className="mx-auto mb-16 flex max-w-5xl flex-col items-center gap-6 text-center sm:mb-20 md:mb-24">
        <FadeIn y={20}>
          <span className="text-xs font-light uppercase tracking-widest opacity-60 sm:text-sm">{qs.badge}</span>
        </FadeIn>
        <FadeIn delay={0.1} y={40}>
          <h2
            className="font-black uppercase leading-none tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 7vw, 110px)" }}
          >
            {qs.heading}
          </h2>
        </FadeIn>
        <FadeIn delay={0.2} y={20}>
          <p
            className="mx-auto max-w-[620px] font-light leading-relaxed opacity-60"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
          >
            {qs.subheading}
          </p>
        </FadeIn>
      </div>

      <div className="mx-auto max-w-5xl">
        {qs.prompts.map((prompt, i) => (
          <FadeIn
            key={prompt.title}
            delay={i * 0.08}
            style={{
              borderTop: i === 0 ? "1px solid rgba(12, 12, 12, 0.15)" : undefined,
              borderBottom: "1px solid rgba(12, 12, 12, 0.15)",
            }}
          >
            <button
              type="button"
              onClick={() => pick(prompt.message)}
              className="group flex w-full items-center gap-6 py-6 text-left sm:gap-10 sm:py-8 md:gap-14 md:py-10"
            >
              <span
                className="w-[1.3em] shrink-0 font-black leading-none transition-opacity group-hover:opacity-40"
                style={{ fontSize: "clamp(2.5rem, 7vw, 100px)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex flex-1 flex-col gap-2">
                <h3 className="font-medium uppercase" style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}>
                  {prompt.title}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed opacity-60"
                  style={{ fontSize: "clamp(0.85rem, 1.4vw, 1.15rem)" }}
                >
                  {prompt.desc}
                </p>
              </div>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                className="hidden h-8 w-8 shrink-0 transition-transform duration-300 group-hover:translate-y-1 sm:block md:h-10 md:w-10"
              >
                <path d="M12 4v16m0 0-6-6m6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
