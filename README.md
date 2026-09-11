# YV VISUALS FX - Premium Video & Photo Editing Portfolio

A professional, cinematic editing studio website with premium black + electric blue design. Built for converting website visitors into editing clients.

## 🎬 Features

- **Premium Design**: Black background with electric blue accents and glassmorphism effects
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **Fast Loading**: Custom premium loading screen
- **Smooth Animations**: Scroll reveal effects and hover micro-interactions
- **Portfolio System**: Filterable gallery (Videos, Photos, VFX & Motion)
- **Services & Pricing**: Three-tier pricing packages with transparent rates
- **Contact Forms**: Professional inquiry form with validation
- **WhatsApp Integration**: Direct messaging to clients
- **SEO Ready**: Proper meta tags and semantic HTML
- **Accessibility**: Semantic HTML and keyboard navigation
- **Netlify Ready**: Static site ready for deployment

## 📁 Project Structure

```
yv-visuals-fx/
├── index.html           # Home page with hero section
├── portfolio.html       # Portfolio gallery with filters
├── services.html        # Services and pricing packages
├── about.html           # Company story and expertise
├── contact.html         # Contact form and inquiry options
├── css/
│   ├── style.css        # Main stylesheet (25KB+)
│   └── animations.css   # Animations and transitions (11KB+)
├── js/
│   └── main.js          # Main JavaScript (14KB+)
├── assets/              # (Ready for images, videos, etc.)
├── README.md            # Project documentation
└── .gitignore           # Git configuration
```

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/ALPHA-max641/yv-visuals-fx.git
   cd yv-visuals-fx
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

### File Paths

All files are properly organized and linked:
- HTML files link to CSS: `<link rel="stylesheet" href="css/style.css">`
- HTML files link to JS: `<script src="js/main.js"></script>`
- All paths are relative and work offline

## 🎨 Design System

### Color Palette
- **Primary**: Electric Blue (`#00d4ff`)
- **Secondary**: Deep Blue (`#0099cc`)
- **Background**: Dark Navy (`#0a0e27`)
- **Darker Background**: Almost Black (`#050812`)
- **Text Primary**: White (`#ffffff`)
- **Text Secondary**: Light Gray (`#a0aec0`)

### Glassmorphism
- Semi-transparent backgrounds with blur effects
- Premium modern aesthetic
- Used on cards, sections, and CTAs

### Typography
- Clean, modern sans-serif font
- Proper hierarchy with responsive sizes
- High contrast for accessibility

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Small Mobile**: Below 480px

## 🔧 Key Features & Functionality

### 1. **Navigation**
- Sticky navbar with logo
- Mobile hamburger menu
- Active page indicator
- Smooth scroll behavior

### 2. **Hero Section**
- Eye-catching gradient text
- Call-to-action buttons
- Professional positioning
- Animated backdrop

### 3. **Portfolio System**
- Filter by category (All, Videos, Photos, VFX & Motion)
- Hover overlay effects
- Gallery grid layout
- Smooth transitions

### 4. **Pricing**
- Three pricing tiers (Starter, Professional, Premium)
- Featured "Most Popular" badge
- Clear feature lists
- Custom quote option

### 5. **Contact Form**
- Full validation
- Email verification
- Required field checking
- Success/error messages

### 6. **Animations**
- Scroll reveal animations
- Loading screen with progress bar
- Hover effects on all interactive elements
- Smooth page transitions
- Staggered animations for grid items

### 7. **WhatsApp Integration**
- Direct messaging buttons
- Customizable phone number
- One-click contact option

## 📝 Customization Guide

### Update WhatsApp Number
In all HTML files, find and replace:
```html
href="https://wa.me/1234567890"
```
With your actual WhatsApp number:
```html
href="https://wa.me/YOUR_PHONE_NUMBER"
```

### Update Email
In `contact.html`, update:
```html
<a href="mailto:info@yvvisualsfx.com">
```
With your actual email:
```html
<a href="mailto:your-email@example.com">
```

### Customize Colors
Edit `css/style.css` root variables:
```css
:root {
    --primary-color: #00d4ff;    /* Electric Blue */
    --secondary-color: #0099cc;  /* Deep Blue */
    --dark-bg: #0a0e27;          /* Dark Navy */
    /* ... etc */
}
```

### Add Portfolio Items
In `portfolio.html`, add new items:
```html
<div class="portfolio-item glass" data-category="video">
    <div class="portfolio-image">
        <div class="portfolio-placeholder">🎬</div>
        <div class="portfolio-overlay">
            <h3>Your Project Title</h3>
            <p>Your project description</p>
        </div>
    </div>
</div>
```

## 🌐 Deployment (Netlify)

### Option 1: Direct Upload
1. Open [Netlify](https://netlify.com)
2. Drag and drop the project folder
3. Site goes live instantly

### Option 2: Git Connected
1. Push to GitHub
2. Connect repository to Netlify
3. Auto-deploys on every push

### Option 3: Netlify CLI
```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📊 Performance

- **Fast Loading**: Optimized CSS and JS (~50KB combined)
- **No Dependencies**: Pure HTML/CSS/JavaScript
- **Lazy Loading Ready**: Image optimization ready
- **Mobile Optimized**: Lightweight for mobile devices
- **SEO Friendly**: Proper meta tags and structure

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus management
- Color contrast compliance
- Alt text ready for images

## 🔒 SEO Optimization

- Meta descriptions
- Open Graph tags
- Semantic HTML structure
- Mobile-friendly design
- Clean URL structure
- Fast page load times

## 📄 File Sizes

- `css/style.css` - ~25KB
- `css/animations.css` - ~11KB
- `js/main.js` - ~14KB
- Total CSS/JS - ~50KB

## 🛠️ Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📞 Support & Customization

For custom features, modifications, or deployment help:
- Update WhatsApp/email in code
- Modify colors in CSS variables
- Add your portfolio projects
- Customize pricing packages
- Add team members section

## 📄 License

This project is ready for personal and commercial use.

## 🚀 Next Steps

1. **Update Contact Info**
   - Replace WhatsApp number
   - Update email address

2. **Add Portfolio Content**
   - Replace placeholder emojis with actual images
   - Add project descriptions
   - Update video showcase

3. **Customize Branding**
   - Update company story in `about.html`
   - Modify pricing in `services.html`
   - Update social links in footer

4. **Deploy**
   - Connect to Netlify
   - Set custom domain
   - Enable SSL

## ✨ Features Ready to Use

✅ Premium loading screen  
✅ Responsive navigation  
✅ Hero section with CTA  
✅ Portfolio filtering  
✅ Pricing calculator  
✅ Contact form  
✅ About section  
✅ Smooth animations  
✅ Mobile menu  
✅ WhatsApp integration  
✅ Form validation  
✅ Scroll animations  
✅ Hover effects  
✅ Footer with links  
✅ SEO meta tags  

---

**Built with ❤️ for creative professionals**

YV VISUALS FX - Transform Your Vision Into Reality