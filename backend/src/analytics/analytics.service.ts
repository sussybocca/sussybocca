import { Injectable } from '@nestjs/common';
import { VideoAnalytics, VibeAnalytics } from './analytics.entity';

@Injectable()
export class AnalyticsService {
  private videoStats: VideoAnalytics[] = [];
  private vibeStats: VibeAnalytics[] = [];

  // Video tracking
  incrementVideoView(videoId: string) {
    let video = this.videoStats.find(v => v.videoId === videoId);
    if (!video) {
      video = { videoId, views: 0, likes: 0, dislikes: 0 };
      this.videoStats.push(video);
    }
    video.views++;
    return video;
  }

  incrementVideoLike(videoId: string) {
    const video = this.videoStats.find(v => v.videoId === videoId);
    if (video) video.likes++;
    return video;
  }

  incrementVideoDislike(videoId: string) {
    const video = this.videoStats.find(v => v.videoId === videoId);
    if (video) video.dislikes++;
    return video;
  }

  getVideoStats(videoId: string) {
    return this.videoStats.find(v => v.videoId === videoId) || { videoId, views: 0, likes: 0, dislikes: 0 };
  }

  // Vibe tracking
  incrementVibeView(vibeId: string) {
    let vibe = this.vibeStats.find(v => v.vibeId === vibeId);
    if (!vibe) {
      vibe = { vibeId, views: 0, likes: 0 };
      this.vibeStats.push(vibe);
    }
    vibe.views++;
    return vibe;
  }

  incrementVibeLike(vibeId: string) {
    const vibe = this.vibeStats.find(v => v.vibeId === vibeId);
    if (vibe) vibe.likes++;
    return vibe;
  }

  getVibeStats(vibeId: string) {
    return this.vibeStats.find(v => v.vibeId === vibeId) || { vibeId, views: 0, likes: 0 };
  }
}
