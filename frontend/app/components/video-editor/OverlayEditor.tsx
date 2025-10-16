import React, { useState } from 'react';

export default function OverlayEditor({ onSave }: { onSave: (text: string) => void }) {
  const [overlay, setOverlay] = useState('');
  return (
    <div className="mt-2 flex space-x-2">
      <input
        value={overlay}
        onChange={e => setOverlay(e.target.value)}
        placeholder="Overlay text"
        className="p-2 rounded bg-gray-700 flex-1"
      />
      <button onClick={() => onSave(overlay)} className="px-4 py-2 bg-purple-600 rounded">Add Overlay</button>
    </div>
  );
}
