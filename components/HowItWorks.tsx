'use client';

import { motion } from 'framer-motion';
import { HOW_IT_WORKS } from '@/lib/constants';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">How <span className="serif-accent font-normal text-indigo-600 italic">Flippay</span> Works</h2>
          <p className="text-slate-500 font-medium">From zero to financial freedom in three simple steps.</p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-14 left-[15%] right-[15%] h-1 bg-gradient-to-r from-transparent via-slate-100 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
            {HOW_IT_WORKS.map((step, index) => (
              <motion.div 
                key={step.id} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="text-center group"
              >
                <div className="w-28 h-28 mx-auto rounded-full bg-slate-50 border-4 border-white shadow-xl shadow-slate-100 flex items-center justify-center text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  {step.icon}
                </div>
                <div className="space-y-2 px-4">
                  <h3 className="text-2xl font-bold text-slate-900">{step.id}. {step.title}</h3>
                  <p className="text-slate-500">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
