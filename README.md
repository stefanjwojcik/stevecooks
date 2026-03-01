# Pescatarian Cooking Classes

A retro-styled cooking education website featuring pescatarian recipes and techniques across Anglo, Mediterranean, and Asian cuisines. Built with Next.js and featuring a vibrant 80s/90s neon pastel aesthetic with pixelated graphics.

## Features

- **7 Cooking Modules**: Proteins, Grains, Bread, Broths, Salads, Sauces, and Complete Meals
- **Video Integration**: YouTube videos embedded in lessons via iframes
- **Markdown Content**: Easy-to-update lessons using Markdown with YAML frontmatter
- **Retro Aesthetic**: Neon pastel colors with pixelated icons and 80s/90s styling
- **Responsive Design**: Mobile-friendly layout
- **Static Generation**: Fast, SEO-friendly pre-rendered pages

## Getting Started

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
stevecooks/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Homepage
│   ├── module/[moduleId]/        # Module listing pages
│   └── module/[moduleId]/[lessonSlug]/  # Individual lesson pages
├── components/                   # React components
│   ├── PixelIcon.tsx            # Retro pixelated icons
│   ├── YouTubeEmbed.tsx         # Video embedding component
│   ├── ModuleCard.tsx           # Module display cards
│   └── LessonCard.tsx           # Lesson display cards
├── content/modules/             # Lesson content (Markdown files)
│   ├── proteins/
│   ├── grains/
│   ├── bread/
│   ├── broths/
│   ├── salads/
│   ├── sauces/
│   └── meals/
├── lib/                         # Utilities
│   └── content.ts               # Content parsing and management
└── public/                      # Static assets
```

## Adding Content

See [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) for detailed instructions on adding and managing lesson content.

### Quick Example

Create a new lesson file in `content/modules/{module-name}/`:

```markdown
---
title: "Perfect Pasta"
module: "meals"
order: 1
icon: "meal"
videos:
  - url: "https://www.youtube.com/embed/VIDEO_ID"
    title: "How to Cook Perfect Pasta"
---

# Perfect Pasta

Your lesson content here...
```

## Design System

### Color Palette

- **Neon Colors**: Pink (#FF6EC7), Blue (#5DFDFF), Purple (#C77DFF), Yellow (#FFEA00), Green (#39FF14), Orange (#FF9E44)
- **Pastel Colors**: Light variations of the neon colors
- **Background**: Dark purple gradient (#1a0033 to #0d0019)

### Typography

- **Headings**: Press Start 2P (pixelated retro font)
- **Body**: System sans-serif fonts

### Components

- Pixelated borders with drop shadows
- Neon glow text effects
- Retro grid background pattern
- Pixel-art style icons (fish, tofu, grains, etc.)

## Technologies

- **Next.js 16**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Gray Matter**: YAML frontmatter parser
- **Marked**: Markdown to HTML converter

## Module Topics

1. **Cooking Proteins**: Tofu, seitan, TVP, salmon, shrimp, tilapia
2. **Cooking Grains**: Rice, lentils, quinoa, etc.
3. **Basics of Bread**: Bread-making fundamentals
4. **Vegetable-Based Broths**: Broths across cultures
5. **Salads**: Fresh salad techniques and recipes
6. **Essential Sauces**: Sauces from around the world
7. **Bringing It All Together**: Complete meal preparation

## Deployment

### GitHub Pages (Recommended)

This site is configured for automatic deployment to GitHub Pages:

1. Push your code to GitHub
2. Enable GitHub Pages in repository Settings → Pages
3. Select "GitHub Actions" as the source
4. The site will auto-deploy on every push to `main`

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

### Other Hosting Options

The site can also be deployed to:
- **Vercel**: `npm run build` then deploy the `out/` directory
- **Netlify**: Same as Vercel
- **Any static host**: Upload the `out/` directory after building

## Development

### Adding a New Module

1. Create directory in `content/modules/`
2. Add module name to `lib/content.ts` in the `moduleNames` object
3. Create lesson files in the new directory

### Customizing Icons

Edit `components/PixelIcon.tsx` to add or modify pixelated SVG icons.

### Styling

Global styles and CSS variables are in `app/globals.css`.

## License

This project is open source and available under the MIT License.
