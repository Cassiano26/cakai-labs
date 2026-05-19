import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full bg-gradient-to-b from-neutral-50 to-white px-8 py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl">
          Software, automation and AI — built in layers —
        </h1>

        <p className="max-w-xl text-base leading-relaxed text-gray-600">
          Cakai Labs helps companies build web, mobile and backend systems,
          automate workflows and integrate AI-powered features into real
          products.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#contact"
            className="flex items-center gap-2 rounded-md bg-[#4a3428] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#3a2a20]"
          >
            Start a project <span aria-hidden="true">→</span>
          </Link>

          <Link
            href="#work"
            className="rounded-md border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-900 transition-colors hover:bg-gray-50"
          >
            View our work
          </Link>
        </div>
      </div>
    </section>
  );
}
