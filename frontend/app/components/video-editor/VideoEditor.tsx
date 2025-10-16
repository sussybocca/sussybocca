import React, { useRef, useState } from 'react';

interface Props {
  file: File;
}

export default function VideoEditor({ file }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [trimStart, setTrimStart] = useState(0);
  const [trimEnd, setTrimEnd] = useState(0);
  const [caption, setCaption] = useState('');

  const handleTrim = () => {
    alert(`Trimming from ${trimStart}s to ${trimEnd}s`);
    // Implement FFmpeg backend call later
  };

  const handleCaption = () => {
    alert(`Caption: ${caption}`);
    // Implement overlay save
  };

  return (
    <div className="mt-6 p-4 bg-gray-800 rounded">
      <h2 className="font-bold text-xl mb-2">Video Editor</h2>
      <video ref={videoRef} src={URL.createObjectURL(file)} controls className="w-full rounded mb-4" />
      <div className="flex space-x-4 mb-2">
        <input
          type="number"
          value={trimStart}
          onChange={e => setTrimStart(Number(e.target.value))}
          placeholder="Start (s)"
          className="p-2 rounded bg-gray-700 w-24"
        />
        <input
          type="number"
          value={trimEnd}
          onChange={e => setTrimEnd(Number(e.target.value))}
          placeholder="End (s)"
          className="p-2 rounded bg-gray-700 w-24"
        />
        <button onClick={handleTrim} className="px-4 py-2 bg-blue-600 rounded">Trim</button>
      </div>
      <div className="flex space-x-2 items-center">
        <input
          type="text"
          value={caption}
          onChange={e => setCaption(e.target.value)}
          placeholder="Add caption"
          className="p-2 rounded bg-gray-700 flex-1"
        />
        <button onClick={handleCaption} className="px-4 py-2 bg-green-600 rounded">Add Caption</button>
      </div>
    </div>
  );
}
