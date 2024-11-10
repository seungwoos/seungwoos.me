"use client";

import { ThemeProvider as MaterialTailwindThemeProvider } from "@material-tailwind/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <MaterialTailwindThemeProvider>{children}</MaterialTailwindThemeProvider>
    </NextThemesProvider>
  );
}
