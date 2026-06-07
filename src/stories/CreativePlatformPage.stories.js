import CreativePlatformPage from '../components/CreativePlatformPage';
import '../components/global.css';

export default {
  title: 'IC Creative Platform/00 Full Page',
  component: CreativePlatformPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# IC Creative Platform — Full SPA

A single-page application for the Ingka Centres Creative Platform.

## Sections
1. **Hero** — Full-viewport video hero with text overlay
2. **Intro** — Platform introduction with PDF download
3. **Guidelines** — Three interactive cards (Visual, Copy, Do's & Don'ts) with full-page detail views
4. **Why Platform** — Three pillar explanation cards on dark background
5. **Activation Inspiration** — Four auto-scrolling image strips with lightbox

## Props
- \`videoSrc\`: Replace with your actual video URL (20s shop hero video)
- \`pdfDownloadUrl\`: URL to the compressed Creative Platform PDF
- \`activationImages\`: Object with row indices 0–3 containing arrays of image URLs

## Azure Deployment
Build with \`npm run build-storybook\` and host the \`storybook-static/\` folder on Azure Static Web Apps.
        `
      }
    }
  },
  argTypes: {
    videoSrc: {
      control: 'text',
      description: 'Hero video URL. Use the "20s shop hero video" version.'
    },
    pdfDownloadUrl: {
      control: 'text',
      description: 'URL to the Creative Platform PDF download.'
    },
    activationImages: {
      control: 'object',
      description: 'Row images for activation section.'
    }
  }
};

export const NoMedia = {
  name: 'Full Page (Placeholder Media)',
  args: {
    videoSrc: null,
    pdfDownloadUrl: '#',
    activationImages: {}
  }
};

export const WithSampleMedia = {
  name: 'Full Page (Sample Media)',
  args: {
    // videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    videoSrc: 'https://brandportal.ingkacentres.com/asset/664b82b7-265f-454a-ab59-5694f18212cb/mp4/Shop_HeroVideo_20s_16x9_Clean.mp4',
    pdfDownloadUrl: '#',
    activationImages: {
      0: [
        'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80',
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
        'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&q=80',
      ],
      1: [
        'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&q=80',
        'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&q=80',
        'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&q=80',
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80',
      ],
      2: [
        'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80',
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80',
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80',
        'https://images.unsplash.com/photo-1607082349566-187342175400?w=400&q=80',
      ],
      3: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80',
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&q=80',
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80',
      ]
    }
  }
};
