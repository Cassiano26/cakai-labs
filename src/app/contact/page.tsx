import type { Metadata } from "next";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import QuickStartSection from "@/components/contact/QuickStartSection";
import ProjectBriefSection from "@/components/contact/ProjectBriefSection";
import ContactSection from "@/components/landing/ContactSection";

export const metadata: Metadata = {
  title: "Contact — Cakai Labs",
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <QuickStartSection />
      <ProjectBriefSection />
      <ContactSection ctaHref="#brief" />
    </>
  );
}
