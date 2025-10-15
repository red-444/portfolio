// DOM Elements
const themeToggle = document.getElementById('theme-toggle');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contact-form');
const downloadResumeBtn = document.getElementById('download-resume');

// Theme Management
class ThemeManager {
    constructor() {
        this.currentTheme = localStorage.getItem('theme') || 'light';
        this.init();
    }

    init() {
        this.setTheme(this.currentTheme);
        this.bindEvents();
    }

    bindEvents() {
        themeToggle.addEventListener('click', () => this.toggleTheme());
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        
        // Update theme toggle icon
        const icon = themeToggle.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        
        // Add animation effect
        themeToggle.style.transform = 'scale(0.8)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    }
}

// Navigation Management
class NavigationManager {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
        this.setActiveLink();
    }

    bindEvents() {
        hamburger.addEventListener('click', () => this.toggleMobileMenu());
        navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileMenu());
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                this.closeMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
        
        // Animate hamburger
        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (hamburger.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    }

    closeMobileMenu() {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        
        const bars = hamburger.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    }

    setActiveLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');

        window.addEventListener('scroll', () => {
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (scrollY >= (sectionTop - 200)) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${current}`) {
                    link.classList.add('active');
                }
            });
        });
    }
}

// AI-Powered Animations
class AIAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.observeElements();
        this.addFloatingElements();
        this.addTypingEffect();
        this.addParticleEffect();
    }

    observeElements() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('loaded');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.project-card, .skill-category, .education-item, .stat-item').forEach(el => {
            el.classList.add('loading');
            observer.observe(el);
        });
    }

    addFloatingElements() {
        const floatingElements = document.querySelectorAll('.floating-element');
        floatingElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 1.5}s`;
        });
    }

    addTypingEffect() {
        const title = document.querySelector('.hero-title');
        const text = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }

    addParticleEffect() {
        const hero = document.querySelector('.hero');
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            this.createParticle(hero);
        }
    }

    createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--primary-color);
            border-radius: 50%;
            opacity: 0.3;
            pointer-events: none;
            animation: float ${Math.random() * 10 + 10}s linear infinite;
        `;
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 10 + 's';
        
        container.appendChild(particle);
    }
}

// Resume Download Manager
class ResumeManager {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        downloadResumeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.downloadResume();
        });
    }

    downloadResume() {
        // Create resume content
        const resumeContent = this.generateResumeContent();
        
        // Create and download PDF (using browser's print functionality)
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Sivabharathi M - Resume</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
                        .header { text-align: center; margin-bottom: 30px; }
                        .name { font-size: 24px; font-weight: bold; color: #333; }
                        .title { font-size: 18px; color: #666; margin: 10px 0; }
                        .contact { margin: 10px 0; }
                        .section { margin: 20px 0; }
                        .section h3 { color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 5px; }
                        .education-item, .project-item { margin: 15px 0; padding: 10px; background: #f9f9f9; border-radius: 5px; }
                        .skills { display: flex; flex-wrap: wrap; gap: 10px; }
                        .skill { background: #6366f1; color: white; padding: 5px 10px; border-radius: 15px; font-size: 12px; }
                        @media print { body { margin: 0; } }
                    </style>
                </head>
                <body>
                    ${resumeContent}
                </body>
            </html>
        `);
        
        printWindow.document.close();
        printWindow.focus();
        setTimeout(() => {
            printWindow.print();
            printWindow.close();
        }, 500);
    }

    generateResumeContent() {
        return `
            <div class="header">
                <div class="name">SIVABHARATHI M</div>
                <div class="title">B.Sc. Computer Science with Artificial Intelligence & Machine Learning</div>
                <div class="contact">
                    rmbharathi521@gmail.com | 9715708383<br>
                    2/45A, Ravanapuram, Udmalpet<br>
                    linkedin.com/in/siva-bharathi-m-b90339296
                </div>
            </div>

            <div class="section">
                <h3>EXECUTIVE SUMMARY</h3>
                <p>I am Sivabharathi, a B.Sc Computer Science graduate specializing in Artificial Intelligence and Machine Learning from NGM College, Pollachi. With experience in projects like banking chatbots and attendance systems.</p>
            </div>

            <div class="section">
                <h3>EDUCATION</h3>
                <div class="education-item">
                    <strong>B.Sc. Computer Science (AI & ML)</strong><br>
                    NGM College, Pollachi | 2022 – 2025<br>
                    CGPA: 7.59 (6 Semesters)
                </div>
                <div class="education-item">
                    <strong>HSC</strong><br>
                    RKR GNANODHAYA HR.SEC School, Kodinigam | 2022
                </div>
                <div class="education-item">
                    <strong>SSLC</strong><br>
                    RKR GNANODHAYA HR.SEC School, Kodinigam | 2020
                </div>
            </div>

            <div class="section">
                <h3>SKILLS</h3>
                <div class="skills">
                    <span class="skill">Problem Solving</span>
                    <span class="skill">Analytics</span>
                    <span class="skill">Critical Thinking</span>
                    <span class="skill">Game Development</span>
                    <span class="skill">Project Management</span>
                    <span class="skill">Creative</span>
                    <span class="skill">UI/UX</span>
                    <span class="skill">Adaptability</span>
                    <span class="skill">Python</span>
                    <span class="skill">Machine Learning</span>
                    <span class="skill">NLP</span>
                    <span class="skill">Neural Networks</span>
                </div>
            </div>

            <div class="section">
                <h3>LANGUAGES KNOWN</h3>
                <p>Tamil (Native) | English (Fluent) | Hindi (Basic)</p>
            </div>

            <div class="section">
                <h3>ACHIEVEMENTS</h3>
                <div class="project-item">
                    • Initiated and completed multiple AI-based projects within academic and personal timeframes.
                </div>
                <div class="project-item">
                    • Trained a custom neural network model to assist in chatbot development and other AI tasks.
                </div>
                <div class="project-item">
                    • Created and managed a gaming channel, engaging with a growing audience by producing entertaining and high-quality content.
                </div>
                <div class="project-item">
                    • Built a mobile application for tracking worker attendance using image and location data.
                </div>
                <div class="project-item">
                    • Developed a chatbot tailored for the banking sector using Natural Language Processing (NLP).
                </div>
            </div>

            <div class="section">
                <h3>DECLARATION</h3>
                <p>I hereby declare that the information provided above is true to the best of my knowledge and belief. I take full responsibility for the accuracy of the details mentioned.</p>
            </div>
        `;
    }
}

