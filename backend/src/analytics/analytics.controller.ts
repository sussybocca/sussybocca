import { Controller, Get, Post, Param } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private analyticsService: AnalyticsService) {}

  // Video endpoints
  @Post('video/:videoId/view')
  viewVideo(@Param('videoId') videoId: string) {
    return this.analyticsService.incrementVideoView(videoId);
  }

  @Post('video/:videoId/like')
  likeVideo(@Param('videoId') videoId: string) {
    return this.analyticsService.incrementVideoLike(videoId);
  }

  @Post('video/:videoId/dislike')
  dislikeVideo(@Param('videoId') videoId: string) {
    return this.analyticsService.incrementVideoDislike(videoId);
  }

  @Get('video/:videoId')
  getVideoStats(@Param('videoId') videoId: string) {
    return this.analyticsService.getVideoStats(videoId);
  }

  // Vibe endpoints
  @Post('vibe/:vibeId/view')
  viewVibe(@Param('vibeId') vibeId: string) {
    return this.analyticsService.incrementVibeView(vibeId);
  }

  @Post('vibe/:vibeId/like')
  likeVibe(@Param('vibeId') vibeId: string) {
    return this.analyticsService.incrementVibeLike(vibeId);
  }

  @Get('vibe/:vibeId')
  getVibeStats(@Param('vibeId') vibeId: string) {
    return this.analyticsService.getVibeStats(vibeId);
  }
}
