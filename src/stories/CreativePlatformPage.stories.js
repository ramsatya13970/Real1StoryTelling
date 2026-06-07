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
        'https://brandportal.ingkacentres.com/asset/3ed3d8aa-d044-42de-a8d5-b042ec4446a2/web_optimized_1280_landscape/Shop_Keyvisual3_rgb.jpg',
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
        'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&q=80',
      ],
      1: [
        'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&q=80',
        'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&q=80',
        'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&q=80',
        'https://brandportal.ingkacentres.com/asset/3ed3d8aa-d044-42de-a8d5-b042ec4446a2/web_optimized_1280_landscape/Shop_Keyvisual3_rgb.jpg',
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
    },
    visualImages: [
      // 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=900&q=80',
      'https://brandportal.ingkacentres.com/asset/3ed3d8aa-d044-42de-a8d5-b042ec4446a2/web_optimized_1280_landscape/Shop_Keyvisual3_rgb.jpg',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=900&q=80',
      'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80',
    ],
    copyTiles: [
      { src: 'https://brandportal.ingkacentres.com/asset/3ed3d8aa-d044-42de-a8d5-b042ec4446a2/web_optimized_1280_landscape/Shop_Keyvisual3_rgb.jpg', h: "A moment that's all about her", r: 0, c: 0 },
      { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80', h: 'Moments you can’t click and collect', r: 0, c: 1 },
      { src: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=900&q=80', h: 'Bring your best beauty advisor', r: 1, c: 0 },
      { src: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80', h: 'Some moments taste better together', r: 1, c: 1 },
      { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80', h: 'Be in the moment', r: 2, c: 0 },
      { src: 'https://images.unsplash.com/photo-1485217988980-11786ced9454?w=900&q=80', h: 'On the menu: quality time', r: 2, c: 1 },
    ],
    dosDontsPairs: [
      { do: { text: 'We focus on real moments of togetherness', src: 'https://brandportal.ingkacentres.com/asset/3ed3d8aa-d044-42de-a8d5-b042ec4446a2/web_optimized_1280_landscape/Shop_Keyvisual3_rgb.jpg' }, dont: { text: "We don't speak negatively about online shopping", src: 'https://images.unsplash.com/photo-1499336315816-097655dcfbda?w=900&q=80' } },
      { do: { text: 'We show emotional, genuine and relatable moments', src: 'https://images.unsplash.com/photo-1494526585095-c41746248156?w=900&q=80' }, dont: { text: "We don't create staged or cliché scenes", src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80' } },
      { do: { text: 'We dramatise moments that naturally lead to product', src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=900&q=80' }, dont: { text: "We don't lead with products, offers or transactions", src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=900&q=80' } },
      { do: { text: 'We are for the many', src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=900&q=80' }, dont: { text: 'We are not for the few', src: 'https://images.unsplash.com/photo-1494753948330-4cb4e3e0f3c2?w=900&q=80' } },
    ]
  }
};
