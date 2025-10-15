// DOM Elements
const themeBtn = document.getElementById('theme-btn');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const downloadResumeBtn = document.getElementById('download-resume');
const contactForm = document.getElementById('contact-form');

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
        themeBtn.addEventListener('click', () => this.toggleTheme());
    }

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        localStorage.setItem('theme', theme);
        
        // Update theme button icon
        const icon = themeBtn.querySelector('i');
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    toggleTheme() {
        const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        this.setTheme(newTheme);
        
        // Add animation effect
        themeBtn.style.transform = 'scale(0.8)';
        setTimeout(() => {
            themeBtn.style.transform = 'scale(1)';
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
        this.handleScroll();
    }

    bindEvents() {
        hamburger.addEventListener('click', () => this.toggleMobileMenu());
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    toggleMobileMenu() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    }

    handleScroll() {
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                if (document.documentElement.getAttribute('data-theme') === 'dark') {
                    navbar.style.background = 'rgba(17, 24, 39, 0.98)';
                }
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                if (document.documentElement.getAttribute('data-theme') === 'dark') {
                    navbar.style.background = 'rgba(17, 24, 39, 0.95)';
                }
            }
        });
    }
}

// Scroll Animations
class ScrollAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.observeElements();
    }

    observeElements() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Add fade-in class to elements
        const elementsToAnimate = document.querySelectorAll('.project-card, .achievement-item, .skill-category, .about-text, .contact-info');
        elementsToAnimate.forEach(el => {
            el.classList.add('fade-in');
            observer.observe(el);
        });
    }
}

// PDF Resume Generator
class ResumeGenerator {
    constructor() {
        this.init();
    }

    init() {
        if (downloadResumeBtn) {
            downloadResumeBtn.addEventListener('click', () => this.generatePDF());
        }
    }

    generatePDF() {
        // Show loading state
        const originalText = downloadResumeBtn.innerHTML;
        downloadResumeBtn.innerHTML = '<div class="loading"></div> Generating PDF...';
        downloadResumeBtn.disabled = true;

        // Create PDF content
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        
        // Set up fonts and colors
        doc.setFont('helvetica');
        
        // Header
        doc.setFontSize(24);
        doc.setTextColor(99, 102, 241); // Primary color
        doc.text('SIVABHARATHI M', 20, 30);
        
        doc.setFontSize(12);
        doc.setTextColor(0, 0, 0);
        doc.text('B.Sc. Computer Science with Artificial Intelligence & Machine Learning', 20, 40);
        doc.text('rmbharathi521@gmail.com | 9715708383', 20, 50);
        doc.text('2/45A, Ravanapuram, Udmalpet', 20, 60);
        doc.text('linkedin.com/in/siva-bharathi-m-b90339296', 20, 70);
        
        // Executive Summary
        doc.setFontSize(16);
        doc.setTextColor(99, 102, 241);
        doc.text('EXECUTIVE SUMMARY', 20, 90);
        
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        const summaryText = 'I am Sivabharathi, a B.Sc Computer Science graduate specializing in Artificial Intelligence and Machine Learning from NGM College, Pollachi. With experience in projects like banking chatbots and attendance systems, I am passionate about leveraging AI to solve real-world problems.';
        doc.text(summaryText, 20, 100, { maxWidth: 170 });
        
        // Education
        doc.setFontSize(16);
        doc.setTextColor(99, 102, 241);
        doc.text('EDUCATION', 20, 130);
        
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        doc.text('B.Sc. Computer Science (AI & ML), NGM College, Pollachi', 20, 140);
        doc.text('CGPA: 7.59 (6 Semesters) | 2022 – 2025', 20, 150);
        doc.text('HSC, RKR GNANODHAYA HR.SEC School, Kodinigam | 2022', 20, 160);
        doc.text('SSLC, RKR GNANODHAYA HR.SEC School, Kodinigam | 2020', 20, 170);
        
        // Skills
        doc.setFontSize(16);
        doc.setTextColor(99, 102, 241);
        doc.text('SKILLS', 20, 190);
        
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        doc.text('Problem Solving, Analytics, Critical Thinking, Game Development,', 20, 200);
        doc.text('Project Management, UI/UX, Adaptability', 20, 210);
        
        // Languages
        doc.setFontSize(16);
        doc.setTextColor(99, 102, 241);
        doc.text('LANGUAGES KNOWN', 20, 230);
        
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        doc.text('Tamil, English, Basic Hindi', 20, 240);
        
        // Achievements
        doc.setFontSize(16);
        doc.setTextColor(99, 102, 241);
        doc.text('ACHIEVEMENTS', 20, 260);
        
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        const achievements = [
            '• Initiated and completed multiple AI-based projects within academic and personal timeframes',
            '• Trained a custom neural network model to assist in chatbot development and other AI tasks',
            '• Created and managed a gaming channel, engaging with a growing audience',
            '• Built a mobile application for tracking worker attendance using image and location data',
            '• Developed a chatbot tailored for the banking sector using Natural Language Processing (NLP)'
        ];
        
        let yPos = 270;
        achievements.forEach(achievement => {
            doc.text(achievement, 20, yPos, { maxWidth: 170 });
            yPos += 10;
        });
        
        // Declaration
        doc.setFontSize(16);
        doc.setTextColor(99, 102, 241);
        doc.text('DECLARATION', 20, 340);
        
        doc.setFontSize(11);
        doc.setTextColor(0, 0, 0);
        const declaration = 'I hereby declare that the information provided above is true to the best of my knowledge and belief. I take full responsibility for the accuracy of the details mentioned.';
        doc.text(declaration, 20, 350, { maxWidth: 170 });
        
        // Save the PDF
        doc.save('Sivabharathi_M_Resume.pdf');
        
        // Reset button state
        setTimeout(() => {
            downloadResumeBtn.innerHTML = originalText;
            downloadResumeBtn.disabled = false;
        }, 1000);
    }
}

