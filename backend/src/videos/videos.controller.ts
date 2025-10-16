import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { VideosService } from './videos.service';
import { Video } from './videos.entity';

@Controller('videos')
export class VideosController {
  constructor(private videosService: VideosService) {}

  @Get()
  getAll(): Video[] {
    return this.videosService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Video | undefined {
    return this.videosService.getById(id);
  }

  @Post()
  create(@Body() body: Partial<Video>): Video {
    return this.videosService.create(body);
  }

  @Post(':id/like')
  like(@Param('id') id: string) {
    return this.videosService.like(id);
  }

  @Post(':id/dislike')
  dislike(@Param('id') id: string) {
    return this.videosService.dislike(id);
  }
}
