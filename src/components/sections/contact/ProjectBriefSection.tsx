"use client";

import { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, Sparkles, CheckCircle, AlertCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const SERVICE_KEY_MAP: Record<string, string> = {
  "ai-strategy": "AI strategy",
  "llm-design": "LLM & assistant design",
  "ml-models": "Custom ML & models",
  "data-mlops": "Data & MLOps",
  "ai-automation": "AI automation",
  "technical-ai-consulting": "Technical AI consulting",
};

const TIMELINE_MAP: Record<string, string> = {
  urgent: "Urgent",
  "1-3 months": "1–3 months",
  "3-6 months": "3–6 months",
  flexible: "Flexible",
};

const FORM_STORAGE_KEY = "cakai-contact-form";

function getStoredFormData(): Record<string, unknown> | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = localStorage.getItem(FORM_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function ProjectBriefForm() {
  const { t } = useLanguage();
  const services = t.projectBrief.services;
  const searchParams = useSearchParams();
  const [initialData] = useState(getStoredFormData);

  // Compute AI override from URL params (first render only)
  const [aiOverride] = useState(() => {
    const servicesParam = searchParams.get("services");
    const messageParam = searchParams.get("message");
    const timelineParam = searchParams.get("timeline");
    const budgetParam = searchParams.get("budget");
    if (!servicesParam && !messageParam) return null;
    return { services: servicesParam, message: messageParam, timeline: timelineParam, budget: budgetParam };
  });

  const [selectedServices, setSelectedServices] = useState<string[]>(() => {
    if (aiOverride?.services) {
      const keys = aiOverride.services.split(",").map((k) => k.trim());
      const mapped = keys.map((k) => SERVICE_KEY_MAP[k]).filter(Boolean) as string[];
      if (mapped.length > 0) return mapped;
    }
    return (initialData?.selectedServices as string[]) || [];
  });
  const [message, setMessage] = useState(() => aiOverride?.message || (initialData?.message as string) || "");
  const [timeline, setTimeline] = useState(() => {
    if (aiOverride?.timeline) {
      const mapped = TIMELINE_MAP[aiOverride.timeline.toLowerCase()] ?? "";
      if (mapped) return mapped;
    }
    return (initialData?.timeline as string) || "";
  });
  const [prefilledBudget] = useState(() => aiOverride?.budget || "");
  const [fromAI] = useState(() => !!aiOverride);
  const [name, setName] = useState(() => (initialData?.name as string) || "");
  const [company, setCompany] = useState(() => (initialData?.company as string) || "");
  const [email, setEmail] = useState(() => (initialData?.email as string) || "");
  const [country, setCountry] = useState(() => (initialData?.country as string) || "");
  const [website, setWebsite] = useState(() => (initialData?.website as string) || "");
  const [projectStage, setProjectStage] = useState(() => (initialData?.projectStage as string) || "");
  const [budgetRange, setBudgetRange] = useState(() => (initialData?.budgetRange as string) || "");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const isInitialized = useRef(true);
  const siteKey = "6LeDLwEtAAAAAIbyl__32jIjlGoeaPjSvqPJ7udV";

  // Listen for quickstart card clicks
  useEffect(() => {
    function handleQuickStart(e: Event) {
      const msg = (e as CustomEvent<string>).detail;
      if (msg) setMessage(msg);
    }
    window.addEventListener("quickstart-message", handleQuickStart);
    return () => window.removeEventListener("quickstart-message", handleQuickStart);
  }, []);

  // Save all form fields to localStorage
  function saveForm(overrides?: Partial<Record<string, unknown>>) {
    try {
      const data = {
        name, company, email, country, website,
        selectedServices, message, timeline, projectStage, budgetRange,
        ...overrides,
      };
      localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(data));
    } catch { /* ignore */ }
  }

  function toggleService(service: string) {
    setSelectedServices((prev) => {
      const next = prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service];
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);
    console.log("[Form] Submit started");

    if (!name || !email || !country || !message || selectedServices.length === 0 || !projectStage || !timeline || !budgetRange) {
      console.log("[Form] Validation failed: missing required fields");
      setSubmitError(t.projectBrief.validationError);
      return;
    }

    setIsSubmitting(true);
    try {
      console.log("[Form] Executing reCAPTCHA Enterprise...");

      type GrecaptchaEnterprise = {
        enterprise: { execute: (key: string, opts: { action: string }) => Promise<string> };
      };

      // Check if grecaptcha is available
      const grecaptcha = (window as Window & { grecaptcha?: GrecaptchaEnterprise }).grecaptcha;
      if (typeof window === "undefined" || !grecaptcha?.enterprise) {
        throw new Error("reCAPTCHA not loaded");
      }

      const recaptchaToken = await grecaptcha.enterprise.execute(siteKey, {
        action: "contact_form",
      });
      console.log("[Form] reCAPTCHA token received:", recaptchaToken ? "✓" : "✗");

      console.log("[Form] Sending form data to API", {
        name,
        email,
        company,
        country,
        website,
        selectedServices,
        message,
        projectStage,
        timeline,
        budgetRange,
      });

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          recaptchaToken,
          name,
          company,
          email,
          country,
          website,
          selectedServices,
          message,
          projectStage,
          timeline,
          budgetRange,
          aiEstimate: prefilledBudget || undefined,
        }),
      });

      console.log("[Form] API response status:", res.status);
      const data = await res.json();
      console.log("[Form] API response data:", data);

      if (!res.ok) {
        console.error("[Form] API returned error:", data.error);
        setSubmitError(data.error || t.projectBrief.networkError);
      } else {
        console.log("[Form] Success! Clearing form.");
        setSubmitSuccess(true);
        localStorage.removeItem(FORM_STORAGE_KEY);
      }
    } catch (err) {
      console.error("[Form] Catch block error:", err);
      setSubmitError(t.projectBrief.networkError);
    } finally {
      setIsSubmitting(false);
    }
  }

  // Save form whenever user-editable fields change (including selectedServices)
  useEffect(() => {
    if (!isInitialized.current) return;
    saveForm();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, company, email, country, website, message, timeline, projectStage, budgetRange, selectedServices]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      {/* Left column */}
      <div>
        <div className="inline-block px-3 py-1 bg-neutral-100 rounded-full text-sm text-neutral-600 mb-4">
          {t.projectBrief.badge}
        </div>

        <h2 className="text-4xl font-bold mb-6 text-neutral-900">
          {t.projectBrief.heading}
        </h2>

        <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
          {t.projectBrief.p1}
        </p>

        <p className="text-lg text-neutral-600 mb-10 leading-relaxed">
          {t.projectBrief.p2}
        </p>

        <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6">
          <h3 className="font-semibold text-neutral-900 mb-5">
            {t.projectBrief.whatHappensNext}
          </h3>
          <div className="space-y-5">
            {t.projectBrief.steps.map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-7 h-7 rounded-full bg-linear-to-br from-[#5d4037] to-[#795548] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {item.step}
                </div>
                <div>
                  <div className="font-semibold text-neutral-900 mb-1">
                    {item.title}
                  </div>
                  <div className="text-sm text-neutral-600">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right column — form */}
      <div className="bg-white rounded-2xl border border-neutral-200 shadow-xl p-8">
        <h3 className="text-2xl font-bold text-neutral-900 mb-1">
          {t.projectBrief.formTitle}
        </h3>
        <p className="text-neutral-600 mb-6">
          {t.projectBrief.formSubtitle}
        </p>

        {fromAI && (
          <div className="mb-6 flex items-center gap-2.5 rounded-xl border border-[#5d4037]/20 bg-linear-to-r from-[#5d4037]/5 to-[#795548]/5 px-4 py-3">
            <Sparkles className="w-4 h-4 text-[#795548] shrink-0" />
            <p className="text-sm text-[#5d4037]">
              {t.projectBrief.aiPrefillNote}
            </p>
          </div>
        )}

        <form className="space-y-5" onSubmit={handleSubmit}>
          {submitSuccess ? (
            <div className="py-10 flex flex-col items-center gap-4 text-center">
              <CheckCircle className="w-12 h-12 text-green-500" />
              <h4 className="text-xl font-bold text-neutral-900">{t.projectBrief.successTitle}</h4>
              <p className="text-neutral-600">
                {t.projectBrief.successMessage}
              </p>
            </div>
          ) : (
            <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                {t.projectBrief.fields.name} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.projectBrief.fields.namePlaceholder}
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#5d4037]/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                {t.projectBrief.fields.company}
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder={t.projectBrief.fields.companyPlaceholder}
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#5d4037]/50 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                {t.projectBrief.fields.email} <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.projectBrief.fields.emailPlaceholder}
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#5d4037]/50 transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                {t.projectBrief.fields.country} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder={t.projectBrief.fields.countryPlaceholder}
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#5d4037]/50 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">
              {t.projectBrief.fields.website}
            </label>
            <input
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder={t.projectBrief.fields.websitePlaceholder}
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#5d4037]/50 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              {t.projectBrief.fields.services} <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {services.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`px-3 py-1.5 rounded-lg text-sm border transition-all ${
                    selectedServices.includes(service)
                      ? "bg-linear-to-r from-[#5d4037] to-[#795548] text-white border-transparent"
                      : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-[#5d4037]/40"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                {t.projectBrief.fields.projectStage} <span className="text-red-500">*</span>
              </label>
              <select
                value={projectStage}
                onChange={(e) => setProjectStage(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-700 focus:outline-none focus:border-[#5d4037]/50 transition-colors appearance-none"
              >
                <option value="">Select</option>
                {t.projectBrief.fields.projectStageOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                {t.projectBrief.fields.timeline} <span className="text-red-500">*</span>
              </label>
              <select
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-700 focus:outline-none focus:border-[#5d4037]/50 transition-colors appearance-none"
              >
                <option value="">Select</option>
                {t.projectBrief.fields.timelineOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                {t.projectBrief.fields.budgetRange} <span className="text-red-500">*</span>
              </label>
              <select
                value={budgetRange}
                onChange={(e) => setBudgetRange(e.target.value)}
                className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-700 focus:outline-none focus:border-[#5d4037]/50 transition-colors appearance-none"
              >
                <option value="">Select</option>
                {t.projectBrief.fields.budgetRangeOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
          </div>

          {prefilledBudget && (
            <div className="rounded-lg border border-[#5d4037]/20 bg-[#5d4037]/5 px-4 py-3">
              <p className="text-sm text-[#5d4037]">
                <span className="font-medium">{t.projectBrief.aiEstimateLabel}:</span>{" "}
                {prefilledBudget}
              </p>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1.5">
              {t.projectBrief.fields.message} <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={t.projectBrief.fields.messagePlaceholder}
              className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-[#5d4037]/50 transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-linear-to-r from-[#5d4037] to-[#795548] text-white rounded-lg hover:shadow-2xl hover:shadow-[#5d4037]/30 transition-all font-medium flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t.projectBrief.submitting : t.projectBrief.submit}
            {!isSubmitting && <Send className="w-5 h-5" />}
          </button>

          {submitError && (
            <div className="flex items-center gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
              <p className="text-sm text-red-700">{submitError}</p>
            </div>
          )}

          <p className="text-xs text-neutral-500 text-center">
            {t.projectBrief.privacyNote}
          </p>
          <p className="text-xs text-neutral-400 text-center">
            {t.projectBrief.recaptchaNote}{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-600">{t.projectBrief.privacyPolicy}</a>{" "}
            and{" "}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-neutral-600">{t.projectBrief.termsOfService}</a>{" "}
            {t.projectBrief.apply}
          </p>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default function ProjectBriefSection() {
  return (
    <section id="brief" className="py-12 md:py-24 bg-white">
      <div className="max-w-360 mx-auto px-8">
        <Suspense fallback={null}>
          <ProjectBriefForm />
        </Suspense>
      </div>
    </section>
  );
}