// Email Service
class EmailService {
    constructor() {
        this.init();
    }

    init() {
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
        }
        
        // Initialize EmailJS
        if (typeof emailjs !== 'undefined') {
            emailjs.init('YOUR_PUBLIC_KEY'); // Replace with actual EmailJS public key
        }
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message')
        };

        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<div class="loading"></div> Sending...';
        submitBtn.disabled = true;

        try {
            // Send email using EmailJS
            if (typeof emailjs !== 'undefined') {
                await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                    from_name: data.name,
                    from_email: data.email,
                    subject: data.subject,
                    message: data.message,
                    to_email: 'rmbharathi521@gmail.com'
                });
            } else {
                // Fallback: Open default email client
                const mailtoLink = `mailto:rmbharathi521@gmail.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`)}`;
                window.open(mailtoLink);
            }

            // Show success message
            this.showMessage('Message sent successfully! I\'ll get back to you soon.', 'success');
            contactForm.reset();
            
        } catch (error) {
            console.error('Error sending email:', error);
            this.showMessage('Sorry, there was an error sending your message. Please try again or contact me directly.', 'error');
        } finally {
            // Reset button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }
    }

    showMessage(message, type) {
        // Remove existing messages
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        // Create new message
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        messageDiv.style.cssText = `
            padding: 15px;
            margin-top: 20px;
            border-radius: 10px;
            font-weight: 600;
            text-align: center;
            background: ${type === 'success' ? '#10b981' : '#ef4444'};
            color: white;
        `;

        contactForm.appendChild(messageDiv);

        // Remove message after 5 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 5000);
    }
}

// AI-Powered Features
class AIFeatures {
    constructor() {
        this.init();
    }

    init() {
        this.addTypingEffect();
        this.addParticleEffect();
        this.addSmartScroll();
    }

    addTypingEffect() {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const text = heroTitle.textContent;
            heroTitle.textContent = '';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    heroTitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            
            setTimeout(typeWriter, 1000);
        }
    }

    addParticleEffect() {
        const hero = document.querySelector('.hero');
        if (hero) {
            const canvas = document.createElement('canvas');
            canvas.style.position = 'absolute';
            canvas.style.top = '0';
            canvas.style.left = '0';
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            canvas.style.pointerEvents = 'none';
            canvas.style.zIndex = '0';
            hero.appendChild(canvas);

            const ctx = canvas.getContext('2d');
            const particles = [];

            const resizeCanvas = () => {
                canvas.width = hero.offsetWidth;
                canvas.height = hero.offsetHeight;
            };

            const createParticle = () => {
                return {
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 1,
                    opacity: Math.random() * 0.5 + 0.2
                };
            };

            const initParticles = () => {
                for (let i = 0; i < 50; i++) {
                    particles.push(createParticle());
                }
            };

            const animateParticles = () => {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                
                particles.forEach(particle => {
                    particle.x += particle.vx;
                    particle.y += particle.vy;
                    
                    if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                    if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;
                    
                    ctx.beginPath();
                    ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(99, 102, 241, ${particle.opacity})`;
                    ctx.fill();
                });
                
                requestAnimationFrame(animateParticles);
            };

            resizeCanvas();
            initParticles();
            animateParticles();

            window.addEventListener('resize', resizeCanvas);
        }
    }

    addSmartScroll() {
        let ticking = false;
        
        const updateScrollProgress = () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            // Update navbar background based on scroll
            const navbar = document.querySelector('.navbar');
            if (scrollPercent > 10) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                if (document.documentElement.getAttribute('data-theme') === 'dark') {
                    navbar.style.background = 'rgba(17, 24, 39, 0.98)';
                }
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                if (document.documentElement.getAttribute('data-theme') === 'dark') {
                    navbar.style.background = 'rgba(17, 24, 39, 0.95)';
                }
            }
            
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollProgress);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick);
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
        const imageObserver = new IntersectionObserver((entries, observer) => {
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

// Initialize all features when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ThemeManager();
    new NavigationManager();
    new ScrollAnimations();
    new ResumeGenerator();
    new EmailService();
    new AIFeatures();
    new PerformanceOptimizer();
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Add touch gestures for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', e => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', e => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - close mobile menu
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    }
}