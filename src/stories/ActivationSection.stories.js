import ActivationSection from '../components/ActivationSection';
import '../components/global.css';

export default {
  title: 'IC Creative Platform/05 Activation Section',
  component: ActivationSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Four auto-scrolling image strips alternating direction. Click any tile to open a full-screen lightbox. Pass `images` prop as an object keyed by row index (0-3) containing arrays of image URLs.'
      }
    }
  },
  argTypes: {
    images: {
      control: 'object',
      description: 'Object with row indices 0-3 as keys, each containing an array of image URLs. Example: { 0: ["url1", "url2"], 1: [...] }'
    }
  }
};

export const WithPlaceholders = {
  name: 'Placeholder Tiles (No Images)',
  args: { images: {} }
};

export const WithImages = {
  name: 'With Real Images',
  args: {
    images: {
      0: [
        // 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80',
        'https://brandportal.ingkacentres.com/asset/3ed3d8aa-d044-42de-a8d5-b042ec4446a2/web_optimized_1280_landscape/Shop_Keyvisual3_rgb.jpg',
        'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=400&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80',
        'https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=400&q=80',
      ],
      1: [
        // 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=400&q=80',
        'https://brandportal.ingkacentres.com/asset/3ed3d8aa-d044-42de-a8d5-b042ec4446a2/web_optimized_1280_landscape/Shop_Keyvisual3_rgb.jpg',
        'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=400&q=80',
        'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&q=80',
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&q=80',
      ],
      2: [
        'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=400&q=80',
        'https://images.unsplash.com/photo-1607082349566-187342175400?w=400&q=80',
        'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&q=80',
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&q=80',
      ],
      3: [
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&q=80',
        'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&q=80',
        'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&q=80',
        'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&q=80',
      ]
    }
  }
};
