import React, { useEffect, useRef, useState } from 'react';
import './GuidelinesSection.css';

const GUIDELINES = [
  {
    id: 'visual',
    num: '01',
    category: 'Visual Guidelines',
    subtitle: 'Art & Photography',
    description: 'See the visual expression as a natural extension of real life: warm, inviting and a little more refined.',
    accent: '#FFD600',
    bg: '#1E1C1C',
    details: {
      intro: 'Our visual language is rooted in real moments — human, warm, and never staged. We capture life as it happens at our meeting places.',
      sections: [
        {
          title: 'Generative Canvas',
          num: '01 / ART',
          body: 'See the visual expression as a natural extension of real life: warm, inviting and a little more refined. Keep people at the centre and show real moments in a way that feels natural, not staged, like something you\'ve simply noticed. Focus on connection, small emotions and everyday behaviours. Choose authenticity over perfection, and avoid anything that feels staged, overly polished or too perfect.'
        },
        {
          title: 'Stills & Motion',
          num: '02 / PHOTO',
          body: 'Photography should feel candid and alive. Capture the energy of real people in real spaces — browsing, connecting, discovering. Use natural light, genuine expressions, and environments that breathe. Avoid stock-photo aesthetics entirely.'
        }
      ]
    }
  },
  {
    id: 'copy',
    num: '02',
    category: 'Copy Guidelines',
    subtitle: 'Voice & Tone',
    description: 'We know it\'s not always easy to translate English headlines. Instead of translating word for word, focus on the feeling.',
    accent: '#FFD600',
    bg: '#2D4A4A',
    details: {
      intro: 'Our copy is human first. We speak to people like a trusted friend who knows what matters — honest, warm, and full of personality.',
      sections: [
        {
          title: 'Headlines',
          num: '01 / VOICE',
          body: 'Emotionally capture the meaning. Highlight the moment, and make it feel natural in your language. Don\'t be afraid to be playful when appropriate — we want to feel alive, not corporate.'
        },
        {
          title: 'Body Copy',
          num: '02 / TONE',
          body: 'Keep it conversational and clear. Short sentences. Real emotions. No jargon. Write as if you\'re talking to a friend who\'s curious about what\'s happening at the centre today.'
        }
      ]
    }
  },
  {
    id: 'dos-donts',
    num: '03',
    category: "Do's and Don'ts",
    subtitle: 'Best Practices',
    description: 'Clear rules that keep our communication authentic and consistent across every touchpoint.',
    accent: '#FFD600',
    bg: '#1A1A1A',
    details: {
      intro: "A shared set of principles that keeps every piece of communication feeling true to who we are.",
      sections: [
        {
          title: "Do's",
          num: '01 / DO',
          items: [
            'We focus on real moments of togetherness',
            'We show emotional, genuine and relatable moments',
            'We create moments that naturally lead to product',
            'We are for the many',
          ],
          isDoList: true,
          isDo: true,
        },
        {
          title: "Don'ts",
          num: "02 / DON'T",
          items: [
            "We don't speak negatively about online shopping",
            "We don't create staged or cliché scenes",
            "We don't lead with products, offers or transactions",
            "We are not out for the few",
          ],
          isDoList: true,
          isDo: false,
        }
      ]
    }
  }
];

const DetailView = ({ guideline, onBack }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 10);
  }, []);

  return (
    <div className={`detail-overlay ${visible ? 'detail-overlay--visible' : ''}`}>
      <div className="detail-header" style={{ borderBottom: `3px solid ${guideline.accent}` }}>
        <button className="detail-back-btn" onClick={onBack}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M12 4L6 10l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>
        <div className="detail-header-meta">
          <span className="detail-num">{guideline.num}</span>
          <h2 className="detail-title">{guideline.category}</h2>
        </div>
      </div>

      <div className="detail-body">
        <p className="detail-intro">{guideline.details.intro}</p>

        <div className="detail-sections">
          {guideline.details.sections.map((sec, i) => (
            <div key={i} className={`detail-section ${sec.isDoList ? 'detail-section--list' : ''}`}
              style={{ animationDelay: `${0.1 + i * 0.15}s` }}>
              <div className="detail-section-header">
                <span className="detail-section-num">{sec.num}</span>
                <h3 className="detail-section-title" style={{ color: sec.isDoList ? (sec.isDo ? '#4CAF50' : '#f44336') : 'inherit' }}>
                  {sec.isDoList && (
                    <span className="dot-indicator" style={{ background: sec.isDo ? '#4CAF50' : '#f44336' }} />
                  )}
                  {sec.title}
                </h3>
              </div>
              {sec.body && <p className="detail-section-body">{sec.body}</p>}
              {sec.items && (
                <ul className="detail-list">
                  {sec.items.map((item, j) => (
                    <li key={j} className={`detail-list-item ${sec.isDo ? 'item--do' : 'item--dont'}`}>
                      <span className="item-icon">{sec.isDo ? '✓' : '✕'}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Placeholder images for visual interest */}
              <div className="detail-image-grid">
                {[1, 2].map(n => (
                  <div key={n} className="detail-placeholder-img" style={{
                    background: `linear-gradient(135deg, ${guideline.bg} 0%, #333 100%)`
                  }}>
                    <div className="placeholder-shimmer" />
                    <span className="placeholder-label">Image {n}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const GuidelinesSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeGuideline, setActiveGuideline] = useState(null);
  const [cardStates, setCardStates] = useState([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          GUIDELINES.forEach((_, i) => {
            setTimeout(() => {
              setCardStates(prev => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, i * 200);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  if (activeGuideline !== null) {
    return (
      <DetailView
        guideline={GUIDELINES[activeGuideline]}
        onBack={() => setActiveGuideline(null)}
      />
    );
  }

  return (
    <section className={`guidelines-section ${visible ? 'guidelines-section--visible' : ''}`} ref={sectionRef}>
      <div className="guidelines-label">
        <span className="guidelines-label-num">03</span>
        <span className="guidelines-label-text">The Guidelines</span>
      </div>

      <div className="guidelines-intro-text">
        <h2 className="guidelines-heading">
          How we bring the <em>platform</em> to life
        </h2>
        <p className="guidelines-subtext">
          Three pillars that define how we look, sound, and behave across every touchpoint.
        </p>
      </div>

      <div className="guidelines-cards">
        {GUIDELINES.map((g, i) => (
          <button
            key={g.id}
            className={`guideline-card ${cardStates[i] ? 'guideline-card--visible' : ''}`}
            onClick={() => setActiveGuideline(i)}
            style={{ '--card-bg': g.bg, '--card-accent': g.accent }}
          >
            <div className="card-inner" style={{ background: g.bg }}>
              <div className="card-num">{g.num}</div>
              <div className="card-corner-accent" style={{ background: g.accent }} />

              <div className="card-body">
                <span className="card-category-tag" style={{ color: g.accent }}>
                  {g.subtitle}
                </span>
                <h3 className="card-title">{g.category}</h3>
                <p className="card-desc">{g.description}</p>
              </div>

              <div className="card-footer">
                <span className="card-cta">Explore</span>
                <span className="card-arrow" style={{ background: g.accent }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default GuidelinesSection;
