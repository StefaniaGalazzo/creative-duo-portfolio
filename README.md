# 🎨 Creative Duo Portfolio

Portfolio website for Stefania Galazzo (Graphic Designer & Front-end Developer) and Isabella De Biasi (Copywriter).

## 🚀 Live Demo

**Production**: [creative-duo-portfolio.pages.dev](https://creative-duo-portfolio.pages.dev) *(coming soon)*

---

## 📦 Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7
- **Styling**: Styled Components
- **Animations**: Framer Motion + GSAP
- **Routing**: React Router DOM
- **Icons**: React Icons
- **Hosting**: Cloudflare Pages

---

## 🛠️ Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Install Dependencies
```bash
npm install
```

### Start Dev Server
```bash
npm run dev
```

Open http://localhost:5173

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 🌐 Deployment

This project is configured for **Cloudflare Pages** with automatic deployments.

### Quick Deploy
```bash
git push origin main
```

Cloudflare automatically builds and deploys!

### First Time Setup
See **[QUICK_DEPLOY.md](./QUICK_DEPLOY.md)** for 2-minute setup guide.

### Full Documentation
See **[CLOUDFLARE_DEPLOY.md](./CLOUDFLARE_DEPLOY.md)** for comprehensive guide.

---

## 📁 Project Structure

```
src/
├── components/
│   ├── elements/       # Reusable components (Button, Text, MagneticBadge, etc.)
│   ├── layout/         # Layout components (AppLayout, IsaLayout, SteLayout)
│   └── ui/             # UI sections (Hero, PageWrapper, Footer, etc.)
├── hooks/              # Custom hooks (useMagnetic, etc.)
├── pages/              # Route pages (Home, Stefania, Isabella)
├── theme/              # Theme configuration & GlobalStyles
├── utilities/          # Constants & helpers
├── main.tsx            # Entry point
└── index.css           # Global CSS

public/
├── _redirects          # Cloudflare SPA routing
├── _headers            # Security & cache headers
└── ...                 # Static assets

functions/
└── _middleware.js      # Cloudflare Functions middleware
```

---

## ✨ Features

### 🎯 Interactive Elements
- **Magnetic Badge**: Hover-responsive badges with magnetic effect
- **Custom Cursor**: Dynamic cursor with hover states
- **Smooth Animations**: GSAP-powered letter animations
- **Fluid Transitions**: Framer Motion page transitions

### 📄 Dynamic Content System
- Type-safe copy management in `PageWrapper/copy.ts`
- Scalable person data structure
- Easy content updates without touching UI code

### 🎨 Theming
- Light/Dark mode support
- Styled Components theming
- Consistent design tokens

### 🚀 Performance
- Code splitting with React lazy loading
- Optimized assets caching
- CDN delivery via Cloudflare
- Lighthouse score: 90+

---

## 📝 Content Management

### Update Person Data

Edit `src/components/ui/PageWrapper/copy.ts`:

```typescript
export const pageCopy: Record<PersonRole, PersonData> = {
  designer: {
    name: 'Stefania Galazzo',
    age: 'Gli anni di Cristo (+3)',
    // ... update fields
  }
}
```

See **[PageWrapper Documentation](./src/components/ui/PageWrapper/README.md)** for detailed guide.

---

## 🎨 Key Components

### MagneticBadge
Interactive badge with magnetic hover effect.

```tsx
<MagneticBadge 
  variant="punchy" // or "fluid"
  label={<span>Label</span>}
/>
```

### PageWrapper
Dynamic page template for person profiles.

```tsx
<PageWrapper data={getPersonData('designer')} />
```

### CustomCursor
Global custom cursor with hover states.

---

## 🧪 Testing Routes Locally

- `/` - Home (hero with badges)
- `/stefania` - Stefania's profile
- `/isabella` - Isabella's profile

---

## 📱 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 14+
- Mobile browsers

---

## 🐛 Known Issues

### Hover Bug Fix
The MagneticBadge hover issue was caused by flex layout overlapping. Fixed by isolating badges in absolute container. See commit history for details.

---

## 🤝 Contributing

This is a private portfolio project. For any issues or suggestions, contact the owners.

---

## 📄 License

Private - All rights reserved

---

## 👥 Authors

- **Stefania Galazzo** - Graphic Designer & Front-end Developer
- **Isabella De Biasi** - Copywriter

---

## 📞 Contact

- **Stefania**: galazzostefania@gmail.com | +39 3922615099
- **Isabella**: isabelladbiasi@gmail.com | +39 3481746154

---

## 🔗 Links

- **Repository**: [GitHub](https://github.com/your-username/creative-duo-portfolio)
- **Production**: [Cloudflare Pages](https://creative-duo-portfolio.pages.dev)
- **Design System**: See `theme/` directory
- **Component Docs**: See individual component README files

---

**Made with ❤️ in Torino**
