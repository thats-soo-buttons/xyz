import React from 'react';

function BackToMenuButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'fixed',
        top: '2vw',
        left: '2vw',
        zIndex: 100,
        fontSize: '1.2vw',
        padding: '0.7vw 2vw',
        borderRadius: '1vw',
        border: 'none',
        background: '#b87333',
        color: '#fff',
        fontWeight: 700,
        boxShadow: '0 2px 8px #0002',
        cursor: 'pointer',
        opacity: 0.92,
        transition: 'background 0.2s',
      }}
    >
      ← Back to Folders
    </button>
  );
}

export default BackToMenuButton;
