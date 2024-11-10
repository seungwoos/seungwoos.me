"use client";
import Footer from "./Footer";
import Header from "./Header";

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-window antialiased flex flex-col">
      <Header />
      <main className="mx-auto pt-20 flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
