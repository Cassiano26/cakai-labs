"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type InferUITools, type UIDataTypes, type UIMessage } from "ai";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import { ContactButton } from "./Buttons";
import type { ChatTools } from "@/app/api/chat/route";
import { briefToContactUrl, SERVICE_KEYS, STAGE_KEYS, TIMELINE_KEYS, type BriefPrefill } from "@/lib/brief";
import { useLanguage } from "@/lib/i18n/LanguageContext";

type ChatMessage = UIMessage<unknown, UIDataTypes, InferUITools<ChatTools>>;

const CHAT_STORAGE_KEY = "cakai-chat-v2";

function loadMessages(): ChatMessage[] {
  try {
    const stored = localStorage.getItem(CHAT_STORAGE_KEY);
    if (stored) return JSON.parse(stored) as ChatMessage[];
  } catch { /* ignore parse errors */ }
  return [];
}

// Keep only what the UI renders: text and finished briefs
function saveMessages(messages: ChatMessage[]) {
  const toStore = messages.map((m) => ({
    ...m,
    parts: m.parts.filter(
      (p) => p.type === "text" || (p.type === "tool-prepareBrief" && p.state === "output-available")
    ),
  }));
  try {
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(toStore));
  } catch { /* ignore quota errors */ }
}

// The model is told to answer in plain text, but strip stray bold markers just in case
function cleanText(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, "$1");
}

// The mascot's whole head (headphones included), cut out from mascot-headphones-wave.png
function Avatar({ size = "h-9 w-9" }: { size?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src="/mascot-head.png" alt="" className={`${size} shrink-0 object-contain`} />
  );
}

function BriefCard({ brief }: { brief: BriefPrefill }) {
  const { t } = useLanguage();
  const pb = t.projectBrief;
  const label = (keys: readonly string[], options: readonly string[], key?: string) =>
    key ? options[keys.indexOf(key)] : undefined;
  const rows = [
    { name: t.aiChat.briefServices, value: brief.services.map((s) => label(SERVICE_KEYS, pb.services, s)).filter(Boolean).join(", ") },
    { name: t.aiChat.briefStage, value: label(STAGE_KEYS, pb.fields.projectStageOptions, brief.projectStage) },
    { name: t.aiChat.briefTimeline, value: label(TIMELINE_KEYS, pb.fields.timelineOptions, brief.timeline) },
  ].filter((r) => r.value);

  return (
    <div className="ml-12 flex max-w-xl flex-col gap-4 rounded-3xl border border-[#D7E2EA]/20 bg-white/[0.03] p-5 sm:p-6">
      <span className="hero-heading-accent text-sm font-bold uppercase tracking-widest">{t.aiChat.briefReady}</span>
      <dl className="flex flex-col gap-2 text-sm">
        {rows.map((r) => (
          <div key={r.name} className="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
            <dt className="shrink-0 text-xs uppercase tracking-widest text-[#D7E2EA]/50 sm:w-24 sm:pt-0.5">{r.name}</dt>
            <dd className="text-[#D7E2EA]">{r.value}</dd>
          </div>
        ))}
      </dl>
      <p className="border-l-2 border-[#B600A8]/60 pl-4 text-sm font-light leading-relaxed text-[#D7E2EA]/80">
        {brief.message}
      </p>
      <div>
        <ContactButton label={t.aiChat.openForm} href={briefToContactUrl(brief)} />
      </div>
    </div>
  );
}

