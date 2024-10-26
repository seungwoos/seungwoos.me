"use client";

import Header from "./Header";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl mx-auto py-10 px-4 text-slate-900 dark:text-slate-50 bg-white dark:bg-slate-950">
      <Header />
      {children}
    </div>
  );
}
