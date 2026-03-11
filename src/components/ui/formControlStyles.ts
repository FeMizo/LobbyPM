export type FormControlTone = 'default' | 'inverse' | 'admin';
export type FormControlWidth = 'full' | 'fit' | 'auto';

const formControlBaseClass =
  'block rounded-2xl border px-4 py-3 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-warm-bg disabled:cursor-not-allowed disabled:opacity-60';

const formControlToneClasses: Record<FormControlTone, string> = {
  default:
    'border-warm-sand bg-warm-sand/72 text-warm-text placeholder:text-warm-muted focus:border-primary focus:bg-white focus-visible:ring-primary/55',
  inverse:
    'border-white/20 bg-white/16 text-white placeholder:text-white/52 focus:border-accent focus:bg-white/22 focus-visible:ring-accent/70 focus-visible:ring-offset-primary',
  admin:
    'border-[#e2d8cb] bg-white text-warm-text placeholder:text-warm-muted/85 focus:border-primary focus:bg-white focus-visible:ring-primary/55 focus-visible:ring-offset-white disabled:border-warm-sand disabled:bg-warm-sand/60 disabled:text-warm-muted',
};

const formControlWidthClasses: Record<FormControlWidth, string> = {
  full: 'w-full',
  fit: 'w-fit',
  auto: 'w-auto',
};

interface FormControlClassOptions {
  tone?: FormControlTone;
  width?: FormControlWidth;
  className?: string;
}

export function getFormControlClass({
  tone = 'default',
  width = 'full',
  className = '',
}: FormControlClassOptions = {}) {
  return [formControlBaseClass, formControlToneClasses[tone], formControlWidthClasses[width], className]
    .filter(Boolean)
    .join(' ');
}
