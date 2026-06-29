import { Bot, Globe, Smartphone, Database, Zap, Lightbulb, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
};

const services: Service[] = [
  {
    icon: Bot,
    title: "AI Strategy & Roadmaps",
    description:
      "Identify high-impact AI opportunities, define value-driven roadmaps and phased delivery plans.",
    accent: "from-amber-900 to-[#795548]",
  },
  {
    icon: Globe,
    title: "LLM & Assistant Design",
    description:
      "Design conversational flows, prompt engineering, safety and guardrails for reliable assistants.",
    accent: "from-[#5d4037] to-[#795548]",
  },
  {
    icon: Smartphone,
    title: "Custom ML & Models",
    description:
      "Advisory on model selection, training strategy, evaluation and prototyping for production-ready models.",
    accent: "from-[#795548] to-amber-700",
  },
  {
    icon: Database,
    title: "Data & MLOps Consulting",
    description:
      "Data strategy, pipeline design, deployment, monitoring and observability for ML systems.",
    accent: "from-[#5d4037] to-amber-900",
  },
  {
    icon: Zap,
    title: "AI-Powered Automation",
    description:
      "Automate decision-making and operational workflows using responsible AI techniques.",
    accent: "from-amber-800 to-[#795548]",
  },
  {
    icon: Lightbulb,
    title: "Technical AI Consulting",
    description:
      "Architecture reviews, governance, cost optimisation and strategic technical guidance for AI initiatives.",
    accent: "from-[#795548] to-[#5d4037]",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-12 md:py-24">
      {/* Subtle background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(93,64,55,0.05),transparent_60%)]" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-3 block text-sm font-medium uppercase tracking-widest text-[#795548]">
              What we do
            </span>
            <h2 className="text-4xl font-bold text-neutral-900 md:text-5xl">
              AI Consulting
              <br />
              <span className="text-neutral-400">Services</span>
            </h2>
          </div>
          <p className="max-w-md text-lg text-neutral-600 md:text-right">
            Strategy, model design, data and MLOps guidance to turn AI into
            measurable outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="group relative">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5d4037]/10 to-[#795548]/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative h-full rounded-2xl border border-neutral-100 bg-neutral-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#5d4037]/30 hover:bg-white hover:shadow-xl">
                  <div
                    className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} shadow-lg`}
                  >
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

        {/* CTA */}
        {/* <div className="mt-12 text-center">
          <Link
            href="/contact#brief"
            className="inline-flex items-center gap-2 rounded-xl border border-[#5d4037]/20 bg-[#5d4037]/5 px-6 py-3 text-sm font-medium text-[#5d4037] transition-all duration-300 hover:bg-[#5d4037] hover:text-white"
          >
            Explore all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div> */}
      </div>
    </section>
  );
}
