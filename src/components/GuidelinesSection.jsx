import React, { useEffect, useRef, useState, useCallback } from 'react';
import './GuidelinesSection.css';

/* ═══════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════ */

const DOS_DONTS_PAIRS = [
  {
    do:   { text: 'We focus on real moments of togetherness',            gradient: 'linear-gradient(135deg,#3a2a1a 0%,#6b4423 60%,#8b5e2e 100%)' },
    dont: { text: "We don't speak negatively about online shopping",     gradient: 'linear-gradient(135deg,#1a2a2a 0%,#234040 60%,#2e5555 100%)' },
  },
  {
    do:   { text: 'We show emotional, genuine and relatable moments',    gradient: 'linear-gradient(135deg,#2a1a10 0%,#7a4a20 60%,#9a6030 100%)' },
    dont: { text: "We don't create staged or cliché scenes",             gradient: 'linear-gradient(135deg,#1a2210 0%,#304a18 60%,#3d6020 100%)' },
  },
  {
    do:   { text: 'We dramatise moments that naturally lead to product', gradient: 'linear-gradient(135deg,#2a200a 0%,#7a6010 60%,#a07c18 100%)' },
    dont: { text: "We don't lead with products, offers or transactions", gradient: 'linear-gradient(135deg,#1a1a2a 0%,#202050 60%,#282870 100%)' },
  },
  {
    do:   { text: 'We are for the many',                                 gradient: 'linear-gradient(135deg,#2a1a0a 0%,#6a3c10 60%,#8a5018 100%)' },
    dont: { text: 'We are not for the few',                              gradient: 'linear-gradient(135deg,#1a1a1a 0%,#303030 60%,#404040 100%)' },
  },
];

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
      intro: 'Our visual language is rooted in real moments — human, warm, and never staged.',
      sections: [
        { title: 'Generative Canvas', num: '01 / ART',   body: "See the visual expression as a natural extension of real life: warm, inviting and a little more refined. Keep people at the centre and show real moments in a way that feels natural, not staged. Focus on connection, small emotions and everyday behaviours." },
        { title: 'Stills & Motion',   num: '02 / PHOTO', body: "Photography should feel candid and alive. Capture the energy of real people in real spaces — browsing, connecting, discovering. Use natural light, genuine expressions, and environments that breathe." },
      ],
    },
  },
  {
    id: 'copy',
    num: '02',
    category: 'Copy Guidelines',
    subtitle: 'Voice & Tone',
    description: "We know it's not always easy to translate English headlines. Instead of translating word for word, focus on the feeling.",
    accent: '#FFD600',
    bg: '#2D4A4A',
    details: {
      intro: 'Our copy is human first. We speak to people like a trusted friend.',
      sections: [
        { title: 'Headlines',  num: '01 / VOICE', body: "Emotionally capture the meaning. Highlight the moment, and make it feel natural in your language. Don't be afraid to be playful — we want to feel alive, not corporate." },
        { title: 'Body Copy',  num: '02 / TONE',  body: "Keep it conversational and clear. Short sentences. Real emotions. No jargon. Write as if you're talking to a friend curious about what's happening at the centre today." },
      ],
    },
  },
  {
    id: 'dos-donts',
    num: '03',
    category: "Do's and Don'ts",
    subtitle: 'Best Practices',
    description: "Clear rules that keep our communication authentic and consistent across every touchpoint.",
    accent: '#FFD600',
    bg: '#1A1A1A',
  },
];

/* ═══════════════════════════════════════════════════════════════════
   PARTICLES
   ═══════════════════════════════════════════════════════════════════ */
