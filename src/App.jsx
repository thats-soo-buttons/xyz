
import { useEffect, useState } from 'react';
import './App.css';
import XyzthiansTransition from './XyzthiansTransition';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showTransition, setShowTransition] = useState(false);
  const fullText = `Energy cannot be created or destroyed...`;

  useEffect(() => {
    function checkScreen() {
      setIsMobile(window.innerWidth < 900 || /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }
    checkScreen();
    window.addEventListener('resize', checkScreen);
    return () => window.removeEventListener('resize', checkScreen);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (isMobile) return;
    setTypedText('');
    let i = 0;
    const type = () => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
        setTimeout(type, fullText[i - 2] === '\n' ? 1200 : 250);
      } else {
        setTimeout(() => setShowTransition(true), 1000);
      }
    };
    type();
    // eslint-disable-next-line
  }, [isMobile]);

  return (
    <>
      {isMobile && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'black',
          color: '#bada55',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontSize: '1.5rem',
          letterSpacing: '0.05em',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: 400 }}>
            <span style={{ fontFamily: 'serif', fontWeight: 600 }}>
              The Veil cannot be pierced on small screens.<br />
              Seek a larger window to glimpse the truth.
            </span>
          </div>
        </div>
      )}
      {!isMobile && !showTransition && (
        <div className="xyz-veil-bg">
          <div className="xyz-clouds"></div>
          <div className="xyz-veil-quote">
            {typedText}
            {typedText.length === fullText.length ? (
              <span className="xyz-cursor">|</span>
            ) : (
              <span style={{marginLeft: 2}}>|</span>
            )}
          </div>
        </div>
      )}
      {!isMobile && showTransition && (
        <XyzthiansTransition onComplete={() => setShowTransition(false)} />
      )}
    </>
  );
}

export default App;
