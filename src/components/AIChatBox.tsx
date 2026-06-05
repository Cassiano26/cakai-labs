"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";

const QUICK_REPLIES = [
  "I need an AI strategy",
  "I want an AI assistant",
  "I need MLOps & deployment help",
];

const CHAT_STORAGE_KEY = "cakai-chat-messages";

type StoredMessage = {
  id: string;
  role: "user" | "assistant";
  parts: Array<{ type: string; text?: string }>;
};

// Save messages to localStorage
function saveMessages(messages: StoredMessage[]) {
  try {
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(messages));
  } catch { /* ignore quota errors */ }
}

// Load messages from localStorage
function loadMessages(): StoredMessage[] {
  try {
    const stored = localStorage.getItem(CHAT_STORAGE_KEY);
    if (stored) return JSON.parse(stored) as StoredMessage[];
  } catch { /* ignore parse errors */ }
  return [];
}

// Extract text content from a UIMessage's parts array
function getMessageText(msg: { parts?: Array<{ type: string; text?: string }>; content?: string }): string {
  if (msg.parts) {
    return msg.parts
      .filter((p) => p.type === "text")
      .map((p) => p.text ?? "")
      .join("");
  }
  return msg.content ?? "";
}

// Parses the [CTA:START_PROJECT:{...}] marker out of assistant messages.
function parseCTA(text: string): {
  cleanText: string;
  ctaData: Record<string, string> | null;
} {
  const match = text.match(/\[CTA:START_PROJECT:(\{[^}]+\})\]/);
  if (!match) return { cleanText: text, ctaData: null };

  try {
    const ctaData = JSON.parse(match[1]) as Record<string, string>;
    const cleanText = text.replace(match[0], "").trim();
    return { cleanText, ctaData };
  } catch {
    return { cleanText: text, ctaData: null };
  }
}

const emptySubscribe = () => () => {};

export default function AIChatBox() {
  const router = useRouter();
  const [input, setInput] = useState("");
  const hydrated = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const { messages, sendMessage, status, setMessages } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    messages: (typeof window !== "undefined" ? loadMessages() : undefined) as any,
  });

  const isLoading = status === "submitted" || status === "streaming";

  // Save messages to localStorage whenever they change
  useEffect(() => {
    if (messages.length > 0) {
      const toStore: StoredMessage[] = messages.map((m) => ({
        id: m.id,
        role: m.role as "user" | "assistant",
        parts: m.parts
          ? m.parts.filter((p) => p.type === "text").map((p) => ({ type: "text", text: (p as { type: string; text?: string }).text }))
          : [],
      }));
      saveMessages(toStore);
    }
  }, [messages]);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // Scroll only inside the chat container, not the page
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  }

  function sendQuickReply(text: string) {
    sendMessage({ text });
  }

  function clearChat() {
    setMessages([]);
    localStorage.removeItem(CHAT_STORAGE_KEY);
  }

  function handleStartProject(ctaData: Record<string, string>) {
    // Save to localStorage so contact form can read it even without URL params
    try {
      localStorage.setItem("cakai-project-brief", JSON.stringify(ctaData));
    } catch { /* ignore */ }

    const params = new URLSearchParams({
      services: ctaData.services ?? "",
      timeline: ctaData.timeline ?? "",
      budget: ctaData.budget ?? "",
      message: ctaData.message ?? "",
    });
    router.push(`/contact?${params.toString()}#brief`);
  }

  // Show a welcome message if no messages yet
  const displayMessages = messages.length > 0
    ? messages
    : [{ id: "welcome", role: "assistant" as const, parts: [{ type: "text" as const, text: "Hi! I'm here to help scope your project and give you a budget estimate. What are you looking to build?" }] }];

  if (!hydrated) return null;

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
              Project Brief Assistant
            </p>
            <p className="text-xs text-gray-400">Powered by Gemini AI</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 text-xs text-gray-500">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            Online
          </span>
          {messages.length > 0 && (
            <button
              onClick={clearChat}
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-gray-200 text-gray-400 transition-colors hover:border-[#4a3428] hover:text-[#4a3428]"
              title="New conversation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Messages area */}
      <div ref={chatContainerRef} className="flex h-96 flex-col gap-3 overflow-y-auto px-5 py-4">
        {displayMessages.map((msg) => {
          const text = getMessageText(msg);

          if (msg.role === "user") {
            return (
              <div key={msg.id} className="flex justify-end">
                <div className="max-w-sm rounded-2xl bg-[#4a3428] px-4 py-2.5 text-sm leading-relaxed text-white">
                  {text}
                </div>
              </div>
            );
          }

          const { cleanText, ctaData } = parseCTA(text);
          return (
            <div key={msg.id} className="flex flex-col gap-2">
              <div className="flex justify-start">
                <div className="max-w-lg rounded-2xl bg-gray-100 px-4 py-2.5 text-sm leading-relaxed text-gray-800 whitespace-pre-wrap">
                  {cleanText}
                </div>
              </div>
              {ctaData && (
                <div className="flex justify-start pl-1">
                  <button
                    onClick={() => handleStartProject(ctaData)}
                    className="flex items-center gap-2 rounded-xl bg-linear-to-r from-[#5d4037] to-[#795548] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:shadow-md hover:shadow-[#5d4037]/30"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                    Start this project
                  </button>
                </div>
              )}
            </div>
          );
        })}

        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-center gap-1 rounded-2xl bg-gray-100 px-4 py-3">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400 [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-gray-400" />
            </div>
          </div>
        )}
      </div>

      {/* Input area */}
      <div className="border-t border-gray-100 px-5 py-4">
        <form onSubmit={handleSubmit} className="flex items-center gap-2">
            <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your AI problem or goal..."
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

        {/* Quick replies — only show at the start */}
        {messages.length === 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {QUICK_REPLIES.map((reply) => (
              <button
                key={reply}
                onClick={() => sendQuickReply(reply)}
                disabled={isLoading}
                className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs text-gray-600 transition-colors hover:border-[#4a3428] hover:text-[#4a3428] disabled:opacity-40"
              >
                {reply}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
