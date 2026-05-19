import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WorkSection from "@/components/sections/WorkSection";
import AIDemoSection from "@/components/sections/AIDemoSection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <HeroSection />
        <AIDemoSection />
        <ServicesSection />
        <WorkSection />
      </main>
    </>
  );
}
