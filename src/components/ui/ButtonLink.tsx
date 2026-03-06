import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';

interface ButtonLinkProps {
  children: ReactNode;
  href: string;
  variant?: Variant;
  className?: string;
  target?: string;
  rel?: string;
}

const variants: Record<Variant, string> = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
  ghost: 'btn-base bg-white/10 text-white hover:bg-white hover:text-primary',
};

export function ButtonLink({
  children,
  href,
  variant = 'primary',
  className = '',
  target,
  rel,
}: ButtonLinkProps) {
  const safeRel = target === '_blank' ? rel ?? 'noreferrer noopener' : rel;

  return (
    <a href={href} target={target} rel={safeRel} className={`${variants[variant]} ${className}`.trim()}>
      {children}
    </a>
  );
}
