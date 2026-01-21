import { CreditCard, Zap, Globe, ShieldCheck, UserPlus, Wallet, CheckCircle } from 'lucide-react';
import { CarouselSlide, Feature, BlogPost, StatItem } from '@/types';

export const SLIDES: CarouselSlide[] = [
  {
    id: 1,
    title: "Global Utility Payments",
    description: "Settle electricity, internet, and essential bills across 150+ countries instantly.",
    imageUrl: "https://picsum.photos/seed/pay1/800/600"
  },
  {
    id: 2,
    title: "Instant Cross-Border Transfers",
    description: "Send money to family and business partners globally with industry-leading exchange rates.",
    imageUrl: "https://picsum.photos/seed/pay2/800/600"
  },
  {
    id: 3,
    title: "Secured Digital Assets",
    description: "Manage your portfolio with multi-layer encryption and real-time fraud monitoring.",
    imageUrl: "https://picsum.photos/seed/pay3/800/600"
  }
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Smart Utility Hub",
    description: "Automate your monthly subscriptions and utility payments with one-click settlements.",
    icon: <Zap className="w-6 h-6" />
  },
  {
    id: 2,
    title: "Borderless Banking",
    description: "Multi-currency wallets that allow you to receive and send funds in over 40 major currencies.",
    icon: <Globe className="w-6 h-6" />
  },
  {
    id: 3,
    title: "Intelligent Tracking",
    description: "Granular expense categorization and real-time alerts to keep your budget on track.",
    icon: <ShieldCheck className="w-6 h-6" />
  }
];

export const HOW_IT_WORKS = [
  {
    id: 1,
    title: "Onboard",
    description: "Create your account in under 60 seconds using your smartphone.",
    icon: <UserPlus className="w-8 h-8" />
  },
  {
    id: 2,
    title: "Deposit",
    description: "Top up your wallet via bank transfer, card, or digital assets.",
    icon: <Wallet className="w-8 h-8" />
  },
  {
    id: 3,
    title: "Execute",
    description: "Send, spend, or save instantly with institutional-grade security.",
    icon: <CheckCircle className="w-8 h-8" />
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    category: "Financial Strategy",
    title: "Maximizing Your Global Purchasing Power",
    excerpt: "Learn how to leverage multi-currency wallets to avoid predatory exchange fees during international travel.",
    imageUrl: "https://picsum.photos/seed/blog1/400/250"
  },
  {
    id: 2,
    category: "Security Insights",
    title: "Zero-Trust Architecture in Modern Fintech",
    excerpt: "A deep dive into how we protect your transactions using biometric auth and decentralized ledger checks.",
    imageUrl: "https://picsum.photos/seed/blog2/400/250"
  },
  {
    id: 3,
    category: "Ecosystem Updates",
    title: "Expanding Our European Footprint",
    excerpt: "Flippay is now fully integrated with SEPA, enabling instant Euro transfers for all global users.",
    imageUrl: "https://picsum.photos/seed/blog3/400/250"
  }
];

export const STATS: StatItem[] = [
  { label: "Active Users", value: "2.4", suffix: "M+" },
  { label: "Global Markets", value: "150", suffix: "+" },
  { label: "Daily Transactions", value: "850", suffix: "K+" },
  { label: "Uptime SLA", value: "99.9", suffix: "%" }
];
