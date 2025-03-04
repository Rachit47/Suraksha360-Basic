import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Suraksha360 - Report in silence, act with impact",
  description: "Securely and anonymously report crimes to law enforcement",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative min-h-screen bg-black selection:bg-sky-50">
          {/* gradiend in background*/}
          <div className="fixed inset-0 -z-10 min-h-screen">
            <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center, rgba(56,189,248,0.03), transparent_50%)]"></div>
            <div className="absolute inset-0 h-full bg-[radial-gradient(circle_at_center, rgba(14,16,233,0.04), transparent_70%)]"></div>
          </div>
          {/* Navbar*/}
          <Navbar />
          <main className="pt-16">
            <Providers>{children}</Providers>
          </main>
        </div>
      </body>
    </html>
  );
}
