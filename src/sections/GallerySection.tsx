import { SectionShell } from '../components/ui/SectionShell';
import { SectionIntro } from '../components/ui/SectionIntro';
import type { GalleryContent } from '../types/homepage';

interface GallerySectionProps {
  content: GalleryContent;
}

export default function GallerySection({ content }: GallerySectionProps) {
  return (
    <SectionShell className="bg-warm-sand/20">
      <SectionIntro heading={content.heading} align="center" />

      <div className="mt-14 columns-1 gap-6 space-y-6 md:columns-2 xl:columns-3">
        {content.images.map((image) => (
          <div key={image.src} className="overflow-hidden rounded-[2rem] shadow-lg">
            <img
              src={image.src}
              alt={image.alt}
              className="h-auto w-full object-cover"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
              sizes="(max-width: 1280px) 50vw, 33vw"
            />
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
