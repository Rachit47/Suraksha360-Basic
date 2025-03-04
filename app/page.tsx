"use client";
import React from "react";
import Link from "next/link";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    if (!localStorage.getItem("user")) {
      window.history.pushState(null, "", window.location.href);
      window.onpopstate = () => {
        window.history.pushState(null, "", window.location.href);
      };
    }
  }, []);
  return (
    <main className="relative px-6 pt-28">
      <div className="mx-auto max-w-5xl">
        {/* Becoming a volunteer or saviour section */}
        <div className="flex flex-col items-center text-center pb-3">
          <div className="inline-flex h-9 border-2 items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 text-base font-medium text-blue-400">
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Report Privately & Securely
          </div>
          <h1 className="mt-4 bg-gradient-to-b from-white to-white/80 bg-clip-text text-6xl font-bold tracking-tight text-transparent sm:text-7xl">
            Report a Concern
            <span className="block bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent pb-2">
              Stay Anonymous, Stay Safe
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400">
            Build a safer community without sacrificing your privacy. Our
            cutting-edge encryption keeps your identity completely anonymous.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-4">
            <Link href={"/submit-report"}>
              <button
                className="group relative flex h-12 items-center justify-center gap-2 text-base font-medium rounded-xl 
  bg-blue-600 px-8 text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring active:bg-indigo-600 active:text-white overflow-visible"
              >
                {/* Top Border */}
                <span className="absolute left-0 top-0 w-0 h-[3px] bg-[#FFFFFF] shadow-[0_0_12px_#FFFFFF] group-hover:w-full transition-all duration-300 ease-linear"></span>

                {/* Right Border */}
                <span className="absolute right-0 top-0 h-0 w-[4px] bg-[#FFFFFF] shadow-[0_0_12px_#FFFFFF] group-hover:h-full transition-all duration-300 ease-linear delay-150"></span>

                {/* Bottom Border */}
                <span className="absolute bottom-0 right-0 w-0 h-[3px] bg-[#FFFFFF] shadow-[0_0_12px_#FFFFFF] group-hover:w-full transition-all duration-300 ease-linear delay-300"></span>

                {/* Left Border */}
                <span className="absolute left-0 bottom-0 h-0 w-[3px] bg-[#FFFFFF] shadow-[0_0_12px_#FFFFFF] group-hover:h-full transition-all duration-300 ease-linear delay-450"></span>

                <span className="relative z-10">File a Secure Report</span>
                <svg
                  className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M5 12h14M12 5l7 7-7 7"
                  />
                </svg>
              </button>
            </Link>
            <Link href={"/how-it-works"}>
              <button className="group relative flex h-12 items-center justify-center gap-2 rounded-xl bg-white/5 px-8 text-base font-medium text-white ring-1 ring-inset ring-white/10 transition-all hover:bg-white/10">
                {/* Top Border */}
                <span className="absolute left-0 top-0 w-0 h-[3px] bg-[#FFFFFF] shadow-[0_0_12px_#FFFFFF] group-hover:w-full transition-all duration-300 ease-linear"></span>

                {/* Right Border */}
                <span className="absolute right-0 top-0 h-0 w-[4px] bg-[#FFFFFF] shadow-[0_0_12px_#FFFFFF] group-hover:h-full transition-all duration-300 ease-linear delay-150"></span>

                {/* Bottom Border */}
                <span className="absolute bottom-0 right-0 w-0 h-[3px] bg-[#FFFFFF] shadow-[0_0_12px_#FFFFFF] group-hover:w-full transition-all duration-300 ease-linear delay-300"></span>

                {/* Left Border */}
                <span className="absolute left-0 bottom-0 h-0 w-[3px] bg-[#FFFFFF] shadow-[0_0_12px_#FFFFFF] group-hover:h-full transition-all duration-300 ease-linear delay-450"></span>

                <span className="relative z-10">Learn How It Works</span>
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-5 flex justify-center items-center h-32">
          <div className="bg-gray-900 text-white p-5 rounded-2xl shadow-lg flex flex-col items-center">
            <h2 className="text-lg font-semibold mb-2">Admin Access</h2>
            <p className="text-sm text-zinc-400 mb-3">
              Restricted access for authorized personnel only.
            </p>

            <Link href="/auth/signin" className="group">
              <div className="relative px-6 py-2 bg-blue-600 text-white font-medium rounded-xl shadow-md transition-all duration-500">
                {/* Top Border */}
                <span className="absolute top-0 left-0 w-0 h-[3px] bg-[#39ff14] group-hover:w-full transition-all duration-300 ease-linear shadow-[0_0_12px_#39ff14]"></span>

                {/* Right Border */}
                <span className="absolute top-0 right-0 w-[3px] h-0 bg-[#39ff14] group-hover:h-full transition-all duration-300 ease-linear delay-150 shadow-[0_0_12px_#39ff14]"></span>

                {/* Bottom Border */}
                <span className="absolute bottom-0 right-0 w-0 h-[3px] bg-[#39ff14] group-hover:w-full transition-all duration-300 ease-linear delay-300 shadow-[0_0_12px_#39ff14]"></span>

                {/* Left Border */}
                <span className="absolute bottom-0 left-0 w-[3px] h-0 bg-[#39ff14] group-hover:h-full transition-all duration-300 ease-linear delay-450 shadow-[0_0_12px_#39ff14]"></span>

                <span className="relative z-10">Enter Control Room</span>
              </div>
            </Link>
          </div>
        </div>
        {/* Grid containing features */}
        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Unbreakable Military-Grade Encryption",
              description:
                "Your identity is protected with state-of-the-art encryption protocols",
              icon: (
                <svg
                  className="h-6 w-6 text-orange-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              ),
            },

            {
              title: "Real-Time Processing",
              description:
                "Instant verification and secure routing of all reports",
              icon: (
                <svg
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
            },
            {
              title: "Secure Communication",
              description: "Two-way anonymous channel with law enforcement",
              icon: (
                <svg
                  className="h-6 w-6 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              ),
            },
          ].map((feature, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 p-8 transition-all hover:bg-zinc-800/80"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-blue-800/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-5 inline-flex rounded-xl bg-blue-500/10 p-3">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-base font-medium text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Stats container */}
        <div className="mt-40 rounded-2xl bg-zinc-900 p-8">
          <div className="grid gap-y-8 sm:grid-cols-3">
            {[
              { value: "100K+", label: "Reports Filed" },
              { value: "100%", label: "Anonymity rate" },
              { value: "24/7", label: "Support  Available" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-zinc-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Testimonials section */}
        <div className="mt-40 mb-20 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-full bg-zinc-900 px-5 py-2 text-sm text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Endorsed by Law Enforcement Across the Nation
          </div>
        </div>
      </div>
    </main>
  );
}
