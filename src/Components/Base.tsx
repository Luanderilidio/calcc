import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Base({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen border-red-500 relative">
      <div className="w-full fixed z-50 ">
        <Header />
      </div>
      <div className="h-20 bg-gray-50" />
      <main className="flex-grow bg-gray-50">{children}</main>
      <Footer />
    </div>
  );
}
