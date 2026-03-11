import { lazy, useCallback, useMemo, useState, type MouseEventHandler } from 'react';
import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';
import { FloatingWhatsApp } from '../components/ui/FloatingWhatsApp';
import { PropertiesPopup } from '../components/ui/PropertiesPopup';
import { ViewportLoader } from '../components/ui/ViewportLoader';
import { useHomepageContent } from '../lib/cms/homepageStore';
import { mapManagedPropertiesToFeatured } from '../lib/adapters/managedPropertyMappers';
import { useManagedProperties } from '../lib/repositories/propertiesRepository';
import { Seo } from '../lib/seo';
import { AboutSection } from '../sections/AboutSection';
import { ContactSection } from '../sections/ContactSection';
import { ExperiencesSection } from '../sections/ExperiencesSection';
import { FeaturedPropertiesSection } from '../sections/FeaturedPropertiesSection';
import { HeroSection } from '../sections/HeroSection';
import { WhyChooseUsSection } from '../sections/WhyChooseUsSection';

const TestimonialsSection = lazy(() => import('../sections/TestimonialsSection'));
const GallerySection = lazy(() => import('../sections/GallerySection'));
const FinalCtaSection = lazy(() => import('../sections/FinalCtaSection'));

function getAbsoluteUrl(path: string, baseUrl: string) {
  return new URL(path, window.location.origin || baseUrl).toString();
}

export function HomePage() {
  const content = useHomepageContent();
  const managedProperties = useManagedProperties();
  const [isPropertiesPopupOpen, setIsPropertiesPopupOpen] = useState(false);
  const featuredItems = useMemo(() => mapManagedPropertiesToFeatured(managedProperties), [managedProperties]);
  const canonical = getAbsoluteUrl(content.seo.canonicalPath, content.site.baseUrl);
  const openPropertiesPopup = useCallback<MouseEventHandler<HTMLAnchorElement>>((event) => {
    event.preventDefault();
    setIsPropertiesPopupOpen(true);
  }, []);
  const closePropertiesPopup = useCallback(() => {
    setIsPropertiesPopupOpen(false);
  }, []);

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: content.site.siteName,
      url: content.site.baseUrl,
      sameAs: [content.site.instagram],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'LodgingBusiness',
      name: content.site.siteName,
      url: content.site.baseUrl,
      image: content.seo.ogImage,
      description: content.seo.description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Mérida',
        addressRegion: 'Yucatán',
        addressCountry: 'MX',
      },
      telephone: content.contact.phonePrimary,
      email: content.contact.email,
      priceRange: '$$$',
    },
  ];

  const deferredFallback = <div className="h-20" aria-hidden="true" />;

  return (
    <div className="min-h-screen bg-warm-bg">
      <Seo
        title={content.seo.title}
        description={content.seo.description}
        canonical={canonical}
        image={content.seo.ogImage}
        keywords={content.seo.keywords}
        schema={schema}
      />

      <Navbar site={content.site} />
      <main>
        <HeroSection content={content.hero} onPrimaryCtaClick={openPropertiesPopup} />
        <AboutSection content={content.about} />
        <FeaturedPropertiesSection content={content.featuredProperties} items={featuredItems} />
        <WhyChooseUsSection content={content.whyChooseUs} />
        <ExperiencesSection content={content.experiences} />
        <ContactSection content={content.contact} />

        <ViewportLoader fallback={deferredFallback}>
          <TestimonialsSection content={content.testimonials} />
        </ViewportLoader>
        <ViewportLoader fallback={deferredFallback}>
          <GallerySection content={content.gallery} />
        </ViewportLoader>
        <ViewportLoader fallback={deferredFallback}>
          <FinalCtaSection content={content.finalCta} />
        </ViewportLoader>
      </main>
      <PropertiesPopup
        isOpen={isPropertiesPopupOpen}
        properties={featuredItems}
        onClose={closePropertiesPopup}
      />
      <FloatingWhatsApp
        contacts={[
          { label: 'Reservas', phone: content.contact.phonePrimary, href: content.contact.phonePrimaryHref },
          { label: 'Atención', phone: content.contact.phoneSecondary, href: content.contact.phoneSecondaryHref },
        ]}
      />
      <Footer contact={content.contact} site={content.site} />
    </div>
  );
}
