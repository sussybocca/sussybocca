import React from 'react';

interface Props {
  title: string;
  description?: string;
}

export default function VibeHeader({ title, description }: Props) {
  return (
    <div className="mb-6 p-4 bg-gray-800 rounded">
      <h1 className="text-3xl font-bold">{title}</h1>
      {description && <p className="text-gray-400">{description}</p>}
    </div>
  );
}
