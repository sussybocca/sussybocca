import { Injectable } from '@nestjs/common';
import { Vibe } from './vibes.entity';
import { Video } from '../videos/videos.entity';

@Injectable()
export class VibesService {
  private vibes: Vibe[] = [];

  getAllVibes(): Vibe[] {
    return this.vibes;
  }

  getVibe(id: string): Vibe | undefined {
    return this.vibes.find(v => v.id === id);
  }

  addVideoToVibe(vibeId: string, video: Video) {
    const vibe = this.vibes.find(v => v.id === vibeId);
    if (!vibe) return null;
    vibe.videos.push(video);
    return vibe;
  }

  createVibe(title: string, description?: string): Vibe {
    const vibe: Vibe = {
      id: Date.now().toString(),
      title,
      description,
      videos: [],
    };
    this.vibes.push(vibe);
    return vibe;
  }
}
