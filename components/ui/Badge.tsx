import React from 'react';

export default function Badge({ children, variant = 'default' }: any) {
  const base = 'inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold';
  const cls = variant === 'danger' ? 'bg-red-100 text-red-800' : 'bg-orange-50 text-orange-700';
  return <span className={`${base} ${cls}`}>{children}</span>;
}
