import { ReactNode } from 'react';
import List from '../share/List';

interface IProject {
  name: string;
  title?: string;
  children: ReactNode;
}

export default function Project({ name, title, children }: IProject) {
  return (
    <div className="mb-4">
      <h4 className="text-lg font-semibold text-gray-300 mb-2 flex justify-between border-b border-gray-600">
        {name}
        <span className="font-normal">{title}</span>
      </h4>
      <List>{children}</List>
    </div>
  );
}
