export interface User {
  id: string;
  username: string;
  email: string;
  token?: string;
}

export interface Video {
  id: string;
  title: string;
  description?: string;
  url: string;
  duration: number;
  authorId?: string;
  likes?: number;
  dislikes?: number;
  createdAt?: string;
}

export interface Comment {
  id: string;
  videoId: string;
  userId: string;
  content: string;
  createdAt: string;
  replies?: Comment[];
}

export interface Vibe {
  id: string;
  title: string;
  description?: string;
  videos: Video[];
  widgets?: string[];
}
