"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isScrollable, setIsScrollable] = useState(false);
  const pathname = usePathname();

  const calculateProgress = useCallback(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    const scrollableHeight = documentHeight - windowHeight;

    setIsScrollable(scrollableHeight > 0);

    if (scrollableHeight > 0) {
      const newProgress = (scrollTop / scrollableHeight) * 100;
      setProgress(Math.min(100, Math.max(0, newProgress)));
    } else {
      setProgress(0);
    }
  }, []);

  const handleScroll = useCallback(() => {
    requestAnimationFrame(calculateProgress);
  }, [calculateProgress]);

  useEffect(() => {
    setProgress(0);
    setIsScrollable(false);

    const timeoutId = setTimeout(calculateProgress, 100);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", calculateProgress);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateProgress);
      clearTimeout(timeoutId);
    };
  }, [pathname, calculateProgress, handleScroll]);

  if (!isScrollable) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <div
        className="h-full bg-blue-600 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
