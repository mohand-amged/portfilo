import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 Not Found | Mohand",
};

export default function NotFound() {
  return (
    <div className="bg-gray-900 text-purple-400 font-pixel min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-2xl pixel-border p-8 bg-gray-800">
        {/* Error Code */}
        <div className="text-8xl mb-6 glow">404</div>

        {/* Error Message */}
        <h1 className="text-2xl mb-6">PAGE NOT FOUND</h1>

        {/* Description */}
        <p className="mb-8 text-purple-300">
          Oops! The page you&apos;re looking for got lost in the digital void.
        </p>

        {/* Home Button */}
        <Link
          href="/"
          className="inline-block bg-purple-500 hover:bg-purple-400 text-gray-900 px-6 py-3 text-sm transition-all duration-200 transform hover:scale-105 border-2 border-purple-400"
        >
          RETURN TO HOMEPAGE
        </Link>

        {/* Signature */}
        <div className="mt-8 text-purple-500 text-xs">
          &copy; {new Date().getFullYear()} Makrious - Developer
        </div>
      </div>
    </div>
  );
}
