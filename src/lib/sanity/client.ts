import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = "2024-01-01";

export const client = createClient({
  projectId: projectId ?? "placeholder",
  dataset,
  apiVersion,
  useCdn: false,
});

export function getWriteClient() {
  if (!projectId) throw new Error("NEXT_PUBLIC_SANITY_PROJECT_ID is not set.");
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: process.env.SANITY_API_TOKEN || process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
  });
}
