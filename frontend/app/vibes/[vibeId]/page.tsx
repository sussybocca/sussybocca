"use client";

import { useParams } from "next/navigation";
import { useVibe } from "../../../hooks/useVibe";
import VideoGrid from "../../../components/vibe/VideoGrid";
import VibeHeader from "../../../components/vibe/VibeHeader";

export default function VibePage() {
  const { vibeId } = useParams(); // get vibeId from URL
  const { vibe, isLoading } = useVibe(vibeId!); // custom hook for fetching vibe

  if (isLoading || !vibe) {
    return <div className="p-8 text-gray-400">Loading Vibe...</div>;
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <VibeHeader title={vibe.title} description={vibe.description} />
      <VideoGrid videos={vibe.videos} />
    </div>
  );
}
