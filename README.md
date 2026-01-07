# PlacelyAI Website

A modern, modular Next.js website for PlacelyAI - a decision-intelligence product for real estate decisions.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
PlacelyAI/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── how-it-works/       # How It Works page
│   ├── methodology/        # Methodology page
│   ├── pricing/            # Pricing page
│   ├── about/              # About page
│   ├── contact/            # Contact/Early Access page
│   └── cities/
│       └── bentonville/    # City Intelligence page
├── components/
│   ├── layout/             # Layout components
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── home/               # Homepage sections
│       ├── Hero.tsx
│       ├── ProblemSection.tsx
│       ├── DifferenceSection.tsx
│       ├── HowItWorksSection.tsx
│       ├── ExampleInsight.tsx
│       ├── WhoIsItFor.tsx
│       └── CTASection.tsx
└── public/                 # Static assets
```

## 🎨 Design Philosophy

The website is designed to be:
- **Calm & Professional**: Not flashy, but trustworthy
- **Modular**: Reusable components for easy maintenance
- **Responsive**: Works beautifully on all devices
- **Fast**: Optimized with Next.js 14 App Router

## 🛠️ Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations (ready to use)
- **Lucide React** - Beautiful icons

## 📝 Pages

- **Home** (`/`) - Main landing page with all key sections
- **How It Works** (`/how-it-works`) - Explains the product
- **Bentonville** (`/cities/bentonville`) - City intelligence page
- **Methodology** (`/methodology`) - Trust-building page
- **Pricing** (`/pricing`) - Simple pricing structure
- **About** (`/about`) - Mission and values
- **Contact** (`/contact`) - Early access form

## 🎯 Key Features

- ✅ Fully responsive design
- ✅ Modern, clean UI inspired by Ready.so
- ✅ Modular component architecture
- ✅ SEO-friendly structure
- ✅ TypeScript for type safety
- ✅ Accessible components

## 🚢 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy!

Or build for production:
```bash
npm run build
npm start
```

## 📦 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme. The primary color is currently set to blue (`primary-600`).

### Content

All content is in the component files. Edit them directly to update text, features, and sections.

### Adding New Pages

1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Update the Header navigation if needed

## 🔄 Next Steps

- [ ] Add real form handling for contact page
- [ ] Integrate with backend API
- [ ] Add interactive map component
- [ ] Implement dark mode (if needed)
- [ ] Add analytics
- [ ] Set up email service

## 📄 License

Private - All rights reserved

---

Built with ❤️ for PlacelyAI

