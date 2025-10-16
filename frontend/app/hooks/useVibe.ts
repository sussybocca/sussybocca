import { useState, useEffect } from "react";

interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
}

interface Vibe {
  id: string;
  title: string;
  description: string;
  videos: Video[];
}

export function useVibe(vibeId: string) {
  const [vibe, setVibe] = useState<Vibe | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Dummy fetch logic — replace with real API call
    const dummyVibes: Record<string, Vibe> = {
      "1": {
        id: "1",
        title: "Chill Beats",
        description: "Relaxing music videos",
        videos: [
          { id: "a", title: "Lo-fi Study", thumbnailUrl: "/thumbnails/1.jpg" },
          { id: "b", title: "Morning Chill", thumbnailUrl: "/thumbnails/2.jpg" },
        ],
      },
      "2": {
        id: "2",
        title: "Gaming Highlights",
        description: "Top gaming moments",
        videos: [
          { id: "c", title: "Epic Kill", thumbnailUrl: "/thumbnails/3.jpg" },
        ],
      },
      "3": {
        id: "3",
        title: "Coding Vibes",
        description: "Programming tutorials",
        videos: [
          { id: "d", title: "React Basics", thumbnailUrl: "/thumbnails/4.jpg" },
        ],
      },
    };

    setTimeout(() => {
      setVibe(dummyVibes[vibeId] || null);
      setIsLoading(false);
    }, 500);
  }, [vibeId]);

  return { vibe, isLoading };
}
