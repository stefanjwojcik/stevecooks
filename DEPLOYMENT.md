# Deployment Guide - GitHub Pages

This site is configured for automatic deployment to GitHub Pages. Follow these steps to deploy:

## Initial Setup

### 1. Push to GitHub

If you haven't already, push your code to GitHub:

```bash
git add .
git commit -m "Initial commit - pescatarian cooking classes site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Build and deployment**:
   - **Source**: Select "GitHub Actions"
4. That's it! The workflow will handle the rest.

### 3. Wait for Deployment

- The GitHub Action will automatically run when you push to the `main` branch
- Go to the **Actions** tab to watch the deployment progress
- It should complete in 2-3 minutes

### 4. Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

For example, if your username is `johndoe` and repo is `stevecooks`:
```
https://johndoe.github.io/stevecooks/
```

## How It Works

The deployment is fully automated:

1. **On Push to Main**: The workflow triggers automatically
2. **Build**: Next.js builds a static export to the `out/` directory
3. **Deploy**: The static files are deployed to GitHub Pages
4. **Live**: Your site is updated and live!

## Manual Deployment

You can also manually trigger deployment:

1. Go to **Actions** tab on GitHub
2. Click "Deploy to GitHub Pages" workflow
3. Click "Run workflow" → "Run workflow"

## Testing Locally

To test the static build locally before deploying:

```bash
# Build static export
npm run build

# The static files will be in the 'out/' directory
# You can serve them with any static server, e.g.:
npx serve out
```

## Configuration Files

- `.github/workflows/deploy.yml` - GitHub Actions workflow
- `next.config.ts` - Next.js configuration for static export
- `.nojekyll` - Tells GitHub Pages not to process files with Jekyll

## Updating Content

After you add or modify lesson content:

```bash
git add content/
git commit -m "Add new lesson: XYZ"
git push
```

The site will automatically rebuild and deploy!

## Custom Domain (Optional)

To use a custom domain:

1. In repository Settings → Pages
2. Add your custom domain
3. Create a `CNAME` file in the `public/` directory with your domain
4. Configure DNS with your domain provider

## Troubleshooting

### Site not loading?
- Check the Actions tab for build errors
- Verify GitHub Pages is enabled in Settings
- Make sure the source is set to "GitHub Actions"

### Assets not loading?
- The base path is automatically configured based on your repo name
- All assets use relative paths

### Videos not working?
- YouTube embeds should work fine on GitHub Pages
- Make sure URLs use the `/embed/` format

## Environment Variables

The deployment uses these environment variables:
- `NEXT_PUBLIC_BASE_PATH` - Automatically set to `/${{ github.event.repository.name }}`

## Development vs Production

- **Development** (`npm run dev`): No base path, runs on http://localhost:3000
- **Production** (GitHub Pages): Includes base path for your repo name

Both environments work identically thanks to the configuration!
