
import { useEffect, useState } from 'react';
import './App.css';
import XyzthiansTransition from './XyzthiansTransition';
import LoreCircles from './LoreCircles';

function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showTransition, setShowTransition] = useState(false);
  const [showLorebook, setShowLorebook] = useState(false);
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
        setTimeout(type, fullText[i - 2] === '\n' ? 1200 : 200);
      } else {
        setTimeout(() => setShowTransition(true), 1000);
      }
    };
    type();
    // eslint-disable-next-line
  }, [isMobile]);

  // After the intro animation, show the LivingLorebook menu instead of the old signpost/menu
  // No timer needed; Lorebook is shown when XyzthiansTransition calls onComplete

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
              Sorry, this experience is best viewed on desktop.
            </span>
          </div>
        </div>
      )}
      {!isMobile && !showTransition && !showLorebook && (
        <div className="xyz-veil-quote">
          <span>{typedText}</span>
        </div>
      )}
      {!isMobile && showTransition && !showLorebook && (
        <XyzthiansTransition onComplete={() => {
          setShowLorebook(true);
          setShowTransition(false);
        }} />
      )}
      {!isMobile && showLorebook && (
        <LoreCircles />
      )}
    </>
  );
}

export default App;
