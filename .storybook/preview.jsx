import '../src/components/global.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'off-white',
      values: [
        { name: 'off-white', value: '#F2EDE4' },
        { name: 'black', value: '#1A1A1A' },
        { name: 'white', value: '#FFFFFF' },
      ],
    },
  },
};

export default preview;
