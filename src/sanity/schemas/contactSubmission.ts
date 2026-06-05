import { defineField, defineType } from "sanity";

export const contactSubmission = defineType({
  name: "contactSubmission",
  title: "Contact Submission",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: "country",
      title: "Country",
      type: "string",
    }),
    defineField({
      name: "website",
      title: "Website",
      type: "url",
    }),
    defineField({
      name: "services",
      title: "Service Interests",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "AI strategy", value: "AI strategy" },
          { title: "LLM & assistant design", value: "LLM & assistant design" },
          { title: "Custom ML & models", value: "Custom ML & models" },
          { title: "Data & MLOps", value: "Data & MLOps" },
          { title: "AI automation", value: "AI automation" },
          { title: "Technical AI consulting", value: "Technical AI consulting" },
          { title: "Not sure yet", value: "Not sure yet" },
        ],
      },
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
    }),
    defineField({
      name: "projectStage",
      title: "Project Stage",
      type: "string",
      options: {
        list: [
          "Idea",
          "Proof of concept",
          "Pilot",
          "Production",
          "Improvement",
          "Not sure yet",
        ],
      },
    }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "string",
      options: {
        list: ["Urgent", "1–3 months", "3–6 months", "Flexible"],
      },
    }),
    defineField({
      name: "budgetRange",
      title: "Budget Range",
      type: "string",
      options: {
        list: [
          "Not defined yet",
          "Small project",
          "Medium project",
          "Larger project",
          "Prefer to discuss",
        ],
      },
    }),
    defineField({
      name: "aiEstimate",
      title: "AI Estimate",
      type: "string",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      initialValue: "new",
      options: {
        list: [
          { title: "🆕 New", value: "new" },
          { title: "👀 Read", value: "read" },
          { title: "✅ Archived", value: "archived" },
        ],
        layout: "radio",
      },
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      name: "name",
      email: "email",
      company: "company",
      status: "status",
      submittedAt: "submittedAt",
    },
    prepare({ name, email, company, status, submittedAt }) {
      const statusIcon = status === "new" ? "🆕" : status === "read" ? "👀" : "✅";
      const date = submittedAt
        ? new Date(submittedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "";
      return {
        title: `${statusIcon} ${name || email || "Anonymous"}`,
        subtitle: `${company ? `${company} · ` : ""}${date}`,
      };
    },
  },
  orderings: [
    {
      title: "Newest First",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
    {
      title: "Oldest First",
      name: "submittedAtAsc",
      by: [{ field: "submittedAt", direction: "asc" }],
    },
  ],
});
