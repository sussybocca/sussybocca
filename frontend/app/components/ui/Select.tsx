import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

export default function Select({ label, children, ...props }: SelectProps) {
  return (
    <div className="flex flex-col mb-4">
      {label && <label className="mb-1 text-gray-300">{label}</label>}
      <select
        {...props}
        className="p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {children}
      </select>
    </div>
  );
}
