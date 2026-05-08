# Dharstec Solutions

## 🚀 Deployment Guide

### GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Prerequisites
- GitHub account with the repository set up
- Node.js and npm installed locally

#### Automatic Deployment (Recommended)

The GitHub Actions workflow automatically deploys your site whenever you push to the `main` branch.

**Steps:**
1. Push your changes to the main branch:
   ```bash
   git push origin main
   ```

2. The GitHub Actions workflow will:
   - Build the Angular application
   - Deploy to GitHub Pages automatically

3. Your site will be available at: **https://Venkatuidesigner.github.io/Dharstec**

#### Manual Deployment

To manually deploy using the CLI:

1. Build and deploy:
   ```bash
   npm run deploy
   ```

2. This will build the production version and push to the `gh-pages` branch.

#### GitHub Pages Configuration

1. Go to your repository settings: https://github.com/Venkatuidesigner/Dharstec/settings/pages
2. Under "Build and deployment", select **GitHub Actions**
3. Save the settings

#### Workflow Status

Monitor your deployments:
- Visit: https://github.com/Venkatuidesigner/Dharstec/actions
- Check the workflow runs and see deployment status

#### Troubleshooting

- **Build fails**: Check the workflow logs in GitHub Actions
- **Site not updating**: Clear your browser cache or wait a few minutes for GitHub Pages to sync
- **404 errors on routes**: Ensure base href is set correctly (`/Dharstec/` in angular.json)

#### Environment Variables

The workflow uses GitHub's default `GITHUB_TOKEN` for authentication. No additional secrets need to be configured.

---

**Repository:** https://github.com/Venkatuidesigner/Dharstec  
**Live Site:** https://Venkatuidesigner.github.io/Dharstec
