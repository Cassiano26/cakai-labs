import { Bot, Globe, Smartphone, Database, Zap, Lightbulb } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Bot,
    title: "AI Consulting & Integration",
    description:
      "Implement AI features, from LLM integration to custom ML models. We help you build intelligent features that users actually use.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Modern web applications built with React, Next.js, and TypeScript. Fast, scalable, and maintainable.",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native iOS and Android apps, or cross-platform solutions with React Native. Seamless user experiences across devices.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    description:
      "Robust backend systems, RESTful and GraphQL APIs, database design, and cloud infrastructure.",
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Streamline workflows with intelligent automation. From simple scripts to complex integration pipelines.",
  },
  {
    icon: Lightbulb,
    title: "Technical Consulting",
    description:
      "Architecture reviews, technology selection, performance optimization, and strategic technical guidance.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-neutral-50 py-12 md:py-24">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-neutral-900">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-neutral-600">
            End-to-end software engineering, from concept to production.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="group relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5d4037]/10 to-[#795548]/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative h-full rounded-2xl border border-neutral-200 bg-white p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#5d4037]/50 hover:shadow-xl">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#5d4037] to-[#795548]">
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h3 className="mb-3 text-xl font-semibold text-neutral-900">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed text-neutral-600">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
