# AR Car Showcase - Official Website

Professional startup website for AR Car Showcase - an augmented reality car experience platform.

## Tech Stack

- **React 18** - UI framework
- **Vite 5** - Build tool and dev server
- **CSS3** - Modern styling with CSS Grid and Flexbox

## Features

- Responsive design (mobile, tablet, desktop)
- Hero section with gradient background
- Features showcase
- Screenshots gallery
- System architecture overview
- Technology stack display
- Download section with GitHub links
- Professional footer

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The built files in the `dist/` folder can be deployed to any static hosting service:
- GitHub Pages
- Vercel
- Netlify
- AWS S3 + CloudFront
- Oracle Cloud Object Storage

## Project Structure

```
website/
├── src/
│   ├── components/       # React components
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Screenshots.jsx
│   │   ├── Architecture.jsx
│   │   ├── TechStack.jsx
│   │   ├── Download.jsx
│   │   └── Footer.jsx
│   ├── assets/
│   │   └── styles/       # CSS files
│   ├── App.jsx
│   └── main.jsx
├── assets/
│   ├── icons/           # Logo and icons
│   └── screenshots/     # App screenshots
├── index.html
├── package.json
└── vite.config.js
```

## License

MIT
