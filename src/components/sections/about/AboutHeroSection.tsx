import { ArrowRight } from "lucide-react";


export default function AboutHeroSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d4037]/10 rounded-full border border-[#5d4037]/20 mb-6">
            <span className="text-sm text-[#5d4037]">About Cakai Labs</span>
          </div>

          <h1 className="text-6xl font-bold mb-6 text-neutral-900">
            A technical partner for companies building with software and AI.
          </h1>

          <p className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Cakai Labs is a Brazilian software engineering company combining human expertise, AI-assisted development and clear technical execution to help teams build reliable digital systems.
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <button className="px-8 py-4 bg-gradient-to-r from-[#5d4037] to-[#795548] text-white rounded-lg hover:shadow-2xl hover:shadow-[#5d4037]/30 transition-all font-medium flex items-center gap-2">
              Start a project
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 bg-white text-neutral-900 rounded-lg hover:bg-neutral-50 transition-all font-medium border border-neutral-200">
              Contact us
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
