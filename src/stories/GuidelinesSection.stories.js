import GuidelinesSection from '../components/GuidelinesSection';
import '../components/global.css';

export default {
  title: 'IC Creative Platform/03 Guidelines Section',
  component: GuidelinesSection,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'off-white', values: [{ name: 'off-white', value: '#F2EDE4' }] },
    docs: {
      description: {
        component: 'Three guideline cards (Visual, Copy, Do\'s & Don\'ts). Click any card to open its full-page detail view. The detail view covers the full page with a back button.'
      }
    }
  }
};

export const Default = {
  args: {
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

export const InteractionDemo = {
  name: 'Interaction Demo',
  parameters: {
    docs: {
      description: {
        story: 'Click any of the three cards to see the full-page detail panel with a back button. The detail view slides in from the right.'
      }
    }
  }
};
