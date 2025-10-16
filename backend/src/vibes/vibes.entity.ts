import { Video } from '../videos/videos.entity';

export interface Vibe {
  id: string;
  title: string;
  description?: string;
  videos: Video[];
}
