# Sivabharathi M - Professional Portfolio Website

A modern, responsive portfolio website built with HTML5, CSS3, and JavaScript featuring AI-powered animations, dark/light theme toggle, and professional design.

## Features

### 🎨 Design & UI/UX
- **Modern Professional Design** - Clean, minimalist layout with professional color scheme
- **Dark/Light Theme Toggle** - Seamless theme switching with smooth transitions
- **Fully Responsive** - Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations** - AI-powered scroll animations and interactive elements
- **Professional Typography** - Inter font family for excellent readability

### 🚀 Functionality
- **Resume Download** - Generate and download PDF resume with one click
- **Contact Form** - Professional contact form with email integration
- **Smooth Scrolling** - Enhanced navigation with smooth scroll behavior
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Keyboard Navigation** - Full keyboard accessibility support

### 🤖 AI-Powered Features
- **Typing Animation** - Dynamic text typing effect on hero section
- **Particle Effects** - Animated background particles
- **Smart Scroll** - Intelligent scroll-based animations
- **Performance Optimization** - Automatic performance tuning based on device capabilities

### 📱 Responsive Design
- **Mobile-First Approach** - Designed for mobile devices first
- **Flexible Grid System** - CSS Grid and Flexbox for perfect layouts
- **Touch Gestures** - Swipe gestures for mobile navigation
- **Cross-Browser Compatibility** - Works on all modern browsers

## Setup Instructions

### 1. Basic Setup
1. Download or clone the repository
2. Open `index.html` in your web browser
3. The website will work immediately with all features

### 2. Email Integration (Optional)
To enable email functionality through the contact form:

1. Sign up for [EmailJS](https://www.emailjs.com/)
2. Create a new service and template
3. Replace the placeholder values in `script.js`:
   ```javascript
   emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your EmailJS public key
   await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
       // ... email data
   });
   ```

### 3. Customization
- **Colors**: Modify CSS variables in `styles.css` for custom color schemes
- **Content**: Update personal information in `index.html`
- **Animations**: Adjust animation timings in `script.js`
- **Styling**: Customize fonts, spacing, and layouts in `styles.css`

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and theme management
├── script.js           # JavaScript functionality and AI features
└── README.md           # This file
```

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Lazy Loading** - Images load only when needed
- **Optimized Animations** - Reduced animations on low-end devices
- **Efficient CSS** - Minimal CSS with maximum impact
- **Compressed Assets** - Optimized file sizes for fast loading

## Contact Information

**Sivabharathi M**
- Email: rmbharathi521@gmail.com
- Phone: +91 9715708383
- LinkedIn: [linkedin.com/in/siva-bharathi-m-b90339296](https://linkedin.com/in/siva-bharathi-m-b90339296)
- Location: 2/45A, Ravanapuram, Udmalpet

## Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript ES6+** - Modern JavaScript with classes and modules
- **Font Awesome** - Professional icons
- **Google Fonts** - Inter font family
- **jsPDF** - PDF generation for resume download
- **EmailJS** - Email service integration

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: This portfolio website is designed to showcase professional skills and experience. All information is accurate and up-to-date as of the creation date.