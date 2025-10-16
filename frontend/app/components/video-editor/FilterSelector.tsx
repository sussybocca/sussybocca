import React from 'react';

const filters = ['None', 'Grayscale', 'Sepia', 'Invert', 'Brightness'];

export default function FilterSelector({ onSelect }: { onSelect: (filter: string) => void }) {
  return (
    <div className="flex space-x-2 mt-2">
      {filters.map(f => (
        <button
          key={f}
          className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600"
          onClick={() => onSelect(f)}
        >
          {f}
        </button>
      ))}
    </div>
  );
}
