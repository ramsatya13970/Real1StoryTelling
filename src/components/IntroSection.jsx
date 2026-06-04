import React, { useEffect, useRef, useState } from 'react';
import './IntroSection.css';

export const IntroSection = ({ pdfDownloadUrl = '#' }) => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`intro-section ${visible ? 'intro-section--visible' : ''}`} ref={sectionRef}>
      <div className="intro-label">
        <span className="intro-label-num">02</span>
        <span className="intro-label-text">Introducing the Creative Platform</span>
      </div>

      <div className="intro-card">
        <div className="intro-card-inner">
          <div className="intro-card-bg-accent" />
          <p className="intro-body-text">
            This is one simple creative platform for everything we say and do, across all
            channels and touchpoints. With{' '}
            <em className="intro-highlight">Moments you can't click and collect,</em>{' '}
            we position our meeting places as live shopping destinations, complementing an online
            world by offering something relatively different: real-life experiences, real-life
            connections, and more reasons to come, stay and enjoy the time here.
          </p>
          <a
            href={pdfDownloadUrl}
            download
            className="intro-download-btn"
            onClick={(e) => { if (pdfDownloadUrl === '#') e.preventDefault(); }}
          >
            <span className="btn-icon">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1v9M4 7l4 4 4-4M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            Download as PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
