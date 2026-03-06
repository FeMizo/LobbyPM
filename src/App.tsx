import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { FeaturedProperties } from './components/FeaturedProperties';
import { Experiences } from './components/Experiences';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ContactCTA } from './components/ContactCTA';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-warm-bg">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedProperties />
        <WhyChooseUs />
        <Experiences />
        <ContactCTA />
        <Testimonials />
        <Gallery />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
