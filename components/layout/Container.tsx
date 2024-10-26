"use client";

import Footer from "./Footer";
import Header from "./Header";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-2xl min-h-screen flex flex-col mx-auto py-10 px-4 text-slate-900 dark:text-slate-50 bg-white dark:bg-slate-950">
      <Header />
      <main className="flex-grow py-10">{children}</main>
      <Footer />
    </div>
  );
}
