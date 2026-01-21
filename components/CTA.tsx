'use client';

import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Show more detailed error message if available
        const errorMsg = data.error || 'Failed to join waitlist';
        const details = data.details ? ` (${data.details})` : '';
        throw new Error(errorMsg + details);
      }

      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-indigo-600 rounded-[2.5rem] sm:rounded-[4rem] p-8 sm:p-12 md:p-24 relative overflow-hidden group">
          {/* Decorative Grid Pattern */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none group-hover:scale-110 transition-transform duration-[10s]">
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-sky-400 rounded-full blur-[60px] sm:blur-[100px] opacity-40"></div>

          <div className="relative z-10 flex flex-col items-center text-center gap-8 sm:gap-12 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Ready to <span className="serif-accent font-normal italic">redefine</span> your payments?
            </h2>
            <p className="text-indigo-50 text-base sm:text-xl font-medium opacity-90 leading-relaxed">
              Join the 2M+ users who trust Flippay for their daily global financial operations. Fast, secure, and truly borderless.
            </p>

            <form className="w-full max-w-md flex flex-col gap-4" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com" 
                    className="w-full h-14 sm:h-16 rounded-xl sm:rounded-2xl px-6 bg-white/10 border border-white/20 text-white placeholder:text-indigo-100 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm transition-all disabled:opacity-50"
                    disabled={isSubmitting}
                  />
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="h-14 sm:h-16 px-8 sm:px-10 rounded-xl sm:rounded-2xl bg-white text-indigo-600 font-bold text-base sm:text-lg hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-0.5 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Joining...</span>
                    </>
                  ) : (
                    'Join Waitlist'
                  )}
                </button>
              </div>

              {/* Success Message */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 bg-green-500/20 border border-green-300/30 rounded-xl text-white w-full"
                  >
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium">
                      Successfully joined! Check your email for confirmation.
                    </p>
                  </motion.div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-3 p-4 bg-red-500/20 border border-red-300/30 rounded-xl text-white w-full"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm font-medium">
                      {errorMessage || 'Something went wrong. Please try again.'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>

            <p className="text-indigo-200 text-xs sm:text-sm font-medium">
              Join a community of 50,000+ early adopters. No spam, ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
