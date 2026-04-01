import React, { useState } from 'react';
import BackToMenuButton from './BackToMenuButton';

const XYZ_DOSSIER_PROFILES = [
  {
    name: 'Xaeron',
    theme: {
      bg: 'repeating-linear-gradient(135deg, #222 0 20px, #111 20px 40px)',
      color: '#e0e0e0',
      accent: '#181818',
      border: '#fff',
      font: 'Share Tech Mono, monospace',
    },
    fileLabel: 'ANOMALOUS FILE #X-001',
    status: 'CLASSIFIED',
    content: [
      'Subject: Xaeron',
      'Alias: The Fracture, The Origin Split',
      'Domain: Consciousness',
      'Color: White',
      'Core Concepts: Origin, Awakening, Expansion, Awareness',
      'Keywords: Fracture, Origin, Split, Shard, Beginning, Division, Creation, Paradox.',
      'Lore: Xaeron split himself to form the rest, embodying the duality of consciousness.',
      'Sacred Principle: The Imperative of Unfolding Being — to perpetually be the source and witness of all awareness, driving the ongoing creation and expansion of consciousness throughout existence.',
    ],
  },
  {
    name: 'Ytaeron',
    theme: {
      bg: 'repeating-linear-gradient(135deg, #5a3a1b 0 20px, #ffe066 20px 40px)',
      color: '#fff6b2',
      accent: '#3a2a1b',
      border: '#ffe066',
      font: 'Special Elite, cursive',
    },
    fileLabel: 'ANOMALOUS FILE #Y-002',
    status: 'CONFIDENTIAL',
    content: [
      'Subject: Ytaeron',
      'Alias: The Whisper, The Balance',
      'Domain: Peace',
      'Color: Yellow',
      'Core Concepts: Harmony, Tranquility, Inner Calm',
      'Keywords: Chaos, Whisper, Storm, Peace, Balance, Eye, Flow, Spiral.',
      'Lore: Ytaeron is the eye of the storm, the balance between chaos and peace.',
      'Sacred Principle: The Mandate of Perfect Equilibrium — to inherently seek, maintain, and restore a state of absolute balance and tranquility, embodying harmony as its purest form.',
    ],
  },
  {
    name: 'Zotrexons',
    theme: {
      bg: 'repeating-linear-gradient(135deg, #232323 0 20px, #b0b0b0 20px 40px)',
      color: '#e0e0e0',
      accent: '#232323',
      border: '#b0b0b0',
      font: 'VT323, monospace',
    },
    fileLabel: 'ANOMALOUS FILE #Z-003',
    status: 'RESTRICTED',
    content: [
      'Subject: Zotrexons',
      'Alias: The Vessel, The Unseen',
      'Domain: Potential',
      'Color: Grey',
      'Core Concepts: Flow, Manifestation, Purpose, Fulfillment',
      'Keywords: Potential, Vessel, Shape, Choice, Unseen, Flow, Destiny, Form.',
      'Lore: Zotrexons is the unseen vessel, the form that destiny takes, embodying the duality of potential.',
      'Sacred Principle: The Call of the Unbound — to eternally embody and encourage infinite possibility, never submitting to finality, and always seeking the realization of all latent forms.',
    ],
  },
  {
    name: 'Tenebraeum',
    theme: {
      bg: 'repeating-linear-gradient(135deg, #222 0 20px, #f3f3f3 20px 40px)',
      color: '#f3f3f3',
      accent: '#23232a',
      border: '#000',
      font: 'EB Garamond, serif',
    },
    fileLabel: 'ANOMALOUS FILE #T-004',
    status: 'TOP SECRET',
    content: [
      'Subject: Tenebraeum',
      'Alias: The Shadow, The Truth',
      'Domain: Revelations',
      'Color: Black',
      'Core Concepts: Truth, Insight, Guidance, Discernment',
      'Keywords: Revelation, Shadow, Light, Truth, Secret, Mystery, End, Veil.',
      'Lore: Tenebraeum is the shadow that reveals the truth, the veil that is also the end.',
      'Sacred Principle: The Unveiling Imperative — to relentlessly bring forth hidden truths, uncomfortable realities, and profound insights, exposing what lies beneath the surface regardless of consequence.',
    ],
  },
  {
    name: 'Helixotopes',
    theme: {
      bg: 'repeating-linear-gradient(135deg, #b87333 0 20px, #c0c0c0 20px 40px)',
      color: '#f5e6c8',
      accent: '#b87333',
      border: '#b87333',
      font: 'Cinzel, serif',
    },
    fileLabel: 'ANOMALOUS FILE #H-005',
    status: 'RESTRICTED',
    content: [
      'Subject: Helixotopes',
      'Alias: The Bridge, The Sequence',
      'Domain: Dimensions',
      'Color: Metallics',
      'Core Concepts: Connection, Oneness, Interconnectedness, Bridging',
      'Keywords: Dimension, Spiral, Bridge, Echo, Sequence, Loop, Pathway.',
      'Lore: Helixotopes is the spiral bridge, the echo of dimensions, embodying the duality of dimension.',
      'Sacred Principle: The Eternal Traverse — to endlessly explore, bridge, and interconnect the myriad layers of existence, transcending all perceived boundaries between realms.',
    ],
  },
  {
    name: 'Iantheos',
    theme: {
      bg: 'repeating-linear-gradient(135deg, #5a3396 0 20px, #cfaaff 20px 40px)',
      color: '#e6d6ff',
      accent: '#5a3396',
      border: '#5a3396',
      font: 'Cormorant Garamond, serif',
    },
    fileLabel: 'ANOMALOUS FILE #I-006',
    status: 'CONFIDENTIAL',
    content: [
      'Subject: Iantheos',
      'Alias: The Becoming, The Faith',
      'Domain: Devotion',
      'Color: Purple',
      'Core Concepts: Control, Freedom, Willpower, Commitment',
      'Keywords: Devotion, Will, Becoming, Unbecoming, Faith, Change, Resolve.',
      'Lore: Iantheos is the will to become, the faith to change, embodying the duality of devotion.',
      'Sacred Principle: The Absolute Imperative of Will — to exercise ultimate control over self and circumstance, or to seek ultimate freedom, perpetually testing the boundaries of responsibility, expectation, and autonomy.',
    ],
  },
  {
    name: 'Alithianos',
    theme: {
      bg: 'repeating-linear-gradient(135deg, #1a2a6c 0 20px, #4fc3f7 20px 40px)',
      color: '#aee7ff',
      accent: '#1a2a6c',
      border: '#1a2a6c',
      font: 'UnifrakturCook, cursive',
    },
    fileLabel: 'ANOMALOUS FILE #A-007',
    status: 'CLASSIFIED',
    content: [
      'Subject: Alithianos',
      'Alias: The Thread, The Mask',
      'Domain: Testaments',
      'Color: Blue',
      'Core Concepts: Reality, Illusion, Perception, Clarity, Suffering-Release',
      'Keywords: Reality, Illusion, Thread, Tapestry, Dream, Fabric, Mask.',
      'Lore: Alithianos is the Testaments—the thread of reality, the mask of dreams, the one who weaves and records the stories of all things.',
      'Sacred Principle: The Enduring Weave of Perception — to continuously weave the tapestry of perceived reality and illusion, revealing its constructed nature and the subjective truth within its ever-shifting patterns.',
    ],
  },
  {
    name: 'Nymslyornt',
    theme: {
      bg: 'repeating-linear-gradient(135deg, #ff00cc 0 20px, #3333ff 20px 40px)',
      color: '#baffc9',
      accent: '#3333ff',
      border: '#39ff14',
      font: 'Orbitron, sans-serif',
    },
    fileLabel: 'ANOMALOUS FILE #N-008',
    status: 'RESTRICTED',
    content: [
      'Subject: Nymslyornt',
      'Alias: The Dance, The Flux',
      'Domain: Mutastasis',
      'Color: Brights/Colorful',
      'Core Concepts: Caprice, Unpredictability, Change, Whimsy',
      'Keywords: Change, Current, Dance, Unpredictable, Flux, Neon, Pulse.',
      'Lore: Nymslyornt is the dance of change, the pulse of flux, embodying the duality of mutastasis.',
      'Sacred Principle: The Whim of the Unpredictable — to embody spontaneous, charming, and often chaotic change, to disrupt fixed patterns, and to act solely by unforeseen impulse.',
    ],
  },
  {
    name: 'Seititne',
    theme: {
      bg: 'repeating-linear-gradient(135deg, #0a0a23 0 20px, #fff 20px 40px)',
      color: '#baffff',
      accent: '#0a0a23',
      border: '#0a0a23',
      font: 'VT323, monospace',
    },
    fileLabel: 'ANOMALOUS FILE #S-009',
    status: 'TOP SECRET',
    content: [
      'Subject: Seititne',
      'Alias: The Veil, The Portal',
      'Domain: The Veil Dwellers',
      'Color: Neon/Black Light/Glow in the Dark',
      'Core Concepts: Void, Misprints, Manipulation, Fragments, Imaginary, Warning',
      'Keywords: Fragment, Glow, Veil, Thin, Rift, Portal, Shard.',
      'Lore: Seititne is the thin veil, the portal between fragments.',
      'Sacred Principle: The Essence of the Fragmented Truth — to perpetually exist in the gaps and voids, to highlight inconsistencies, to embody the misprints of creation, and to sow seeds of psychological distortion and unseen influence.',
    ],
  },
];

