import { Sparkles } from "lucide-react";
import AIChatBox from "@/components/AIChatBox";

export default function AIDemoSection() {
  return (
    <section id="ai-demo" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5d4037]/5 via-transparent to-[#795548]/5" />

      <div className="max-w-[1440px] mx-auto px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#5d4037]/10 to-[#795548]/10 rounded-full border border-[#5d4037]/20 mb-6">
            <Sparkles className="w-4 h-4 text-[#795548]" />
            <span className="text-sm text-[#5d4037]">AI-Powered</span>
          </div>

          <h2 className="text-4xl font-bold mb-4 text-neutral-900">
            AI Project Brief Assistant
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Describe your project idea and get an instant estimate and
            consultation roadmap.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <AIChatBox />
        </div>
      </div>
    </section>
  );
}
