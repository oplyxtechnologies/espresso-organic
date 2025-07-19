// app/(main)/not-found.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#FFF9F4] px-6 text-center">
      <Image
        src="/logo/espresso-brown.svg"
        alt="Espresso Organic Logo"
        width={100}
        height={100}
        className="mb-6"
      />

      <h1 className="text-4xl md:text-5xl font-bold text-[#2B1E17] mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-[#6F5A48] text-lg mb-6 max-w-xl">
        We couldn&apos;t find the page you were looking for. It might have been
        moved or deleted — or maybe it&apos;s just brewing somewhere else ☕️
      </p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2 rounded-sm text-white bg-[#CB5B2C] hover:bg-[#a94a21] transition"
      >
        <ArrowLeft className="w-4 h-4" />
        Go Back Home
      </Link>
    </main>
  );
}
