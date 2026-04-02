import React, { useState } from 'react';

import { XYZTHIAN_LORE } from './xyzthianLore';

const XYZTHIANS = [
  { key: 'X', name: 'Xaeron', color: '#fff', desc: 'Consciousness', tabStyle: { background: '#fff', color: '#222' } },
  { key: 'Y', name: 'Ytaeron', color: '#ffe066', desc: 'Peace', tabStyle: { background: '#ffe066', color: '#222' } },
  { key: 'Z', name: 'Zotrexons', color: '#b0b3b8', desc: 'Potential', tabStyle: { background: '#b0b3b8', color: '#222' } },
  { key: 'T', name: 'Tenebraeum', color: '#000', desc: 'Revelations', tabStyle: { background: '#222', color: '#ffe066' } },
  { key: 'H', name: 'Helixotopes', color: 'linear-gradient(90deg,#aaa,#ffd700,#aaa)', desc: 'Dimensions', tabStyle: { background: 'linear-gradient(90deg,#aaa,#ffd700,#aaa)', color: '#222' } },
  { key: 'I', name: 'Iantheos', color: '#cfaaff', desc: 'Devotion', tabStyle: { background: '#cfaaff', color: '#222' } },
  { key: 'A', name: 'Alithianos', color: '#3fa9f5', desc: 'Testaments', tabStyle: { background: '#3fa9f5', color: '#fff' } },
  { key: 'N', name: 'Nymslyornt', color: 'linear-gradient(90deg,#ff0,#0ff,#f0f,#fff)', desc: 'Mutastasis', tabStyle: { background: 'linear-gradient(90deg,#ff0,#0ff,#f0f,#fff)', color: '#222' } },
  { key: 'S', name: 'Seititne', color: '#39ff14', desc: 'The Veil Dwellers', tabStyle: { background: '#39ff14', color: '#222' } },
];

export default function LivingLorebook({ onSelect }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className={`lorebook-bg ${open ? 'open' : ''}`}> 
      <div className={`lorebook-book ${open ? 'open' : ''}`}> 
        <div className="lorebook-cover" onClick={() => setOpen(true)}>
          <span className="lorebook-title">XYZTHIANS</span>
          {!open && <span className="lorebook-sub">Click to Open</span>}
        </div>
        {open && (
          <>
            <div className="lorebook-tabs">
              {XYZTHIANS.map((t, i) => (
                <div
                  key={t.key}
                  className={`lorebook-tab ${active === i ? 'active' : ''}`}
                  style={t.tabStyle}
                  onClick={() => setActive(i)}
                  title={t.name}
                >
                  {t.key}
                </div>
              ))}
            </div>
            <div className="lorebook-page">
              <h2 style={{ color: XYZTHIANS[active].color }}>{XYZTHIAN_LORE[XYZTHIANS[active].key].title}</h2>
              <div className="lorebook-domain">{XYZTHIAN_LORE[XYZTHIANS[active].key].subtitle}</div>
              <div className="lorebook-content">
                <div style={{ fontWeight: 600, marginBottom: '0.5em', color: '#888' }}>
                  <span style={{ fontStyle: 'italic' }}>{XYZTHIAN_LORE[XYZTHIANS[active].key].artifact}</span>
                </div>
                <div style={{ marginBottom: '0.7em' }}>{XYZTHIAN_LORE[XYZTHIANS[active].key].lore}</div>
                <div style={{ marginBottom: '0.5em', color: '#b0b3b8' }}>
                  <b>Principle:</b> {XYZTHIAN_LORE[XYZTHIANS[active].key].principle}
                </div>
                <div style={{ color: '#ffe066', fontSize: '0.98em' }}>
                  <b>Keywords:</b> {XYZTHIAN_LORE[XYZTHIANS[active].key].keywords}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
