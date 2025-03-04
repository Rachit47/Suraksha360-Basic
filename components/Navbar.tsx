"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full border-b border-white/5 bg-black/60 backdrop-blur-xl z-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-3">
              <Link href="/" className="flex items-center space-x-3">
                <div className="h-5 w-10 rounded-xl bg-black flex items-center justify-center">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* <!-- Background with Rounded Border --> */}
                    <rect
                      x="0"
                      y="0"
                      width="49"
                      height="49"
                      rx="8"
                      ry="8"
                      fill="url(#tricolor)"
                    />

                    {/* <!-- Tri-Color Gradient Definition --> */}
                    <defs>
                      <linearGradient id="tricolor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF9933" />
                        <stop offset="50%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#138808" />
                      </linearGradient>
                    </defs>

                    {/* <!-- Ashoka Chakra (Blue) --> */}
                    <circle
                      cx="24"
                      cy="24"
                      r="18"
                      fill="none"
                      stroke="#00008B"
                      strokeWidth="3"
                    />

                    {/* <!-- Central Disc --> */}
                    <circle cx="24" cy="24" r="4" fill="#00008B" />

                    {/* <!-- 24 Evenly Spaced Spokes --> */}
                    <g stroke="#00008B" strokeWidth="1">
                      {/* <!-- Generating 24 spokes evenly spaced at 15-degree intervals --> */}

                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(0 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(15 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(30 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(45 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(60 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(75 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(90 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(105 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(120 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(135 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(150 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(165 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(180 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(195 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(210 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(225 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(240 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(255 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(270 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(285 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(300 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(315 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(330 24 24)"
                      />
                      <line
                        x1="24"
                        y1="24"
                        x2="24"
                        y2="6"
                        transform="rotate(345 24 24)"
                      />
                    </g>
                  </svg>
                </div>
                <span className="text-lg font-semibold text-white">
                  Suraksha360
                </span>
              </Link>
            </div>

            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/submit-report"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Submit Report
              </Link>
              <Link
                href="/track-report"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Track Report
              </Link>
              <Link
                href="/how-it-works"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="/resources"
                className="text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Resources
              </Link>
            </div>

            {/* Emergency Button */}
            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className="hidden md:block text-sm text-zinc-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <button className="group flex h-9 items-center gap-2 rounded-full bg-red-500/10 pl-4 pr-5 text-sm font-medium text-red-500 ring-1 ring-inset ring-red-500/20 transition-all hover:bg-red-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse" />
                Emergency: 911
              </button>
              {/* Mobile Menu Button */}
              <button
                className="md:hidden p-2 text-zinc-400 hover: text-white"
                onClick={() => {
                  setIsMobileMenuOpen(true);
                }}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => {
          setIsMobileMenuOpen(false);
        }}
      />
    </>
  );
}
