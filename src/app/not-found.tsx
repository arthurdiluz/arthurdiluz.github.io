import { personalInfo } from "@/lib/content-data";
import Link from "next/link";
import type { JSX } from "react";

export default function NotFound(): JSX.Element {
  return (
    <div className="min-h-screen bg-jet flex items-center justify-center px-6">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-highlight bg-gradient-to-r from-highlight to-highlight-600 bg-clip-text text-transparent">
            {"404"}
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-highlight to-highlight-600 mx-auto rounded-full mb-6"></div>
        </div>

        <h2 className="text-2xl font-semibold text-white mb-4">
          {"Page Not Found"}
        </h2>

        <p className="text-light-gray-70 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back to exploring {personalInfo.name}&apos;s
          portfolio.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-highlight to-highlight-600 text-white rounded-lg font-medium transition-all duration-300 hover:from-highlight-600 hover:to-highlight-700 hover:scale-105 hover:shadow-lg hover:shadow-highlight/25"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            {"Back to Home"}
          </Link>

          <div className="flex justify-center space-x-4 text-sm">
            <Link
              href="/#about"
              className="text-light-gray hover:text-highlight transition-colors duration-300"
            >
              {"About"}
            </Link>
            <Link
              href="/#portfolio"
              className="text-light-gray hover:text-highlight transition-colors duration-300"
            >
              {"Portfolio"}
            </Link>
            <Link
              href="/#resume"
              className="text-light-gray hover:text-highlight transition-colors duration-300"
            >
              {"Resume"}
            </Link>
          </div>
        </div>

        <div className="mt-12 text-xs text-light-gray-50">
          If you believe this is an error, please{" "}
          <Link
            href={`mailto:${personalInfo.email}`}
            className="text-highlight hover:text-highlight-600 transition-colors duration-300"
          >
            contact me
          </Link>
        </div>
      </div>
    </div>
  );
}
