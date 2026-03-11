import type { ReactNode } from 'react';
import type { ImageAsset } from '../../types/homepage';

export type PropertyImageSize = 'card' | 'modal' | 'free';
export type PropertyImageHover = 'none' | 'soft' | 'medium';

interface PropertyImageProps {
  image: ImageAsset;
  size?: PropertyImageSize;
  hover?: PropertyImageHover;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  className?: string;
  imageClassName?: string;
  children?: ReactNode;
}

const sizeClasses: Record<PropertyImageSize, string> = {
  card: 'aspect-[4/3]',
  modal: 'aspect-[16/10]',
  free: '',
};

const hoverClasses: Record<PropertyImageHover, string> = {
  none: '',
  soft: 'group-hover:scale-[1.04]',
  medium: 'group-hover:scale-[1.07]',
};

export function PropertyImage({
  image,
  size = 'card',
  hover = 'soft',
  loading = 'lazy',
  sizes = '(max-width: 1024px) 100vw, 33vw',
  className = '',
  imageClassName = '',
  children,
}: PropertyImageProps) {
  return (
    <div className={['group relative overflow-hidden', sizeClasses[size], className].filter(Boolean).join(' ')}>
      <img
        src={image.src}
        alt={image.alt}
        className={[
          'h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform',
          hoverClasses[hover],
          imageClassName,
        ]
          .filter(Boolean)
          .join(' ')}
        loading={loading}
        decoding="async"
        referrerPolicy="no-referrer"
        sizes={sizes}
      />
      {children}
    </div>
  );
}
