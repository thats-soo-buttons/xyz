import React, { useState, useEffect, useRef } from 'react';
// Curated mysterious/ancient/modern font families
const LORE_FONTS = [
  'serif',
  'monospace',
  'cursive',
  '"EB Garamond", serif',
  '"Cinzel", serif',
  '"Share Tech Mono", monospace',
  '"UnifrakturCook", cursive',
  '"Orbitron", sans-serif',
  '"IM Fell English SC", serif',
  '"Special Elite", cursive',
  '"VT323", monospace',
  '"Cormorant Garamond", serif',
];

function randomFont() {
  return LORE_FONTS[Math.floor(Math.random() * LORE_FONTS.length)];
}

function randomSize() {
  // Between 1vw and 2.2vw
  return `${1 + Math.random() * 1.2}vw`;
}

const LETTERS = [
  {
    char: 'X',
    name: 'Xaeron',
    bg: '#000',
    color: '#fff',
    text: 'Fracture Origin Split Shard Beginning Division Creation Paradox',
    textColor: '#e0e0e0',
  },
  {
    char: 'Y',
    name: 'Ytaeron',
    bg: '#5a3a1b',
    color: '#ffe066',
    text: 'Chaos Whisper Storm Peace Balance Eye Flow Spiral',
    textColor: '#fff6b2',
  },
  {
    char: 'Z',
    name: 'Zotrexons',
    bg: '#232323',
    color: '#b0b0b0',
    text: 'Potential Vessel Shape Choice Unseen Flow Destiny Form',
    textColor: '#e0e0e0',
  },
  {
    char: 'T',
    name: 'Tenebraeum',
    bg: '#f3f3f3', // very light grey for better contrast
    color: '#111',
    text: 'Revelation Shadow Light Truth Secret Mystery End Beginning Veil',
    textColor: '#000000', // black for maximum visibility
  },
  {
    char: 'H',
    name: 'Helixotopes',
    bg: 'linear-gradient(135deg, #b87333 0%, #c0c0c0 100%)',
    color: '#b87333',
    text: 'Dimension Spiral Bridge Echo Sequence Loop Pathway',
    textColor: '#f5e6c8',
    metallic: true,
  },
  {
    char: 'I',
    name: 'Iantheos',
    bg: '#5a3396',
    color: '#cfaaff',
    text: 'Devotion Will Becoming Unbecoming Faith Change Resolve',
    textColor: '#e6d6ff',
  },
  {
    char: 'A',
    name: 'Alithianos',
    bg: '#1a2a6c',
    color: '#4fc3f7',
    text: 'Reality Illusion Thread Tapestry Dream Fabric Mask',
    textColor: '#aee7ff',
  },
  {
    char: 'N',
    name: 'Nymslyornt',
    bg: 'linear-gradient(135deg, #ff00cc 0%, #3333ff 100%)',
    color: '#39ff14',
    text: 'Change Current Dance Unpredictable Flux Neon Pulse',
    textColor: '#baffc9',
    neon: true,
  },
  {
    char: 'S',
    name: 'Seititne',
    bg: '#0a0a23',
    color: '#fff',
    text: 'Fragment Glow Veil Thin Rift Portal Shard',
    textColor: '#baffff',
    blacklight: true,
  },
];



// Sequence: [index in LETTERS, vertical position: 0=top, 1=middle, 2=bottom]
const BAR_SEQUENCE = [
  [0, 0], // X top
  [1, 1], // Y middle
  [2, 2], // Z bottom
  [3, 0], // T top
  [4, 1], // H middle
  [5, 2], // I bottom
  [6, 0], // A top
  [7, 1], // N middle
  [8, 2], // S bottom
];




import FolderMenu from './FolderMenu';

