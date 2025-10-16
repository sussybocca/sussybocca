export interface Video {
  id: string;
  title: string;
  description?: string;
  url: string;
  duration: number;
  authorId: string;
  createdAt: Date;
  likes?: number;
  dislikes?: number;
}
