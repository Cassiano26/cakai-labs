"use client";

const prompts = [
  {
    title: "I need a web platform",
    desc: "For dashboards, portals, websites, internal systems or SaaS products.",
    message: "I need a web platform. I'm looking for help building a digital product — it could be a customer-facing website, an internal dashboard, a client portal or a SaaS application. I'd like to discuss the scope, stack and timeline.",
  },
  {
    title: "I need a mobile app",
    desc: "For iOS, Android or cross-platform app ideas.",
    message: "I need a mobile app. I have an idea for an iOS, Android or cross-platform application and I'd like to explore how to bring it to life — from product definition to development and launch.",
  },
  {
    title: "I want to automate a workflow",
    desc: "For repetitive tasks, approvals, notifications, reports or data movement.",
    message: "I want to automate a workflow. There are repetitive or manual processes in my business that I'd like to automate — things like approvals, notifications, data movement, report generation or internal operations. I'd like to explore what's possible.",
  },
  {
    title: "I want to add AI features",
    desc: "For assistants, summarization, classification, search, RAG or AI-powered workflows.",
    message: "I want to add AI features to my product or process. I'm interested in exploring AI capabilities such as assistants, document summarization, classification, semantic search, RAG pipelines or AI-powered automation. I'd like to understand what's feasible and how to integrate it.",
  },
  {
    title: "I need backend or API support",
    desc: "For databases, integrations, authentication, webhooks or business logic.",
    message: "I need backend or API support. I need help with server-side development — this could involve building or improving APIs, connecting third-party services, setting up authentication, managing databases or implementing core business logic.",
  },
  {
    title: "I need technical guidance",
    desc: "For architecture, stack decisions, roadmap, code review or implementation planning.",
    message: "I need technical guidance. I'm looking for an experienced technical partner to help me think through architecture decisions, choose the right stack, review existing code, plan a roadmap or structure an implementation approach before or during development.",
  },
];

export default function QuickStartSection() {
  return (
    <section className="py-12 md:py-24 bg-[#faf9f7]">
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
            <button
              key={prompt.title}
              type="button"
              onClick={() => {
                window.dispatchEvent(new CustomEvent("quickstart-message", { detail: prompt.message }));
                document.getElementById("brief")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group bg-white rounded-2xl border border-neutral-200 p-6 hover:border-[#5d4037]/30 hover:shadow-md transition-all text-left"
            >
              <h3 className="font-semibold text-neutral-900 mb-2 group-hover:text-[#5d4037] transition-colors">
                {prompt.title}
              </h3>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {prompt.desc}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
