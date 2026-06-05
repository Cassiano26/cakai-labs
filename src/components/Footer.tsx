import Image from "next/image";
import Link from "next/link";

const servicesLinks = [
  { label: "AI Consulting", href: "#services" },
  { label: "LLM & Assistants", href: "#services" },
  { label: "MLOps & Data", href: "#services" },
  { label: "AI Automation", href: "#services" },
];

const companyLinks = [
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
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
              AI strategy, models and production-grade MLOps.
            </p>
          </div>

          <div >
            <h4 className="mb-4 font-semibold text-neutral-900">Services</h4>
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
            <h4 className="mb-4 font-semibold text-neutral-900">Company</h4>
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
          <p>© 2026 Cakai Labs. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="transition-colors hover:text-[#5d4037]">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-[#5d4037]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
