import React, { useEffect, useRef, useState } from 'react';
import './WhyPlatformSection.css';

const PILLARS = [
  {
    num: '01',
    title: 'Consistency',
    body: "A creative platform helps us show up clearly and consistently. It's not about repeating ourselves but staying true to the same idea, so people know who we are and what to expect.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 14h12M14 8v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    num: '02',
    title: 'Effectiveness',
    body: "It makes our work simpler and more effective. Instead of starting from scratch each time, we have a shared direction to build from — saving time while creating stronger, more connected communication.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 20L10 12l5 5 4-6 5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="22" cy="6" r="3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    num: '03',
    title: 'Long term / Short term',
    body: "By gathering everything under one platform, we can work both long and short term. Whether it's a Black Friday message or long-term brand building, we always focus on moments of togetherness. Over time, this helps us build clear associations and move closer to our goals.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 24V14l7-7 7 7V24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 24V18h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 10V6l3-2 3 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

export const WhyPlatformSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [pillarsVisible, setPillarsVisible] = useState([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          PILLARS.forEach((_, i) => {
            setTimeout(() => {
              setPillarsVisible(prev => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 200);
          });
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-section" ref={sectionRef}>
      <div className="why-inner">
        <div className={`why-header ${visible ? 'why-header--visible' : ''}`}>
          <div className="why-label">
            <span className="why-label-num">04</span>
            <span className="why-label-text">Explaining the Platform</span>
          </div>
          <h2 className="why-heading">Why a creative platform?</h2>
          <p className="why-subtext">
            Three reasons why a unified creative platform makes everything we do stronger.
          </p>
        </div>

        <div className="why-pillars">
          {PILLARS.map((p, i) => (
            <div
              key={p.num}
              className={`why-pillar ${pillarsVisible[i] ? 'why-pillar--visible' : ''}`}
            >
              <div className="pillar-icon-wrap">
                {p.icon}
              </div>
              <div className="pillar-content">
                <span className="pillar-num">{p.num}</span>
                <h3 className="pillar-title">{p.title}</h3>
                <p className="pillar-body">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPlatformSection;
