"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

export function TableOfContents({ content, headingLevels }) {
  const [toc, setToc] = useState([]);
  const [activeId, setActiveId] = useState("");

  const generateHeadingId = useCallback((text) => {
    return text
      .toLowerCase()
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
  }, []);

  const cleanHeadingText = useCallback((text) => {
    return text.replace(/\*\*/g, "").replace(/\*/g, "").trim();
  }, []);

  const handleScroll = useCallback((e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;

    const offset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    window.history.replaceState({}, "", `#${id}`);
    setActiveId(id);
  }, []);

  useEffect(() => {
    const tocItems = content
      .split("\n")
      .map((line) => {
        const match = line.match(/^(#+)\s+(.+)$/);
        if (!match) return null;
        const level = match[1].length;
        if (!headingLevels.includes(level)) return null;
        const text = cleanHeadingText(match[2]);
        return {
          level,
          text,
          id: generateHeadingId(text),
        };
      })
      .filter((item) => item !== null);
    setToc(tocItems);
  }, [content, headingLevels, cleanHeadingText, generateHeadingId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -35% 0px",
        threshold: 0,
      }
    );

    const headingSelectors = headingLevels
      .map((level) => `h${level}`)
      .join(", ");
    document.querySelectorAll(headingSelectors).forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, [headingLevels]);

  return (
    <div className="hidden xl:block w-64 fixed left-[calc(50%+24rem)] top-20">
      <div className="bg-white dark:bg-black backdrop-blur-sm p-4 rounded-lg border border-gray-200 dark:border-gray-800">
        <h3 className="font-semibold mb-4 text-sm">Contents</h3>
        <nav className="overflow-y-auto max-h-[calc(100vh-12rem)] pr-2 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
          <div className="flex flex-col gap-3">
            {toc.map((item, index) => (
              <Link
                key={`${item.id}-${index}`}
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, item.id)}
                className={`
                block text-sm
                text-gray-600 dark:text-gray-300
                hover:text-blue-600 dark:hover:text-blue-400
                active:text-purple-600
                transition-all duration-200
                ${
                  activeId === item.id
                    ? "text-blue-600 dark:text-blue-400 font-medium"
                    : ""
                }
              `}
                style={{
                  marginLeft: `${item.level * 16}px`,
                }}
              >
                {item.text}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
}