// Veil Sectors and their properties
const VEIL_SECTORS = [
  {
    name: 'The Foyer',
    description: 'The initial arrival point for newly deceased souls or those awaiting rebirth. A liminal space of transition and profound choice.',
    color: '#b0b3b8',
    xyzthian: 'Xaeron',
    xyzthianQuote: 'Every beginning is a fracture. Every fracture, a new path.'
  },
  {
    name: 'The Sandbox',
    description: 'A creative nexus where gods manifest and test new ideas before deploying them to Earth. Sand floors, mutable reality.',
    color: '#ffe066',
    xyzthian: 'Ytaeron',
    xyzthianQuote: 'Chaos is the mother of invention. Play, and see what forms.'
  },
  {
    name: 'The In-Between',
    description: 'A space where ancient spirits are trapped, not able to fully pass on or manifest elsewhere.',
    color: '#b0b0b0',
    xyzthian: 'Zotrexons',
    xyzthianQuote: 'Some choices are never made. Some forms never seen.'
  },
  {
    name: 'The Void/Gaps',
    description: 'The unformed, chaotic spaces or misprints of creation, where inconsistencies and fragmented truths reside.',
    color: '#000',
    xyzthian: 'Seititne',
    xyzthianQuote: 'I am the gap in your story, the shadow in your mind.'
  },
  {
    name: 'The Crossroads',
    description: 'The central hub and primary entry point within the Veil, connecting all other sectors.',
    color: '#b87333',
    xyzthian: 'Helixotopes',
    xyzthianQuote: 'Every path is a spiral. Every spiral, a choice.'
  },
  {
    name: 'The Sanctuary',
    description: 'A designated safe zone within the Veil where no harm can come to those who enter.',
    color: '#4fc3f7',
    xyzthian: 'Alithianos',
    xyzthianQuote: 'Rest, for even illusions need respite.'
  },
  {
    name: 'The Chamber',
    description: 'A sector where echoes of past, present, and potential future events reverberate.',
    color: '#cfaaff',
    xyzthian: 'Iantheos',
    xyzthianQuote: 'Will you become what you remember, or what you dream?'
  },
  {
    name: 'Passageways/Conduits',
    description: 'Pathways and connections within the Veil that allow gods and certain souls to move between sectors and other realms.',
    color: '#39ff14',
    xyzthian: 'Nymslyornt',
    xyzthianQuote: 'Flux is the only constant. Dance between worlds.'
  },
];

// Placeholder for user-generated Xyzthian image
function XyzthianImage({ src, name, onHover }) {
  return (
    <div style={{ position: 'relative', display: 'inline-block', margin: '1vw' }}>
      <img
        src={src}
        alt={name}
        style={{ width: '8vw', height: '8vw', borderRadius: '50%', boxShadow: '0 0 24px #000a', objectFit: 'cover', cursor: 'pointer', border: '3px solid #fff' }}
        onMouseEnter={onHover}
        onMouseLeave={onHover}
      />
    </div>
  );
}

