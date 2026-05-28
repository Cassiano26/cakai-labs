import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cakai Labs",
  description: "Cakai Labs",
  icons: { icon: "/iconLogo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.google.com/recaptcha/enterprise.js?render=6LeDLwEtAAAAAIbyl__32jIjlGoeaPjSvqPJ7udV"
          strategy="afterInteractive"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
