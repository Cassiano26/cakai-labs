"use client";

import { useState } from "react";
import AIChatBox from "@/components/AIChatBox";

export default function AIDemoSection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#5d4037]/5 via-transparent to-[#795548]/5 px-8 py-24" id="ai-demo">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        {/* Badge */}
        <span className="flex items-center gap-1.5 rounded-full border border-gray-300 bg-white px-3 py-1 text-xs font-medium text-gray-600">
          <span className="text-[#4a3428]">✦</span> AI-Powered
        </span>

        {/* Heading */}
        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
          AI Project Brief Assistant
        </h2>

        <p className="text-base leading-relaxed text-gray-500">
          Describe your project idea and get an instant estimate and
          consultation roadmap.
        </p>

        {/* Chat box */}
        <AIChatBox />
      </div>
    </section>
  );
}
