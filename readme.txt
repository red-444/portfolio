# Sivabharathi M - Portfolio Website

A modern, animated portfolio website built with pure HTML, CSS, and JavaScript showcasing AI/ML expertise, projects, and professional experience.

## Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dark/Light Theme**: Toggle between light and dark modes
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion-inspired animations using CSS and JavaScript
- **Interactive Elements**: Typing animation, particle background, scroll effects
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Performance Optimized**: Lazy loading, service worker, optimized assets

## Sections

1. **Hero Section**: Introduction with typing animation and social links
2. **About**: Professional summary and career objectives
3. **Skills**: Technical skills with animated progress bars and core competencies
4. **Projects**: Featured AI/ML projects with detailed descriptions
5. **Education**: Academic timeline and professional certifications
6. **Contact**: Contact information and message form
7. **Footer**: Social links and copyright

## Technologies Used

- HTML5 (Semantic markup)
- CSS3 (Flexbox, Grid, Custom Properties, Animations)
- Vanilla JavaScript (ES6+)
- Font Awesome (Icons)
- Google Fonts (Inter)
- Service Worker (Offline support)

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles and animations
├── script.js           # JavaScript functionality
├── sw.js              # Service Worker for offline support
└── README.md          # Project documentation
```

## Key Features Implementation

### Theme System
- CSS custom properties for easy theme switching
- JavaScript class for theme management
- Persistent theme preference in localStorage

### Animations
- CSS keyframe animations for smooth transitions
- Intersection Observer API for scroll-triggered animations
- Typing animation for hero section
- Particle background system

### Performance Optimizations
- Lazy loading for images
- Debounced scroll events
- Service Worker for caching
- Optimized CSS and JavaScript
- Critical resource preloading

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly navigation

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Installation & Setup

1. Download all files to a directory
2. Open `index.html` in a web browser
3. For local development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## Customization

### Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #3b82f6;
    --secondary-color: #06b6d4;
    --accent-color: #8b5cf6;
    /* ... */
}
```

### Content
Update the content directly in `index.html`:
- Personal information
- Skills and percentages
- Project details
- Education timeline
- Contact information

### Animations
Modify animation timing and effects in `styles.css`:
```css
@keyframes fade-in-up {
    /* Custom animation keyframes */
}
```

## Performance Metrics

- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Structured data markup
- Optimized images with alt text
- Clean, crawlable URLs

## Accessibility

- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Screen reader friendly
- Focus management

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Sivabharathi M**
- Email: rmbharathi521@gmail.com
- Phone: +91 9715708383
- Location: 2/45A, Ravanapuram, Udmalpet

---

Built with ❤️ for showcasing AI/ML expertise and innovation.