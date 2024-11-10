"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { IconButton } from "@material-tailwind/react";
import { Moon, Sun } from "./icons";

export default function ThemeToggleButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <IconButton
      variant="text"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-md bg-white dark:bg-black hover:bg-gray-300 dark:hover:bg-gray-600 text-black dark:text-white"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4" />
      ) : (
        <Moon className="w-4 h-4" />
      )}
    </IconButton>
  );
}
