# Datafog Studios

A modern publishing platform with editorial infrastructure.

## Features

- 🏗️ Dynamic routing system with clean URLs (/products/:slug, /magazine/:slug)
- 📰 Magazine with article listing and full article pages
- 📦 Product pages with features, FAQs, and CTAs
- 🎨 Beautiful, responsive design
- ⚡ Fast and performant (Vite + React)

## Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Project Structure

```
src/
├── components/      # Reusable components
├── layouts/         # Layout components
├── lib/             # Utilities and data
│   ├── router.ts    # Routing system
│   ├── products-data.ts
│   └── magazine-data.ts
├── pages/           # Page components
├── routes/          # Route definitions
└── App.tsx          # Main app component
```

## Adding New Products

Edit `src/lib/products-data.ts` to add new products. The system automatically creates routes and pages for each product.

## Adding New Articles

Edit `src/lib/magazine-data.ts` to add new articles. Articles are automatically indexed and available in the magazine.

## License

All rights reserved © 2026 Datafog Studios
