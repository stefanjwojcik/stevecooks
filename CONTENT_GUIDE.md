# Content Management Guide

## Adding New Lessons

Lessons are stored as Markdown files with YAML frontmatter in the `content/modules/` directory.

### Directory Structure

```
content/modules/
├── proteins/
├── grains/
├── bread/
├── broths/
├── salads/
├── sauces/
└── meals/
```

### Creating a New Lesson

1. Create a new `.md` file in the appropriate module directory
2. Add frontmatter at the top with lesson metadata
3. Write your lesson content in Markdown below the frontmatter

### Lesson File Format

```markdown
---
title: "Your Lesson Title"
module: "module-name"
order: 1
icon: "icon-type"
videos:
  - url: "https://www.youtube.com/embed/VIDEO_ID"
    title: "Video Title"
  - url: "https://www.youtube.com/embed/ANOTHER_VIDEO_ID"
    title: "Another Video Title"
---

# Your Lesson Content

Write your lesson content here using Markdown formatting.

## Sections

- Bullet points
- **Bold text**
- *Italic text*

### Subsections

More detailed information...
```

### Frontmatter Fields

- **title**: The lesson title (required)
- **module**: Must match the directory name (proteins, grains, bread, broths, salads, sauces, meals)
- **order**: Number to control lesson order within the module (lower numbers appear first)
- **icon**: Icon type to display (fish, tofu, grain, bread, sauce, salad, broth, meal)
- **videos**: Array of YouTube video embeds
  - **url**: YouTube embed URL (use the `/embed/` format)
  - **title**: Description of the video

### Available Icons

- `fish` / `salmon` / `shrimp` / `tilapia` - Fish/seafood
- `tofu` / `proteins` - Protein items
- `grain` / `grains` / `rice` - Grains
- `bread` - Bread
- `sauce` / `sauces` - Sauces
- `salad` / `salads` - Salads
- `broth` / `broths` - Broths
- `meal` / `meals` - Complete meals

### YouTube Video URLs

To get the embed URL for a YouTube video:
1. Find the video on YouTube
2. Copy the video ID from the URL (e.g., `dQw4w9WgXcQ`)
3. Use format: `https://www.youtube.com/embed/VIDEO_ID`

Example:
- YouTube URL: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
- Embed URL: `https://www.youtube.com/embed/dQw4w9WgXcQ`

## Module Configuration

Modules are automatically detected from the directory structure. The module names are defined in `lib/content.ts`:

```typescript
const moduleNames: { [key: string]: string } = {
  proteins: 'Cooking Proteins',
  grains: 'Cooking Grains',
  bread: 'Basics of Bread',
  broths: 'Vegetable-Based Broths',
  salads: 'Salads',
  sauces: 'Essential Sauces',
  meals: 'Bringing It All Together',
};
```

To change a module's display name, edit the `moduleNames` object in `lib/content.ts`.

## Building the Site

After adding or updating content:

```bash
npm run build
npm start
```

Or for development:

```bash
npm run dev
```

## Example Lessons

See the existing lesson files for examples:
- `content/modules/proteins/tofu-basics.md`
- `content/modules/proteins/salmon-techniques.md`
- `content/modules/grains/rice-perfection.md`
- `content/modules/sauces/essential-sauces.md`
