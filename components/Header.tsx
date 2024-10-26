"use client";

import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-950">
      <nav className="flex items-center justify-between h-16">
        <Link href="/">Seungwoo Kim</Link>

        <div className="flex items-center gap-6">
          <Link href="/about">about</Link>
          {/* <Link href="/projects">projects</Link> */}
          <DarkModeToggle />
        </div>
      </nav>
    </header>
  );
}
