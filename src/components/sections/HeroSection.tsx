import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative pt-12 md:pt-24 pb-20 overflow-hidden bg-linear-to-b from-neutral-50 to-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(93,64,55,0.05),transparent_50%)]" />

      <div className="max-w-360 mx-auto px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold mb-6">
            From idea to impact, with AI strategy and consulting.
          </h1>

          <p className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Cakai Labs partners with companies and product teams to define AI strategy, design responsible models, and deliver practical AI solutions that drive measurable business value.
          </p>

          <div className="flex flex-col md:flex-row md:items-center justify-center gap-4">
            <Link href="/contact#brief" className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-[#5d4037] to-[#795548] text-white rounded-lg hover:shadow-2xl hover:shadow-[#5d4037]/30 transition-all font-medium flex items-center justify-center gap-2">
              Start an AI engagement
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="#work" className="w-full md:w-auto px-8 py-4 bg-white text-neutral-900 rounded-lg hover:bg-neutral-50 transition-all font-medium border border-neutral-200 text-center">
              View case studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
