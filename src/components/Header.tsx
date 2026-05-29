"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SidebarToggleIcon } from "./SidebarToggleIcon";

gsap.registerPlugin(useGSAP);

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "AI Demo", href: "/#ai-demo" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;

    if (!mobileMenuOpen) {
      setMobileMenuOpen(true);
      gsap.fromTo(
        menu,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.35, ease: "power2.out" }
      );
    } else {
      gsap.to(menu, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => setMobileMenuOpen(false),
      });
    }
  }, [mobileMenuOpen]);

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
      <div className="mx-auto flex max-w-[1440px] items-center justify-between md:px-8">
        <Link href="/">
          <Image src="/nameLogo.svg" alt="Cakai Labs" width={110} height={20} style={{ height: "20px", width: "auto" }} />
        </Link>

        {/* Desktop nav */}
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
          href="/contact#brief"
          className="hidden rounded-md bg-[#4a3428] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#3a2a20] md:inline-block"
        >
          Start a project
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <SidebarToggleIcon className="h-8 w-8" />
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        ref={mobileMenuRef}
        className={`flex pt-4 flex-col gap-4 overflow-hidden pb-4 md:hidden ${!mobileMenuOpen ? "hidden" : ""}`}
        style={{ height: mobileMenuOpen ? undefined : 0 }}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm text-gray-700 transition-colors hover:text-gray-900"
            onClick={toggleMenu}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact#brief"
          className="rounded-md bg-[#4a3428] px-5 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-[#3a2a20] w-fit"
          onClick={toggleMenu}
        >
          Start a project
        </Link>
      </nav>
    </header>
  );
}
