const layers = [
  {
    num: "01",
    title: "Understand",
    desc: "Business goals, users and technical context.",
  },
  {
    num: "02",
    title: "Design",
    desc: "Architecture, flows, integrations and product logic.",
  },
  {
    num: "03",
    title: "Build",
    desc: "Web, mobile, backend, APIs and internal systems.",
  },
  {
    num: "04",
    title: "Automate",
    desc: "Workflows, data movement, notifications and operational processes.",
  },
  {
    num: "05",
    title: "Integrate AI",
    desc: "LLMs, RAG, assistants, classification, summarization and intelligent features.",
  },
  {
    num: "06",
    title: "Support",
    desc: "Testing, documentation, deployment and continuous improvement.",
  },
];

export default function CakaiMeaningSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="inline-block px-3 py-1 bg-neutral-100 rounded-full text-sm text-neutral-600 mb-4">
              The idea behind the name
            </div>

            <h2 className="text-4xl font-bold mb-6 text-neutral-900">
              Cakai means Cake + AI.
            </h2>

            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              The name Cakai Labs comes from a simple idea: strong digital
              products are not built in one block. They are built in layers.
              Like a cake, each layer needs structure, balance and purpose.
            </p>

            <p className="text-lg text-neutral-600 leading-relaxed">
              At Cakai Labs, those layers can include software engineering,
              interface design, backend systems, APIs, data pipelines,
              automation workflows and AI capabilities. The result is not just
              a feature — it is a complete technical solution designed to work
              in the real world.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#5d4037]/5 to-white rounded-2xl p-8 border border-neutral-200">
            <h3 className="text-2xl font-semibold mb-6 text-neutral-900">
              Built in layers
            </h3>

            <div className="space-y-4">
              {layers.map((layer) => (
                <div key={layer.num} className="flex gap-4">
                  <div className="text-lg font-bold text-[#5d4037] flex-shrink-0">
                    Layer {layer.num}
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900 mb-1">
                      {layer.title}
                    </div>
                    <div className="text-sm text-neutral-600">{layer.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
