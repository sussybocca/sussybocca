import React, { useEffect, useRef } from 'react';
import { MessageBubble } from './MessageBubble';

interface Props {
  messages: string[];
}

export function ChatWindow({ messages }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if(ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [messages]);

  return (
    <div ref={ref} className="flex-1 overflow-y-auto p-2 space-y-2 bg-gray-800 rounded">
      {messages.map((msg, i) => <MessageBubble key={i} message={msg} />)}
    </div>
  );
}
