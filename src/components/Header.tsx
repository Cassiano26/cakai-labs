"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "AI Demo", href: "#ai-demo" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);

  useGSAP(() => {
    const header = headerRef.current;
    if (!header) return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      if (scrollingDown && currentScrollY > 60) {
        gsap.to(header, { yPercent: -100, duration: 0.5, ease: "power2.out" });
      } else {
        gsap.to(header, { yPercent: 0, duration: 0.5, ease: "power2.out" });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="fixed top-0 left-0 z-50 w-full bg-white/90 px-8 py-4 backdrop-blur-sm shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link href="/">
          <Image src="/nameLogo.svg" alt="Cakai Labs" width={110} height={20} style={{ height: "20px", width: "auto" }} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-700 transition-colors hover:text-gray-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="rounded-md bg-[#4a3428] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3a2a20]"
        >
          Start a project
        </Link>
      </div>
    </header>
  );
}
