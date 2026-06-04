# IC Creative Platform — Storybook

A Storybook-based single-page application for the Ingka Centres Creative Platform.

## Project Structure

```
src/
├── components/
│   ├── global.css              # Design tokens & fonts
│   ├── HeroSection.jsx         # Section 1: Full-viewport hero video
│   ├── IntroSection.jsx        # Section 2: Platform intro + PDF download
│   ├── GuidelinesSection.jsx   # Section 3: Visual / Copy / Do's & Don'ts cards
│   ├── WhyPlatformSection.jsx  # Section 4: Three yellow pillar cards
│   ├── ActivationSection.jsx   # Section 5: Scrolling image strips
│   └── CreativePlatformPage.jsx # Full SPA page combining all sections
└── stories/
    ├── HeroSection.stories.js
    ├── IntroSection.stories.js
    ├── GuidelinesSection.stories.js
    ├── WhyPlatformSection.stories.js
    ├── ActivationSection.stories.js
    └── CreativePlatformPage.stories.js   ← Main full-page story
```

## Getting Started

```bash
npm install
npm run storybook        # Dev server at http://localhost:6006
npm run build-storybook  # Build to storybook-static/
```

## Replacing Placeholder Media

### Hero Video
Pass as prop: `<CreativePlatformPage videoSrc="YOUR_VIDEO_URL" />`

### Activation Images
```js
activationImages: {
  0: ['url1', 'url2', ...],  // Row 1 — Communicating moments of togetherness
  1: ['url1', 'url2', ...],  // Row 2 — Creating new moments of togetherness
  2: ['url1', 'url2', ...],  // Row 3 — Communicating seasonal content
  3: ['url1', 'url2', ...],  // Row 4 — Brand activation highlights
}
```

### PDF Download
`pdfDownloadUrl: 'https://your-cdn.com/creative-platform.pdf'`

## Deploy to Azure Static Web Apps

1. Push this repo to GitHub
2. Create an Azure Static Web App — link to GitHub
3. Set App location: `/`, Output location: `storybook-static`
4. Add `AZURE_STATIC_WEB_APPS_API_TOKEN` to GitHub Secrets
5. Push to `main` — GitHub Actions auto-builds and deploys

Then add your Azure URL as an external link in Bynder.

© Ingka Holding B.V. 2025. All rights reserved.
