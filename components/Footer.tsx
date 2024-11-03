"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between text-sm text-neutral-800 dark:text-neutral-100">
      <p>Seungwoo Kim © 2024</p>
      <ul className="flex items-center space-x-2">
        <li>
          <Link href="https://github.com/seungwoos">github</Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/seungwoo-kim-baaa6b195/">
            linkedin
          </Link>
        </li>
      </ul>
    </footer>
  );
}
