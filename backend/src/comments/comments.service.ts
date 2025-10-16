import { Injectable } from '@nestjs/common';
import { Comment } from './comments.entity';

@Injectable()
export class CommentsService {
  private comments: Comment[] = [];

  getCommentsByVideo(videoId: string): Comment[] {
    return this.comments.filter(c => c.videoId === videoId);
  }

  addComment(videoId: string, userId: string, content: string): Comment {
    const newComment: Comment = {
      id: Date.now().toString(),
      videoId,
      userId,
      content,
      createdAt: new Date(),
      replies: [],
    };
    this.comments.push(newComment);
    return newComment;
  }

  addReply(commentId: string, userId: string, content: string): Comment | null {
    const comment = this.comments.find(c => c.id === commentId);
    if (!comment) return null;
    const reply: Comment = {
      id: Date.now().toString(),
      videoId: comment.videoId,
      userId,
      content,
      createdAt: new Date(),
      replies: [],
    };
    comment.replies?.push(reply);
    return reply;
  }
}
