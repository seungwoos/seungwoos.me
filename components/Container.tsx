"use client";
import Footer from "./Footer";
import Header from "./Header";

interface ContainerProps {
  children: React.ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto max-w-4xl">
        <Header />
        <div className="flex-grow w-full max-w-screen-md mx-auto">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
