'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { STATS } from '@/lib/constants';

interface CounterProps {
  value: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ value, duration = 2 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Parse the numeric value (handles integers and floats)
  const targetNumber = parseFloat(value);
  const isFloat = value.includes('.');
  
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    if (isFloat) {
      return latest.toFixed(1);
    }
    return Math.floor(latest).toLocaleString();
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, targetNumber, {
        duration: duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, targetNumber, count, duration]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Stats = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 md:gap-x-12 text-center">
          {STATS.map((stat, i) => (
            <div 
              key={i} 
              className="flex flex-col items-center justify-center space-y-3 group"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight flex items-baseline">
                <Counter value={stat.value} />
                <span className="text-indigo-600 ml-0.5">{stat.suffix}</span>
              </div>
              <p className="text-[11px] sm:text-xs font-bold text-slate-400 uppercase tracking-[0.2em] whitespace-nowrap">
                {stat.label}
              </p>
              
              {/* Subtle underline decoration */}
              <motion.div 
                initial={{ width: 0 }}
                whileInView={{ width: "40px" }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (i * 0.1), duration: 0.8 }}
                className="h-1 bg-indigo-50 rounded-full group-hover:bg-indigo-200 transition-colors mt-2"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
