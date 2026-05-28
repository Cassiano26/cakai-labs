import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { contactSubmission } from "./src/sanity/schemas/contactSubmission";
import { structure } from "./src/sanity/structure";

export default defineConfig({
  name: "cakai-labs",
  title: "Cakai Labs",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [
    structureTool({ structure }),
    visionTool(),
  ],
  schema: {
    types: [contactSubmission],
  },
  basePath: "/studio",
});
