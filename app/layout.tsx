import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "providers/ThemeProvider";
import { Space_Grotesk } from "next/font/google";
import Container from "components/Container";
import { Analytics } from "@vercel/analytics/react";

const inter = Space_Grotesk({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Seungwoo Kim",
  description: "Seungwoo's blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-window bg-white dark:bg-black ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Container>{children}</Container>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
