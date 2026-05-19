import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Shell First",
    description: "Digital platform for Shell's renewable energy initiative",
    tags: ["Web", "Backend", "Integration"],
    href: "#",
  },
  {
    name: "PRIO Transição Energética",
    description: "Energy transition dashboard and analytics platform",
    tags: ["Data Viz", "Analytics", "API"],
    href: "#",
  },
  {
    name: "Synere",
    description: "Enterprise collaboration and workflow platform",
    tags: ["SaaS", "Real-time", "Mobile"],
    href: "#",
  },
  {
    name: "Muvv",
    description: "Modern mobility and transportation solution",
    tags: ["Mobile", "IoT", "AI"],
    href: "#",
  },
  {
    name: "Inovocorte",
    description: "Manufacturing optimization and automation system",
    tags: ["Automation", "AI", "Backend"],
    href: "#",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="relative bg-neutral-50 py-24">
      <div className="mx-auto max-w-[1440px] px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-neutral-900">
            Selected Work
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-neutral-600">
            Projects delivered in partnership with Hypnotic and other leading
            organizations.
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
                  <a href={project.href} aria-label={`View ${project.name}`}>
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
