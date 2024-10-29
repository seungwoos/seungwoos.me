"use client";

import { useState, useEffect } from "react";

export default function ReadingProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight - windowHeight;
      const scrollTop = window.scrollY;
      const newProgress = (scrollTop / documentHeight) * 100;
      setProgress(Math.min(100, Math.max(0, newProgress)));
    };

    window.addEventListener("scroll", calculateProgress);

    calculateProgress();

    // Cleanup
    return () => window.removeEventListener("scroll", calculateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <div
        className="h-full bg-blue-600 transition-all duration-100 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
