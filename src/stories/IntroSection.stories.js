import IntroSection from '../components/IntroSection';
import '../components/global.css';

export default {
  title: 'IC Creative Platform/02 Intro Section',
  component: IntroSection,
  parameters: {
    layout: 'padded',
    backgrounds: { default: 'off-white', values: [{ name: 'off-white', value: '#F2EDE4' }] },
    docs: {
      description: {
        component: 'Text block introducing the Creative Platform with a PDF download CTA. Set `pdfDownloadUrl` to the actual hosted PDF for production.'
      }
    }
  },
  argTypes: {
    pdfDownloadUrl: {
      control: 'text',
      description: 'URL to the downloadable Creative Platform PDF.'
    }
  }
};

export const Default = {
  args: {
    pdfDownloadUrl: '#'
  }
};
