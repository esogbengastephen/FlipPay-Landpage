'use client';

import { ArrowUpRight } from 'lucide-react';
import { BLOG_POSTS } from '@/lib/constants';
import Image from 'next/image';

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between mb-16">
          <div className="space-y-2">
            <h2 className="text-4xl font-extrabold text-slate-900">From our <span className="serif-accent font-normal text-indigo-600 italic">Insights Lab</span></h2>
            <p className="text-slate-500 font-medium">Practical guides for the modern digital economy.</p>
          </div>
          <button className="hidden sm:flex items-center gap-2 text-slate-900 font-bold hover:text-indigo-600 transition-colors">
            View Articles
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="flex flex-col group cursor-pointer">
              <div className="aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 shadow-2xl shadow-slate-200 relative">
                <Image 
                  src={post.imageUrl} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                  alt={post.title}
                />
              </div>
              <div className="space-y-4 px-2">
                <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
