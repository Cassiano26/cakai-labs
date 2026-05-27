import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-b from-neutral-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(93,64,55,0.05),transparent_50%)]" />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700 bg-clip-text text-transparent">
            From idea to product, with software, automation and AI.
          </h1>

          <p className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Cakai Labs works with companies, agencies and product teams that need a technical partner to build platforms, apps, APIs, automations and AI-powered features.
          </p>

          <div className="flex items-center justify-center gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-[#5d4037] to-[#795548] text-white rounded-lg hover:shadow-2xl hover:shadow-[#5d4037]/30 transition-all font-medium flex items-center gap-2">
              Start a project
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white text-neutral-900 rounded-lg hover:bg-neutral-50 transition-all font-medium border border-neutral-200">
              View our work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
