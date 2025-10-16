export interface Notification {
  id: string;
  userId: string;
  type: 'comment' | 'like' | 'chat';
  content: string;
  createdAt: Date;
  read: boolean;
}
