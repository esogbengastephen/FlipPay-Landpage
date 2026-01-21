# Flippay Global - Modern Fintech Landing Page

A modern, responsive landing page built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Features smooth animations powered by Framer Motion and a beautiful, professional design.

## 🚀 Features

- **Modern Stack**: Next.js 15 with React 19 and TypeScript
- **Beautiful UI**: Tailwind CSS with custom fonts (Plus Jakarta Sans & Playfair Display)
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Fully Responsive**: Mobile-first design that works on all devices
- **Performance Optimized**: Next.js Image optimization and code splitting
- **Type Safe**: Full TypeScript support
- **Waitlist Integration**: Email notifications and optional Google Sheets auto-update

## 📦 Components

- **Navbar**: Sticky navigation with mobile menu
- **Hero**: Eye-catching hero section with carousel
- **Stats**: Animated statistics counter
- **Features**: Feature showcase with hover effects
- **How It Works**: Step-by-step process visualization
- **Blog**: Blog posts grid with images
- **CTA**: Call-to-action section with email form
- **Footer**: Comprehensive footer with links

## 🛠️ Tech Stack

- **Framework**: Next.js 15.1.0
- **React**: 19.0.0
- **TypeScript**: 5.7.0
- **Styling**: Tailwind CSS 3.4.17
- **Animations**: Framer Motion 11.11.11
- **Icons**: Lucide React 0.468.0

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   # Email configuration (required for waitlist)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   FROM_EMAIL=your-email@gmail.com
   TO_EMAIL=your-business-email@gmail.com
   
   # Google Sheets integration (optional)
   GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
   
   > **Note**: For Gmail, you'll need to generate an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.
   
   > **Google Sheets Setup**: See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) for detailed instructions on setting up automatic Google Sheets updates.

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme. The primary color is indigo.

### Fonts
Fonts are configured in `app/layout.tsx`. Currently using:
- Plus Jakarta Sans (sans-serif)
- Playfair Display (serif, for accents)

### Content
Edit `lib/constants.ts` to update:
- Carousel slides
- Features
- Blog posts
- Statistics
- How it works steps

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🔧 Project Structure

```
├── app/
│   ├── globals.css      # Global styles and Tailwind imports
│   ├── layout.tsx       # Root layout with fonts and metadata
│   └── page.tsx         # Main landing page
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Stats.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Blog.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── lib/
│   └── constants.ts     # All content data
├── types/
│   └── index.ts         # TypeScript type definitions
└── public/              # Static assets
```

## 🌐 Deployment

This project can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Node.js

## 📄 License

This project is private and proprietary.

## 📊 Google Sheets Integration

The waitlist form can automatically update a Google Sheet when users sign up. This is completely optional and won't affect email functionality if not configured.

**Setup Instructions**: See [GOOGLE_SHEETS_SETUP.md](./GOOGLE_SHEETS_SETUP.md) for a complete step-by-step guide.

**Quick Summary**:
1. Create a Google Sheet with column headers (Email, Date, Time, Timestamp)
2. Create a Google Apps Script webhook
3. Deploy it as a web app
4. Add the webhook URL to your `.env.local` file

## 🤝 Support

For issues or questions, please contact the development team.

---

Built with ❤️ using Next.js and Tailwind CSS
