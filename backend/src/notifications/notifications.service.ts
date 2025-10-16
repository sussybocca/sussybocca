import { Injectable } from '@nestjs/common';
import { Notification } from './notifications.entity';

@Injectable()
export class NotificationsService {
  private notifications: Notification[] = [];

  getUserNotifications(userId: string): Notification[] {
    return this.notifications.filter(n => n.userId === userId);
  }

  addNotification(userId: string, type: Notification['type'], content: string): Notification {
    const newNotification: Notification = {
      id: Date.now().toString(),
      userId,
      type,
      content,
      createdAt: new Date(),
      read: false,
    };
    this.notifications.push(newNotification);
    return newNotification;
  }

  markAsRead(notificationId: string): Notification | null {
    const notification = this.notifications.find(n => n.id === notificationId);
    if (!notification) return null;
    notification.read = true;
    return notification;
  }
}
