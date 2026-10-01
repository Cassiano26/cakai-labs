"use client";

import { useState, useEffect, Suspense, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import FadeIn from "@/components/landing/FadeIn";
import { SubmitButton } from "@/components/landing/Buttons";
import { QUICKSTART_EVENT } from "./QuickStartSection";
import { keyToOption, SERVICE_KEYS, STAGE_KEYS, TIMELINE_KEYS } from "@/lib/brief";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { translations } from "@/lib/i18n/translations";

// v2 stores option indexes instead of labels, so drafts survive language switches
const FORM_STORAGE_KEY = "cakai-contact-form-v2";
const RECAPTCHA_SITE_KEY = "6LeDLwEtAAAAAIbyl__32jIjlGoeaPjSvqPJ7udV";

type GrecaptchaEnterprise = {
  enterprise: { execute: (key: string, opts: { action: string }) => Promise<string> };
};

function getStoredFormData(): Record<string, unknown> | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(FORM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

const FIELD_CLASS =
  "w-full rounded-2xl border border-[#D7E2EA]/20 bg-white/[0.03] px-5 py-3.5 text-[#D7E2EA] placeholder:text-[#D7E2EA]/35 transition-colors focus:border-[#B600A8]/70 focus:outline-none";

function Field({ label, required, children }: { label: string; required?: boolean; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60">
        {label}
        {required && <span className="hero-heading-accent"> *</span>}
      </span>
      {children}
    </label>
  );
}

function Select({
  value,
  onChange,
  placeholder,
  options,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: readonly string[];
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`${FIELD_CLASS} appearance-none pr-10 [&>option]:bg-[#0C0C0C] ${value ? "" : "text-[#D7E2EA]/35"}`}
      >
        <option value="">{placeholder}</option>
        {options.map((o, i) => (
          <option key={o} value={i}>
            {o}
          </option>
        ))}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#D7E2EA]/60"
      >
        <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function ProjectBriefForm() {
  const { t } = useLanguage();
  const pb = t.projectBrief;
  const f = pb.fields;
  const searchParams = useSearchParams();
  const [initialData] = useState(getStoredFormData);

  // Brief prepared by the AI chat on the home page, passed as URL params (first render only)
  const [chatPrefill] = useState(() => {
    const services = searchParams.get("services");
    const message = searchParams.get("message");
    if (!services && !message) return null;
    return {
      services: (services ?? "")
        .split(",")
        .map((k) => SERVICE_KEYS.indexOf(k.trim() as (typeof SERVICE_KEYS)[number]))
        .filter((i) => i !== -1),
      projectStage: keyToOption(STAGE_KEYS, searchParams.get("stage")),
      timeline: keyToOption(TIMELINE_KEYS, searchParams.get("timeline")),
      message: message ?? "",
    };
  });

  // Fields are option indexes, so they stay valid whichever language is shown
  const [selectedServices, setSelectedServices] = useState<number[]>(() =>
    chatPrefill?.services.length ? chatPrefill.services : (initialData?.selectedServices as number[]) || []
  );
  const [message, setMessage] = useState(() => chatPrefill?.message || (initialData?.message as string) || "");
  const [timeline, setTimeline] = useState(() => chatPrefill?.timeline || (initialData?.timeline as string) || "");
  const [projectStage, setProjectStage] = useState(
    () => chatPrefill?.projectStage || (initialData?.projectStage as string) || ""
  );
  const [name, setName] = useState(() => (initialData?.name as string) || "");
  const [company, setCompany] = useState(() => (initialData?.company as string) || "");
  const [email, setEmail] = useState(() => (initialData?.email as string) || "");
  const [country, setCountry] = useState(() => (initialData?.country as string) || "");
  const [website, setWebsite] = useState(() => (initialData?.website as string) || "");
  const [budgetRange, setBudgetRange] = useState(() => (initialData?.budgetRange as string) || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Drop the prefill params once read, so a reload keeps the visitor's edits (saved as a draft) instead
  useEffect(() => {
    if (chatPrefill) window.history.replaceState(null, "", `${window.location.pathname}#brief`);
  }, [chatPrefill]);

  useEffect(() => {
    function handleQuickStart(e: Event) {
      const msg = (e as CustomEvent<string>).detail;
      if (msg) setMessage(msg);
    }
    window.addEventListener(QUICKSTART_EVENT, handleQuickStart);
    return () => window.removeEventListener(QUICKSTART_EVENT, handleQuickStart);
  }, []);

  // Persist the draft so it survives reloads and language switches
  useEffect(() => {
    if (submitSuccess) return;
    try {
      localStorage.setItem(
        FORM_STORAGE_KEY,
        JSON.stringify({
          name, company, email, country, website,
          selectedServices, message, timeline, projectStage, budgetRange,
        })
      );
    } catch { /* ignore */ }
  }, [name, company, email, country, website, selectedServices, message, timeline, projectStage, budgetRange, submitSuccess]);

  function toggleService(service: number) {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);

    if (!name || !email || !country || !message || selectedServices.length === 0 || !projectStage || !timeline || !budgetRange) {
      setSubmitError(pb.validationError);
      return;
    }

    setIsSubmitting(true);
    try {
      const grecaptcha = (window as Window & { grecaptcha?: GrecaptchaEnterprise }).grecaptcha;
      if (!grecaptcha?.enterprise) throw new Error("reCAPTCHA not loaded");
      const recaptchaToken = await grecaptcha.enterprise.execute(RECAPTCHA_SITE_KEY, { action: "contact_form" });

      const en = translations.en.projectBrief;
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recaptchaToken,
          name, company, email, country, website,
          // Submissions are stored in English whatever language the form was filled in
          selectedServices: selectedServices.map((i) => en.services[i]),
          message,
          projectStage: en.fields.projectStageOptions[Number(projectStage)],
          timeline: en.fields.timelineOptions[Number(timeline)],
          budgetRange: en.fields.budgetRangeOptions[Number(budgetRange)],
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.error || pb.networkError);
      } else {
        setSubmitSuccess(true);
        localStorage.removeItem(FORM_STORAGE_KEY);
      }
    } catch (err) {
      console.error("[Contact form]", err);
      setSubmitError(pb.networkError);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitSuccess) {
    return (
      <div className="flex flex-col items-center gap-6 py-16 text-center">
        <span className="hero-heading-accent font-black leading-none" style={{ fontSize: "clamp(4rem, 10vw, 120px)" }}>
          ✓
        </span>
        <h3 className="hero-heading font-black uppercase leading-none" style={{ fontSize: "clamp(2rem, 4vw, 56px)" }}>
          {pb.successTitle}
        </h3>
        <p className="max-w-sm font-light leading-relaxed text-[#D7E2EA]">{pb.successMessage}</p>
      </div>
    );
  }

  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit} noValidate>
      <div className="flex flex-col gap-1">
        <h3 className="font-medium uppercase text-[#D7E2EA]" style={{ fontSize: "clamp(1.25rem, 2.2vw, 2rem)" }}>
          {pb.formTitle}
        </h3>
        <p className="font-light text-[#D7E2EA]/60">{pb.formSubtitle}</p>
      </div>

      {chatPrefill && (
        <p className="rounded-2xl border border-[#B600A8]/40 bg-[#B600A8]/10 px-5 py-3 text-sm text-[#D7E2EA]">
          {pb.aiPrefillNote}
        </p>
      )}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label={f.name} required>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={f.namePlaceholder} className={FIELD_CLASS} />
        </Field>
        <Field label={f.company}>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder={f.companyPlaceholder} className={FIELD_CLASS} />
        </Field>
        <Field label={f.email} required>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={f.emailPlaceholder} className={FIELD_CLASS} />
        </Field>
        <Field label={f.country} required>
          <input type="text" value={country} onChange={(e) => setCountry(e.target.value)} placeholder={f.countryPlaceholder} className={FIELD_CLASS} />
        </Field>
      </div>

      <Field label={f.website}>
        <input type="url" value={website} onChange={(e) => setWebsite(e.target.value)} placeholder={f.websitePlaceholder} className={FIELD_CLASS} />
      </Field>

      <fieldset className="flex flex-col gap-3">
        <legend className="mb-3 text-xs font-light uppercase tracking-widest text-[#D7E2EA]/60">
          {f.services}
          <span className="hero-heading-accent"> *</span>
        </legend>
        <div className="flex flex-wrap gap-2">
          {pb.services.map((service, i) => {
            const selected = selectedServices.includes(i);
            return (
              <button
                key={service}
                type="button"
                aria-pressed={selected}
                onClick={() => toggleService(i)}
                className={`rounded-full border px-4 py-1.5 text-xs uppercase tracking-wider transition-colors sm:text-sm ${
                  selected
                    ? "border-transparent text-white"
                    : "border-[#D7E2EA]/30 text-[#D7E2EA]/80 hover:border-[#D7E2EA]/70"
                }`}
                style={
                  selected
                    ? { background: "linear-gradient(123deg, #B600A8 0%, #7621B0 60%, #BE4C00 100%)" }
                    : undefined
                }
              >
                {service}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Field label={f.projectStage} required>
          <Select value={projectStage} onChange={setProjectStage} placeholder={f.select} options={f.projectStageOptions} />
        </Field>
        <Field label={f.timeline} required>
          <Select value={timeline} onChange={setTimeline} placeholder={f.select} options={f.timelineOptions} />
        </Field>
        <Field label={f.budgetRange} required>
          <Select value={budgetRange} onChange={setBudgetRange} placeholder={f.select} options={f.budgetRangeOptions} />
        </Field>
      </div>

      <Field label={f.message} required>
        <textarea
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={f.messagePlaceholder}
          className={`${FIELD_CLASS} resize-none`}
        />
      </Field>

      {submitError && (
        <p role="alert" className="rounded-2xl border border-[#BE4C00]/50 bg-[#BE4C00]/10 px-5 py-3 text-sm text-[#FFB98A]">
          {submitError}
        </p>
      )}

      <div className="mt-2">
        <SubmitButton label={isSubmitting ? pb.submitting : pb.submit} disabled={isSubmitting} />
      </div>

      <div className="flex flex-col gap-1 text-center text-xs text-[#D7E2EA]/50">
        <p>{pb.privacyNote}</p>
        <p>
          {pb.recaptchaNote}{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#D7E2EA]">
            {pb.privacyPolicy}
          </a>{" "}
          {pb.and}{" "}
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-[#D7E2EA]">
            {pb.termsOfService}
          </a>{" "}
          {pb.apply}
        </p>
      </div>
    </form>
  );
}

export default function ProjectBriefSection() {
  const { t } = useLanguage();
  const pb = t.projectBrief;

  return (
    <section
      id="brief"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 lg:grid-cols-[5fr_7fr] lg:gap-20">
        <div className="flex flex-col gap-8 text-[#D7E2EA] lg:sticky lg:top-16">
          <FadeIn y={20}>
            <span className="text-xs font-light uppercase tracking-widest opacity-60 sm:text-sm">{pb.badge}</span>
          </FadeIn>
          <FadeIn delay={0.1} y={40}>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 72px)" }}
            >
              {pb.heading}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2} y={20} className="flex flex-col gap-4 font-light leading-relaxed">
            <p style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)" }}>{pb.p1}</p>
            <p className="opacity-60">{pb.p2}</p>
          </FadeIn>

          <FadeIn delay={0.3} y={20} className="mt-4 flex flex-col">
            <h3 className="mb-4 text-xs font-light uppercase tracking-widest opacity-60 sm:text-sm">{pb.whatHappensNext}</h3>
            {pb.steps.map((step, i) => (
              <div
                key={step.step}
                className="flex items-center gap-6 py-5"
                style={{
                  borderTop: i === 0 ? "1px solid rgba(215, 226, 234, 0.15)" : undefined,
                  borderBottom: "1px solid rgba(215, 226, 234, 0.15)",
                }}
              >
                <span className="hero-heading w-[1.3em] shrink-0 font-black leading-none" style={{ fontSize: "clamp(2.5rem, 4vw, 64px)" }}>
                  {step.step.padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-medium uppercase">{step.title}</span>
                  <span className="text-sm font-light opacity-60">{step.desc}</span>
                </div>
              </div>
            ))}
          </FadeIn>
        </div>

        <FadeIn
          delay={0.2}
          y={40}
          className="rounded-[40px] border-2 border-[#D7E2EA] p-6 sm:rounded-[50px] sm:p-10 md:rounded-[60px] md:p-12"
        >
          <Suspense fallback={null}>
            <ProjectBriefForm />
          </Suspense>
        </FadeIn>
      </div>
    </section>
  );
}
