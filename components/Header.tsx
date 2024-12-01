"use client";

import Link from "next/link";
import ThemeToggleButton from "./ThemeToggleButton";
import { Navbar, Typography } from "@material-tailwind/react";

const NAV_ITEMS = [{ label: "about", href: "/about" }];

export default function Header() {
  return (
    <Navbar
      className="sticky top-0 z-10 h-max px-4 py-2 lg:px-8 lg:py-4 flex items-center justify-between max-w-screen-md mx-auto rounded-none bg-white/90 dark:bg-black/90"
      shadow={false}
      color="transparent"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
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
  );
}
