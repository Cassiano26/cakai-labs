import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Customer Insights AI",
    description: "AI strategy and recommendation system that improved customer retention through personalized insights and targeted interventions.",
    tags: ["AI Strategy", "Recommendations", "LLM"],
    href: "#",
  },
  {
    name: "Support Assistant",
    description: "Design and prompt engineering for an LLM-powered support assistant that reduced first-response time and deflected common tickets.",
    tags: ["LLM", "Prompting", "Automation"],
    href: "#",
  },
  {
    name: "Document Understanding",
    description: "RAG-based document search and summarization pipeline for faster decision-making across large document collections.",
    tags: ["RAG", "Search", "Summarization"],
    href: "#",
  },
  {
    name: "Operational AI",
    description: "MLOps and monitoring implementation to deploy models reliably and keep them performant in production.",
    tags: ["MLOps", "Monitoring", "Deployment"],
    href: "#",
  },
  {
    name: "Prototype Studio",
    description: "Fast prototyping of AI features to validate value and gather data for model improvement.",
    tags: ["Prototyping", "Data", "Evaluation"],
    href: "#",
  },
  {
    name: "Ethics & Governance Review",
    description: "Responsible AI assessment, bias analysis and governance recommendations for safer deployments.",
    tags: ["Governance", "Ethics", "Audit"],
    href: "#",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="relative bg-neutral-50 py-12 md:py-24">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-neutral-900">
            Selected Work
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-neutral-600">
            Selected AI consulting engagements and outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.name} className="group relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#5d4037]/10 to-[#795548]/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative h-full rounded-2xl border border-neutral-200 bg-white p-6 backdrop-blur-sm transition-all duration-300 hover:border-[#5d4037]/50 hover:shadow-xl">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-neutral-900">
                    {project.name}
                  </h3>
                  <a href={project.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name}`}>
                    <ExternalLink className="h-5 w-5 text-neutral-400 transition-colors group-hover:text-[#795548]" />
                  </a>
                </div>

                <p className="mb-6 leading-relaxed text-neutral-600">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#5d4037]/20 bg-[#5d4037]/10 px-3 py-1 text-xs text-[#5d4037]"
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
