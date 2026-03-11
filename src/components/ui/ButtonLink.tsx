import type { MouseEventHandler, ReactNode } from 'react';
import { getButtonLinkClass, type ButtonLinkVariant, type ButtonLinkWidth } from './buttonLinkStyles';

interface ButtonLinkProps {
  children: ReactNode;
  href: string;
  variant?: ButtonLinkVariant;
  width?: ButtonLinkWidth;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function ButtonLink({
  children,
  href,
  variant = 'primary',
  width = 'full',
  className = '',
  target,
  rel,
  onClick,
}: ButtonLinkProps) {
  const safeRel = target === '_blank' ? rel ?? 'noreferrer noopener' : rel;

  return (
    <a
      href={href}
      target={target}
      rel={safeRel}
      className={getButtonLinkClass(variant, width, className)}
      onClick={onClick}
    >
      {children}
    </a>
  );
}
