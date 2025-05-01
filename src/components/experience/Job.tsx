import { ReactNode } from 'react';

interface IJob {
  company: string;
  title: string;
  period: string;
  children: ReactNode;
}

export default function Job({ company, title, period, children }: IJob) {
  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
        <h3 className="text-xl font-bold text-yellow-400">{title}</h3>
        <div className="text-slate-400 text-sm sm:text-base">
          <span className="font-medium text-slate-200">{company}</span> |{' '}
          {period}
        </div>
      </div>
      {children}
    </div>
  );
}