function XyzthiansTransition({ onComplete }) {
  const [barIdx, setBarIdx] = useState(-1); // which bar in sequence
  const [showTerminal, setShowTerminal] = useState(false);
  const audioRef = useRef(null);

  // Play sound for each letter as it appears
  useEffect(() => {
    if (barIdx === -1) return;
    // Play a different sound for each letter (placeholder logic)
    const [letterIdx] = BAR_SEQUENCE[barIdx];
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    let soundUrl = '';
    switch (letterIdx) {
      case 0: soundUrl = '/sounds/x.mp3'; break; // X - deep chime
      case 1: soundUrl = '/sounds/y.mp3'; break; // Y - peaceful tone
      case 2: soundUrl = '/sounds/z.mp3'; break; // Z - airy
      case 3: soundUrl = '/sounds/t.mp3'; break; // T - bright
      case 4: soundUrl = '/sounds/h.mp3'; break; // H - metallic
      case 5: soundUrl = '/sounds/i.mp3'; break; // I - ethereal
      case 6: soundUrl = '/sounds/a.mp3'; break; // A - harmonic
      case 7: soundUrl = '/sounds/n.mp3'; break; // N - neon
      case 8: soundUrl = '/sounds/s.mp3'; break; // S - distorted
      default: soundUrl = '';
    }
    if (soundUrl) {
      const audio = new window.Audio(soundUrl);
      audioRef.current = audio;
      audio.volume = 0.5;
      audio.play();
    }
  }, [barIdx]);

  useEffect(() => {
    const startTimeout = setTimeout(() => setBarIdx(0), 1200);
    return () => clearTimeout(startTimeout);
  }, []);

  useEffect(() => {
    if (barIdx === -1) return;
    if (barIdx < BAR_SEQUENCE.length - 1) {
      const timeout = setTimeout(() => setBarIdx(barIdx + 1), 1500);
      return () => clearTimeout(timeout);
    } else if (barIdx === BAR_SEQUENCE.length - 1) {
      // After last bar (S), call onComplete after a short pause
      const timeout = setTimeout(() => {
        if (onComplete) onComplete();
      }, 1500);
      return () => clearTimeout(timeout);
    }
  }, [barIdx, onComplete]);


  // Veil sector navigation UI
  const [veilSectorIdx, setVeilSectorIdx] = useState(0);
  const [hoveredXyzthian, setHoveredXyzthian] = useState(null);
  const [userImage, setUserImage] = useState(null); // For user-generated image

  // Prevent crash: don't render bars until animation starts
  if (barIdx === -1) return <div className="xyzthians-transition-veil" style={{height: '100vh', width: '100vw', background: '#000'}} />;

  const [letterIdx, verticalPos] = BAR_SEQUENCE[barIdx];
  const letter = LETTERS[letterIdx];

  // Render 3 vertical bars, only one is visible (with content), others are transparent/empty
  return (
    <div className="xyzthians-transition-veil" style={{height: '100vh', width: '100vw', display: 'flex', flexDirection: 'column'}}>
      {[0, 1, 2].map((pos) => {
        return (
          <div
            key={pos}
            className="xyzthians-bar"
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              ...(pos === verticalPos
                ? (typeof letter.bg === 'string' && letter.bg.startsWith('linear-gradient')
                    ? { backgroundImage: letter.bg }
                    : { background: letter.bg })
                : { background: 'transparent' }),
              color: pos === verticalPos ? letter.color : 'transparent',
              overflow: 'hidden',
              border: 'none',
              outline: 'none',
              boxShadow: 'none',
              borderBottom: 'none',
              transition: 'background 0.7s, color 0.7s',
            }}
          >
            {pos === verticalPos && (
              <>
                <div
                  className="xyzthians-texture-letter"
                  style={{
                    color: letter.color,
                    WebkitTextStroke: '2px rgba(0,0,0,0.18)',
                    fontSize: '15vw',
                    fontWeight: 900,
                    letterSpacing: '0.1em',
                    textAlign: 'center',
                    lineHeight: 1,
                    zIndex: 2,
                    position: 'relative',
                    textShadow: `0 0 32px ${letter.color}, 0 0 16px ${letter.color}, 0 0 8px #000`,
                    transition: 'text-shadow 0.7s',
                  }}
                >
                  {letter.char}
                </div>
                {/* Lore texture fills the whole bar */}
                <div
                  className="xyzthians-texture"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    color: letter.textColor,
                    opacity: letter.char === 'T' ? 0.32 : 0.13,
                    pointerEvents: 'none',
                    fontWeight: 700,
                    lineHeight: 1.1,
                    ...(letter.char === 'T' ? {} : { mixBlendMode: 'lighten' }),
                    zIndex: 1,
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignContent: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    whiteSpace: 'pre-wrap',
                    padding: '0 2vw',
                    gap: '0.2vw',
                  }}
                >
                  {(() => {
                    // Repeat and randomize lore words to fill the bar
                    const words = letter.text.split(' ');
                    const totalWords = 60; // Adjust for density
                    let out = [];
                    for (let i = 0; i < totalWords; ++i) {
                      const word = words[i % words.length];
                      // If T, add black glow to the lore text
                      const isT = letter.char === 'T';
                      out.push(
                        <span
                          key={i}
                          style={{
                            fontFamily: randomFont(),
                            fontSize: randomSize(),
                            opacity: 0.8,
                            margin: '0 0.2vw',
                            letterSpacing: '0.04em',
                            transition: 'font-size 0.5s, font-family 0.5s',
                            ...(isT ? { textShadow: '0 0 8px #888, 0 0 2px #888' } : {}),
                          }}
                        >
                          {word}
                        </span>
                      );
                    }
                    return out;
                  })()}
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default XyzthiansTransition;
