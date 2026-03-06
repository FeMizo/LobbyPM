export interface LinkAction {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface SectionHeading {
  eyebrow: string;
  title: string;
  description: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  subheadline: string;
  primaryCta: LinkAction;
  secondaryCta: LinkAction;
  image: ImageAsset;
  stats: HeroStat[];
}

export interface PropertySummary {
  id: string;
  name: string;
  location: string;
  description: string;
  image: ImageAsset;
  price: string;
  rating: number;
  href: string;
}

export interface ExperienceSummary {
  id: string;
  title: string;
  description: string;
  image: ImageAsset;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: 'home' | 'map-pin' | 'user-check' | 'sparkles';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
}

export interface AboutContent {
  heading: SectionHeading;
  paragraphs: string[];
  image: ImageAsset;
  stats: HeroStat[];
  cta: LinkAction;
}

export interface FeaturedPropertiesContent {
  heading: SectionHeading;
  cta: LinkAction;
  items: PropertySummary[];
}

export interface ExperiencesContent {
  heading: SectionHeading;
  cta: LinkAction;
  items: ExperienceSummary[];
  concierge: {
    title: string;
    description: string;
    imageGrid: ImageAsset[];
    cta: LinkAction;
  };
}

export interface WhyChooseUsContent {
  heading: SectionHeading;
  cta: LinkAction;
  items: FeatureItem[];
}

export interface ContactContent {
  heading: SectionHeading;
  description: string;
  phonePrimary: string;
  phoneSecondary: string;
  phonePrimaryHref: string;
  phoneSecondaryHref: string;
  email: string;
  address: string;
}

export interface TestimonialsContent {
  heading: SectionHeading;
  items: Testimonial[];
}

export interface GalleryContent {
  heading: SectionHeading;
  images: ImageAsset[];
}

export interface FinalCtaContent {
  title: string;
  text: string;
  button: LinkAction;
  image: ImageAsset;
}

export interface SeoContent {
  title: string;
  description: string;
  canonicalPath: string;
  ogImage: string;
  keywords: string[];
}

export interface SiteSettings {
  siteName: string;
  baseUrl: string;
  instagram: string;
}

export interface HomepageContent {
  seo: SeoContent;
  site: SiteSettings;
  hero: HeroContent;
  about: AboutContent;
  featuredProperties: FeaturedPropertiesContent;
  whyChooseUs: WhyChooseUsContent;
  experiences: ExperiencesContent;
  contact: ContactContent;
  testimonials: TestimonialsContent;
  gallery: GalleryContent;
  finalCta: FinalCtaContent;
}
