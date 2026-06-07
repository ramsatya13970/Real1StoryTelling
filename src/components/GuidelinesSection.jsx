import React, { useEffect, useRef, useState, useCallback } from 'react';
import './GuidelinesSection.css';

/* ═══════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════ */

const DOS_DONTS_PAIRS = [
  { do: { text: 'We focus on real moments of togetherness',            gradient: 'linear-gradient(135deg,#3a2a1a 0%,#6b4423 60%,#8b5e2e 100%)' }, dont: { text: "We don't speak negatively about online shopping",  gradient: 'linear-gradient(135deg,#1a2a2a 0%,#234040 60%,#2e5555 100%)' } },
  { do: { text: 'We show emotional, genuine and relatable moments',    gradient: 'linear-gradient(135deg,#2a1a10 0%,#7a4a20 60%,#9a6030 100%)' }, dont: { text: "We don't create staged or cliché scenes",           gradient: 'linear-gradient(135deg,#1a2210 0%,#304a18 60%,#3d6020 100%)' } },
  { do: { text: 'We dramatise moments that naturally lead to product', gradient: 'linear-gradient(135deg,#2a200a 0%,#7a6010 60%,#a07c18 100%)' }, dont: { text: "We don't lead with products, offers or transactions", gradient: 'linear-gradient(135deg,#1a1a2a 0%,#202050 60%,#282870 100%)' } },
  { do: { text: 'We are for the many',                                 gradient: 'linear-gradient(135deg,#2a1a0a 0%,#6a3c10 60%,#8a5018 100%)' }, dont: { text: 'We are not for the few',                           gradient: 'linear-gradient(135deg,#1a1a1a 0%,#303030 60%,#404040 100%)' } },
];

// Visual guideline placeholder images — warm earth/nature tones
const VG_IMAGES = [
  'linear-gradient(145deg,#2a1e14 0%,#5c3d28 50%,#7a5235 100%)',  // tall — warm brown (mother+child)
  'linear-gradient(145deg,#1a2e20 0%,#2e5038 50%,#3d6645 100%)',  // top-right — green (friends group)
  'linear-gradient(145deg,#2a2010 0%,#5a4520 50%,#7a6030 100%)',  // mid-right — golden (shop scene)
  'linear-gradient(145deg,#1e1a2a 0%,#3a2a4a 50%,#4a3a5a 100%)', // bottom-right — evening (cafe)
];

// Copy guideline placeholder tiles — 6 tiles, 2 columns, 3 rows
const COPY_TILES = [
  { g: 'linear-gradient(145deg,#2a1814 0%,#5a3828 100%)', h: "A moment that's all about her",    r: 0, c: 0 },
  { g: 'linear-gradient(145deg,#1a2820 0%,#2e4838 100%)', h: "Moments you can't click and collect", r: 0, c: 1 },
  { g: 'linear-gradient(145deg,#281814 0%,#583828 100%)', h: 'Bring your best beauty advisor',   r: 1, c: 0 },
  { g: 'linear-gradient(145deg,#181e28 0%,#283848 100%)', h: 'Some moments taste better together', r: 1, c: 1 },
  { g: 'linear-gradient(145deg,#241418 0%,#4a2830 100%)', h: 'Be in the moment',                 r: 2, c: 0 },
  { g: 'linear-gradient(145deg,#182418 0%,#284428 100%)', h: 'On the menu: quality time',        r: 2, c: 1 },
];

const GUIDELINES = [
  { id: 'visual',    num: '01', category: 'Visual Guidelines', subtitle: 'Art & Photography', description: 'See the visual expression as a natural extension of real life: warm, inviting and a little more refined.', accent: '#FFD600', bg: '#1E1C1C' },
  { id: 'copy',      num: '02', category: 'Copy Guidelines',   subtitle: 'Voice & Tone',       description: "We know it's not always easy to translate English headlines. Instead of translating word for word, focus on the feeling.", accent: '#FFD600', bg: '#2D4A4A' },
  { id: 'dos-donts', num: '03', category: "Do's and Don'ts",   subtitle: 'Best Practices',     description: "Clear rules that keep our communication authentic and consistent across every touchpoint.", accent: '#FFD600', bg: '#1A1A1A' },
];

/* ═══════════════════════════════════════════════════════════════════
   SHARED: PARTICLES
   ═══════════════════════════════════════════════════════════════════ */
