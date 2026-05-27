import { ArrowUp } from "lucide-react";

export default function ContactCTASection() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-white rounded-3xl p-12 border border-neutral-200 overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#5d4037] to-[#795548] rounded-full blur-3xl opacity-10" />

            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 text-neutral-900">
                Ready to turn the idea into a working system?
              </h2>

              <p className="text-xl text-neutral-600 mb-10">
                Send a short brief and we&apos;ll help you understand the best
                next step.
              </p>

              <a
                href="#brief"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#5d4037] to-[#795548] text-white rounded-lg hover:shadow-2xl hover:shadow-[#5d4037]/30 transition-all font-medium"
              >
                Start your brief
                <ArrowUp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
