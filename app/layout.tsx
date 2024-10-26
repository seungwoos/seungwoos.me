import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "providers/ThemeProvider";
import Analytics from "components/Analytics";
import { Inter } from "next/font/google";
import Container from "components/Container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Seungwoo Kim",
  description: "Seungwoo's personal blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-window bg-white dark:bg-slate-950 ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Container>{children}</Container>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
