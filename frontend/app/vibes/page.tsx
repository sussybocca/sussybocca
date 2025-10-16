"use client";

import Link from "next/link";

// Example placeholder vibes
const exampleVibes = [
  { id: "1", title: "Chill Beats", description: "Relaxing music videos" },
  { id: "2", title: "Gaming Highlights", description: "Top gaming moments" },
  { id: "3", title: "Coding Vibes", description: "Programming tutorials" },
];

export default function VibesListPage() {
  return (
    <div className="p-10 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-violet-400 mb-6">All Vibes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {exampleVibes.map((vibe) => (
          <Link
            key={vibe.id}
            href={`/vibes/${vibe.id}`}
            className="block bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition"
          >
            <h2 className="text-xl font-semibold mb-2">{vibe.title}</h2>
            <p className="text-gray-400 text-sm">{vibe.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
