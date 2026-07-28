import type { Metadata } from "next";
import "./globals.css";
import { BackgroundCanvas } from "@/components/background-canvas";
import { LazyChatWidget } from "@/components/chatbot/lazy-chat-widget";
import { RevealObserver } from "@/components/reveal-observer";

export const metadata: Metadata = {
  title: "Christopher Geyer | Senior Full-Stack AI Engineer",
  description:
    "Christopher Geyer is a Senior Full-Stack AI Engineer in Noble, Oklahoma, specializing in production software, applied AI, cloud infrastructure, and reliable platform engineering.",
  openGraph: {
    title: "Christopher Geyer | Senior Full-Stack AI Engineer",
    description:
      "Senior Full-Stack AI Engineer building production-ready applications, AI workflows, secure backend systems, and cloud platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
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
        <LazyChatWidget />
      </body>
    </html>
  );
}
