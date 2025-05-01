import { ReactNode } from 'react';

export default function List({ children }: { children: ReactNode }) {
  return (
    <ul className="list-disc list-inside text-gray-200 space-y-1">
      {children}
    </ul>
  );
}
