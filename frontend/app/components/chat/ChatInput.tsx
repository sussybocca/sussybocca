import React, { useState } from 'react';

export default function ChatInput({ onSend }: { onSend: (msg: string) => void }) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (!text) return;
    onSend(text);
    setText('');
  };

  return (
    <div className="flex space-x-2 mt-2">
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        className="flex-1 p-2 rounded bg-gray-700"
        placeholder="Type a message..."
      />
      <button onClick={handleSend} className="px-4 py-2 bg-blue-600 rounded">Send</button>
    </div>
  );
}
