import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';

// Lazy load below-the-fold components
const Features = dynamic(() => import('@/components/Features'), {
  loading: () => <div className="py-24 bg-slate-50" />,
});
const HowItWorks = dynamic(() => import('@/components/HowItWorks'), {
  loading: () => <div className="py-32 bg-white" />,
});
const Blog = dynamic(() => import('@/components/Blog'), {
  loading: () => <div className="py-24 bg-slate-50" />,
});
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="py-24 bg-white" />,
});
const CTA = dynamic(() => import('@/components/CTA'), {
  loading: () => <div className="py-24 bg-slate-50" />,
});
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="py-24 bg-white" />,
});
const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => null,
});

export default function Home() {
  return (
    <div className="min-h-screen selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Blog />
        <About />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
