import { lazy } from 'react';
import { Footer } from '../components/layout/Footer';
import { Navbar } from '../components/layout/Navbar';
import { ViewportLoader } from '../components/ui/ViewportLoader';
import { useHomepageContent } from '../lib/cms/homepageStore';
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
  const canonical = getAbsoluteUrl(content.seo.canonicalPath, content.site.baseUrl);

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
        addressLocality: 'Playa del Carmen',
        addressRegion: 'Quintana Roo',
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
        <HeroSection content={content.hero} />
        <AboutSection content={content.about} />
        <FeaturedPropertiesSection content={content.featuredProperties} />
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
      <Footer contact={content.contact} site={content.site} />
    </div>
  );
}