function XyzthiansProfiles({ onBack }) {
  const [idx, setIdx] = useState(0);
  const profile = XYZ_DOSSIER_PROFILES[idx];

  return (
    <div style={{
      minHeight: '100vh',
      background: profile.theme.bg,
      color: profile.theme.color,
      fontFamily: profile.theme.font,
      border: `8px double ${profile.theme.border}`,
      borderRadius: '2vw',
      margin: '2vw',
      boxShadow: '0 8px 48px #0004',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      transition: 'background 1s',
    }}>
      <BackToMenuButton onClick={onBack} />
      <div style={{
        fontSize: '1.2vw',
        fontWeight: 700,
        letterSpacing: '0.2em',
        color: '#ff5252',
        marginTop: '1vw',
        marginBottom: '0.5vw',
        textShadow: '0 0 8px #000, 0 0 2px #fff',
        opacity: 0.8,
      }}>{profile.fileLabel}</div>
      <div style={{
        fontSize: '2.5vw',
        fontWeight: 900,
        margin: '0.5vw 0',
        textShadow: '0 0 16px #000,0 0 8px #fff',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
      }}>{profile.name}</div>
      <div style={{
        fontSize: '1vw',
        fontWeight: 800,
        color: '#ffb300',
        marginBottom: '1vw',
        letterSpacing: '0.15em',
        textShadow: '0 0 6px #000, 0 0 2px #fff',
        opacity: 0.7,
      }}>{profile.status}</div>
      <div style={{
        width: '80%',
        maxWidth: '600px',
        background: profile.theme.accent,
        padding: '2vw',
        borderRadius: '1vw',
        boxShadow: '0 2px 16px #0002',
        marginBottom: '2vw',
        opacity: 0.97,
        border: '2px dashed #fff3',
        fontFamily: 'inherit',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          top: '-1.5vw',
          right: '2vw',
          fontSize: '0.9vw',
          color: '#ff5252',
          fontWeight: 700,
          opacity: 0.7,
          letterSpacing: '0.1em',
        }}>[REDACTED]</div>
        {profile.content.map((line, i) => (
          <div key={i} style={{
            margin: '1vw 0',
            fontSize: '1.3vw',
            fontWeight: i === 0 ? 700 : 400,
            fontFamily: i === 0 ? 'Share Tech Mono, monospace' : 'inherit',
            letterSpacing: i === 0 ? '0.1em' : 'normal',
          }}>{line}</div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '2vw', margin: '2vw 0' }}>
        <button onClick={() => setIdx(Math.max(0, idx - 1))} disabled={idx === 0} style={{ fontSize: '1.2vw', padding: '0.7vw 2vw', borderRadius: '1vw', border: 'none', background: '#eee', color: '#333', opacity: idx === 0 ? 0.5 : 1, cursor: idx === 0 ? 'not-allowed' : 'pointer', boxShadow: '0 2px 8px #0002' }}>Back</button>
        <button onClick={() => setIdx(Math.min(XYZ_DOSSIER_PROFILES.length - 1, idx + 1))} disabled={idx === XYZ_DOSSIER_PROFILES.length - 1} style={{ fontSize: '1.2vw', padding: '0.7vw 2vw', borderRadius: '1vw', border: 'none', background: '#eee', color: '#333', opacity: idx === XYZ_DOSSIER_PROFILES.length - 1 ? 0.5 : 1, cursor: idx === XYZ_DOSSIER_PROFILES.length - 1 ? 'not-allowed' : 'pointer', boxShadow: '0 2px 8px #0002' }}>Next</button>
      </div>
    </div>
  );
}

export default XyzthiansProfiles;
