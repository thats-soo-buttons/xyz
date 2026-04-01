import React, { useState } from 'react';

// Placeholder: Each page is a surreal animated scene with lore/keywords
const STORYBOOK_PAGES = [
  {
    title: 'Xaeron',
    color: '#000',
    bg: '#fff',
    content: [
      'In the beginning, there was only fracture.',
      'Xaeron split the void, and paradox was born.',
      'Origin. Split. Shard. Creation.'
    ],
    art: 'fracture',
  },
  {
    title: 'Ytaeron',
    color: '#ffe066',
    bg: '#5a3a1b',
    content: [
      'Chaos whispered to the storm, and peace was found in the spiral.',
      'Balance. Eye. Flow.'
    ],
    art: 'spiral',
  },
  {
    title: 'Zotrexons',
    color: '#b0b0b0',
    bg: '#232323',
    content: [
      'Potential shaped the unseen vessel.',
      'Choice. Destiny. Form.'
    ],
    art: 'vessel',
  },
  {
    title: 'Tenebraeum',
    color: '#111',
    bg: '#f3f3f3',
    content: [
      'Revelation is shadow and light, truth and veil.',
      'Secret. Mystery. End. Beginning.'
    ],
    art: 'veil',
  },
  {
    title: 'Helixotopes',
    color: '#b87333',
    bg: 'linear-gradient(135deg, #b87333 0%, #c0c0c0 100%)',
    content: [
      'Dimension echoes in the spiral bridge.',
      'Sequence. Loop. Pathway.'
    ],
    art: 'helix',
  },
  {
    title: 'Iantheos',
    color: '#cfaaff',
    bg: '#5a3396',
    content: [
      'Devotion is will, becoming and unbecoming.',
      'Faith. Change. Resolve.'
    ],
    art: 'will',
  },
  {
    title: 'Alithianos',
    color: '#4fc3f7',
    bg: '#1a2a6c',
    content: [
      'Reality and illusion thread the tapestry of dreams.',
      'Fabric. Mask.'
    ],
    art: 'tapestry',
  },
  {
    title: 'Nymslyornt',
    color: '#39ff14',
    bg: 'linear-gradient(135deg, #ff00cc 0%, #3333ff 100%)',
    content: [
      'Change dances in unpredictable flux.',
      'Neon. Pulse.'
    ],
    art: 'neon',
  },
  {
    title: 'Seititne',
    color: '#fff',
    bg: '#0a0a23',
    content: [
      'Fragment glows at the veil, thin as a rift.',
      'Portal. Shard.'
    ],
    art: 'portal',
  },
];

function SurrealStorybook() {
  const [page, setPage] = useState(0);
  const current = STORYBOOK_PAGES[page];

  // Simple surreal animated art placeholder
  function renderArt(art) {
    switch (art) {
      case 'fracture':
        return <div style={{width:'60%',height:'30vh',background:'repeating-linear-gradient(135deg,#000,#fff 10px,#000 20px)',borderRadius:'2vw',margin:'2vw auto',animation:'fractureAnim 2s infinite alternate'}} />;
      case 'spiral':
        return <div style={{width:'30vw',height:'30vw',borderRadius:'50%',background:'conic-gradient(#ffe066 0 30%,#5a3a1b 30% 100%)',margin:'2vw auto',animation:'spin 8s linear infinite'}} />;
      case 'vessel':
        return <div style={{width:'20vw',height:'20vw',borderRadius:'50% 50% 60% 40%/60% 40% 50% 50%',background:'#b0b0b0',margin:'2vw auto',boxShadow:'0 0 60px #e0e0e0',opacity:0.7}} />;
      case 'veil':
        return <div style={{width:'80%',height:'8vw',background:'linear-gradient(90deg,#0000,#000 40%,#fff 60%,#0000)',margin:'2vw auto',borderRadius:'2vw',filter:'blur(2px)'}} />;
      case 'helix':
        return <div style={{width:'60%',height:'10vw',background:'repeating-linear-gradient(45deg,#b87333,#c0c0c0 10px,#b87333 20px)',borderRadius:'2vw',margin:'2vw auto',animation:'helixAnim 3s infinite alternate'}} />;
      case 'will':
        return <div style={{width:'20vw',height:'20vw',borderRadius:'50%',background:'radial-gradient(circle,#cfaaff 60%,#5a3396 100%)',margin:'2vw auto',boxShadow:'0 0 60px #e6d6ff',opacity:0.7}} />;
      case 'tapestry':
        return <div style={{width:'80%',height:'10vw',background:'repeating-linear-gradient(90deg,#4fc3f7,#1a2a6c 10px,#4fc3f7 20px)',borderRadius:'2vw',margin:'2vw auto',animation:'tapestryAnim 4s infinite alternate'}} />;
      case 'neon':
        return <div style={{width:'20vw',height:'20vw',borderRadius:'50%',background:'radial-gradient(circle,#39ff14 60%,#ff00cc 100%)',margin:'2vw auto',boxShadow:'0 0 60px #baffc9',filter:'blur(1px)',animation:'neonAnim 1.5s infinite alternate'}} />;
      case 'portal':
        return <div style={{width:'20vw',height:'20vw',borderRadius:'50%',background:'radial-gradient(circle,#fff 60%,#0a0a23 100%)',margin:'2vw auto',boxShadow:'0 0 60px #baffff',filter:'blur(1px)',animation:'portalAnim 2s infinite alternate'}} />;
      default:
        return null;
    }
  }

  return (
    <div style={{minHeight:'100vh',background:current.bg,transition:'background 1s',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',fontFamily:'serif'}}>
      <div style={{marginTop:'4vw',fontSize:'3vw',fontWeight:900,color:current.color,textShadow:'0 0 16px #000,0 0 8px #fff'}}>{current.title}</div>
      {renderArt(current.art)}
      <div style={{fontSize:'1.5vw',color:current.color,margin:'2vw 0',textAlign:'center',maxWidth:'60vw',lineHeight:1.5}}>
        {current.content.map((line,i)=>(<div key={i} style={{margin:'1vw 0',opacity:0.92,animation:'fadeIn 1.2s ease',animationDelay:`${i*0.5}s`}}>{line}</div>))}
      </div>
      <div style={{display:'flex',gap:'2vw',margin:'2vw 0'}}>
        <button onClick={()=>setPage(Math.max(0,page-1))} disabled={page===0} style={{fontSize:'1.2vw',padding:'0.7vw 2vw',borderRadius:'1vw',border:'none',background:'#eee',color:'#333',opacity:page===0?0.5:1,cursor:page===0?'not-allowed':'pointer',boxShadow:'0 2px 8px #0002'}}>Back</button>
        <button onClick={()=>setPage(Math.min(STORYBOOK_PAGES.length-1,page+1))} disabled={page===STORYBOOK_PAGES.length-1} style={{fontSize:'1.2vw',padding:'0.7vw 2vw',borderRadius:'1vw',border:'none',background:'#eee',color:'#333',opacity:page===STORYBOOK_PAGES.length-1?0.5:1,cursor:page===STORYBOOK_PAGES.length-1?'not-allowed':'pointer',boxShadow:'0 2px 8px #0002'}}>Next</button>
      </div>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fractureAnim { to { filter: blur(2px) brightness(1.2); } }
        @keyframes helixAnim { to { filter: hue-rotate(60deg); } }
        @keyframes tapestryAnim { to { filter: hue-rotate(-60deg); } }
        @keyframes neonAnim { to { filter: brightness(1.5) blur(2px); } }
        @keyframes portalAnim { to { filter: brightness(1.5) blur(2.5px); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}

export default SurrealStorybook;
