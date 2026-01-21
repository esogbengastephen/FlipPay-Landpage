import React from 'react';

export interface CarouselSlide {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface BlogPost {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  imageUrl: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}
