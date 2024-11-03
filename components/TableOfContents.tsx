"use client";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import { TableOfContentsProps, TocItem } from "types/toc";

export function TableOfContents({
  content,
  headingLevels,
}: TableOfContentsProps) {
  const [toc, setToc] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  const generateHeadingId = useCallback((text: string): string => {
    return text
      .toLowerCase()
      .replace(/\*\*/g, "")
      .replace(/\*/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "");
  }, []);

  const cleanHeadingText = useCallback((text: string): string => {
    return text.replace(/\*\*/g, "").replace(/\*/g, "").trim();
  }, []);

  const handleScroll = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      e.preventDefault();
      const element = document.getElementById(id);
      if (!element) return;

      const offset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Update URL hash
      window.history.replaceState({}, "", `#${id}`);
      setActiveId(id);
    },
    []
  );

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
      .filter((item): item is TocItem => item !== null);

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
    <div className="hidden xl:block py-16">
      <div className="bg-white dark:bg-black backdrop-blur-sm p-4 rounded-lg">
        <h3 className="font-semibold mb-6 text-sm">Contents</h3>
        <nav className="max-h-[calc(100vh-4rem)] flex flex-col gap-6">
          {toc.map((item, index) => (
            <Link
              key={`${item.id}-${index}`}
              href={`#${item.id}`}
              onClick={(e) => handleScroll(e, item.id)}
              className={`
                block text-sm
                text-gray-600 dark:text-gray-300
                hover:text-blue-600 hover:scale-105
                active:text-purple-600
                transition-all duration-300 ease-in-out
                ${activeId === item.id ? "text-blue-600 font-medium" : ""}
              `}
              style={{
                marginLeft: `${(item.level - 1) * 12}px`,
              }}
            >
              {item.text}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
