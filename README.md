# Sunova - Design Subscription Service Website

A modern, conversion-focused agency website for Sunova, a premium design subscription service. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern SaaS Design**: Clean, minimal, premium aesthetic with bold typography
- **Responsive Layout**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations and micro-interactions
- **Interactive Components**: GlareCard effects, FlipWords, and CircularRevealHeading
- **Conversion-Focused**: Strategic CTAs and user journey optimization
- **Performance Optimized**: Fast loading with optimized images and code

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: Custom shadcn-style components
- **Build Tool**: Vite
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                    # Reusable UI components
│   │   ├── flip-words.tsx    # Animated text transitions
│   │   ├── circular-reveal-heading.tsx  # Interactive circular display
│   │   ├── animated-footer.tsx          # Wave-animated footer
│   │   ├── glare-card.tsx               # Portfolio showcase cards
│   │   ├── hero.tsx                     # Shader-based hero section
│   │   ├── pricing-table.tsx            # Subscription plans table
│   │   ├── button.tsx                   # Button component
│   │   └── badge.tsx                    # Badge component
│   ├── SunovaHero.tsx        # Main hero section
│   ├── SocialProof.tsx       # Statistics and social proof
│   ├── Benefits.tsx          # Service benefits showcase
│   ├── Process.tsx           # 3-step workflow
│   ├── ServicesShowcase.tsx  # Design services grid
│   ├── Portfolio.tsx         # Work showcase with GlareCard
│   ├── Comparison.tsx        # Sunova vs. competition
│   ├── Pricing.tsx           # Subscription plans
│   ├── FAQ.tsx               # Collapsible FAQ section
│   ├── Contact.tsx           # Contact form and info
│   └── SunovaFooter.tsx      # Animated footer
├── lib/
│   └── utils.ts              # Utility functions
├── App.jsx                   # Main application component
├── main.jsx                  # Application entry point
└── index.css                 # Global styles and Tailwind
```

## 🎯 Key Sections

1. **Hero Section**: "A Dedicated Design Team for SaaS Leaders"
2. **Social Proof**: 95+ Brands Served, 8+ Years Experience
3. **Benefits**: Conversion-focused design, fast turnaround, affordability
4. **Process**: 3-step workflow (Choose Plan → Submit Request → We Deliver)
5. **Services**: Website design, mobile apps, branding, social media, etc.
6. **Portfolio**: Interactive work showcase with GlareCard effects
7. **Comparison**: Sunova vs. Full-time designers vs. Other agencies
8. **Pricing**: Subscription plans + one-time packages
9. **FAQ**: Collapsible accordion with common questions
10. **Contact**: Form with project details and contact information

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm 8+

### 1. Clone the repository
```bash
git clone <repository-url>
cd sunova-website
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### 4. Build for production
```bash
npm run build
```

## 🔧 Dependencies

### Core Dependencies
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `framer-motion`: ^12.23.12
- `lucide-react`: ^0.541.0

### UI Dependencies
- `@radix-ui/react-slot`: For button component
- `class-variance-authority`: For component variants
- `@paper-design/shaders-react`: For shader effects

### Development Dependencies
- `typescript`: ^5.9.2
- `tailwindcss`: ^3.4.0
- `vite`: ^5.0.8
- `@vitejs/plugin-react`: ^4.2.1

## 🎨 Design System

### Color Palette
- **Primary**: Cyan (#06b6d4) to Orange (#f97316) gradients
- **Neutral**: Slate scale (#f8fafc to #0f172a)
- **Accent**: Green (#10b981), Purple (#8b5cf6), Pink (#ec4899)

### Typography
- **Headings**: Bold, large scale (text-3xl to text-8xl)
- **Body**: Inter font family, readable line heights
- **Weights**: Light (300), Normal (400), Medium (500), Semibold (600), Bold (700)

### Components
- **Cards**: Rounded corners (rounded-2xl), soft shadows, hover effects
- **Buttons**: Gradient backgrounds, rounded-full, smooth transitions
- **Forms**: Clean inputs, focus states, validation styling

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid Systems**: Responsive grid layouts that adapt to screen size
- **Touch Friendly**: Optimized for touch interactions on mobile

## 🚀 Performance Features

- **Lazy Loading**: Components load as they come into view
- **Optimized Images**: Unsplash images with appropriate sizing
- **Smooth Scrolling**: CSS scroll-behavior for better UX
- **Animation Optimization**: Framer Motion with proper exit animations

## 🔍 SEO & Accessibility

- **Semantic HTML**: Proper heading hierarchy and semantic elements
- **Alt Text**: Descriptive alt text for all images
- **Focus States**: Visible focus indicators for keyboard navigation
- **ARIA Labels**: Proper accessibility attributes where needed

## 🎭 Animation System

- **Entrance Animations**: Fade in and slide up effects
- **Hover States**: Smooth transitions on interactive elements
- **Scroll Triggers**: Animations triggered by scroll position
- **Micro-interactions**: Subtle animations for better engagement

## 📊 Analytics & Tracking

The website is ready for analytics integration. Common tracking points include:
- CTA button clicks
- Form submissions
- Pricing plan views
- Portfolio project interactions
- Contact form engagement

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support or questions:
- Email: hello@sunova.design
- Create an issue in the repository
- Check the FAQ section on the website

## 🔮 Future Enhancements

- Dark mode toggle
- Blog section
- Client testimonials
- Live chat integration
- Advanced analytics dashboard
- Multi-language support
- A/B testing framework

---

Built with ❤️ by the Sunova team