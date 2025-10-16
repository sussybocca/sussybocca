import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { VideosModule } from './modules/videos/videos.module';
import { VibesModule } from './modules/vibes/vibes.module';
import { CommentsModule } from './modules/comments/comments.module';
import { ChatModule } from './modules/chat/chat.module';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    VideosModule,
    VibesModule,
    CommentsModule,
    ChatModule,
    NotificationsModule,
    AnalyticsModule,
  ],
})
export class AppModule {}
