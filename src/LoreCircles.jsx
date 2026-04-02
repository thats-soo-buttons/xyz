import React, { useState } from 'react';
import { XYZTHIAN_LORE } from './xyzthianLore';
import './LoreCircles.css';
import OldBookDictionary from './OldBookDictionary';

function ShopButton() {
  return (
    <a
      href="https://ko-fi.com/your-shop" // TODO: Replace with your actual Ko-fi shop URL
      target="_blank"
      rel="noopener noreferrer"
      className="lore-shop-btn"
      title="Visit the Shop"
      style={{ display: 'inline-block', marginLeft: 16, verticalAlign: 'middle' }}
    >
      <svg width="56" height="56" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="19" cy="19" r="18" stroke="#ffe066" strokeWidth="2" fill="#fff8e1" />
        <path d="M12 26h14l-1.5-10h-11z" fill="#ffe066" stroke="#b87333" strokeWidth="1.5" />
        <rect x="15.5" y="14" width="7" height="5" rx="2" fill="#fff" stroke="#b87333" strokeWidth="1" />
        <circle cx="19" cy="21" r="1.5" fill="#b87333" />
      </svg>
    </a>
  );
}

const CIRCLES = [
  { key: 'X', color: '#fff', border: '#bbb' },
  { key: 'Y', color: '#ffe066', border: '#bfa600' },
  { key: 'Z', color: '#b0b3b8', border: '#888' },
  { key: 'T', color: '#222', border: '#e0e0e0', outline: '2px solid #fff' },
  { key: 'H', color: 'linear-gradient(135deg,#b87333 0%,#ffd700 50%,#c0c0c0 100%)', border: '#b87333', metallic: true },
  { key: 'I', color: '#cfaaff', border: '#7a3fa6' },
  { key: 'A', color: '#3fa9f5', border: '#1a2a6c' },
  { key: 'N', color: '#39ff14', border: '#0f0' },
  { key: 'S', color: '#39ffef', border: '#0ff' },
];

export default function LoreCircles() {
  const [open, setOpen] = useState(null);

  return (
    <div className="lore-circles-root">
      <h1 className="lore-circles-header">EXPLORE THE LORE</h1>
      <div className="lore-circles-row">
        {CIRCLES.map((c, i) => (
          <div
            key={c.key}
            className={`lore-circle ${open === c.key ? 'active' : ''} ${c.metallic ? 'metallic' : ''}`}
            style={{
              background: c.color,
              borderColor: c.border,
              ...(c.key === 'T' ? { boxShadow: '0 0 0 3px #e0e0e0, 0 2px 16px #0007' } : {}),
            }}
            onClick={() => setOpen(open === c.key ? null : c.key)}
            title={XYZTHIAN_LORE[c.key].title}
          >
            <span
              className="lore-circle-letter"
              style={c.key === 'T' ? { color: '#fff', WebkitTextStroke: '2px #e0e0e0', textShadow: '0 0 8px #fff, 0 0 2px #e0e0e0' } : {}}
            >
              {c.key}
            </span>
          </div>
        ))}
      </div>
      {open && (
        <div className="lore-panel">
          <div className="lore-panel-title">A BRIEF INSIGHT</div>
          <div className="lore-panel-content">
            <div className="lore-panel-lore">
              <b>{XYZTHIAN_LORE[open].title}</b> — <em>{XYZTHIAN_LORE[open].subtitle}</em>
              <div style={{ margin: '0.7em 0' }}>{XYZTHIAN_LORE[open].lore}</div>
              <div style={{ color: '#b0b3b8', marginBottom: '0.5em' }}><b>Principle:</b> {XYZTHIAN_LORE[open].principle}</div>
              <div style={{ color: '#ffe066', fontSize: '0.98em' }}><b>Keywords:</b> {XYZTHIAN_LORE[open].keywords}</div>
              <div style={{ margin: '1.2em 0', color: '#888', fontStyle: 'italic' }}>{XYZTHIAN_LORE[open].artifact}</div>
            </div>
          </div>
        </div>
      )}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 0, marginBottom: 16 }}>
        <OldBookDictionary />
        <ShopButton />
      </div>
      <div className="lore-circles-footer">
        <button
          className="lore-circles-btn"
          onClick={() => window.openModal ? window.openModal() : alert('Get to 5k followers on Instagram and TikTok to unlock!\n\nTikTok: @xyzthorian\nhttps://www.tiktok.com/@xyzthorian\nInstagram: @xyzthians\nhttps://www.instagram.com/xyzthians')}
        >
          SEE THE SIGNS
        </button>
      </div>
    </div>
  );
}
