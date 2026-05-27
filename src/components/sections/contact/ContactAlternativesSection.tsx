import { Mail } from "lucide-react";

const contacts = [
  {
    title: "General contact",
    desc: "For questions, introductions or general requests.",
    email: "hello@cakai.dev",
  },
  {
    title: "AI & automation",
    desc: "For AI integrations, workflow automation and internal tools.",
    email: "ai@cakai.dev",
  },
  {
    title: "Partnerships",
    desc: "For agencies, consultancies and product teams looking for a technical partner.",
    email: "partners@cakai.dev",
  },
];

export default function ContactAlternativesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900">
            Prefer a simpler contact?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contacts.map((contact) => (
            <div
              key={contact.title}
              className="bg-neutral-50 rounded-2xl border border-neutral-200 p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#5d4037] to-[#795548] flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-semibold text-neutral-900 mb-1">
                {contact.title}
              </h3>
              <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                {contact.desc}
              </p>
              <a
                href={`mailto:${contact.email}`}
                className="text-sm font-medium text-[#5d4037] hover:underline"
              >
                {contact.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
