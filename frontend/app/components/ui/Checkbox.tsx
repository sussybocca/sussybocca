import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <label className="flex items-center space-x-2 cursor-pointer">
      <input type="checkbox" {...props} className="form-checkbox h-5 w-5 text-blue-600" />
      <span>{label}</span>
    </label>
  );
}
