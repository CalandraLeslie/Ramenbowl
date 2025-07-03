# らーめん丼 (Ramen Bowl) - Authentic Japanese Ramen House Website

<div align="center">
  <h1>🍜 らーめん丼 🍜</h1>
  <p><strong>Authentic Japanese Ramen House Experience</strong></p>
  <p>A beautifully crafted, responsive website showcasing traditional Japanese ramen culture with modern web technologies.</p>
</div>

## 📋 Table of Contents

- [🎯 Project Overview](#-project-overview)
- [✨ Features](#-features)
- [🛠️ Technologies Used](#️-technologies-used)
- [🚀 Getting Started](#-getting-started)
- [📱 Responsive Design](#-responsive-design)
- [🎨 Design Philosophy](#-design-philosophy)
- [📂 Project Structure](#-project-structure)
- [🔧 Development](#-development)
- [🌐 Browser Support](#-browser-support)
- [📝 License](#-license)

## 🎯 Project Overview

This is a modern, responsive website for a traditional Japanese ramen restaurant that has been serving authentic ramen for over 70 years. The site combines traditional Japanese aesthetics with contemporary web design principles to create an immersive digital experience that reflects the restaurant's heritage and craftsmanship.

### 🏮 Key Highlights

- **Three-Generation Heritage**: Showcasing 70+ years of ramen-making tradition
- **Authentic Japanese Design**: Traditional color palette (red, black, gold, white)
- **Mobile-First Responsive**: Optimized for all devices from mobile to desktop
- **Interactive Elements**: Smooth animations and engaging user interactions
- **Accessibility Focused**: WCAG compliant with keyboard navigation support

## ✨ Features

### 🎨 **Visual Design**
- Authentic Japanese color scheme with red, black, gold, and white
- Traditional Japanese typography using Noto Sans JP and Zen Maru Gothic fonts
- Animated elements including floating ramen bowls and steam effects
- Beautiful gradient backgrounds and card-based layouts

### 📱 **Responsive Design**
- **Mobile-First Approach**: Optimized for mobile devices
- **Hamburger Menu**: Smooth animated mobile navigation
- **Flexible Grid System**: Adapts from 3-column to 1-column layouts
- **Touch-Optimized**: 44px minimum touch targets for mobile usability
- **Responsive Typography**: Fluid font sizes using clamp() functions

### 🍜 **Content Sections**
- **Hero Section**: Eye-catching introduction with restaurant statistics
- **Philosophy**: Three-generation story and craftsmanship details
- **Menu**: Featured ramen collection with detailed descriptions
- **Reviews**: Customer testimonials and ratings
- **About**: Restaurant history timeline and chef's story
- **Contact**: Business information and location details

### 🎯 **Interactive Elements**
- Smooth scroll navigation between sections
- Animated mobile menu with staggered transitions
- Hover effects on menu items and buttons
- Scroll-to-top button with visibility toggle
- Animated floating elements and steam effects

### ♿ **Accessibility Features**
- Keyboard navigation support
- Focus indicators for interactive elements
- Proper ARIA labels and semantic HTML
- High contrast mode support
- Reduced motion preferences respected

## 🛠️ Technologies Used

### **Frontend**
- **HTML5**: Semantic markup structure
- **CSS3**: Advanced styling with flexbox, grid, and animations
- **TypeScript**: Type-safe JavaScript for interactive functionality
- **Vite**: Modern build tool for fast development and optimization

### **Fonts & Icons**
- **Google Fonts**: Noto Sans JP, Zen Maru Gothic
- **Unicode Emojis**: For visual elements and icons

### **Development Tools**
- **Vite**: Development server and build tool
- **TypeScript**: Static type checking
- **CSS**: Custom properties (variables) for maintainable styling

## 🚀 Getting Started

### **Prerequisites**
- Node.js (version 16 or higher)
- npm or yarn package manager
- Modern web browser

### **Installation**

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Ramenbowl
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173/
   ```

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

## 📱 Responsive Design

The website is fully responsive with carefully crafted breakpoints:

| Screen Size | Breakpoint | Layout |
|-------------|------------|--------|
| **Mobile Portrait** | ≤ 480px | Single column, hamburger menu |
| **Mobile Landscape** | ≤ 768px | Single column, larger touch targets |
| **Tablet** | ≤ 1024px | Two columns, adapted navigation |
| **Desktop** | ≥ 1024px | Three columns, full navigation |
| **Large Desktop** | ≥ 1400px | Expanded layouts, max-width containers |

### **Mobile Features**
- ✅ Hamburger menu with smooth animations
- ✅ Touch-friendly button sizes (44px minimum)
- ✅ Optimized font sizes for mobile reading
- ✅ Responsive images and flexible layouts
- ✅ One-handed navigation support

## 🎨 Design Philosophy

### **Color Palette**
```css
--primary-red: #DC143C      /* Traditional Japanese red */
--primary-black: #000000    /* Deep black for contrast */
--japanese-yellow: #FFD700  /* Golden yellow accents */
--pure-white: #FFFFFF       /* Clean white backgrounds */
--cream-white: #FFFEF0      /* Warm off-white */
```

### **Typography**
- **Japanese Text**: Noto Sans JP (優雅で読みやすい)
- **English Text**: Zen Maru Gothic (modern yet traditional)
- **Responsive Sizing**: clamp() functions for fluid typography

### **Design Principles**
- **Wa (和)**: Harmony between traditional and modern elements
- **Simplicity**: Clean, uncluttered layouts
- **Craftsmanship**: Attention to detail in every element
- **Respect**: Honoring Japanese cultural aesthetics

## 📂 Project Structure

```
Ramenbowl/
├── 📁 public/              # Static assets
├── 📁 src/                 # Source files
│   ├── 📄 main.ts          # Application entry point
│   ├── 📄 style.css        # Main stylesheet
│   ├── 📄 counter.ts       # Utility functions
│   └── 📄 vite-env.d.ts    # TypeScript definitions
├── 📄 index.html           # HTML template
├── 📄 package.json         # Dependencies and scripts
├── 📄 tsconfig.json        # TypeScript configuration
└── 📄 README.md           # This file
```

## 🔧 Development

### **Key Files**
- `src/main.ts`: Main application logic and DOM manipulation
- `src/style.css`: Complete styling including responsive design
- `index.html`: HTML template with metadata

### **Development Commands**
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking
npm run type-check
```

### **CSS Architecture**
- **CSS Variables**: Consistent theming and easy customization
- **Mobile-First**: Progressive enhancement for larger screens
- **BEM Methodology**: Block, Element, Modifier naming convention
- **Responsive Utilities**: Flexible grid and spacing systems

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| **Chrome** | 90+ | ✅ Full Support |
| **Firefox** | 88+ | ✅ Full Support |
| **Safari** | 14+ | ✅ Full Support |
| **Edge** | 90+ | ✅ Full Support |
| **iOS Safari** | 14+ | ✅ Mobile Optimized |
| **Android Chrome** | 90+ | ✅ Mobile Optimized |

### **Progressive Enhancement**
- Core functionality works on all modern browsers
- Enhanced animations on browsers that support them
- Graceful degradation for older browsers

## 🎯 Performance Optimizations

- **Vite Build System**: Fast builds and optimal bundling
- **CSS Optimization**: Minimal unused styles
- **Image Optimization**: Responsive images with proper loading
- **Font Loading**: Optimized Google Fonts loading
- **Lazy Loading**: Scroll-triggered animations

## 🔮 Future Enhancements

- [ ] **Online Ordering System**: Integration with food delivery platforms
- [ ] **Reservation System**: Table booking functionality
- [ ] **Multilingual Support**: English and Japanese language toggle
- [ ] **Dark Mode**: Alternative color scheme
- [ ] **Progressive Web App**: Offline functionality and app-like experience
- [ ] **Blog Section**: Articles about ramen culture and recipes
- [ ] **Virtual Tour**: 360° restaurant interior viewing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <h3>🍜 いらっしゃいませ！ Welcome to our Ramen House! 🍜</h3>
  <p>Built with ❤️ and 🍜 for ramen lovers worldwide</p>
  <p><strong>Itadakimasu!</strong> 🥢</p>
</div>

---

**Contact Information:**
- 📧 Email: info@ramenbowl.jp
- 📞 Phone: 03-1234-5678
- 📍 Address: 〒100-0001 東京都千代田区千代田1-1-1

*Created with modern web technologies to honor traditional Japanese ramen culture.*
