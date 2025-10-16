import React from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export default function Textarea({ label, ...props }: TextareaProps) {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-1 text-gray-300">{label}</label>}
      <textarea
        {...props}
        className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
