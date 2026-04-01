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

function XyzthiansTransition() {
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
      const timeout = setTimeout(() => setBarIdx(barIdx + 1), 1700);
      return () => clearTimeout(timeout);
    } else if (barIdx === BAR_SEQUENCE.length - 1) {
      // After last bar, show terminal
      const timeout = setTimeout(() => setShowTerminal(true), 1700);
      return () => clearTimeout(timeout);
    }
  }, [barIdx]);


  // Veil sector navigation UI
  const [veilSectorIdx, setVeilSectorIdx] = useState(0);
  const [hoveredXyzthian, setHoveredXyzthian] = useState(null);
  const [userImage, setUserImage] = useState(null); // For user-generated image

  // Manila folder intro for The Void
  const [voidFolderOpen, setVoidFolderOpen] = useState(false);
  if (showTerminal) {
    if (!voidFolderOpen) {
      // Directional signpost intro
      // Arrow data: label, color, angle, onClick
      // More distinct signpost directions and always-visible labels
      const signArrows = [
        { label: 'THE VEIL', color: '#ffe066', angle: -40, y: 16, x: -2, onClick: () => setVoidFolderOpen(true), arrowDir: 'left' },
        { label: 'LIBRARY', color: '#b0b3b8', angle: 0, y: 30, x: 0, onClick: () => window.location.href = '/library', arrowDir: 'right' },
        { label: 'THE ALTAR', color: '#cfaaff', angle: 30, y: 44, x: 2, onClick: () => window.location.href = '/altar', arrowDir: 'right' },
        { label: 'C.C.', color: '#39ff14', angle: 70, y: 60, x: 4, onClick: () => window.location.href = '/cc', arrowDir: 'right' },
      ];
      const [hoverIdx, setHoverIdx] = useState(-1);
      return (
        <div style={{
          width: '100vw', height: '100vh', background: 'rgba(30,30,30,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'fixed', top: 0, left: 0, zIndex: 10000,
        }}>
          <div style={{ position: 'relative', width: '32vw', height: '36vw', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Signpost pole */}
            <div style={{ position: 'absolute', left: '49%', top: '8%', width: '1.3vw', height: '26vw', background: 'linear-gradient(180deg,#b87333 0%,#7a5a3a 100%)', borderRadius: '0.5vw', boxShadow: '0 2px 12px #0006', zIndex: 1 }} />
            {/* Arrows with always-visible labels and 3D effect */}
            {signArrows.map((arrow, i) => {
              // Arrowhead SVG for more 3D effect
              const arrowHead = (
                <svg width="2.2vw" height="2vw" viewBox="0 0 44 40" style={{
                  marginLeft: arrow.arrowDir === 'right' ? '1vw' : '0',
                  marginRight: arrow.arrowDir === 'left' ? '1vw' : '0',
                  filter: hoverIdx === i ? 'drop-shadow(0 0 8px #fff)' : 'drop-shadow(0 2px 2px #0007)',
                  transition: 'filter 0.2s',
                  transform: arrow.arrowDir === 'left' ? 'scaleX(-1)' : undefined,
                }}>
                  <polygon points="0,0 44,20 0,40" fill="#fff" stroke="#222" strokeWidth="3" />
                  <polygon points="6,6 38,20 6,34" fill={arrow.color} stroke="#222" strokeWidth="1.5" />
                </svg>
              );
              return (
                <div
                  key={arrow.label}
                  onMouseEnter={() => setHoverIdx(i)}
                  onMouseLeave={() => setHoverIdx(-1)}
                  onClick={arrow.onClick}
                  style={{
                    position: 'absolute',
                    left: `calc(50% + ${arrow.x}vw)`,
                    top: `${arrow.y}%`,
                    transform: `translate(-50%, -50%) rotate(${arrow.angle}deg) scale(${hoverIdx === i ? 1.13 : 1})`,
                    width: '15vw',
                    height: '3.2vw',
                    background: `linear-gradient(90deg, ${arrow.color} 80%, #fff 100%)`,
                    border: '2.5px solid #222',
                    borderRadius: '0.7vw 2vw 1vw 0.7vw',
                    boxShadow: hoverIdx === i ? `0 0 32px ${arrow.color}, 0 2px 16px #000a` : '0 2px 12px #0007',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: arrow.arrowDir === 'left' ? 'flex-end' : 'flex-start',
                    padding: arrow.arrowDir === 'left' ? '0 2vw 0 1vw' : '0 1vw 0 2vw',
                    fontFamily: 'Cinzel, Special Elite, serif',
                    fontWeight: 900,
                    fontSize: '1.5vw',
                    color: '#222',
                    letterSpacing: '0.08em',
                    textShadow: hoverIdx === i ? `0 0 12px #fff, 0 0 2px #000` : '0 1px 2px #fff',
                    transition: 'box-shadow 0.25s, transform 0.25s, text-shadow 0.25s',
                    zIndex: 2 + i,
                    filter: hoverIdx === i ? 'brightness(1.13)' : 'none',
                    userSelect: 'none',
                  }}
                >
                  {arrow.arrowDir === 'left' && arrowHead}
                  <span style={{
                    position: 'relative',
                    zIndex: 2,
                    padding: '0 0.2vw',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '0.3vw',
                    boxShadow: hoverIdx === i ? `0 0 12px #fff` : 'none',
                    marginRight: arrow.arrowDir === 'left' ? '1vw' : '0',
                    marginLeft: arrow.arrowDir === 'right' ? '1vw' : '0',
                    fontWeight: 900,
                    fontSize: '1.5vw',
                    color: '#222',
                    textShadow: hoverIdx === i ? `0 0 12px #fff, 0 0 2px #000` : '0 1px 2px #fff',
                    letterSpacing: '0.08em',
                    transition: 'box-shadow 0.25s, text-shadow 0.25s',
                  }}>{arrow.label}</span>
                  {arrow.arrowDir === 'right' && arrowHead}
                </div>
              );
            })}
            {/* Signpost base */}
            <div style={{ position: 'absolute', left: '48.5%', top: '92%', width: '2vw', height: '2vw', background: 'linear-gradient(180deg,#7a5a3a 0%,#222 100%)', borderRadius: '1vw', boxShadow: '0 2px 12px #0008', zIndex: 1 }} />
          </div>
        </div>
      );
    }
    // The Veil: video at top, then artifact feed
    return (
      <div style={{
        width: '100vw', minHeight: '100vh', background: 'linear-gradient(120deg,#222 0%,#18181a 100%)', position: 'fixed', top: 0, left: 0, zIndex: 10000, overflowY: 'auto', padding: '0 0 8vh 0',
        display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}>
        <div style={{ width: '100%', background: '#18181aee', borderBottom: '2px solid #444', position: 'sticky', top: 0, zIndex: 10, padding: '2vw 0', textAlign: 'center', boxShadow: '0 2px 12px #000a' }}>
          <h1 style={{ color: '#ffe066', fontFamily: 'Cinzel, serif', fontSize: '2.8vw', letterSpacing: '0.1em', margin: 0 }}>THE VOID</h1>
          <span style={{ color: '#b0b3b8', fontSize: '1.2vw' }}>A classified feed of Veil phenomena</span>
        </div>
        {/* Video at the top */}
        <div style={{ width: '100%', maxWidth: '700px', margin: '2vw auto 0 auto', display: 'flex', justifyContent: 'center' }}>
          <video
            style={{ width: '100%', borderRadius: '1vw', boxShadow: '0 4px 32px #000a', background: '#111' }}
            controls
            poster="/veil-video-poster.jpg"
          >
            <source src="/veil-intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div style={{ width: '100%', maxWidth: '700px', margin: '0 auto', marginTop: '2vw' }}>
          {/* Artifact-driven, immersive entries for each sector */}
          {/* The Foyer: Redacted memo and lost soul's note */}
          <div style={{ background: '#232323', borderRadius: '1.2vw', boxShadow: '0 4px 32px #000a', margin: '2vw 0', padding: '2vw 2vw 1vw 2vw', borderLeft: '8px solid #b0b3b8', position: 'relative', fontFamily: 'Share Tech Mono, monospace' }}>
            <div style={{ color: '#b0b3b8', fontSize: '1.1vw', marginBottom: '1vw' }}>
              <b>MEMO: FOYER ACCESS LOG</b><br />
              <span style={{ background: '#444', color: '#232323', padding: '0 0.3em', borderRadius: '0.3em' }}>REDACTED</span> 03:14:12 — "Another arrival. Soul appears disoriented. Awaiting guidance."
            </div>
            <div style={{ color: '#e0e0e0', fontSize: '1.2vw', margin: '1vw 0', fontStyle: 'italic' }}>
              <span style={{ color: '#b0b3b8' }}>Found Note:</span> <br />
              <span>"I don't remember dying. Is this the end, or just another beginning?"</span>
            </div>
            <div style={{ position: 'absolute', top: '1vw', right: '2vw', color: '#b0b3b8', fontSize: '1vw', opacity: 0.7 }}>#foyer</div>
          </div>
          {/* The Sandbox: Polaroid and godly sketch */}
          <div style={{ background: '#232323', borderRadius: '1.2vw', boxShadow: '0 4px 32px #000a', margin: '2vw 0', padding: '2vw 2vw 1vw 2vw', borderLeft: '8px solid #ffe066', position: 'relative', fontFamily: 'Special Elite, cursive' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2vw' }}>
              <div style={{ width: '7vw', height: '7vw', background: '#ffe066', borderRadius: '1vw', boxShadow: '0 2px 12px #000a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2vw', color: '#222', fontWeight: 700, fontFamily: 'monospace', marginBottom: '1vw' }}>🖼️</div>
              <div>
                <b>POLAROID: SANDBOX FLOOR</b><br />
                <span style={{ color: '#ffe066' }}>"Footprints. Sand. Something half-built, then erased."</span>
              </div>
            </div>
            <div style={{ color: '#b0b3b8', fontSize: '1vw', marginTop: '1vw' }}>Sketch: <span style={{ fontFamily: 'Share Tech Mono, monospace', color: '#ffe066' }}>[spiral, erased]</span></div>
            <div style={{ position: 'absolute', top: '1vw', right: '2vw', color: '#ffe066', fontSize: '1vw', opacity: 0.7 }}>#sandbox</div>
          </div>
          {/* The In-Between: Chat log fragment */}
          <div style={{ background: '#232323', borderRadius: '1.2vw', boxShadow: '0 4px 32px #000a', margin: '2vw 0', padding: '2vw 2vw 1vw 2vw', borderLeft: '8px solid #b0b0b0', position: 'relative', fontFamily: 'Share Tech Mono, monospace' }}>
            <div style={{ color: '#b0b0b0', fontSize: '1.1vw', marginBottom: '1vw' }}>
              <b>CHAT LOG: IN-BETWEEN</b>
            </div>
            <div style={{ color: '#e0e0e0', fontSize: '1.2vw', margin: '1vw 0' }}>
              <span style={{ color: '#b0b0b0' }}>[Zotrexons]:</span> "Some choices are never made. Some forms never seen."
            </div>
            <div style={{ color: '#b0b3b8', fontSize: '1vw', marginTop: '0.5vw', opacity: 0.7 }}>#inbetween</div>
          </div>
          {/* The Void/Gaps: Redacted file and glitch effect */}
          <div style={{ background: '#232323', borderRadius: '1.2vw', boxShadow: '0 4px 32px #000a', margin: '2vw 0', padding: '2vw 2vw 1vw 2vw', borderLeft: '8px solid #000', position: 'relative', fontFamily: 'Share Tech Mono, monospace' }}>
            <div style={{ color: '#fff', fontSize: '1.1vw', marginBottom: '1vw', letterSpacing: '0.1em', textShadow: '0 0 8px #000, 0 0 2px #fff' }}>
              <b>FILE: [REDACTED]</b> <span style={{ background: '#000', color: '#fff', padding: '0 0.3em', borderRadius: '0.3em', marginLeft: '0.5em' }}>GLITCH</span>
            </div>
            <div style={{ color: '#b0b3b8', fontSize: '1.2vw', margin: '1vw 0', fontStyle: 'italic', filter: 'blur(1px)', userSelect: 'none' }}>
              "I am the gap in your story, the shadow in your mind."
            </div>
            <div style={{ color: '#b0b3b8', fontSize: '1vw', marginTop: '0.5vw', opacity: 0.7 }}>#void</div>
          </div>
          {/* The Crossroads: Directional sign and travel log */}
          <div style={{ background: '#232323', borderRadius: '1.2vw', boxShadow: '0 4px 32px #000a', margin: '2vw 0', padding: '2vw 2vw 1vw 2vw', borderLeft: '8px solid #b87333', position: 'relative', fontFamily: 'Cinzel, serif' }}>
            <div style={{ color: '#b87333', fontSize: '1.1vw', marginBottom: '1vw' }}>
              <b>TRAVEL LOG: CROSSROADS</b> <span style={{ fontSize: '1.5vw', marginLeft: '1vw' }}>🛣️</span>
            </div>
            <div style={{ color: '#e0e0e0', fontSize: '1.2vw', margin: '1vw 0' }}>
              "Every path is a spiral. Every spiral, a choice."
            </div>
            <div style={{ color: '#b0b3b8', fontSize: '1vw', marginTop: '0.5vw', opacity: 0.7 }}>#crossroads</div>
          </div>
          {/* The Sanctuary: Handwritten note */}
          <div style={{ background: '#232323', borderRadius: '1.2vw', boxShadow: '0 4px 32px #000a', margin: '2vw 0', padding: '2vw 2vw 1vw 2vw', borderLeft: '8px solid #4fc3f7', position: 'relative', fontFamily: 'Special Elite, cursive' }}>
            <div style={{ color: '#4fc3f7', fontSize: '1.1vw', marginBottom: '1vw' }}>
              <b>NOTE FOUND: SANCTUARY</b>
            </div>
            <div style={{ color: '#e0e0e0', fontSize: '1.3vw', margin: '1vw 0', fontStyle: 'italic' }}>
              "Rest here. No harm can come. Even illusions need respite."
            </div>
            <div style={{ color: '#b0b3b8', fontSize: '1vw', marginTop: '0.5vw', opacity: 0.7 }}>#sanctuary</div>
          </div>
          {/* The Chamber: Audio log transcript */}
          <div style={{ background: '#232323', borderRadius: '1.2vw', boxShadow: '0 4px 32px #000a', margin: '2vw 0', padding: '2vw 2vw 1vw 2vw', borderLeft: '8px solid #cfaaff', position: 'relative', fontFamily: 'Share Tech Mono, monospace' }}>
            <div style={{ color: '#cfaaff', fontSize: '1.1vw', marginBottom: '1vw' }}>
              <b>AUDIO LOG: CHAMBER</b>
            </div>
            <div style={{ color: '#e0e0e0', fontSize: '1.2vw', margin: '1vw 0', fontStyle: 'italic' }}>
              "Will you become what you remember, or what you dream?"
            </div>
            <div style={{ color: '#b0b3b8', fontSize: '1vw', marginTop: '0.5vw', opacity: 0.7 }}>#chamber</div>
          </div>
          {/* Passageways/Conduits: Map fragment and cryptic note */}
          <div style={{ background: '#232323', borderRadius: '1.2vw', boxShadow: '0 4px 32px #000a', margin: '2vw 0', padding: '2vw 2vw 1vw 2vw', borderLeft: '8px solid #39ff14', position: 'relative', fontFamily: 'Share Tech Mono, monospace' }}>
            <div style={{ color: '#39ff14', fontSize: '1.1vw', marginBottom: '1vw' }}>
              <b>MAP FRAGMENT: PASSAGEWAYS</b>
            </div>
            <div style={{ color: '#e0e0e0', fontSize: '1.2vw', margin: '1vw 0', fontStyle: 'italic' }}>
              <span style={{ color: '#39ff14' }}>"Flux is the only constant. Dance between worlds."</span>
            </div>
            <div style={{ color: '#b0b3b8', fontSize: '1vw', marginTop: '0.5vw', opacity: 0.7 }}>#passageways</div>
          </div>
        </div>
        {/* Back to menu */}
        <button style={{ margin: '4vw auto 2vw auto', display: 'block', background: '#222', color: '#fff', border: '2px solid #fff', borderRadius: '1vw', fontSize: '1.2vw', padding: '1vw 2vw', cursor: 'pointer', zIndex: 10 }} onClick={() => setShowTerminal(false)}>
          Return to Transition
        </button>
      </div>
    );
  }

  if (barIdx === -1) return <div className="xyzthians-transition-veil" />;
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
