import { kanit } from "@/lib/fonts";

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={`${kanit.className} bg-[#0C0C0C]`} style={{ overflowX: "clip" }}>
      {children}
    </main>
  );
}
