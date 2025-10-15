# Deployment Guide

## Quick Start (Local)

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Done! No build process required.

## Deployment Options

### Option 1: GitHub Pages (Recommended - Free)

1. Create a new GitHub repository
2. Push all files to the repository
3. Go to repository Settings → Pages
4. Select branch: `main` (or `master`)
5. Your site will be live at: `https://yourusername.github.io/repository-name`

**Steps:**
```bash
git init
git add .
git commit -m "Initial commit: Portfolio website"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Option 2: Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Sign up/Login
3. Drag and drop the project folder
4. Your site is live instantly!
5. Get a free subdomain or add your custom domain

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy
```

### Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login
3. Import your GitHub repository or upload files
4. Deploy automatically

**Or use Vercel CLI:**
```bash
npm install -g vercel
vercel
```

### Option 4: Traditional Web Hosting

1. Choose a hosting provider (Hostinger, Bluehost, GoDaddy, etc.)
2. Upload all files via FTP/File Manager
3. Ensure `index.html` is in the root directory
4. Access via your domain

## Custom Domain Setup

### For GitHub Pages:
1. Add a `CNAME` file with your domain name
2. Configure DNS with your domain provider
3. Add A records or CNAME record

### For Netlify/Vercel:
1. Go to Domain Settings
2. Add your custom domain
3. Follow the DNS configuration instructions

## Performance Optimization

Before deployment, consider:

1. **Image Optimization**
   - Compress `img.jpg` using TinyPNG or similar
   - Consider using WebP format

2. **Minification** (Optional)
   - Minify CSS and JavaScript for production
   - Use tools like UglifyJS or CSS Minifier

3. **CDN** (Already using)
   - Font Awesome and Google Fonts are served from CDN
   - Fast loading globally

## SSL Certificate

All recommended platforms (GitHub Pages, Netlify, Vercel) provide **free SSL certificates** automatically.

## Testing Before Deployment

1. Test on different browsers (Chrome, Firefox, Safari, Edge)
2. Test on mobile devices
3. Check all links work correctly
4. Test contact form
5. Test resume download
6. Test theme toggle

## SEO Optimization

Already included:
- ✅ Meta description
- ✅ Semantic HTML
- ✅ Proper heading hierarchy
- ✅ Alt tags for images
- ✅ Fast loading speed

Additional steps:
1. Submit to Google Search Console
2. Create a sitemap.xml
3. Add Google Analytics (optional)

## Contact Form Email Service (Advanced)

For better email handling, integrate:

1. **Formspree** (Free tier available)
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```

2. **EmailJS** (Free tier: 200 emails/month)
   - Sign up at emailjs.com
   - Add email service
   - Update JavaScript code

3. **Netlify Forms** (If using Netlify)
   - Add `netlify` attribute to form
   - Receive emails directly

## Support

For issues or questions:
- Email: rmbharathi521@gmail.com
- LinkedIn: linkedin.com/in/siva-bharathi-m-b90339296

---

**Good luck with your portfolio! 🚀**
