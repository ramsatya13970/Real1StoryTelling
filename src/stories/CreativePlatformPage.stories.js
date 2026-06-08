import CreativePlatformPage from '../components/CreativePlatformPage';
import '../components/global.css';
import DoImage1 from '../assets/images/DosAndDonts/250515 INGEA A2 EU 0197.jpg';
import DontImage1 from '../assets/images/DosAndDonts/INGKA_ImageBank_Electronics_370.jpg';
import DoImage2 from '../assets/images/DosAndDonts/INGKA_ImageBank_MPMoments_3506.jpg';
import DontImage2 from '../assets/images/DosAndDonts/iStock-1371985679.jpg';
import DoImage3 from '../assets/images/DosAndDonts/iStock-1502350201.jpg';
import DontImage3 from '../assets/images/DosAndDonts/iStock-2177780801.jpg';
import DoImage4 from '../assets/images/DosAndDonts/iStock-907976978.jpg';
import DontImage4 from '../assets/images/DosAndDonts/2025-11-25-INGKA_G_0079-3.jpg';

import Still1 from '../assets/images/Stills/2025-11-25-INGKA_A_0302_v2-2.jpg';
import Still2 from '../assets/images/Stills/2025-11-25-INGKA_B_0133-3.jpg';
import Still3 from '../assets/images/Stills/2025-11-25-INGKA_F_0152-3.jpg';
import Still4 from '../assets/images/Stills/2025-11-25-INGKA_G_0079-3.jpg';
import Still5 from '../assets/images/Stills/250514 INGEA KV3 MAKEUP 0408-2.jpg';
import Still6 from '../assets/images/Stills/250515 INGEA A2 EU 0197.jpg';
import Still7 from '../assets/images/Stills/INGKA_ImageBank_Beauty_1471.jpg';

const imageSrcType = 'url'; // 'url' or 'static' - determines whether to use the imported static images or their HTTP URLs in the guideline sections

const getSrc = (staticSrc, httpSrc) =>
  imageSrcType === 'url' ? httpSrc : staticSrc;

const STATIC_VISUAL_IMAGES = [Still1, Still2, Still3, Still4];
const VISUAL_IMAGE_URLS = [
  'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=900&q=80',
  'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=900&q=80',
  'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80',
];

const STATIC_COPY_IMAGES = [
  Still5,
  Still6,
  Still7,
  Still1,
  Still2,
  Still3,
];
const COPY_IMAGE_URLS = [
  'https://brandportal.ingkacentres.com/asset/3ed3d8aa-d044-42de-a8d5-b042ec4446a2/web_optimized_1280_landscape/Shop_Keyvisual3_rgb.jpg',
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80',
  'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=900&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80',
  'https://images.unsplash.com/photo-1485217988980-11786ced9454?w=900&q=80',
];

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
    visualImages: STATIC_VISUAL_IMAGES.map((staticSrc, index) =>
      getSrc(staticSrc, VISUAL_IMAGE_URLS[index])
    ),
    copyTiles: [
      { src: getSrc(STATIC_COPY_IMAGES[0], COPY_IMAGE_URLS[0]), h: "A moment that's all about her", r: 0, c: 0 },
      { src: getSrc(STATIC_COPY_IMAGES[1], COPY_IMAGE_URLS[1]), h: 'Moments you can’t click and collect', r: 0, c: 1 },
      { src: getSrc(STATIC_COPY_IMAGES[2], COPY_IMAGE_URLS[2]), h: 'Bring your best beauty advisor', r: 1, c: 0 },
      { src: getSrc(STATIC_COPY_IMAGES[3], COPY_IMAGE_URLS[3]), h: 'Some moments taste better together', r: 1, c: 1 },
      { src: getSrc(STATIC_COPY_IMAGES[4], COPY_IMAGE_URLS[4]), h: 'Be in the moment', r: 2, c: 0 },
      { src: getSrc(STATIC_COPY_IMAGES[5], COPY_IMAGE_URLS[5]), h: 'On the menu: quality time', r: 2, c: 1 },
    ],
    dosDontsPairs: [
      {
        do: {
          text: 'We focus on real moments of togetherness',
          src: getSrc(
            DoImage1,
            'https://brandportal.ingkacentres.com/asset/3ed3d8aa-d044-42de-a8d5-b042ec4446a2/web_optimized_1280_landscape/Shop_Keyvisual3_rgb.jpg'
          )
        },
        dont: {
          text: "We don't speak negatively about online shopping",
          src: getSrc(
            DontImage1,
            'https://images.unsplash.com/photo-1499336315816-097655dcfbda?w=900&q=80'
          )
        }
      },

      {
        do: {
          text: 'We show emotional, genuine and relatable moments',
          src: getSrc(
            DoImage2,
            'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80'
          )
        },
        dont: {
          text: "We don't create staged or cliché scenes",
          src: getSrc(
            DontImage2,
            'https://images.unsplash.com/photo-1499336315816-097655dcfbda?w=900&q=80'
          )
        }
      },

      {
        do: {
          text: 'We dramatise moments that naturally lead to product',
          src: getSrc(
            DoImage3,
            'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=900&q=80'
          )
        },
        dont: {
          text: "We don't lead with products, offers or transactions",
          src: getSrc(
            DontImage3,
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=900&q=80'
          )
        }
      },

      {
        do: {
          text: 'We are for the many',
          src: getSrc(
            DoImage4,
            'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&q=80'
          )
        },
        dont: {
          text: 'We are not for the few',
          src: getSrc(
            DontImage4,
            'https://images.unsplash.com/photo-1485217988980-11786ced9454?w=900&q=80'
          )
        }
      }
    ]
  }
};
