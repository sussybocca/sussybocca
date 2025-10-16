import { Injectable } from '@nestjs/common';
import { Video } from './videos.entity';

@Injectable()
export class VideosService {
  private videos: Video[] = [];

  getAll(): Video[] {
    return this.videos;
  }

  getById(id: string): Video | undefined {
    return this.videos.find(v => v.id === id);
  }

  create(video: Partial<Video>): Video {
    const newVideo: Video = {
      id: Date.now().toString(),
      title: video.title!,
      description: video.description,
      url: video.url!,
      duration: video.duration!,
      authorId: video.authorId!,
      createdAt: new Date(),
      likes: 0,
      dislikes: 0,
    };
    this.videos.push(newVideo);
    return newVideo;
  }

  like(id: string) {
    const video = this.getById(id);
    if (video) video.likes = (video.likes || 0) + 1;
    return video;
  }

  dislike(id: string) {
    const video = this.getById(id);
    if (video) video.dislikes = (video.dislikes || 0) + 1;
    return video;
  }
}
