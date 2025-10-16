import React from 'react';

interface Props {
  children: React.ReactNode;
  title: string;
}

export default function Widget({ children, title }: Props) {
  return (
    <div className="p-4 bg-gray-800 rounded mb-4">
      <h3 className="font-bold mb-2">{title}</h3>
      {children}
    </div>
  );
}
