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

export const Default = {};

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
