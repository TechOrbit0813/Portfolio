import type { Metadata } from "next";
import "./globals.css";
import { BackgroundCanvas } from "@/components/background-canvas";
// import { LazyChatWidget } from "@/components/chatbot/lazy-chat-widget";
import { RevealObserver } from "@/components/reveal-observer";

export const metadata: Metadata = {
  title: "Denver Greene | AI Software Engineer",
  description:
    "Denver Greene is a AI Software Engineer in Savannah MO, specializing in production software, applied AI, cloud infrastructure, and reliable platform engineering.",
  openGraph: {
    title: "Denver Greene | AI Software Engineer",
    description:
      "AI Software Engineer building production-ready applications, AI workflows, secure backend systems, and cloud platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-950 text-slate-200 antialiased">
        <span
          id="page-top-sentinel"
          aria-hidden="true"
          className="absolute left-0 top-0 h-px w-px"
        />
        <BackgroundCanvas />
        <RevealObserver />
        {children}
        {/* <LazyChatWidget /> */}
      </body>
    </html>
  );
}
