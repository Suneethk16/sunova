# Sunova Website - Modern Building Projects Platform

A stunning, modern website built with React, Three.js, and Tailwind CSS, featuring a Vercel-like black theme design for showcasing building projects and development services.

## ✨ Features

- **Modern Dark Theme**: Sleek black theme with neon accents and glass morphism effects
- **3D Animations**: Interactive 3D backgrounds and floating elements using Three.js
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Smooth Animations**: Framer Motion powered animations and micro-interactions
- **Interactive Components**: Modern UI components with hover effects and transitions
- **Project Showcase**: Beautiful project portfolio with filtering and categorization
- **Contact Forms**: Interactive contact and booking forms with validation
- **Authentication**: Modern sign-in/sign-up modal with social login options

## 🚀 Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS with custom design system
- **3D Graphics**: Three.js + React Three Fiber
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

## 🎨 Design Features

- **Glass Morphism**: Translucent glass cards with backdrop blur effects
- **Gradient Accents**: Neon blue, purple, and pink gradient elements
- **3D Backgrounds**: Animated particle systems and floating geometric shapes
- **Smooth Transitions**: 60fps animations and micro-interactions
- **Modern Typography**: Inter and JetBrains Mono font families
- **Responsive Grid**: Auto-fitting grid layouts for optimal content display

## 📱 Responsive Design

- Mobile-first approach
- Adaptive layouts for tablets and desktops
- Touch-friendly interactions
- Optimized for all screen sizes

## 🎯 Key Sections

1. **Hero Section**: 3D animated background with floating cubes and particles
2. **Projects**: Interactive project showcase with filtering
3. **About**: Company information with 3D visualizations
4. **Services**: Service offerings with animated icons
5. **Contact**: Interactive contact forms and information
6. **Booking**: Consultation scheduling system
7. **Footer**: Comprehensive site navigation and newsletter signup

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sunova-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

## 🎨 Customization

### Colors
The design system uses a custom color palette defined in `tailwind.config.js`:
- `dark-*`: Dark theme colors
- `accent-*`: Blue accent colors
- `neon-*`: Neon accent colors (blue, purple, green, pink)

### Components
All components are built with reusability in mind and can be easily customized by modifying the props and styling.

### 3D Elements
3D components can be customized by modifying the Three.js geometries, materials, and animations in the respective component files.

## 📁 Project Structure

```
src/
├── components/
│   ├── AnimatedBackground.jsx    # 3D particle background
│   ├── FloatingCube.jsx          # 3D floating cube component
│   ├── Header.jsx                # Navigation header
│   ├── Hero.jsx                  # Hero section with 3D background
│   ├── Projects.jsx              # Project showcase
│   ├── About.jsx                 # About section
│   ├── Contact.jsx               # Contact forms
│   ├── Booking.jsx               # Consultation booking
│   ├── Footer.jsx                # Site footer
│   └── AuthModal.jsx             # Authentication modal
├── App.jsx                       # Main application component
├── main.jsx                      # Application entry point
└── index.css                     # Global styles and utilities
```

## 🌟 Performance Features

- **Lazy Loading**: Components load as needed
- **Optimized 3D**: Efficient Three.js rendering
- **Smooth Animations**: Hardware-accelerated CSS transforms
- **Responsive Images**: Optimized for different screen densities
- **Code Splitting**: Efficient bundle management

## 🔧 Development

### Adding New Components
1. Create a new component file in `src/components/`
2. Import and use Framer Motion for animations
3. Follow the established design patterns
4. Add responsive classes for mobile compatibility

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow the established color scheme
- Implement glass morphism effects where appropriate
- Ensure proper contrast ratios for accessibility

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, please contact the development team or create an issue in the repository.

---

Built with ❤️ using modern web technologies for an exceptional user experience.