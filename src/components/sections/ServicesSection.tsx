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
    title: "AI Strategy & Roadmaps",
    description:
      "Identify high-impact AI opportunities, define value-driven roadmaps and phased delivery plans.",
  },
  {
    icon: Globe,
    title: "LLM & Assistant Design",
    description:
      "Design conversational flows, prompt engineering, safety and guardrails for reliable assistants.",
  },
  {
    icon: Smartphone,
    title: "Custom ML & Models",
    description:
      "Advisory on model selection, training strategy, evaluation and prototyping for production-ready models.",
  },
  {
    icon: Database,
    title: "Data & MLOps Consulting",
    description:
      "Data strategy, pipeline design, deployment, monitoring and observability for ML systems.",
  },
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description:
      "Automate decision-making and operational workflows using responsible AI techniques.",
  },
  {
    icon: Lightbulb,
    title: "Technical AI Consulting",
    description:
      "Architecture reviews, governance, cost optimisation and strategic technical guidance for AI initiatives.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative bg-neutral-50 py-12 md:py-24">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-neutral-900">
            AI Consulting Services
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-neutral-600">
            Strategy, model design, data and MLOps guidance to turn AI into measurable outcomes.
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
