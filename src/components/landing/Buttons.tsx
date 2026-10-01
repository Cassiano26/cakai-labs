const GRADIENT_CLASS =
  "inline-block whitespace-nowrap rounded-full px-8 py-3 text-xs font-medium uppercase tracking-widest text-white sm:px-10 sm:py-3.5 sm:text-sm md:px-12 md:py-4 md:text-base";

const GRADIENT_STYLE: React.CSSProperties = {
  background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
  boxShadow: "0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset",
  outline: "2px solid white",
  outlineOffset: "-3px",
};

export function ContactButton({ label, href = "/contact" }: { label: string; href?: string }) {
  return (
    <a href={href} className={GRADIENT_CLASS} style={GRADIENT_STYLE}>
      {label}
    </a>
  );
}

export function SubmitButton({ label, disabled }: { label: string; disabled?: boolean }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`${GRADIENT_CLASS} w-full transition-opacity disabled:cursor-not-allowed disabled:opacity-60`}
      style={GRADIENT_STYLE}
    >
      {label}
    </button>
  );
}

export function LiveProjectButton({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block whitespace-nowrap rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 sm:px-10 sm:py-3.5 sm:text-base"
    >
      {label}
    </a>
  );
}

export function AppStoreButton({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-[#D7E2EA] bg-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#0C0C0C] transition-opacity hover:opacity-85 sm:px-10 sm:py-3.5 sm:text-base"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor">
        <path d="M16.37 12.62c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.77-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.52 1.25-2.58-.03-.01-2.4-.92-2.42-3.66l.04-.03zM14.1 5.86c.63-.77 1.06-1.83.94-2.9-.91.04-2.02.61-2.67 1.37-.58.67-1.1 1.76-.96 2.8 1.02.08 2.06-.52 2.69-1.27z" />
      </svg>
      {label}
    </a>
  );
}
