import type { Metadata } from "next";
import HeroSection from "@/components/landing/HeroSection";
import MarqueeSection from "@/components/landing/MarqueeSection";
import AboutSection from "@/components/landing/AboutSection";
import ChatSection from "@/components/landing/ChatSection";
import ProjectsSection from "@/components/landing/ProjectsSection";
import ContactSection from "@/components/landing/ContactSection";
import { kanit } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Cakai Labs — AI Consulting",
};

export default function Home() {
  return (
    <main className={`${kanit.className} bg-[#0C0C0C]`} style={{ overflowX: "clip" }}>
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ChatSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
