import { groq } from "@ai-sdk/groq";
import { convertToModelMessages, stepCountIs, streamText, tool, UIMessage } from "ai";
import { z } from "zod";
import { getSystemPrompt } from "@/lib/ai/system-prompt";
import { SERVICE_KEYS, STAGE_KEYS, TIMELINE_KEYS } from "@/lib/brief";

export const maxDuration = 30;

const tools = {
  prepareBrief: tool({
    description:
      "Pre-fill the contact form with the brief built from the conversation. The visitor then sees a button that opens the form.",
    inputSchema: z.object({
      services: z.array(z.enum(SERVICE_KEYS)).min(1),
      projectStage: z.enum(STAGE_KEYS).optional(),
      timeline: z.enum(TIMELINE_KEYS).optional(),
      message: z.string().describe("First-person project brief for the form's message field"),
    }),
    // Nothing to do server-side; executing keeps the tool call resolved so the chat can continue after it
    execute: async () => ({ shown: true }),
  }),
};

export type ChatTools = typeof tools;

export async function POST(request: Request) {
  const { messages, lang }: { messages: UIMessage[]; lang?: string } = await request.json();

  const result = streamText({
    model: groq("openai/gpt-oss-120b"),
    system: getSystemPrompt(lang === "pt" ? "pt" : "en"),
    messages: await convertToModelMessages(messages),
    tools,
    // Lets the model retry a rejected tool call and add its closing line after the brief
    stopWhen: stepCountIs(3),
  });

  return result.toUIMessageStreamResponse();
}
