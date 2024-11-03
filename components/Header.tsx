"use client";
import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <nav className="flex items-center justify-between h-16 max-w-2xl mx-auto">
      <Link href="/">@seungwoos</Link>
      <ul className="flex items-center space-x-6">
        <li>
          <Link href="/about">about</Link>
        </li>
        <li>
          <DarkModeToggle />
        </li>
      </ul>
    </nav>
  );
}
