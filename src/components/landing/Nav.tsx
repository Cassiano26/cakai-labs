"use client";

import FadeIn from "./FadeIn";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// `sectionBase` prefixes the in-page anchors, so pages other than home can pass "/" to link back to them
export default function Nav({ sectionBase = "" }: { sectionBase?: string }) {
  const { t, lang, toggleLang } = useLanguage();
  const l = t.landing;
  const navLinks = [
    { label: l.nav.chat, href: `${sectionBase}#chat` },
    { label: l.nav.projects, href: `${sectionBase}#projects` },
    { label: l.nav.about, href: `${sectionBase}#about` },
    { label: l.nav.contact, href: "/contact" },
  ];

  return (
    <FadeIn as="nav" delay={0} y={-20} className="flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
        >
          {link.label}
        </a>
      ))}
      <button
        onClick={toggleLang}
        aria-label={lang === "en" ? "Mudar para português" : "Switch to English"}
        className="rounded-full border border-[#D7E2EA]/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-[#D7E2EA] transition-opacity duration-200 hover:opacity-70 md:text-sm"
      >
        {lang === "en" ? "PT" : "EN"}
      </button>
    </FadeIn>
  );
}
