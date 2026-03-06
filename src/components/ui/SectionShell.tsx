import type { ReactNode } from 'react';

interface SectionShellProps {
  children: ReactNode;
  id?: string;
  className?: string;
}

export function SectionShell({ children, id, className = '' }: SectionShellProps) {
  return (
    <section id={id} className={`px-6 py-20 md:px-10 lg:px-16 xl:px-24 ${className}`.trim()}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
