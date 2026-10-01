// Stable keys the AI chat uses to prefill the contact form. Each array is in the same order as the
// matching option list in `translations.*.projectBrief`, so a key's index is the option it selects.
export const SERVICE_KEYS = [
  "ai-strategy",
  "llm-design",
  "ml-models",
  "data-mlops",
  "ai-automation",
  "technical-ai-consulting",
  "not-sure",
] as const;

export const STAGE_KEYS = ["idea", "proof-of-concept", "pilot", "production", "improvement", "not-sure"] as const;

export const TIMELINE_KEYS = ["urgent", "1-3-months", "3-6-months", "flexible"] as const;

export type BriefPrefill = {
  services: (typeof SERVICE_KEYS)[number][];
  projectStage?: (typeof STAGE_KEYS)[number];
  timeline?: (typeof TIMELINE_KEYS)[number];
  message: string;
};

export function briefToContactUrl(brief: BriefPrefill) {
  const params = new URLSearchParams({ services: brief.services.join(","), message: brief.message });
  if (brief.projectStage) params.set("stage", brief.projectStage);
  if (brief.timeline) params.set("timeline", brief.timeline);
  return `/contact?${params.toString()}#brief`;
}

// Index of `key` in `keys`, as the string the form's selects use, or "" when unknown
export function keyToOption(keys: readonly string[], key: string | null) {
  const i = key ? keys.indexOf(key) : -1;
  return i === -1 ? "" : String(i);
}
