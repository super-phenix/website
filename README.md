# Superphenix website

Landing page for the [Superphenix](https://superphenix.net) project, built with Vite, React, TypeScript, and Tailwind CSS.

## Local development

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run test
npm run build
```

## Deploy to GitHub Pages (production)

1. Create a GitHub repository and push this project (default branch `main`).
2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
4. The workflow [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) runs on every push to `main`: it installs dependencies, runs lint and tests, builds the site, copies `index.html` to `404.html` for client-side routing, and publishes the `dist` folder to Pages.

**Base URL**

- For a normal repository served at `https://<user>.github.io/<repo>/`, the workflow sets `VITE_BASE_PATH=/<repo>/` so assets and routes resolve correctly.
- For a user or organization site repository named `<user>.github.io`, it sets `VITE_BASE_PATH=/` so the site is served from the domain root.

To preview a GitHub Pages build locally:

```sh
VITE_BASE_PATH=/your-repo/ npm run build
npm run preview
```
