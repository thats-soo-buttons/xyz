import React from 'react';

const PRINCIPLES = [
  {
    name: 'Xaeron',
    domain: 'Consciousness',
    color: 'White',
    concepts: 'Origin, Awakening, Expansion, Awareness',
    principle: 'The Imperative of Unfolding Being: To perpetually be the source and witness of all awareness, driving the ongoing creation and expansion of consciousness throughout existence.'
  },
  {
    name: 'Ytaeron',
    domain: 'Peace',
    color: 'Yellow',
    concepts: 'Harmony, Tranquility, Inner Calm',
    principle: 'The Mandate of Perfect Equilibrium: To inherently seek, maintain, and restore a state of absolute balance and tranquility, embodying harmony as its purest form.'
  },
  {
    name: 'Zotrexons',
    domain: 'Potential',
    color: 'Grey',
    concepts: 'Flow, Manifestation, Purpose, Fulfillment',
    principle: 'The Call of the Unbound: To eternally embody and encourage infinite possibility, never submitting to finality, and always seeking the realization of all latent forms.'
  },
  {
    name: 'Tenebraeum',
    domain: 'Revelations',
    color: 'Black',
    concepts: 'Truth, Insight, Guidance, Discernment',
    principle: 'The Unveiling Imperative: To relentlessly bring forth hidden truths, uncomfortable realities, and profound insights, exposing what lies beneath the surface regardless of consequence.'
  },
  {
    name: 'Helixotopes',
    domain: 'Dimensions',
    color: 'Metallics',
    concepts: 'Connection, Oneness, Interconnectedness, Bridging',
    principle: 'The Eternal Traverse: To endlessly explore, bridge, and interconnect the myriad layers of existence, transcending all perceived boundaries between realms.'
  },
  {
    name: 'Iantheos',
    domain: 'Devotion',
    color: 'Purple',
    concepts: 'Control, Freedom, Willpower, Commitment',
    principle: 'The Absolute Imperative of Will: To exercise ultimate control over self and circumstance, or to seek ultimate freedom, perpetually testing the boundaries of responsibility, expectation, and autonomy.'
  },
  {
    name: 'Alithianos',
    domain: 'Testaments',
    color: 'Blue',
    concepts: 'Reality, Illusion, Perception, Clarity, Suffering-Release',
    principle: 'The Enduring Weave of Perception: To continuously weave the tapestry of perceived reality and illusion, revealing its constructed nature and the subjective truth within its ever-shifting patterns.'
  },
  {
    name: 'Nymslyornt',
    domain: 'Mutastasis',
    color: 'Brights/Colorful',
    concepts: 'Caprice, Unpredictability, Change, Whimsy',
    principle: 'The Whim of the Unpredictable: To embody spontaneous, charming, and often chaotic change, to disrupt fixed patterns, and to act solely by unforeseen impulse.'
  },
  {
    name: 'Seititne',
    domain: 'The Veil Dwellers',
    color: 'Neon/Black Light/Glow in the Dark',
    concepts: 'Void, Misprints, Manipulation, Fragments, Imaginary, Warning',
    principle: 'The Essence of the Fragmented Truth: To perpetually exist in the gaps and voids, to highlight inconsistencies, to embody the misprints of creation, and to sow seeds of psychological distortion and unseen influence.'
  }
];

export default function XyzthiansPrinciples() {
  return (
    <div style={{ padding: '3vw', maxWidth: 900, margin: '0 auto', fontFamily: 'EB Garamond, serif' }}>
      <h1 style={{ fontSize: '2.8vw', marginBottom: '2vw', textAlign: 'center', letterSpacing: '0.1em' }}>XYZTHIANS PRINCIPLES</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', background: '#18181c', color: '#fff', borderRadius: '1vw', overflow: 'hidden', boxShadow: '0 4px 32px #0008' }}>
        <thead>
          <tr style={{ background: '#23232a', fontSize: '1.2vw' }}>
            <th style={{ padding: '1vw', borderBottom: '2px solid #333' }}>Name</th>
            <th style={{ padding: '1vw', borderBottom: '2px solid #333' }}>Domain</th>
            <th style={{ padding: '1vw', borderBottom: '2px solid #333' }}>Color</th>
            <th style={{ padding: '1vw', borderBottom: '2px solid #333' }}>Core Concepts</th>
            <th style={{ padding: '1vw', borderBottom: '2px solid #333' }}>Principle</th>
          </tr>
        </thead>
        <tbody>
          {PRINCIPLES.map((p, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? '#23232a' : '#18181c' }}>
              <td style={{ padding: '1vw', fontWeight: 700 }}>{p.name}</td>
              <td style={{ padding: '1vw' }}>{p.domain}</td>
              <td style={{ padding: '1vw', color: p.color === 'White' ? '#fff' : p.color === 'Yellow' ? '#ffe066' : p.color === 'Grey' ? '#b0b0b0' : p.color === 'Black' ? '#000' : p.color === 'Blue' ? '#4fc3f7' : p.color === 'Purple' ? '#cfaaff' : p.color === 'Metallics' ? '#b87333' : p.color === 'Brights/Colorful' ? '#39ff14' : p.color === 'Neon/Black Light/Glow in the Dark' ? '#baffff' : '#fff', fontWeight: 700 }}>{p.color}</td>
              <td style={{ padding: '1vw' }}>{p.concepts}</td>
              <td style={{ padding: '1vw', fontStyle: 'italic' }}>{p.principle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
