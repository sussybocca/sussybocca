import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
  constructor(private commentsService: CommentsService) {}

  @Get('video/:videoId')
  getByVideo(@Param('videoId') videoId: string) {
    return this.commentsService.getCommentsByVideo(videoId);
  }

  @Post('video/:videoId')
  addComment(
    @Param('videoId') videoId: string,
    @Body() body: { userId: string; content: string }
  ) {
    return this.commentsService.addComment(videoId, body.userId, body.content);
  }

  @Post('reply/:commentId')
  addReply(
    @Param('commentId') commentId: string,
    @Body() body: { userId: string; content: string }
  ) {
    return this.commentsService.addReply(commentId, body.userId, body.content);
  }
}
