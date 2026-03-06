import type { ContactContent, SiteSettings } from '../../types/homepage';

interface FooterProps {
  contact: ContactContent;
  site: SiteSettings;
}

const footerLinks = [
  { label: 'Featured stays', href: '#properties' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Why Lobby PM', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
];

export function Footer({ contact, site }: FooterProps) {
  return (
    <footer className="bg-warm-text px-6 py-20 text-warm-bg md:px-10 lg:px-16 xl:px-24">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 xl:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div>
          <p className="text-3xl font-bold tracking-tight">{site.siteName}</p>
          <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.42em] text-accent">
            property management
          </p>
          <p className="mt-6 max-w-md leading-8 text-warm-bg/70">
            Boutique vacation rental management in Playa del Carmen with curated stays, guest care and local recommendations designed to scale into a full internal CMS.
          </p>
        </div>

        <div>
          <h2 className="text-lg font-bold">Quick links</h2>
          <ul className="mt-6 space-y-4 text-warm-bg/70">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="/admin/home" className="hover:text-accent">
                Edit homepage content
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold">Contact</h2>
          <ul className="mt-6 space-y-4 text-warm-bg/70">
            <li>{contact.address}</li>
            <li>
              <a href={contact.phonePrimaryHref} target="_blank" rel="noreferrer" className="hover:text-accent">
                {contact.phonePrimary}
              </a>
            </li>
            <li>
              <a href={contact.phoneSecondaryHref} target="_blank" rel="noreferrer" className="hover:text-accent">
                {contact.phoneSecondary}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="hover:text-accent">
                {contact.email}
              </a>
            </li>
            <li>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="hover:text-accent">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 pt-8 text-sm text-warm-bg/50">
        <p>{new Date().getFullYear()} Lobby PM. All rights reserved.</p>
      </div>
    </footer>
  );
}
