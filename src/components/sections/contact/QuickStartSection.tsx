const prompts = [
  {
    title: "I need a web platform",
    desc: "For dashboards, portals, websites, internal systems or SaaS products.",
  },
  {
    title: "I need a mobile app",
    desc: "For iOS, Android or cross-platform app ideas.",
  },
  {
    title: "I want to automate a workflow",
    desc: "For repetitive tasks, approvals, notifications, reports or data movement.",
  },
  {
    title: "I want to add AI features",
    desc: "For assistants, summarization, classification, search, RAG or AI-powered workflows.",
  },
  {
    title: "I need backend or API support",
    desc: "For databases, integrations, authentication, webhooks or business logic.",
  },
  {
    title: "I need technical guidance",
    desc: "For architecture, stack decisions, roadmap, code review or implementation planning.",
  },
];

export default function QuickStartSection() {
  return (
    <section className="py-24 bg-[#faf9f7]">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-block px-3 py-1 bg-white border border-neutral-200 rounded-full text-sm text-neutral-600 mb-4">
            Not sure what to write?
          </div>
          <h2 className="text-4xl font-bold mb-4 text-neutral-900">
            Start with the problem, not the solution.
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            If you are not sure about the scope, just describe what is slow,
            manual, disconnected or missing in your current process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {prompts.map((prompt) => (
            <a
              key={prompt.title}
              href="#brief"
              className="group bg-white rounded-2xl border border-neutral-200 p-6 hover:border-[#5d4037]/30 hover:shadow-md transition-all"
            >
              <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-[#5d4037] transition-colors">
                {prompt.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {prompt.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
