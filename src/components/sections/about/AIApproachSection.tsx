import { Brain, Eye, Zap } from "lucide-react";

const cards = [
  {
    icon: Brain,
    title: "AI in the process",
    description:
      "We use AI tools to support coding, documentation, debugging, planning and implementation.",
  },
  {
    icon: Eye,
    title: "Human supervision",
    description:
      "Every solution is reviewed, structured and validated by professionals with technical responsibility.",
  },
  {
    icon: Zap,
    title: "Better delivery",
    description:
      "The goal is not automation for its own sake. The goal is faster, clearer and more reliable technical execution.",
  },
];

export default function AIApproachSection() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-block px-3 py-1 bg-white rounded-full text-sm text-neutral-600 mb-4 border border-neutral-200">
            How we use AI
          </div>

          <h2 className="text-4xl font-bold mb-6 text-neutral-900">
            AI-assisted development, supervised by professionals.
          </h2>

          <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
            We use AI as part of our engineering process to accelerate research,
            programming, documentation, testing, prototyping and analysis. But
            every decision, implementation and delivery is guided by technical
            professionals.
          </p>

          <p className="text-lg text-neutral-600 leading-relaxed">
            Our approach combines human judgment with AI-assisted execution.
            This allows us to move faster without losing quality, context,
            maintainability or responsibility.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white rounded-2xl p-8 border border-neutral-200"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#5d4037] to-[#795548] flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-900">
                  {card.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
