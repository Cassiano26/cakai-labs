"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const servicesLinks = [
    { label: t.footer.servicesLinks.aiConsulting, href: "#services" },
    { label: t.footer.servicesLinks.llmAssistants, href: "#services" },
    { label: t.footer.servicesLinks.mlopsData, href: "#services" },
    { label: t.footer.servicesLinks.aiAutomation, href: "#services" },
  ];

  const companyLinks = [
    { label: t.footer.companyLinks.about, href: "#about" },
    { label: t.footer.companyLinks.contact, href: "#contact" },
  ];

  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-360 px-8 py-12">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/fullLogo.png"
                alt="Cakai"
                width={140}
                height={24}
              />
            </Link>
            <p className="text-sm text-neutral-600">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-neutral-900">{t.footer.services}</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              {servicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[#5d4037]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-neutral-900">{t.footer.company}</h4>
            <ul className="space-y-2 text-sm text-neutral-600">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-[#5d4037]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-neutral-200 pt-8 text-sm text-neutral-600 md:flex-row md:items-center md:justify-between">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="transition-colors hover:text-[#5d4037]">
              {t.footer.privacyPolicy}
            </Link>
            <Link href="#" className="transition-colors hover:text-[#5d4037]">
              {t.footer.termsOfService}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
