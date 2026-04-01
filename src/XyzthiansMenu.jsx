import React from 'react';

// Placeholder for the interactive menu after the crash screen
export default function XyzthiansMenu() {
  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: 'radial-gradient(ellipse at center, #18181a 0%, #0a0a0c 100%)',
      color: '#e0e0e0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Share Tech Mono, monospace',
      letterSpacing: '0.04em',
      overflow: 'hidden',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
    }}>
      <div style={{
        background: 'rgba(20,20,24,0.92)',
        border: '2px solid #39ff14',
        borderRadius: '12px',
        padding: '3vw 5vw',
        boxShadow: '0 0 32px #39ff1480',
        minWidth: '40vw',
        minHeight: '40vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ fontSize: '2.5vw', fontWeight: 700, marginBottom: '2vw', color: '#39ff14', textShadow: '0 0 8px #39ff14' }}>
          EVIDENCE BOARD
        </div>
        <div style={{ color: '#e0e0e0', fontSize: '1.2vw', marginBottom: '2vw', textAlign: 'center', maxWidth: '32vw' }}>
          <span style={{ color: '#39ff14', fontWeight: 700 }}>Welcome, Operative.</span> <br />
          Drag, click, or inspect the objects below to uncover the secrets of XYZTHIANS.
        </div>
        {/* Example interactive objects (to be replaced with real ones) */}
        <div style={{ display: 'flex', gap: '2vw', marginTop: '2vw' }}>
          <div style={{
            width: '7vw', height: '7vw', background: '#222', border: '2px solid #39ff14', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 0 16px #39ff1480', transition: 'box-shadow 0.3s',
          }} title="Ancient Coin">
            <span role="img" aria-label="coin" style={{ fontSize: '3vw' }}>🪙</span>
          </div>
          <div style={{
            width: '7vw', height: '7vw', background: '#222', border: '2px solid #39ff14', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 0 16px #39ff1480', transition: 'box-shadow 0.3s',
          }} title="Newspaper Clipping">
            <span role="img" aria-label="newspaper" style={{ fontSize: '3vw' }}>📰</span>
          </div>
          <div style={{
            width: '7vw', height: '7vw', background: '#222', border: '2px solid #39ff14', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 0 16px #39ff1480', transition: 'box-shadow 0.3s',
          }} title="Encrypted Drive">
            <span role="img" aria-label="drive" style={{ fontSize: '3vw' }}>💾</span>
          </div>
        </div>
        <div style={{ color: '#39ff14', fontSize: '1vw', marginTop: '2vw', opacity: 0.7 }}>
          <span style={{ fontFamily: 'monospace', fontSize: '0.9vw' }}>[Drag or click objects to interact]</span>
        </div>
      </div>
    </div>
  );
}
