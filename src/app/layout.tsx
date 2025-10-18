import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        {/* ✅ Navigation Bar */}
        <nav className="flex justify-center gap-8 py-5 bg-gray-900 shadow-md sticky top-0 z-50 text-white">
          <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link href="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link href="/projects" className="hover:text-yellow-400 transition">Projects</Link>
          <Link href="/certificates" className="hover:text-yellow-400 transition">Certificates</Link>
          <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
        </nav>

        {/* ✅ Page Content */}
        <main className="p-8 min-h-screen">{children}</main>

        {/* ✅ Footer */}
        <footer className="text-center py-4 bg-gray-900 text-gray-400 text-sm">
          © {new Date().getFullYear()} My Portfolio | All rights reserved | Aleena Amir
        </footer>
      </body>
    </html>
  );
}
