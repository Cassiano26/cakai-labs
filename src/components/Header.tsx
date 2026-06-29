"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useRef, useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SidebarToggleIcon } from "./SidebarToggleIcon";

gsap.registerPlugin(useGSAP);

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/#work" },
  { label: "AI Demo", href: "/#ai-demo" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SOLID = { backgroundColor: "rgba(10,10,10,0.92)", backdropFilter: "blur(12px)", boxShadow: "0 4px 24px rgba(0,0,0,0.2)" };
const TRANSPARENT = { backgroundColor: "rgba(0,0,0,0)", backdropFilter: "blur(0px)", boxShadow: "none" };

export default function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const toggleMenu = useCallback(() => {
    const menu = mobileMenuRef.current;
    if (!menu) return;
    if (!mobileMenuOpen) {
      setMobileMenuOpen(true);
      gsap.fromTo(menu, { height: 0, opacity: 0 }, { height: "auto", opacity: 1, duration: 0.35, ease: "power2.out" });
    } else {
      gsap.to(menu, { height: 0, opacity: 0, duration: 0.25, ease: "power2.in", onComplete: () => setMobileMenuOpen(false) });
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
  }, [pathname]);

  useGSAP(() => {
    const header = headerRef.current;
    if (!header) return;

    const atTop = window.scrollY <= 40;
    gsap.set(header, { yPercent: 0, ...(isHome && atTop ? TRANSPARENT : SOLID) });

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY.current;

      if (isHome) {
        gsap.to(header, {
          ...(currentScrollY > 40 ? SOLID : TRANSPARENT),
          duration: 0.35,
          ease: "power2.out",
          overwrite: "auto",
        });
      }

      if (scrollingDown && currentScrollY > 60) {
        gsap.to(header, { yPercent: -100, duration: 0.5, ease: "power2.out", overwrite: "auto" });
      } else {
        gsap.to(header, { yPercent: 0, duration: 0.5, ease: "power2.out", overwrite: "auto" });
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, { scope: headerRef, dependencies: [isHome] });

  return (
    <header ref={headerRef} style={isHome ? TRANSPARENT : SOLID} className="fixed left-0 top-0 z-50 w-full px-8 py-4">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between md:px-8">
        <Link href="/">
          <Image
            src="/nameLogo.png"
            alt="Cakai Labs"
            width={110}
            height={20}
            style={{ height: "20px", width: "auto", filter: "brightness(0) invert(1)" }}
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-neutral-400 transition-colors hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact#brief"
          className="hidden rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/20 md:inline-block"
        >
          Start a project
        </Link>

        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          <SidebarToggleIcon className="h-8 w-8" isOpen={mobileMenuOpen} />
        </button>
      </div>

      <nav
        ref={mobileMenuRef}
        className={`flex flex-col gap-4 overflow-hidden pb-4 pt-4 md:hidden ${!mobileMenuOpen ? "hidden" : ""}`}
        style={{ height: mobileMenuOpen ? undefined : 0 }}
      >
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="text-sm text-neutral-400 transition-colors hover:text-white" onClick={toggleMenu}>
            {link.label}
          </Link>
        ))}
        <Link href="/contact#brief" className="w-fit rounded-lg border border-white/20 bg-white/10 px-5 py-2.5 text-center text-sm font-medium text-white transition-all hover:bg-white/20" onClick={toggleMenu}>
          Start a project
        </Link>
      </nav>
    </header>
  );
}
