import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BackgroundCanvas } from "@/components/background-canvas";

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
    <html lang="en" suppressHydrationWarning>
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
      <body className="bg-[#f6f8fc] text-slate-700 antialiased dark:bg-slate-950 dark:text-slate-200">
        <ThemeProvider>
          <BackgroundCanvas />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
