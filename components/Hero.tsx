'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SLIDES } from '@/lib/constants';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { scrollY } = useScroll();
  
  // Parallax effects for decorative blobs
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 100]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Decorative Blur Backgrounds with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-indigo-50 rounded-full blur-[80px] sm:blur-[120px] opacity-70 pointer-events-none"
      ></motion.div>
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-sky-50 rounded-full blur-[80px] sm:blur-[120px] opacity-70 pointer-events-none"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6 sm:gap-8 max-w-2xl text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full w-fit border border-indigo-100 mx-auto lg:mx-0">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest">Global Payments Unleashed</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] lg:leading-[1.05]">
                Pay Smarter. <br className="hidden sm:block" /> Send Faster. <br />
                <span className="serif-accent font-normal text-indigo-600">Stay Empowered.</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                The world-class financial platform built for modern living. Move money across borders, pay bills instantly, and manage your wealth with total clarity.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-indigo-600 text-white h-14 sm:h-16 px-8 sm:px-10 rounded-2xl font-bold text-base sm:text-lg shadow-2xl shadow-indigo-200 hover:bg-indigo-700 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2">
                Get Started Now
              </button>
              <button className="bg-white text-slate-900 h-14 sm:h-16 px-8 sm:px-10 rounded-2xl font-bold text-base sm:text-lg border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-100 transition-colors">
                  <Play className="w-3 h-3 fill-indigo-600 text-indigo-600 ml-0.5" />
                </div>
                See How It Works
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i} 
                    src={`https://i.pravatar.cc/100?u=user${i}`} 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-4 border-white shadow-sm"
                    alt="User"
                  />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-400">
                <span className="text-slate-900 font-bold">50k+</span> members joined this week
              </p>
            </div>
          </motion.div>

          {/* Carousel Showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="relative bg-white rounded-[2rem] sm:rounded-[3rem] p-2 sm:p-4 shadow-2xl shadow-indigo-100/50 border border-slate-100 overflow-hidden">
              <div className="relative aspect-[4/3] rounded-[1.5rem] sm:rounded-[2.2rem] overflow-hidden bg-slate-900">
                {SLIDES.map((slide, index) => (
                  <div 
                    key={slide.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-110 z-0'
                    }`}
                  >
                    <img 
                      src={slide.imageUrl} 
                      className="w-full h-full object-cover opacity-60 mix-blend-overlay"
                      alt={slide.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 sm:right-10 right-6">
                      <h3 className="text-white text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{slide.title}</h3>
                      <p className="text-slate-300 text-xs sm:text-sm">{slide.description}</p>
                    </div>
                  </div>
                ))}

                {/* Carousel Controls - Hide on small mobile */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 px-2 sm:px-4 hidden sm:flex justify-between z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={prevSlide} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-all">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button onClick={nextSlide} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/30 transition-all">
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-20">
                  {SLIDES.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setCurrentSlide(i)}
                      className={`h-1 sm:h-1.5 transition-all duration-300 rounded-full ${
                        i === currentSlide ? 'w-6 sm:w-8 bg-indigo-500' : 'w-1.5 sm:w-2 bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
