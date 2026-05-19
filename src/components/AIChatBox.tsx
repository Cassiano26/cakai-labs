"use client";

import { useState, useRef, useEffect } from "react";

type Message = {
  id: string;
  role: "assistant" | "user";
  content: string;
};

const INITIAL_MESSAGES: Message[] = [
  {
    id: "1",
    role: "assistant",
    content:
      "Hi! I'm here to help you describe your project. What are you looking to build?",
  },
];

const QUICK_REPLIES = [
  "I need a mobile app for my business",
  "We want to add AI features to our platform",
  "Looking for automation consulting",
];

export default function AIChatBox() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length <= 1) return;
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function sendMessage(text: string) {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: text.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // TODO: replace with real AI API call
      // const response = await fetch("/api/chat", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ messages: [...messages, userMessage] }),
      // });
      // const data = await response.json();
      // const reply: Message = { id: Date.now().toString(), role: "assistant", content: data.content };

      // Placeholder response until AI is integrated
      await new Promise((r) => setTimeout(r, 800));
      const reply: Message = {
        id: Date.now().toString(),
        role: "assistant",
        content:
          "Thanks for sharing! I'll help you shape that into a clear project brief. Can you tell me more about your timeline and budget?",
      };

      setMessages((prev) => [...prev, reply]);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <div className="w-full rounded-2xl border border-gray-200 bg-white shadow-sm">
      {/* Chat header */}
      <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4a3428] text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-900">
              Project Brief Chat
            </p>
            <p className="text-xs text-gray-400">Powered by AI</p>
          </div>
        </div>
        <span className="flex items-center gap-1.5 text-xs text-gray-500">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          Online
        </span>
      </div>

      {/* Messages area */}
      <div className="flex h-72 flex-col gap-3 overflow-y-auto px-5 py-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-[#4a3428] text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1 rounded-2xl bg-gray-100 px-4 py-3">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className="border-t border-gray-100 px-5 py-4">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your project..."
            disabled={isLoading}
            className="flex-1 rounded-lg border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:border-[#4a3428] focus:bg-white disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#4a3428] text-white transition-colors hover:bg-[#3a2a20] disabled:opacity-40"
            aria-label="Send message"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </form>

        {/* Quick replies */}
        <div className="mt-3 flex flex-wrap gap-2">
          {QUICK_REPLIES.map((reply) => (
            <button
              key={reply}
              onClick={() => sendMessage(reply)}
              disabled={isLoading}
              className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 transition-colors hover:border-[#4a3428] hover:text-[#4a3428] disabled:opacity-40"
            >
              {reply}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
