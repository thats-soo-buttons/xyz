import React, { useRef, useEffect } from 'react';
// Hybrid 2D/3D evidence board menu placeholder
// 2D board with 3D-like depth, shadows, and perspective
// (For real 3D, Three.js or react-three-fiber can be added later)

const OBJECTS = [
  { id: 'coin', label: 'Ancient Coin', x: 120, y: 180, z: 2, img: '🪙', rot: -8 },
  { id: 'newspaper', label: 'Newspaper Clipping', x: 340, y: 90, z: 1, img: '📰', rot: 5 },
  { id: 'drive', label: 'Encrypted Drive', x: 600, y: 260, z: 3, img: '💾', rot: 12 },
  { id: 'photo', label: 'Polaroid Photo', x: 480, y: 340, z: 2, img: '📸', rot: -15 },
];

export default function XyzthiansHybridBoard() {
  const boardRef = useRef(null);

  useEffect(() => {
    // Optionally, add mouse/touch drag logic here for objects
  }, []);

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: 'repeating-linear-gradient(135deg, #232323 0 40px, #18181a 40px 80px)',
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
      perspective: '1200px',
      userSelect: 'none',
    }}>
      {/* Board surface with subtle 3D tilt */}
      <div ref={boardRef} style={{
        position: 'absolute',
        top: '10vh',
        left: '10vw',
        width: '80vw',
        height: '80vh',
        background: '#2a2a2e',
        borderRadius: '24px',
        boxShadow: '0 24px 64px #000b, 0 2px 8px #0008',
        border: '3px solid #444',
        transform: 'rotateX(12deg) rotateY(-8deg)',
        overflow: 'visible',
        zIndex: 2,
      }}>
        {/* Evidence objects with 3D-like drop shadows and rotation */}
        {OBJECTS.map(obj => (
          <div
            key={obj.id}
            title={obj.label}
            style={{
              position: 'absolute',
              left: obj.x,
              top: obj.y,
              zIndex: 10 + obj.z,
              transform: `rotate(${obj.rot}deg) scale(1.2)`,
              boxShadow: '0 8px 32px #000a, 0 1px 2px #0008',
              background: 'rgba(40,40,44,0.98)',
              borderRadius: '12px',
              border: '2px solid #39ff14',
              padding: '1.5vw',
              fontSize: '3vw',
              cursor: 'pointer',
              transition: 'box-shadow 0.2s, transform 0.2s',
              filter: 'drop-shadow(0 2px 8px #39ff1480)',
            }}
            tabIndex={0}
            onClick={() => alert(`You inspect the ${obj.label}.`)}
          >
            <span role="img" aria-label={obj.label}>{obj.img}</span>
          </div>
        ))}
        {/* Board pins/strings (visual only, not interactive yet) */}
        <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, pointerEvents: 'none' }}>
          <line x1="140" y1="200" x2="360" y2="110" stroke="#ff0055" strokeWidth="3" />
          <line x1="360" y1="110" x2="620" y2="280" stroke="#39ff14" strokeWidth="3" />
          <line x1="620" y1="280" x2="500" y2="360" stroke="#00e0ff" strokeWidth="3" />
        </svg>
      </div>
      {/* Board shadow for 3D effect */}
      <div style={{
        position: 'absolute',
        top: '88vh',
        left: '18vw',
        width: '64vw',
        height: '6vh',
        background: 'radial-gradient(ellipse at center, #0008 0%, #0000 100%)',
        filter: 'blur(8px)',
        zIndex: 1,
      }} />
    </div>
  );
}
