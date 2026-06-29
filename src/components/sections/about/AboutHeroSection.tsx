import { ArrowRight } from "lucide-react";
import Link from "next/link";


export default function AboutHeroSection() {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5d4037]/10 rounded-full border border-[#5d4037]/20 mb-6">
            <span className="text-sm text-[#5d4037]">About Cakai Labs</span>
          </div>

          <h1 className="text-6xl font-bold mb-6 text-neutral-900">
            A strategic partner for organizations adopting AI.
          </h1>

          <p className="text-xl text-neutral-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Cakai Labs is an AI consulting firm focused on strategy, responsible model design, and operationalizing AI to solve real business problems.
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <Link href="/contact#brief" className="px-8 py-4 bg-gradient-to-r from-[#5d4037] to-[#795548] text-white rounded-lg hover:shadow-2xl hover:shadow-[#5d4037]/30 transition-all font-medium flex items-center gap-2">
              Start an AI engagement
              <ArrowRight className="w-5 h-5" />
            </Link>
            {/* Contact us button hidden until emails are ready */}
          </div>

        </div>
      </div>
    </section>
  );
}
