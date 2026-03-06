import { Suspense, useEffect, useRef, useState, type ReactNode } from 'react';

interface ViewportLoaderProps {
  fallback: ReactNode;
  children: ReactNode;
  rootMargin?: string;
}

export function ViewportLoader({
  fallback,
  children,
  rootMargin = '300px 0px',
}: ViewportLoaderProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element || isVisible) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div ref={ref}>
      {isVisible ? <Suspense fallback={fallback}>{children}</Suspense> : fallback}
    </div>
  );
}
