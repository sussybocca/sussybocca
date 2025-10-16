"use client";

import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-5xl font-extrabold text-violet-400 mb-4">
        Welcome to Vibro
      </h2>
      <p className="text-lg text-gray-400 mb-8 max-w-xl">
        Create, edit, and share your vibes — the next evolution of video
        platforms.
      </p>
      <button
        onClick={() => router.push("/vibes")}
        className="px-6 py-3 bg-violet-600 hover:bg-violet-700 rounded-2xl font-semibold transition"
      >
        Explore Vibes
      </button>
    </div>
  );
}
