import React, { useEffect, useRef, useState } from 'react';
import './HeroSection.css';

export const HeroSection = ({ videoSrc = null }) => {
  const overlayRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-video-wrapper">
        {videoSrc ? (
          <video
            className="hero-video"
            autoPlay
            muted
            loop
            playsInline
            src={videoSrc}
          />
        ) : (
          <div className="hero-video-placeholder">
            <div className="placeholder-grid">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i} className={`grid-cell cell-${i % 5}`} />
              ))}
            </div>
            <div className="placeholder-particles">
              {Array.from({ length: 30 }).map((_, i) => (
                <div key={i} className="particle" style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 4}s`,
                  animationDuration: `${3 + Math.random() * 4}s`,
                  width: `${2 + Math.random() * 6}px`,
                  height: `${2 + Math.random() * 6}px`,
                }} />
              ))}
            </div>
          </div>
        )}

        <div className="hero-overlay" />

        <div className={`hero-content ${loaded ? 'hero-content--visible' : ''}`} ref={overlayRef}>
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-line" />
            <span className="hero-eyebrow-text">Ingka Centres</span>
            <span className="hero-eyebrow-line" />
          </div>
          <h1 className="hero-headline">
            <span className="hero-headline-line line-1">
              <span className="hero-headline-accent">Moment❜s</span> you can❜t
            </span>
            <span className="hero-headline-line line-2">get with a click</span>
          </h1>
          <p className="hero-subline">Creative Platform</p>
          <div className="hero-scroll-indicator">
            <span>Scroll to explore</span>
            <div className="scroll-arrow">
              <div className="arrow-line" />
              <div className="arrow-head" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
