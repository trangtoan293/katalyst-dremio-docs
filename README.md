# Dremio Documentation Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Local Development

```bash
npm install
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory.

## Deploy to Vercel

### Setup

1. **Install Vercel CLI** (optional, for local testing):
   ```bash
   npm i -g vercel
   ```

2. **Get Vercel credentials**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Create a new project or use existing one
   - Go to Project Settings → General → Copy `Project ID`
   - Go to [Vercel Tokens](https://vercel.com/account/tokens) → Create Token
   - Get your `Organization ID` from [Vercel Account Settings](https://vercel.com/account)

3. **Add GitHub Secrets**:
   Go to your GitHub repo → Settings → Secrets and variables → Actions → New repository secret:

   | Secret Name | Value |
   |------------|-------|
   | `VERCEL_TOKEN` | Your Vercel token |
   | `VERCEL_ORG_ID` | Your Vercel Organization ID |
   | `VERCEL_PROJECT_ID` | Your Vercel Project ID |

4. **Push to main branch**:
   ```bash
   git add .
   git commit -m "Setup Vercel deployment"
   git push origin main
   ```

The GitHub Action will automatically build and deploy to Vercel on every push to `main`.

### Manual Deploy (optional)

```bash
vercel --prod
```

## Project Structure

- `/docs` - All documentation content
- `/src` - Custom components and CSS
- `/static` - Static assets
- `/build` - Production build output

## Configuration

- `docusaurus.config.ts` - Main Docusaurus configuration
- `vercel.json` - Vercel deployment configuration (SPA routing)
- `.github/workflows/deploy-vercel.yml` - GitHub Actions CI/CD workflow
