import React from 'react';
import '../components/global.css';
import HeroSection from './HeroSection';
import IntroSection from './IntroSection';
import GuidelinesSection from './GuidelinesSection';
import WhyPlatformSection from './WhyPlatformSection';
import ActivationSection from './ActivationSection';
import './CreativePlatformPage.css';

export const CreativePlatformPage = ({
  videoSrc = null,
  pdfDownloadUrl = '#',
  activationImages = {},
  visualImages = [],
  copyTiles = [],
  dosDontsPairs = []
}) => {
  return (
    <div className="cp-page">
      {/* 1. Hero */}
      <HeroSection videoSrc={videoSrc} />

      {/* 2. Intro */}
      <div className="cp-bg-off-white">
        <IntroSection pdfDownloadUrl={pdfDownloadUrl} />
      </div>

      {/* 3. Guidelines */}
      <div className="cp-bg-off-white">
        <GuidelinesSection
          visualImages={visualImages}
          copyTiles={copyTiles}
          dosDontsPairs={dosDontsPairs}
        />
      </div>

      {/* 4. Why Platform */}
      <WhyPlatformSection />

      {/* 5. Activation Inspiration */}
      <ActivationSection images={activationImages} />

      {/* Footer */}
      <footer className="cp-footer">
        <div className="cp-footer-inner">
          <div className="cp-footer-brand">
            <div className="ingka-logo">
              <div className="ingka-logo-circle">
                <span className="ingka-logo-text">INGKA<br/>CENTRES</span>
              </div>
            </div>
          </div>
          <p className="cp-footer-copy">
            © Ingka Holding B.V. 2025. All rights reserved.
          </p>
          <p className="cp-footer-tagline">Creative Platform</p>
        </div>
      </footer>
    </div>
  );
};

export default CreativePlatformPage;
