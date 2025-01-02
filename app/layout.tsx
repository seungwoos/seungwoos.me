import "./globals.css";
import { ThemeProvider } from "components/ThemeProvider";
import Container from "components/Container";
import { Analytics } from "@vercel/analytics/react";
import ReadingProgressBar from "components/ReadingProgressBar";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
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
