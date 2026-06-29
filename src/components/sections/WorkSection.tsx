import { ExternalLink, Sparkles, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const featuredProjects = [
  {
    name: "Yetiman",
    label: "AI Agency",
    description:
      "Yetiman is the AI brand powering Hypnotic Agency — bringing artificial intelligence into every layer of brand strategy, creative production, and digital marketing.",
    longDescription:
      "From AI-assisted copywriting and visual direction to intelligent campaign optimisation, Yetiman defines what a future-ready creative agency looks like.",
    tags: ["AI Strategy", "Brand Identity", "Creative AI", "Agency"],
    href: "https://www.yetiman.ai/",
    image:
      "https://framerusercontent.com/images/05gyHi5YAF785poD4KnN4ywffuk.png?scale-down-to=2048&width=2788&height=2116",
  },
  {
    name: "Yetify",
    label: "Brand & GEO Platform",
    description:
      "Yetify is a platform for brand evaluation and Generative Engine Optimisation (GEO) — helping brands understand how they appear in AI-generated answers across ChatGPT, Gemini, and Perplexity.",
    longDescription:
      "As search shifts from links to AI-generated answers, Yetify gives brands the visibility and tools to shape their narrative in the generative web.",
    tags: ["GEO", "Brand Audit", "AI Visibility", "LLM Optimisation"],
    href: "https://yetify.ai/",
    image:
      "https://cdn.sanity.io/images/rldpvjbx/production/83f5d850a669e53a7d2bac08ae5eb9acd5de62c6-2592x1738.png?w=3840&q=100&auto=format&fit=max",
  },
];

const otherProjects = [
  {
    name: "Customer Insights AI",
    description:
      "AI strategy and recommendation system that improved customer retention through personalised insights.",
    tags: ["AI Strategy", "Recommendations", "LLM"],
    href: "#",
  },
  {
    name: "Support Assistant",
    description:
      "LLM-powered support assistant that reduced first-response time and deflected common tickets.",
    tags: ["LLM", "Prompting", "Automation"],
    href: "#",
  },
  {
    name: "Document Understanding",
    description:
      "RAG-based document search and summarisation pipeline for faster decision-making.",
    tags: ["RAG", "Search", "Summarisation"],
    href: "#",
  },
  {
    name: "Operational AI",
    description:
      "MLOps and monitoring implementation to deploy models reliably in production.",
    tags: ["MLOps", "Monitoring", "Deployment"],
    href: "#",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="relative bg-neutral-50 py-12 md:py-24">
      <div className="mx-auto max-w-[1440px] px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#5d4037]/20 bg-[#5d4037]/10 px-4 py-1.5 text-sm text-[#5d4037]">
            <Sparkles className="h-3.5 w-3.5" />
            Selected Work
          </div>
          <h2 className="mb-4 text-4xl font-bold text-neutral-900">
            Projects we&apos;re building
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-neutral-600">
            From AI brand strategy to generative engine optimisation — real
            products solving real problems.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block"
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#5d4037]/20 to-[#795548]/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative h-full overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all duration-300 hover:border-[#5d4037]/50 hover:shadow-2xl">
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4 text-neutral-900" />
                  </div>
                  <span className="absolute bottom-4 left-4 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-sm">
                    {project.label}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="mb-3 text-2xl font-bold text-neutral-900">
                    {project.name}
                  </h3>
                  <p className="mb-2 leading-relaxed text-neutral-700">
                    {project.description}
                  </p>
                  <p className="mb-6 text-sm leading-relaxed text-neutral-500">
                    {project.longDescription}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-[#5d4037]/20 bg-[#5d4037]/10 px-3 py-1 text-xs font-medium text-[#5d4037]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="mb-8 flex items-center gap-4">
          <div className="h-px flex-1 bg-neutral-200" />
          <span className="text-sm text-neutral-400">More engagements</span>
          <div className="h-px flex-1 bg-neutral-200" />
        </div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {otherProjects.map((project) => (
            <div key={project.name} className="group relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5d4037]/10 to-[#795548]/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative h-full rounded-2xl border border-neutral-200 bg-white p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#5d4037]/50 hover:shadow-xl">
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="text-base font-semibold text-neutral-900">
                    {project.name}
                  </h3>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.name}`}
                  >
                    <ExternalLink className="h-4 w-4 text-neutral-400 transition-colors group-hover:text-[#795548]" />
                  </a>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-neutral-600">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#5d4037]/20 bg-[#5d4037]/10 px-2.5 py-0.5 text-xs text-[#5d4037]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
