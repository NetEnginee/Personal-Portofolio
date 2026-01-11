# Personal Portfolio - Badil Arrohman

![Portfolio Preview](assets/image/project/personal%20portofolio.webp)

> **"Crafting ideas into real experience."**

Website portofolio pribadi yang dirancang untuk menampilkan perjalanan saya sebagai **Frontend Developer** dan **Network Engineer**. Proyek ini dibangun dengan fokus pada desain antarmuka yang modern (Dark Mode), responsif, dan performa tinggi dengan **Lighthouse Score 100/100**.

🔗 **Live Demo:** [badil-portofolio.netlify.app](https://badil-portofolio.netlify.app/)

---

## 👨‍💻 About Me

Saya **Muhammad Badil Arrohman**, seorang mahasiswa Sistem Informasi di **Universitas Pamulang Serang**. Saya memiliki ketertarikan mendalam dalam menghubungkan dunia pengembangan web (Frontend) dengan infrastruktur jaringan (Network Engineering).

- 🔭 I'm currently working on **Personal Projects & Network Labs**
- 🌱 I'm currently learning **Python, CyberSecurity, Advanced MikroTik, & Cisco**
- 🎓 **Education:** Information System Student

---

## 🚀 Features

Website ini dilengkapi dengan berbagai fitur modern untuk memastikan pengalaman pengguna terbaik:

- ✅ **Responsive Design:** Tampilan fleksibel untuk Desktop, Tablet, dan Mobile
- ✅ **Dark Mode UI:** Skema warna `#121212` dengan aksen Emas (`#d4af37`)
- ✅ **Performance Optimized:** Lighthouse Score 100/100 (Performance, SEO, Best Practices)
- ✅ **SEO Optimized:** Meta Tags, Schema.org JSON-LD, Sitemap, dan Canonical URLs
- ✅ **HTTPS Secured:** SSL/TLS dengan security headers (HSTS, CSP, X-Frame-Options)
- ✅ **Modular Architecture:** Component-based SCSS & JavaScript untuk maintainability
- ✅ **Blog/Knowledge Hub:** Artikel teknis dengan filtering kategori
- ✅ **Interactive Elements:**
  - Scroll Reveal Animations
  - Certificate Lightbox Modal
  - Download CV dengan Toast Notification
  - Preloader Animation
  - Dynamic Category Filtering
  - Table of Contents (TOC) untuk artikel

---

## 🛠️ Tech Stack

Proyek ini dibangun menggunakan teknologi web modern dengan arsitektur modular.

| Category        | Technology                                                    |
| :-------------- | :------------------------------------------------------------ |
| **Frontend**    | HTML5, CSS3 (Flexbox & Grid), JavaScript (ES6+ Modules)       |
| **Styling**     | SCSS (Sass), CSS Variables, Component-based Architecture      |
| **Fonts**       | Google Fonts (Plus Jakarta Sans), Boxicons                    |
| **Performance** | Lazy Loading, Preconnect, DNS Prefetch, Resource Hints        |
| **Security**    | HTTPS, HSTS, CSP, X-Frame-Options, Referrer-Policy            |
| **Blog**        | Static HTML with Category Filtering, Code Syntax Highlighting |
| **Deployment**  | Netlify (Auto-deploy from GitHub)                             |

---

## 📂 Project Structure

```bash
Personal-Portofolio (Optimized)/
├── assets/                      # Static assets
│   ├── image/
│   │   ├── admin/              # Personal photos
│   │   ├── project/            # Project screenshots (WebP)
│   │   └── certificate/        # Certificate images (WebP)
│   └── document/               # CV files (PDF)
│
├── components/                  # Reusable components
│   ├── css/                    # SCSS Components
│   │   ├── _reset.scss         # CSS reset
│   │   ├── _root.scss          # CSS variables
│   │   ├── _font.scss          # Font mixins
│   │   ├── _flexbox.scss       # Flexbox utilities
│   │   ├── _grid.scss          # Grid utilities
│   │   ├── _buttons.scss       # Button styles
│   │   ├── _cards.scss         # Card components
│   │   ├── _typography.scss    # Typography mixins
│   │   ├── _transitions.scss   # Transition effects
│   │   ├── _animations.scss    # Keyframe animations
│   │   ├── _spacing.scss       # Spacing utilities
│   │   └── _utilities.scss     # Helper utilities
│   │
│   └── javascript/             # JavaScript Modules
│       ├── inspect.js          # Developer tools blocker
│       ├── loading.js          # Preloader logic
│       ├── navigation.js       # Mobile nav & scroll active
│       ├── certificateModal.js # Certificate modal
│       ├── toast.js            # Toast notifications
│       ├── scrollReveal.js     # Scroll animations
│       └── security.js         # Security features
│
├── style/                      # Main styles
│   ├── style.scss              # Main SCSS (imports components)
│   └── style.css               # Compiled CSS
│
├── blog/                       # Knowledge Hub
│   ├── assets/                 # Blog assets
│   │   ├── programming/        # Programming images
│   │   ├── networking/         # Networking images
│   │   └── sysadmin/           # SysAdmin images
│   │
│   ├── programming/            # Programming articles
│   │   └── ATM - Java/
│   │       ├── article.html    # Article page
│   │       ├── script.js       # Article interactions
│   │       └── style.css       # Article styles
│   │
│   ├── style/                  # Blog styles
│   │   ├── _blog-variables.scss # Blog-specific variables
│   │   ├── style.scss          # Blog SCSS (imports main components)
│   │   └── style.css           # Compiled CSS
│   │
│   ├── index.html              # Blog homepage
│   └── script.js               # Blog filtering logic
│
├── index.html                  # Main portfolio page
├── script.js                   # Main entry point (imports modules)
├── netlify.toml                # Netlify config (security headers)
├── sitemap.xml                 # SEO Sitemap
├── robots.txt                  # SEO Robots config
└── README.md                   # This file
```

---

## 🎯 Featured Projects

### 1. **PomoLearn**

Timer Countdown untuk praktik Pomodoro Technique - membantu meningkatkan produktivitas belajar dan bekerja.

- **Tech Stack:** HTML, CSS, JavaScript
- **Live Demo:** [pomolearn.netlify.app](https://pomolearn.netlify.app/)

### 2. **DoLume**

Aplikasi To-Do List untuk membantu mengelola tugas sehari-hari dengan antarmuka yang clean dan intuitif.

- **Tech Stack:** HTML, CSS, JavaScript
- **Live Demo:** [dolume.netlify.app](https://dolume.netlify.app/)

### 3. **Personal Portfolio**

Website portfolio ini sendiri - menampilkan proyek, sertifikat, dan blog teknis dengan arsitektur modular.

- **Tech Stack:** HTML, SCSS, JavaScript (ES6 Modules)
- **Repository:** [GitHub](https://github.com/NetEnginee/Personal-Portofolio)
- **Live Demo:** [badil-portofolio.netlify.app](https://badil-portofolio.netlify.app/)

---

## 📝 Blog/Knowledge Hub

Bagian blog berisi artikel teknis mendalam tentang:

- **Programming:** Tutorial dan studi kasus pemrograman (Java, JavaScript, dll)
- **Networking:** Konfigurasi jaringan, MikroTik, dan troubleshooting
- **SysAdmin:** Administrasi sistem, Linux, dan best practices

**Fitur Blog:**

- ✅ Category filtering (View All, Networking, SysAdmin, Programming)
- ✅ Responsive card layout
- ✅ Table of Contents (TOC) untuk navigasi artikel
- ✅ Code syntax highlighting dengan Fira Code font
- ✅ Copy code button untuk kemudahan
- ✅ Preloader animation
- ✅ Performance optimized (Lighthouse 95-100)

**Artikel yang Tersedia:**

- [ATM Sederhana (Java CLI)](blog/programming/ATM%20-%20Java/article.html) - Tutorial membuat simulasi ATM menggunakan Java

---

## 🏆 Certifications

Portfolio ini menampilkan berbagai sertifikasi profesional:

- **MTCNA** - MikroTik Certified Network Associate
- **MTCTCE** - MikroTik Traffic Control Engineer
- **Belajar Dasar Pemrograman Web** - Dicoding Indonesia
- **Belajar Dasar Pemrograman JavaScript** - Dicoding Indonesia
- **Belajar Membuat Frontend Web** - Dicoding Indonesia
- **Financial Literacy** - Dicoding Indonesia
- **MikroTik Finalist National Competition** - Citraweb

---

## 🚀 Getting Started

### Prerequisites

- Web browser modern (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended) untuk development
- Node.js & npm (optional, untuk SCSS compilation)

### Installation

1. Clone repository ini:

```bash
git clone https://github.com/NetEnginee/Personal-Portofolio.git
```

2. Masuk ke direktori proyek:

```bash
cd Personal-Portofolio
```

3. Buka `index.html` di browser atau gunakan Live Server:

```bash
# Jika menggunakan VS Code Live Server
# Klik kanan pada index.html > Open with Live Server
```

### Development (Optional)

Jika ingin mengembangkan dengan SCSS:

```bash
# Install Sass (jika belum)
npm install -g sass

# Compile SCSS to CSS (watch mode)
sass style/style.scss style/style.css --watch

# Untuk blog
sass blog/style/style.scss blog/style/style.css --watch
```

---

## 🎨 Code Architecture

### SCSS Modular System

Project ini menggunakan arsitektur SCSS modular dengan komponen yang dapat digunakan kembali:

```scss
// Main style.scss
@use "../components/css/reset.scss";
@use "../components/css/flexbox.scss";
@use "../components/css/grid.scss";
@use "../components/css/buttons.scss";
// ... dan komponen lainnya

// Usage example
.hero__cta {
  @include buttons.btn-primary;
}
```

**Benefits:**

- ✅ DRY (Don't Repeat Yourself) principle
- ✅ Easy maintenance
- ✅ Consistent styling across pages
- ✅ Reduced code duplication (~40%)

### JavaScript Module System

JavaScript diorganisir dalam modul ES6 untuk better code organization:

```javascript
// Main script.js
import inspect from "./components/javascript/inspect.js";
import loading from "./components/javascript/loading.js";
import initNavigation from "./components/javascript/navigation.js";
// ... dan modul lainnya

// Initialize all features
inspect();
loading();
initNavigation();
```

**Benefits:**

- ✅ Separation of concerns
- ✅ Reusable components
- ✅ Easy testing
- ✅ Code reduction (~85% in main file)

---

## ⚡ Performance Optimizations

Website ini dioptimasi untuk performa maksimal:

### Main Page (Lighthouse 100/100)

- ✅ Preconnect untuk Google Fonts
- ✅ Lazy loading untuk images
- ✅ Optimized image formats (WebP)
- ✅ Minified CSS & JS
- ✅ Resource hints (dns-prefetch, preconnect)

### Blog Page (Lighthouse 95-100)

- ✅ Preconnect untuk fonts & Boxicons
- ✅ DNS prefetch untuk external resources
- ✅ Lazy loading dengan image dimensions
- ✅ Theme-color meta tag
- ✅ Proper canonical URLs

---

## 🔒 Security Features

Configured via `netlify.toml`:

- ✅ **HTTPS Enforcement** - Force all traffic to HTTPS
- ✅ **HSTS** - HTTP Strict Transport Security
- ✅ **CSP** - Content Security Policy
- ✅ **X-Frame-Options** - Clickjacking protection
- ✅ **X-Content-Type-Options** - MIME sniffing protection
- ✅ **Referrer-Policy** - Referrer information control

---

## 📱 Contact & Social Media

Terhubung dengan saya melalui:

- **Instagram:** [@zzznrts](https://www.instagram.com/zzznrts/)
- **LinkedIn:** [Muhammad Badil Arrohman](https://www.linkedin.com/in/badilll/)
- **GitHub:** [NetEnginee](https://github.com/NetEnginee)
- **Facebook:** [Dil Lagi Scrolling Fesnuk](https://www.facebook.com/DilAnakMamah)

---

## 📊 Project Statistics

- **Total SCSS Lines:** ~2,500 lines (modular components)
- **Total JS Lines:** ~800 lines (ES6 modules)
- **Components Created:** 19 (12 SCSS + 7 JS)
- **Code Reusability:** High
- **Lighthouse Score:** 100/100 (Main), 95-100 (Blog)
- **Performance Gain:** 40% SCSS reduction, 85% JS reduction

---

## 📄 License

© 2026 Badil Arrohman. All rights reserved.

---

## 🙏 Acknowledgments

- Google Fonts untuk typography yang indah
- Boxicons untuk icon set
- Netlify untuk hosting gratis dan cepat dengan auto-deploy
- Dicoding Indonesia untuk pembelajaran dan sertifikasi
- MikroTik untuk sertifikasi networking
- Sass/SCSS untuk powerful CSS preprocessing

---

## 🔄 Recent Updates (January 2026)

- ✅ Refactored SCSS to modular component-based architecture
- ✅ Refactored JavaScript to ES6 module system
- ✅ Added security headers via Netlify
- ✅ Optimized blog page for Lighthouse 95-100
- ✅ Added HTTPS enforcement
- ✅ Improved code maintainability and reusability
- ✅ Added comprehensive documentation

---

**Made with ❤️ by Badil Arrohman**
