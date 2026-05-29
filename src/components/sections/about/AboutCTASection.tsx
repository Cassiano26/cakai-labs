import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

export default function AboutCTASection() {
  return (
    <section className="py-12 md:py-24 bg-neutral-50">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-3xl p-12 border border-neutral-200 overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#5d4037] to-[#795548] rounded-full blur-3xl opacity-10" />

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 text-neutral-900">
                Need a technical partner to build your next layer?
              </h2>

              <p className="text-xl text-neutral-600 mb-10">
                Whether you need software, automation, AI integration or support
                for an existing product, Cakai Labs can help you structure and
                deliver the right solution.
              </p>

              <div className="flex items-center justify-center gap-4">
                <Link href="/contact#brief" className="px-8 py-4 bg-gradient-to-r from-[#5d4037] to-[#795548] text-white rounded-lg hover:shadow-2xl hover:shadow-[#5d4037]/30 transition-all font-medium flex items-center gap-2">
                  Start a project
                  <ArrowRight className="w-5 h-5" />
                </Link>

                {/* Contact us button hidden until emails are ready */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
