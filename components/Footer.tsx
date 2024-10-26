"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between sm:text-[14.5px] text-[14px] text-neutral-800 dark:text-neutral-100 bg-white dark:bg-black">
      <p>Seungwoo Kim © 2024</p>
      <div className="flex items-center gap-2">
        <Link href="https://github.com/seungwoos">github</Link>
        <Link href="https://www.linkedin.com/in/seungwoo-kim-baaa6b195/">
          linkedin
        </Link>
      </div>
    </footer>
  );
}
