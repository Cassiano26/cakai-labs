"use client";

const prompts = [
  {
    title: "I need an AI strategy",
    desc: "Define where AI adds value and build a phased roadmap.",
    message: "I need an AI strategy. I want to identify high-impact use cases, prioritize them and define a phased roadmap to deliver value with minimal risk.",
  },
  {
    title: "I want an assistant or chatbot",
    desc: "Design conversational flows, safety and prompt strategy.",
    message: "I want an AI assistant. I'm interested in a conversational assistant to help users or employees, and I need help designing prompts, safety, and UX.",
  },
  {
    title: "I want to automate decisions",
    desc: "Use AI to automate repetitive decisions and workflows.",
    message: "I want to automate decisions with AI. There are repetitive decisions in our process that could be improved by models or ML-driven automation.",
  },
  {
    title: "I need MLOps & deployment",
    desc: "Deploy, monitor and maintain models in production.",
    message: "I need MLOps help. I want guidance on deploying models reliably, monitoring performance and setting up retraining pipelines.",
  },
  {
    title: "I need data & labeling",
    desc: "Data collection, labeling and pipelines for model training.",
    message: "I need help with data. I want to prepare datasets, labeling workflows and pipelines to train and evaluate models.",
  },
  {
    title: "I need governance or audits",
    desc: "Bias analysis, risk assessment and governance recommendations.",
    message: "I need an AI governance review. I want a bias check, risk assessment and recommendations for safer deployment.",
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
