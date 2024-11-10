import "./globals.css";
import { ThemeProvider } from "providers/ThemeProvider";
import Container from "components/Container";
import { Analytics } from "@vercel/analytics/react";
import ReadingProgressBar from "components/ReadingProgressBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-black">
        <ThemeProvider>
          <ReadingProgressBar />
          <Container>{children}</Container>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
