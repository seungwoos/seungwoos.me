"use client";
import Footer from "./Footer";
import Header from "./Header";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-slate-900 dark:text-slate-50">
      <div className="fixed top-0 w-full bg-white dark:bg-black z-10">
        <div className="max-w-xl mx-auto px-4">
          <Header />
        </div>
      </div>
      <main className="max-w-xl mx-auto w-full px-4 pt-24 flex-grow">
        {children}
      </main>
      <div className="max-w-xl mx-auto w-full px-4 py-10">
        <Footer />
      </div>
    </div>
  );
}
