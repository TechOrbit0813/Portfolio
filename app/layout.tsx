import type { Metadata } from "next";
import "./globals.css";
import { BackgroundCanvas } from "@/components/background-canvas";
import { ChatWidget } from "@/components/chatbot/chat-widget";

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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-950 text-slate-200 antialiased">
        <BackgroundCanvas />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
