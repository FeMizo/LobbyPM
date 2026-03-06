import { Mail, MessageSquare, Phone } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { SectionShell } from '../components/ui/SectionShell';
import { SectionIntro } from '../components/ui/SectionIntro';
import type { ContactContent } from '../types/homepage';

interface ContactSectionProps {
  content: ContactContent;
}

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <SectionShell id="contact">
      <div className="overflow-hidden rounded-[2.5rem] bg-primary">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px]">
          <Reveal className="px-8 py-10 text-white md:px-12 md:py-14">
            <SectionIntro heading={content.heading} theme="inverse" />
            <p className="mt-6 max-w-2xl text-white/78">{content.description}</p>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <a
                href={content.phonePrimaryHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 hover:bg-white/16"
              >
                <Phone size={20} />
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em] text-white/65">WhatsApp</p>
                <p className="mt-1 text-xl font-semibold">{content.phonePrimary}</p>
              </a>
              <a
                href={content.phoneSecondaryHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 hover:bg-white/16"
              >
                <Phone size={20} />
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em] text-white/65">Support</p>
                <p className="mt-1 text-xl font-semibold">{content.phoneSecondary}</p>
              </a>
              <a
                href={`mailto:${content.email}`}
                className="rounded-[1.75rem] border border-white/10 bg-white/10 p-5 hover:bg-white/16 md:col-span-2"
              >
                <Mail size={20} />
                <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.24em] text-white/65">Email</p>
                <p className="mt-1 text-xl font-semibold">{content.email}</p>
                <p className="mt-2 text-sm text-white/70">{content.address}</p>
              </a>
            </div>
          </Reveal>

          <div className="border-l border-white/10 bg-white/8 px-8 py-10 md:px-10 md:py-14">
            <h3 className="text-2xl font-bold text-white">Request a recommendation</h3>
            <p className="mt-4 leading-7 text-white/75">
              This form is intentionally non-persistent for now. It keeps the commercial intent visible while the future dashboard grows into full inquiries and CRM flows.
            </p>

            <form className="mt-8 space-y-4">
              <input type="text" placeholder="Full name" className="input-base border-white/15 bg-white/10 text-white placeholder:text-white/45 focus:border-accent" />
              <input type="email" placeholder="Email address" className="input-base border-white/15 bg-white/10 text-white placeholder:text-white/45 focus:border-accent" />
              <textarea
                rows={5}
                placeholder="Tell us about dates, guests or the type of stay you need"
                className="input-base resize-none border-white/15 bg-white/10 text-white placeholder:text-white/45 focus:border-accent"
              />
              <button
                type="button"
                className="inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-accent px-5 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white hover:bg-[#e0883d]"
              >
                <MessageSquare size={18} />
                Send inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