function ChatBox() {
  const { t, lang } = useLanguage();
  const c = t.aiChat;
  const [input, setInput] = useState("");
  const [transport] = useState(() => new DefaultChatTransport<ChatMessage>({ api: "/api/chat" }));
  const [initialMessages] = useState(loadMessages);

  const { messages, sendMessage, status, error, setMessages } = useChat<ChatMessage>({
    transport,
    messages: initialMessages,
  });
  const isLoading = status === "submitted" || status === "streaming";

  useEffect(() => {
    if (messages.length > 0) saveMessages(messages);
  }, [messages]);

  // Follow new messages inside the chat only, never scrolling the page
  const scrollRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, status]);

  function send(text: string) {
    if (!text.trim() || isLoading) return;
    // The model answers in the site's language unless the visitor writes in another one
    sendMessage({ text }, { body: { lang } });
    setInput("");
  }

  function clearChat() {
    setMessages([]);
    localStorage.removeItem(CHAT_STORAGE_KEY);
  }

  return (
    <>
      <div className="flex items-center justify-between gap-4 border-b border-[#D7E2EA]/10 px-5 py-4 sm:px-7">
        <div className="flex items-center gap-3">
          <Avatar size="h-12 w-12" />
          <div className="flex flex-col">
            <span className="font-medium uppercase tracking-wide text-[#D7E2EA]">{c.title}</span>
            <span className="flex items-center gap-1.5 text-xs text-[#D7E2EA]/50">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {c.status}
            </span>
          </div>
        </div>
        {messages.length > 0 && (
          <button
            onClick={clearChat}
            className="rounded-full border border-[#D7E2EA]/30 px-3 py-1 text-xs uppercase tracking-wider text-[#D7E2EA]/80 transition-colors hover:border-[#D7E2EA]/70"
          >
            {c.newChat}
          </button>
        )}
      </div>

      <div ref={scrollRef} className="flex h-[420px] flex-col gap-4 overflow-y-auto px-5 py-6 sm:h-[480px] sm:px-7">
        <div className="flex items-start gap-3">
          <Avatar />
          <p className="max-w-xl rounded-3xl rounded-tl-lg bg-white/[0.06] px-5 py-3 font-light leading-relaxed text-[#D7E2EA]">
            {c.welcome}
          </p>
        </div>

        {messages.map((msg) =>
          msg.role === "user" ? (
            <div key={msg.id} className="flex justify-end">
              <p
                className="max-w-md whitespace-pre-wrap rounded-3xl rounded-tr-lg px-5 py-3 leading-relaxed text-white"
                style={{ background: "linear-gradient(123deg, #B600A8 0%, #7621B0 70%, #8A3A9E 100%)" }}
              >
                {msg.parts.map((p) => (p.type === "text" ? p.text : "")).join("")}
              </p>
            </div>
          ) : (
            <div key={msg.id} className="flex flex-col gap-3">
              {msg.parts.map((part, i) => {
                if (part.type === "text" && part.text.trim()) {
                  return (
                    <div key={i} className="flex items-start gap-3">
                      <Avatar />
                      <p className="max-w-xl whitespace-pre-wrap rounded-3xl rounded-tl-lg bg-white/[0.06] px-5 py-3 font-light leading-relaxed text-[#D7E2EA]">
                        {cleanText(part.text)}
                      </p>
                    </div>
                  );
                }
                if (part.type === "tool-prepareBrief" && part.state === "output-available") {
                  return <BriefCard key={part.toolCallId} brief={part.input} />;
                }
                return null;
              })}
            </div>
          )
        )}

        {status === "submitted" && (
          <div className="flex items-start gap-3">
            <Avatar />
            <div className="flex items-center gap-1 rounded-3xl rounded-tl-lg bg-white/[0.06] px-5 py-4">
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#D7E2EA]/60 [animation-delay:-0.3s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#D7E2EA]/60 [animation-delay:-0.15s]" />
              <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#D7E2EA]/60" />
            </div>
          </div>
        )}

        {error && (
          <p role="alert" className="self-center rounded-full border border-[#BE4C00]/50 bg-[#BE4C00]/10 px-4 py-2 text-sm text-[#FFB98A]">
            {c.error}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 px-4 pb-4 sm:px-6 sm:pb-6">
        {messages.length === 0 && (
          <div className="flex flex-wrap gap-2">
            {c.quickReplies.map((reply) => (
              <button
                key={reply}
                onClick={() => send(reply)}
                disabled={isLoading}
                className="rounded-full border border-[#D7E2EA]/30 px-3 py-1.5 text-left text-xs text-[#D7E2EA]/80 transition-colors hover:border-[#D7E2EA]/70 disabled:opacity-40 sm:text-sm"
              >
                {reply}
              </button>
            ))}
          </div>
        )}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
          className="flex items-center gap-2 rounded-full border border-[#D7E2EA]/20 bg-white/[0.03] py-1.5 pl-5 pr-1.5 transition-colors focus-within:border-[#B600A8]/70"
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={c.placeholder}
            aria-label={c.placeholder}
            className="min-w-0 flex-1 bg-transparent py-2 text-[#D7E2EA] placeholder:text-[#D7E2EA]/35 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            aria-label={c.send}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition-opacity disabled:opacity-40 sm:h-11 sm:w-11"
            style={{ background: "linear-gradient(123deg, #B600A8 0%, #7621B0 60%, #BE4C00 100%)" }}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
              <path d="M12 19V5m0 0-6 6m6-6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}

const emptySubscribe = () => () => {};

export default function ChatSection() {
  const { t } = useLanguage();
  const l = t.landing;
  // The chat restores its history from localStorage, so it only mounts on the client
  const hydrated = useSyncExternalStore(emptySubscribe, () => true, () => false);

  return (
    <section
      id="chat"
      className="rounded-t-[40px] bg-white px-5 py-20 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <div className="mx-auto mb-12 flex max-w-5xl flex-col items-center gap-6 text-center sm:mb-16 md:mb-20">
        <FadeIn y={40}>
          <h2 className="font-black uppercase leading-none tracking-tight" style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}>
            {l.chatHeading}
          </h2>
        </FadeIn>
        <FadeIn delay={0.15} y={20}>
          <p
            className="mx-auto max-w-[620px] font-light leading-relaxed opacity-60"
            style={{ fontSize: "clamp(1rem, 1.6vw, 1.25rem)" }}
          >
            {l.chatSubheading}
          </p>
        </FadeIn>
      </div>

      <div className="relative mx-auto max-w-4xl">
        {/* Happy mascot to the right of the chat, its feet on the top edge of the Projects section, which
            overlaps this one by its negative top margin: bottom offset = section bottom padding − overlap */}
        <div className="pointer-events-none absolute -bottom-[72px] left-full z-20 ml-4 hidden aspect-[616/1200] h-[440px] min-[1400px]:block 2xl:ml-10 2xl:h-[520px]">
          <FadeIn delay={0.4} x={60} y={0} duration={0.9} className="h-full">
            <Magnet padding={120} strength={4} className="h-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/mascot-headphones-wave.png" alt="" className="h-full w-full object-contain object-bottom" />
            </Magnet>
          </FadeIn>
        </div>

        <FadeIn
          delay={0.2}
          y={40}
          className="flex min-h-[560px] flex-col overflow-hidden rounded-[32px] bg-[#0C0C0C] sm:min-h-[620px] sm:rounded-[44px]"
        >
          {hydrated && <ChatBox />}
        </FadeIn>

        {/* Below 1400px there's no room beside the chat, so the mascot stands under it instead, feet on the
            Projects section's top edge: negative bottom margin = section bottom padding − Projects overlap */}
        <div className="pointer-events-none relative z-20 mx-auto -mb-10 mt-8 aspect-[616/1200] h-[240px] sm:-mb-12 sm:h-[300px] md:-mb-[72px] min-[1400px]:hidden">
          <FadeIn delay={0.3} y={40} duration={0.9} className="h-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/mascot-headphones-wave.png" alt="" className="h-full w-full object-contain object-bottom" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
