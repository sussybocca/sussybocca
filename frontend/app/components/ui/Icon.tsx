import React from 'react';

interface IconProps {
  name: 'play' | 'pause' | 'upload' | 'search';
  className?: string;
}

export default function Icon({ name, className }: IconProps) {
  switch (name) {
    case 'play':
      return <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M4 2v20l20-10L4 2z"/></svg>;
    case 'pause':
      return <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M6 2h4v20H6V2zm8 0h4v20h-4V2z"/></svg>;
    case 'upload':
      return <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M5 20h14v-2H5v2zm7-18v12l5-5h-3V2h-4v7H7l5 5z"/></svg>;
    case 'search':
      return <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M21 21l-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0z"/></svg>;
    default:
      return null;
  }
}
