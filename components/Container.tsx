"use client";
import Footer from "./Footer";
import Header from "./Header";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-window antialiased flex flex-col">
      <div className="fixed top-0 w-full bg-white/90 dark:bg-black/90 z-10">
        <Header />
      </div>
      <main className="max-w-2xl mx-auto pt-24 flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