const Particles = () => (
  <div className="dd-particles" aria-hidden="true">
    {Array.from({ length: 18 }).map((_, i) => (
      <div key={i} className="dd-particle" style={{
        left: `${5 + (i * 37 + i * i * 13) % 90}%`,
        top:  `${10 + (i * 53 + i * 7) % 80}%`,
        animationDelay:    `${(i * 0.47) % 5}s`,
        animationDuration: `${5 + (i * 0.8) % 6}s`,
        width:  `${2 + (i * 3) % 5}px`,
        height: `${2 + (i * 3) % 5}px`,
        opacity: 0.08 + (i % 4) * 0.05,
      }} />
    ))}
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   PLACEHOLDER IMAGE TILE
   ═══════════════════════════════════════════════════════════════════ */
const PlaceholderImg = ({ gradient, visible, delay = 0, isDo }) => (
  <div className={`dd-img-box ${visible ? 'dd-img-box--visible' : ''}`} style={{ '--delay': `${delay}s` }}>
    <div className="dd-img-fill" style={{ background: gradient }} />
    <div className="dd-img-sweep" />
    <div className="dd-img-grain" />
    <div className={`dd-img-tag ${isDo ? 'dd-img-tag--do' : 'dd-img-tag--dont'}`}>{isDo ? '✓' : '✕'}</div>
    <span className="dd-img-label">Image placeholder</span>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   DO'S & DON'TS DETAIL
   ═══════════════════════════════════════════════════════════════════ */
const DosDontsDetail = ({ onBack }) => {
  const [visible, setVisible] = useState(false);
  const [rowsVisible, setRowsVisible] = useState([]);

  useEffect(() => {
    const t0 = setTimeout(() => setVisible(true), 10);
    const timers = DOS_DONTS_PAIRS.map((_, i) =>
      setTimeout(() => setRowsVisible(prev => [...prev, i]), 320 + i * 190)
    );
    return () => { clearTimeout(t0); timers.forEach(clearTimeout); };
  }, []);

  return (
    <div className={`detail-overlay dd-dark-overlay ${visible ? 'detail-overlay--visible' : ''}`}>
      <Particles />
      <div className="detail-header dd-dark-header">
        <button className="detail-back-btn dd-dark-back" onClick={onBack}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
            <path d="M12 4L6 10l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>
        <div className="detail-header-meta">
          <span className="dd-dark-num">03</span>
          <h2 className="dd-dark-title">Do's and Don'ts</h2>
        </div>
      </div>
      <div className="dd-page">
        <div className="dd-col-headers">
          <div className="dd-col-label"><span className="dd-col-badge dd-col-badge--do">Do's</span></div>
          <div className="dd-col-label"><span className="dd-col-badge dd-col-badge--dont">Don'ts</span></div>
        </div>
        {DOS_DONTS_PAIRS.map((pair, i) => {
          const rowVisible = rowsVisible.includes(i);
          return (
            <div key={i} className="dd-pair-wrapper">
              <div className={`dd-row ${rowVisible ? 'dd-row--visible' : ''}`}>
                <div className="dd-cell dd-cell--do">
                  <p className="dd-item-text"><span className="dd-item-num">{i + 1}.</span>{' '}{pair.do.text}</p>
                  <PlaceholderImg gradient={pair.do.gradient} visible={rowVisible} delay={0.06 + i * 0.04} isDo={true} />
                </div>
                <div className="dd-v-divider" />
                <div className="dd-cell dd-cell--dont">
                  <p className="dd-item-text"><span className="dd-item-num">{i + 1}.</span>{' '}{pair.dont.text}</p>
                  <PlaceholderImg gradient={pair.dont.gradient} visible={rowVisible} delay={0.18 + i * 0.04} isDo={false} />
                </div>
              </div>
              {i < DOS_DONTS_PAIRS.length - 1 && (
                <div className={`dd-h-sep ${rowVisible ? 'dd-h-sep--visible' : ''}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   GENERIC DETAIL VIEW
   ═══════════════════════════════════════════════════════════════════ */
const GenericDetail = ({ guideline, onBack }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 10); }, []);
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
            <div key={i} className="detail-section" style={{ animationDelay: `${0.1 + i * 0.15}s` }}>
              <div className="detail-section-header">
                <span className="detail-section-num">{sec.num}</span>
                <h3 className="detail-section-title">{sec.title}</h3>
              </div>
              <p className="detail-section-body">{sec.body}</p>
              <div className="detail-image-grid">
                {[0, 1].map(n => (
                  <div key={n} className="detail-placeholder-img"
                    style={{ background: `linear-gradient(135deg, ${guideline.bg} 0%, #333 100%)` }}>
                    <div className="placeholder-shimmer" />
                    <span className="placeholder-label">Image {n + 1}</span>
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

/* ═══════════════════════════════════════════════════════════════════
   SINGLE CARD
   ═══════════════════════════════════════════════════════════════════ */
const GuidelineCard = ({ g, index, activeIndex, isRevealed, onClick }) => {
  const isActive  = index === activeIndex;
  const isPast    = index < activeIndex;
  const isFuture  = index > activeIndex;

  return (
    <button
      className={`
        guideline-card
        ${isRevealed  ? 'guideline-card--revealed' : ''}
        ${isActive    ? 'guideline-card--active'   : ''}
        ${isPast      ? 'guideline-card--past'     : ''}
        ${isFuture    ? 'guideline-card--future'   : ''}
      `.trim().replace(/\s+/g, ' ')}
      onClick={onClick}
    >
      <div className="card-inner" style={{ background: g.bg }}>
        <div className="card-bg-shimmer" />
        <div className="card-corner-accent" style={{ background: g.accent }} />
        <div className="card-progress-dot" style={{ background: g.accent }} />

        <div className="card-num-row">
          <span className="card-num">{g.num}</span>
          <span className="card-num-slash">/</span>
          <span className="card-num-label">{g.subtitle.toUpperCase()}</span>
        </div>

        <div className="card-body">
          <span className="card-category-tag" style={{ color: g.accent }}>{g.subtitle}</span>
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

        <div className="card-glow-line" style={{ background: g.accent }} />
      </div>
    </button>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   MAIN SECTION
   ═══════════════════════════════════════════════════════════════════ */
export const GuidelinesSection = () => {
  const wrapperRef = useRef(null);
  const rafRef     = useRef(null);

  const [activeGuideline,  setActiveGuideline]  = useState(null);
  const [activeIndex,      setActiveIndex]       = useState(0);
  const [revealedCards,    setRevealedCards]     = useState([]);
  const [scrollProgress,   setScrollProgress]    = useState(0);
  const [sectionVisible,   setSectionVisible]    = useState(false);

  // Each "step" = one viewport height of scroll to advance one card
  const STEPS      = GUIDELINES.length;           // 3
  const PIN_HEIGHT = typeof window !== 'undefined'
    ? window.innerHeight * (STEPS + 0.5)          // +0.5 for entry buffer
    : 3500;

  const handleScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      const { top, height } = wrapper.getBoundingClientRect();
      const vh = window.innerHeight;

      // raw progress 0→1 over the full pin height
      const scrollable = height - vh;
      const raw        = Math.max(0, Math.min(1, -top / scrollable));
      setScrollProgress(raw);

      // Which card is "active": 0, 1, 2 based on thirds of scroll
      const idx = Math.min(GUIDELINES.length - 1, Math.floor(raw * GUIDELINES.length));
      setActiveIndex(idx);

      // Reveal cards progressively — each card appears when its step begins
      const revealed = [];
      GUIDELINES.forEach((_, i) => {
        const threshold = i / GUIDELINES.length - 0.02;
        if (raw >= threshold) revealed.push(i);
      });
      setRevealedCards(revealed);

      setSectionVisible(raw >= 0 && -top < height);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleScroll]);

  /* Detail view */
  if (activeGuideline !== null) {
    const g = GUIDELINES[activeGuideline];
    return g.id === 'dos-donts'
      ? <DosDontsDetail onBack={() => setActiveGuideline(null)} />
      : <GenericDetail guideline={g} onBack={() => setActiveGuideline(null)} />;
  }

  return (
    <div
      className="gl-scroll-wrapper"
      ref={wrapperRef}
      style={{ height: `${PIN_HEIGHT}px` }}
    >
      <div className="gl-sticky">

        {/* ── Header ── */}
        <div className={`gl-header ${sectionVisible ? 'gl-header--visible' : ''}`}>
          <div className="gl-label">
            <span className="gl-label-num">03</span>
            <span className="gl-label-text">The Guidelines</span>
          </div>
          <h2 className="gl-heading">
            How we bring the <em>platform</em> to life
          </h2>
        </div>

        {/* ── Card stage — one card centered at 55 vw ── */}
        <div className="gl-stage">
          {/* Ghost spacers so the active card is always centered */}
          {GUIDELINES.map((g, i) => (
            <GuidelineCard
              key={g.id}
              g={g}
              index={i}
              activeIndex={activeIndex}
              isRevealed={revealedCards.includes(i)}
              onClick={() => setActiveGuideline(i)}
            />
          ))}

          {/* Left / right vignette fades */}
          <div className="gl-vignette gl-vignette--left"  />
          <div className="gl-vignette gl-vignette--right" />
        </div>

        {/* ── Dot indicator ── */}
        <div className="gl-dots">
          {GUIDELINES.map((g, i) => (
            <div
              key={i}
              className={`gl-dot ${i === activeIndex ? 'gl-dot--active' : ''} ${revealedCards.includes(i) ? 'gl-dot--revealed' : ''}`}
              style={{ '--dot-color': g.accent }}
            />
          ))}
        </div>

        {/* ── Card counter ── */}
        <div className="gl-counter">
          <span className="gl-counter-cur">
            {String(activeIndex + 1).padStart(2, '0')}
          </span>
          <span className="gl-counter-sep">/</span>
          <span className="gl-counter-total">
            {String(GUIDELINES.length).padStart(2, '0')}
          </span>
        </div>

        {/* ── Scroll hint ── */}
        <div className={`gl-scroll-hint ${scrollProgress > 0.06 ? 'gl-scroll-hint--hidden' : ''}`}>
          <div className="gl-hint-mouse">
            <div className="gl-hint-wheel" />
          </div>
          <span>Scroll to explore</span>
        </div>

        {/* ── Progress bar ── */}
        <div className="gl-progress-bar">
          <div className="gl-progress-fill" style={{ width: `${scrollProgress * 100}%` }} />
        </div>
      </div>
    </div>
  );
};

export default GuidelinesSection;
