import HeroSection from '../components/HeroSection';
import '../components/global.css';

export default {
  title: 'IC Creative Platform/01 Hero Section',
  component: HeroSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Full-viewport hero with autoplay video (or animated placeholder), centered text overlay, and scroll indicator. Replace `videoSrc` with your actual video URL for production.'
      }
    }
  },
  argTypes: {
    videoSrc: {
      control: 'text',
      description: 'URL to the hero video (autoplay, muted, loop). Leave empty to show animated placeholder.',
    }
  }
};

export const WithPlaceholder = {
  name: 'Animated Placeholder (No Video)',
  args: {
    videoSrc: null
  }
};

export const WithVideo = {
  name: 'With Video Source',
  args: {
    videoSrc: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
  }
};
