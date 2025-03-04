"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("demo@admin.dev");
  const [password, setPassword] = useState("12345");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Invalid credentials");
      } else {
        router.push("/dashboard"); // on successful log in, direct the user to their respective dashboard page
      }
    } catch {
      setError("An error occured during Log in");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h1 className="text-center text-4xl font-bold block bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent mb-2">
          Good to See You Again
        </h1>
        <h2 className="text-center text-lg text-neutral-400">
          Log In to Access the Admin Panel
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-neutral-900/50 backdrop-blur-sm py-8 px-4 shadow-xl border border-neutral-800 rounded-xl sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              {" "}
              <label
                htmlFor="email"
                className="block text-sm font-medium text-neutral-300"
              >
                Email Address
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-neutral-800 rounded-lg bg-neutral-900 placeholder-neutral-500 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20"
                  placeholder="Enter your e-mail"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-neutral-300"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-neutral-800 rounded-lg bg-neutral-900 placeholder-neutral-500 text-neutral-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/20"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            {error && (
              <div className="text-red-500 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                {error}
              </div>
            )}

            <div className="relative group">
              <button
                type="submit"
                disabled={isLoading}
                className="relative w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {/* Top Border */}
                <span className="absolute left-0 top-0 w-0 h-[3px] bg-[#FFFFFF] shadow-[0_0_12px_#e0ebef] group-hover:w-full transition-all duration-300 ease-linear"></span>

                {/* Right Border */}
                <span className="absolute right-0 top-0 h-0 w-[4px] bg-[#FFFFFF] shadow-[0_0_12px_#e0ebef] group-hover:h-full transition-all duration-300 ease-linear delay-150"></span>

                {/* Bottom Border */}
                <span className="absolute bottom-0 right-0 w-0 h-[3px] bg-[#FFFFFF] shadow-[0_0_12px_#e0ebef] group-hover:w-full transition-all duration-300 ease-linear delay-300"></span>

                {/* Left Border */}
                <span className="absolute left-0 bottom-0 h-0 w-[3px] bg-[#FFFFFF] shadow-[0_0_12px_#e0ebef] group-hover:h-full transition-all duration-300 ease-linear delay-450"></span>

                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <span className="relative z-10">Log In</span>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
