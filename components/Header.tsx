"use client";

import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";
import { Navbar, Typography } from "@material-tailwind/react";

const NAV_ITEMS = [{ label: "about", href: "/about" }];

export default function Header() {
  return (
    <div className="overflow-scroll">
      <Navbar
        className="sticky rounded-none flex items-center justify-between max-w-screen-md mx-auto"
        shadow={false}
        color="transparent"
      >
        <ul>
          <Typography className="cursor-pointer font-medium text-black dark:text-white">
            <Link href="/">@seungwoos</Link>
          </Typography>
        </ul>
        <ul className="flex items-center gap-6">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={href}>
              <Typography
                as={Link}
                href={href}
                className="font-medium transition-all duration-300 ease-in-out hover:text-gray-300 dark:hover:texts-gray-600 cursor-pointer text-black dark:text-white"
              >
                {label}
              </Typography>
            </li>
          ))}
          <li>
            <ThemeToggleButton />
          </li>
        </ul>
      </Navbar>
    </div>
  );
}
