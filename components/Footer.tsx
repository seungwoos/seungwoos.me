"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-8">
      <div className="max-w-screen-md px-4 lg:mx-auto py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-600 dark:text-gray-400">
            Seungwoo Kim © 2024
          </p>
          <ul className="flex items-center space-x-6">
            <li>
              <Link
                href="https://github.com/seungwoos"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                github
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/seungwoo-kim-baaa6b195/"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              >
                linkedin
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
