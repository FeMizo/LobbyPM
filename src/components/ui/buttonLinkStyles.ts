export type ButtonLinkVariant = 'primary' | 'secondary' | 'outline' | 'outlineLight' | 'ghost';
export type ButtonLinkWidth = 'full' | 'fit' | 'auto';

const buttonLinkBaseClass =
  'inline-flex items-center justify-center gap-2 rounded-full px-8 py-3 font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-bg active:scale-95';

const buttonLinkVariantClasses: Record<ButtonLinkVariant, string> = {
  primary:
    'bg-primary text-white shadow-lg shadow-primary/20 hover:bg-[#c46648] active:bg-[#b85c42] focus-visible:ring-primary/70',
  secondary:
    'bg-secondary text-white shadow-lg shadow-secondary/20 hover:bg-[#6f7656] active:bg-[#61684b] focus-visible:ring-secondary/70',
  outline:
    'border-2 border-primary text-primary hover:border-primary hover:bg-primary hover:text-white active:bg-[#c46648] focus-visible:ring-primary/70',
  outlineLight:
    'border-2 border-white/80 bg-white/6 text-white hover:border-white hover:bg-white hover:text-primary active:bg-white/90 focus-visible:ring-white/90',
  ghost:
    'bg-white/10 text-white hover:bg-white hover:text-primary active:bg-white/90 focus-visible:ring-white/80',
};

const buttonLinkWidthClasses: Record<ButtonLinkWidth, string> = {
  full: 'w-full',
  fit: 'w-fit',
  auto: 'w-auto',
};

export function getButtonLinkClass(variant: ButtonLinkVariant, width: ButtonLinkWidth = 'full', className = '') {
  return [buttonLinkBaseClass, buttonLinkVariantClasses[variant], buttonLinkWidthClasses[width], className]
    .filter(Boolean)
    .join(' ');
}
