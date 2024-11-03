import "./globals.css";
import { ThemeProvider } from "providers/ThemeProvider";
import { Space_Grotesk } from "next/font/google";
import Container from "components/Container";
import { Analytics } from "@vercel/analytics/react";
import ReadingProgressBar from "components/ReadingProgressBar";

const inter = Space_Grotesk({ subsets: ["latin"], display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-white dark:bg-black text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ReadingProgressBar />
          <Container>{children}</Container>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