const Particles = () => (
  <div className="gd-particles" aria-hidden="true">
    {Array.from({ length: 20 }).map((_, i) => (
      <div key={i} className="gd-particle" style={{
        left: `${5 + (i * 37 + i * i * 13) % 90}%`,
        top:  `${10 + (i * 53 + i * 7) % 80}%`,
        animationDelay:    `${(i * 0.47) % 5}s`,
        animationDuration: `${5 + (i * 0.8) % 6}s`,
        width:  `${2 + (i * 3) % 5}px`,
        height: `${2 + (i * 3) % 5}px`,
        opacity: 0.07 + (i % 4) * 0.04,
      }} />
    ))}
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   SHARED: DARK STICKY HEADER
   ═══════════════════════════════════════════════════════════════════ */
const DarkHeader = ({ num, title, onBack }) => (
  <div className="gd-header">
    <button className="gd-back-btn" onClick={onBack}>
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
        <path d="M12 4L6 10l6 6" stroke="currentColor" strokeWidth="2"
          strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Back
    </button>
    <div className="gd-header-meta">
      <span className="gd-header-num">{num}</span>
      <h2 className="gd-header-title">{title}</h2>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   SHARED: ANIMATED IMAGE PLACEHOLDER
   ═══════════════════════════════════════════════════════════════════ */
const ImgPh = ({ gradient, visible, delay = 0, className = '', children }) => (
  <div
    className={`img-ph ${visible ? 'img-ph--in' : ''} ${className}`}
    style={{ '--d': `${delay}s` }}
  >
    <div className="img-ph-fill"  style={{ background: gradient }} />
    <div className="img-ph-sweep" />
    <div className="img-ph-grain" />
    {children}
  </div>
);

/* ═══════════════════════════════════════════════════════════════════
   VISUAL GUIDELINES DETAIL
   Layout: left text + circle diagram | right 1-tall + 3-small grid
   ═══════════════════════════════════════════════════════════════════ */
const VisualDetail = ({ onBack }) => {
  const [on,   setOn]   = useState(false);
  const [imgs, setImgs] = useState([]);
  const [diag, setDiag] = useState(false);

  useEffect(() => {
    const t0 = setTimeout(() => setOn(true), 10);
    const t1 = setTimeout(() => setDiag(true), 700);
    const ti = VG_IMAGES.map((_, i) =>
      setTimeout(() => setImgs(p => [...p, i]), 350 + i * 130));
    return () => { [t0, t1, ...ti].forEach(clearTimeout); };
  }, []);

  return (
    <div className={`gd-overlay ${on ? 'gd-overlay--in' : ''}`}>
      <Particles />
      <DarkHeader num="01" title="Visual Guidelines" onBack={onBack} />

      <div className="vg-wrap">

        {/* ── LEFT COLUMN ── */}
        <div className={`vg-left ${on ? 'vg-left--in' : ''}`}>

          <h1 className="vg-h1">Visual guidelines</h1>

          <p className="vg-p">
            See the visual expression as a natural extension of real life: warm, inviting
            and a little more refined. Keep people at the centre and show real moments in
            a way that feels natural and unforced, like something you've simply noticed.
          </p>
          <p className="vg-p">
            Focus on connection, small emotions and everyday behaviours. Choose
            authenticity over perfection, and avoid anything that feels staged, overly
            polished or too perfect.
          </p>

          {/* Circle diagram */}
          <div className={`vg-diagram ${diag ? 'vg-diagram--in' : ''}`}>
            <div className="vg-circ vg-circ--sm">
              <span>Meeting<br/>place</span>
            </div>
            <div className="vg-plus">+</div>
            <div className="vg-circ vg-circ--lg">
              <span>Moment</span>
            </div>
            <div className="vg-plus">+</div>
            <div className="vg-circ vg-circ--sm">
              <span>Togetherness</span>
            </div>
          </div>
        </div>

        {/* ── RIGHT: image grid matching screenshot exactly ──
              Col 0: tall image (spans 2 rows)
              Col 1 row 0: one small image
              Col 1 row 1: two small side-by-side
        ── */}
        <div className="vg-grid">
          {/* Tall portrait image */}
          <ImgPh gradient={VG_IMAGES[0]} visible={imgs.includes(0)} delay={0}
            className="vg-img vg-img--tall" />

          {/* Top-right wide image */}
          <ImgPh gradient={VG_IMAGES[1]} visible={imgs.includes(1)} delay={0.12}
            className="vg-img vg-img--wide" />

          {/* Bottom-right: two images side by side */}
          <div className="vg-img-row">
            <ImgPh gradient={VG_IMAGES[2]} visible={imgs.includes(2)} delay={0.22}
              className="vg-img" />
            <ImgPh gradient={VG_IMAGES[3]} visible={imgs.includes(3)} delay={0.32}
              className="vg-img" />
          </div>
        </div>

      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   COPY GUIDELINES DETAIL
   Layout: left text | right 2-col × 3-row grid with headline overlays
   ═══════════════════════════════════════════════════════════════════ */
const CopyDetail = ({ onBack }) => {
  const [on,    setOn]    = useState(false);
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    const t0 = setTimeout(() => setOn(true), 10);
    const ti = COPY_TILES.map((_, i) =>
      setTimeout(() => setTiles(p => [...p, i]), 350 + i * 100));
    return () => { [t0, ...ti].forEach(clearTimeout); };
  }, []);

  return (
    <div className={`gd-overlay ${on ? 'gd-overlay--in' : ''}`}>
      <Particles />
      <DarkHeader num="02" title="Copy Guidelines" onBack={onBack} />

      <div className="cg-wrap">

        {/* ── LEFT COLUMN ── */}
        <div className={`cg-left ${on ? 'cg-left--in' : ''}`}>
          <h1 className="cg-h1">Copy guidelines</h1>

          <p className="cg-p">
            We know it's not always easy to translate English headlines. Instead of
            translating word for word, focus on the feeling.
          </p>
          <p className="cg-p">
            Transcreate, capture the meaning, highlight the moment, and make it feel
            natural in your language.
          </p>
          <p className="cg-p">
            When writing your own copy from scratch, make sure to follow Ingka Centres'
            tone of voice. Use simple language everyone understands, don't repeat what's
            already shown, focus on the moment, and let emotion lead.
          </p>
        </div>

        {/* ── RIGHT: 2 × 3 tile grid ── */}
        <div className="cg-grid">
          {COPY_TILES.map((tile, i) => (
            <ImgPh key={i} gradient={tile.g} visible={tiles.includes(i)}
              delay={tile.r * 0.08 + tile.c * 0.05} className="cg-tile">
              {/* dark gradient overlay + headline text */}
              <div className="cg-tile-veil" />
              <span className="cg-tile-h">{tile.h}</span>
            </ImgPh>
          ))}
        </div>

      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   DO'S & DON'TS DETAIL
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

const DosDontsDetail = ({ onBack }) => {
  const [on,   setOn]   = useState(false);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    const t0 = setTimeout(() => setOn(true), 10);
    const ti = DOS_DONTS_PAIRS.map((_, i) =>
      setTimeout(() => setRows(p => [...p, i]), 320 + i * 190));
    return () => { [t0, ...ti].forEach(clearTimeout); };
  }, []);

  return (
    <div className={`gd-overlay ${on ? 'gd-overlay--in' : ''}`}>
      <Particles />
      <DarkHeader num="03" title="Do's and Don'ts" onBack={onBack} />
      <div className="dd-page">
        <div className="dd-col-headers">
          <div className="dd-col-label"><span className="dd-col-badge dd-col-badge--do">Do's</span></div>
          <div className="dd-col-label"><span className="dd-col-badge dd-col-badge--dont">Don'ts</span></div>
        </div>
        {DOS_DONTS_PAIRS.map((pair, i) => {
          const rv = rows.includes(i);
          return (
            <div key={i} className="dd-pair-wrapper">
              <div className={`dd-row ${rv ? 'dd-row--visible' : ''}`}>
                <div className="dd-cell dd-cell--do">
                  <p className="dd-item-text"><span className="dd-item-num">{i + 1}.</span>{' '}{pair.do.text}</p>
                  <PlaceholderImg gradient={pair.do.gradient} visible={rv} delay={0.06 + i * 0.04} isDo={true} />
                </div>
                <div className="dd-v-divider" />
                <div className="dd-cell dd-cell--dont">
                  <p className="dd-item-text"><span className="dd-item-num">{i + 1}.</span>{' '}{pair.dont.text}</p>
                  <PlaceholderImg gradient={pair.dont.gradient} visible={rv} delay={0.18 + i * 0.04} isDo={false} />
                </div>
              </div>
              {i < DOS_DONTS_PAIRS.length - 1 && (
                <div className={`dd-h-sep ${rv ? 'dd-h-sep--visible' : ''}`} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════════
   CARD
   ═══════════════════════════════════════════════════════════════════ */
const GuidelineCard = ({ g, index, activeIndex, isRevealed, onClick }) => {
  const isActive = index === activeIndex;
  const isPast   = index < activeIndex;
  const isFuture = index > activeIndex;
  return (
    <button
      className={['guideline-card', isRevealed ? 'guideline-card--revealed' : '', isActive ? 'guideline-card--active' : '', isPast ? 'guideline-card--past' : '', isFuture ? 'guideline-card--future' : ''].filter(Boolean).join(' ')}
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

  const [activeGuideline, setActiveGuideline] = useState(null);
  const [activeIndex,     setActiveIndex]     = useState(0);
  const [revealedCards,   setRevealedCards]   = useState([]);
  const [scrollProgress,  setScrollProgress]  = useState(0);
  const [sectionVisible,  setSectionVisible]  = useState(false);

  const PIN_HEIGHT = typeof window !== 'undefined'
    ? window.innerHeight * (GUIDELINES.length + 0.5) : 3500;

  const handleScroll = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const w = wrapperRef.current;
      if (!w) return;
      const { top, height } = w.getBoundingClientRect();
      const vh  = window.innerHeight;
      const raw = Math.max(0, Math.min(1, -top / (height - vh)));
      setScrollProgress(raw);
      setActiveIndex(Math.min(GUIDELINES.length - 1, Math.floor(raw * GUIDELINES.length)));
      const rev = [];
      GUIDELINES.forEach((_, i) => { if (raw >= i / GUIDELINES.length - 0.02) rev.push(i); });
      setRevealedCards(rev);
      setSectionVisible(-top < height && -top > -vh);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => { window.removeEventListener('scroll', handleScroll); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [handleScroll]);

  if (activeGuideline !== null) {
    const g = GUIDELINES[activeGuideline];
    const close = () => setActiveGuideline(null);
    if (g.id === 'visual')    return <VisualDetail   onBack={close} />;
    if (g.id === 'copy')      return <CopyDetail     onBack={close} />;
    if (g.id === 'dos-donts') return <DosDontsDetail onBack={close} />;
  }

  return (
    <div className="gl-scroll-wrapper" ref={wrapperRef} style={{ height: `${PIN_HEIGHT}px` }}>
      <div className="gl-sticky">
        <div className={`gl-header ${sectionVisible ? 'gl-header--visible' : ''}`}>
          <div className="gl-label">
            <span className="gl-label-num">03</span>
            <span className="gl-label-text">The Guidelines</span>
          </div>
          <h2 className="gl-heading">How we bring the <em>platform</em> to life</h2>
        </div>

        <div className="gl-stage">
          {GUIDELINES.map((g, i) => (
            <GuidelineCard key={g.id} g={g} index={i} activeIndex={activeIndex}
              isRevealed={revealedCards.includes(i)} onClick={() => setActiveGuideline(i)} />
          ))}
          <div className="gl-vignette gl-vignette--left" />
          <div className="gl-vignette gl-vignette--right" />
        </div>

        <div className="gl-dots">
          {GUIDELINES.map((_, i) => (
            <div key={i} className={`gl-dot ${i === activeIndex ? 'gl-dot--active' : ''} ${revealedCards.includes(i) ? 'gl-dot--revealed' : ''}`} />
          ))}
        </div>

        <div className="gl-counter">
          <span className="gl-counter-cur">{String(activeIndex + 1).padStart(2, '0')}</span>
          <span className="gl-counter-sep">/</span>
          <span className="gl-counter-total">{String(GUIDELINES.length).padStart(2, '0')}</span>
        </div>

        <div className={`gl-scroll-hint ${scrollProgress > 0.06 ? 'gl-scroll-hint--hidden' : ''}`}>
          <div className="gl-hint-mouse"><div className="gl-hint-wheel" /></div>
          <span>Scroll to explore</span>
        </div>

        <div className="gl-progress-bar">
          <div className="gl-progress-fill" style={{ width: `${scrollProgress * 100}%` }} />
        </div>
      </div>
    </div>
  );
};

export default GuidelinesSection;
