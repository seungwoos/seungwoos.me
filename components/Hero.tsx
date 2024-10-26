"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <main className="bg-white dark:bg-black">
      <>
        <h2 className="text-2xl font-extrabold">Hi 👋</h2>
        <div className="flex flex-col gap-5 prose dark:prose-invert prose-p:m-0 text-inherit min-w-full">
          <p>
            I&apos;m a{" "}
            <span className="font-semibold">machine learning engineer</span>{" "}
            interested in creating engaging human-AI interactions. With experience in medical
            imaging and computer vision, I'm currently exploring Large Language
            Models (LLMs) and Large Vision Models (LVMs) in the field of
            healthcare and beyond.
          </p>
          <p>
            I&apos;m working as an AI Engineer at{" "}
            <Link
              href="https://3billion.io"
              className="text-blue-500 hover:underline"
            >
              3billion
            </Link>{" "}
            (since December 2023). Previously, I worked as a front-end software
            engineer at{" "}
            <Link
              href="https://www.danceapply.com/"
              className="text-blue-500 hover:underline"
            >
              Danceapply
            </Link>
            . I hold a Master's degree in Artificial Intelligence from{" "}
            <Link
              href="https://aigs.unist.ac.kr/"
              className="text-blue-500 hover:underline"
            >
              UNIST
            </Link>
            .
          </p>
        </div>
      </>
    </main>
  );
}
