import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { VibesService } from './vibes.service';
import { Video } from '../videos/videos.entity';

@Controller('vibes')
export class VibesController {
  constructor(private vibesService: VibesService) {}

  @Get()
  getAll() {
    return this.vibesService.getAllVibes();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.vibesService.getVibe(id);
  }

  @Get(':id/videos')
  getVideos(@Param('id') id: string) {
    const vibe = this.vibesService.getVibe(id);
    return vibe?.videos || [];
  }

  @Post()
  create(@Body() body: { title: string; description?: string }) {
    return this.vibesService.createVibe(body.title, body.description);
  }

  @Post(':id/videos')
  addVideo(@Param('id') id: string, @Body() video: Video) {
    return this.vibesService.addVideoToVibe(id, video);
  }
}