// Contact Form Manager
class ContactFormManager {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleSubmit();
        });
    }

    handleSubmit() {
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (!this.validateForm(data)) {
            return;
        }

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate sending email (in real implementation, you'd use a service like EmailJS)
        setTimeout(() => {
            this.sendEmail(data);
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            contactForm.reset();
            this.showNotification('Message sent successfully!', 'success');
        }, 2000);
    }

    validateForm(data) {
        const { name, email, subject, message } = data;
        
        if (!name.trim()) {
            this.showNotification('Please enter your name', 'error');
            return false;
        }
        
        if (!email.trim() || !this.isValidEmail(email)) {
            this.showNotification('Please enter a valid email', 'error');
            return false;
        }
        
        if (!subject.trim()) {
            this.showNotification('Please enter a subject', 'error');
            return false;
        }
        
        if (!message.trim()) {
            this.showNotification('Please enter a message', 'error');
            return false;
        }
        
        return true;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    sendEmail(data) {
        // In a real implementation, you would use a service like EmailJS, Formspree, or your own backend
        // For now, we'll create a mailto link as a fallback
        const { name, email, subject, message } = data;
        const mailtoLink = `mailto:rmbharathi521@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        
        // Open email client
        window.open(mailtoLink);
    }

    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            animation: slideIn 0.3s ease;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }
}

// Smooth Scrolling
class SmoothScrollManager {
    constructor() {
        this.init();
    }

    init() {
        this.bindEvents();
    }

    bindEvents() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
}

// Performance Optimizer
class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        this.lazyLoadImages();
        this.optimizeAnimations();
    }

    lazyLoadImages() {
        const images = document.querySelectorAll('img[data-src]');
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.remove('lazy');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }

    optimizeAnimations() {
        // Reduce animations on low-end devices
        if (navigator.hardwareConcurrency < 4) {
            document.documentElement.style.setProperty('--animation-duration', '0.1s');
        }
    }
}

// Initialize all managers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new NavigationManager();
    new AIAnimations();
    new ResumeManager();
    new ContactFormManager();
    new SmoothScrollManager();
    new PerformanceOptimizer();
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
    
    .particle {
        animation: float 20s linear infinite;
    }
    
    @keyframes float {
        0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
        10% { opacity: 1; }
        90% { opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
    
    .nav-link.active {
        color: var(--primary-color);
    }
    
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);