'use client';

import { motion } from 'framer-motion';
import { Building2, CheckCircle2, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            About <span className="serif-accent font-normal text-indigo-600">Flippay</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Flippay is operated by Flipbridge Digital Limited, a registered and active company committed to providing secure and reliable financial services.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mx-auto mb-6">
              <Building2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Registered Company</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Flipbridge Digital Limited is a legally registered and active company.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mx-auto mb-6">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Active Status</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              Our company maintains active status and complies with all regulatory requirements.
            </p>
          </div>

          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mx-auto mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Trusted & Secure</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We operate with transparency and security at the core of everything we do.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-indigo-50 px-8 py-4 rounded-2xl border border-indigo-100">
            <p className="text-slate-700 font-semibold">
              <span className="text-indigo-600">Flipbridge Digital Limited</span> - Registered & Active
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
