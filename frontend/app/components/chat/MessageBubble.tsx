import React from 'react';

export default function MessageBubble({ message, isOwn }: { message: string, isOwn?: boolean }) {
  return (
    <div className={`p-2 rounded max-w-xs ${isOwn ? 'bg-blue-600 ml-auto' : 'bg-gray-700'}`}>
      {message}
    </div>
  );
}
