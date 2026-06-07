import React, { useEffect, useRef, useState } from 'react';
import './ActivationSection.css';

// Placeholder image colors that simulate a diverse image gallery
const PALETTE_A = ['#C8A882', '#8B6E4A', '#D4B08A', '#A07850', '#E0C090', '#7A5A30'];
const PALETTE_B = ['#5A7A6A', '#3D5C4C', '#7A9A8A', '#2E4A3A', '#8AAA9A', '#4A6A5A'];
const PALETTE_C = ['#8A6A9A', '#6A4A7A', '#AA8ABB', '#5A3A6A', '#BB9ACC', '#7A5A8A'];
const PALETTE_D = ['#9A7A5A', '#7A5A3A', '#BA9A7A', '#6A4A2A', '#CA9A6A', '#8A6A4A'];

const ROW_LABELS = [
  'Communicating moments of togetherness',
  'Creating new moments of togetherness',
  'Communicating seasonal content moments',
  'Brand activation highlights'
];

const PALETTES = [PALETTE_A, PALETTE_B, PALETTE_C, PALETTE_D];

const ImageStrip = ({ rowIndex, direction = 'left', label, images = [], onSelectImg }) => {
  const stripRef = useRef(null);

  const palette = PALETTES[rowIndex % PALETTES.length];
  const tiles = [...palette, ...palette, ...palette]; // triple for seamless loop

  return (
    <div className={`image-strip strip--${direction}`}>
      <div className="strip-label">{label}</div>
      <div className="strip-track-wrapper" ref={stripRef}>
        <div className={`strip-track track--${direction}`}>
          {tiles.map((color, i) => (
            <button
              key={i}
              type="button"
              className="strip-tile"
              style={{ background: color }}
              onClick={() => onSelectImg({
                color,
                label,
                index: i % palette.length,
                src: images[i % images.length] || null,
              })}
              aria-label={`Image ${(i % palette.length) + 1} from ${label}`}
            >
              {images[i % images.length] ? (
                <img src={images[i % images.length]} alt="" />
              ) : (
                <div className="tile-placeholder">
                  <span className="tile-num">{String(i % palette.length + 1).padStart(2, '0')}</span>
                  <div className="tile-shine" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export const ActivationSection = ({ images = {} }) => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="activation-section" ref={sectionRef}>
      <div className={`activation-content ${visible ? 'activation-content--visible' : ''}`}>
        <div className="activation-header">
          <div className="activation-label">
            <span className="activation-label-num">05</span>
            <span className="activation-label-text">Activation Inspiration</span>
          </div>
          <h2 className="activation-heading">Activation inspiration</h2>
        </div>

        <div className="activation-strips">
          {ROW_LABELS.map((label, i) => (
            <ImageStrip
              key={i}
              rowIndex={i}
              direction={i % 2 === 0 ? 'left' : 'right'}
              label={label}
              images={images[i] || []}
              onSelectImg={setSelectedImg}
            />
          ))}
        </div>
      </div>

      {/* Lightbox - rendered outside activation-content to avoid transform constraint */}
      {selectedImg && (
        <div className="lightbox" onClick={() => setSelectedImg(null)}>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImg(null)}>✕</button>
            <div className="lightbox-img">
              {selectedImg.src ? (
                <img src={selectedImg.src} alt={`Selected image from ${selectedImg.label}`} />
              ) : (
                <>
                  <span className="lightbox-label">{selectedImg.label}</span>
                  <span className="lightbox-num">Image {selectedImg.index + 1}</span>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ActivationSection;
