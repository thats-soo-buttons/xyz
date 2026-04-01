import React, { useState } from 'react';
import XyzthiansProfiles from './XyzthiansProfiles';
import BackToMenuButton from './BackToMenuButton';

const FOLDERS = [
  { label: 'XYZ', color: '#f5e6c8', id: 'xyz', description: '' },
  { label: 'Other', color: '#e0e0e0', id: 'other', description: 'Coming soon...' },
];

function FolderMenu() {
  const [openFolder, setOpenFolder] = useState(null);
  const [showPage, setShowPage] = useState(false);

  function handleOpen(id) {
    setOpenFolder(id);
    setTimeout(() => setShowPage(true), 900); // sync with folder open animation
  }

  if (showPage && openFolder === 'xyz') {
    return <XyzthiansProfiles onBack={() => { setShowPage(false); setTimeout(() => setOpenFolder(null), 500); }} />;
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8f6f2',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'serif',
    }}>
      <div style={{fontSize:'2.5vw',fontWeight:900,marginBottom:'3vw',color:'#b87333',letterSpacing:'0.1em'}}>Select a Folder</div>
      <div style={{display:'flex',gap:'4vw'}}>
        {FOLDERS.map(folder => (
          <div key={folder.id} style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
            <div
              className={`folder-icon${openFolder===folder.id?' open':''}`}
              onClick={()=>!openFolder && handleOpen(folder.id)}
              style={{
                width:'10vw',height:'7vw',background:folder.color,borderRadius:'1vw 1vw 1vw 1vw/2vw 2vw 1vw 1vw',
                boxShadow:'0 4px 24px #0002',
                cursor:openFolder? 'default':'pointer',
                position:'relative',
                transition:'box-shadow 0.4s',
                marginBottom:'1vw',
                border:'2px solid #b87333',
                zIndex:2,
                overflow:'visible',
              }}
            >
              {/* Folder tab */}
              <div style={{position:'absolute',top:'-1.5vw',left:'1vw',width:'6vw',height:'2vw',background:'#e0cfa3',borderRadius:'1vw 1vw 0 0',border:'2px solid #b87333',borderBottom:'none',zIndex:3}} />
              {/* Animated open effect */}
              <div style={{
                position:'absolute',top:0,left:0,width:'100%',height:'100%',
                background:openFolder===folder.id?'#fff':'transparent',
                borderRadius:'1vw',
                boxShadow:openFolder===folder.id?'0 0 40px #b8733340':'none',
                opacity:openFolder===folder.id?1:0,
                transform:openFolder===folder.id?'scaleY(1.1)':'scaleY(1)',
                transition:'all 0.8s cubic-bezier(.77,0,.18,1)',
                zIndex:4,
              }} />
              {/* Folder label */}
              <div style={{position:'absolute',bottom:'1vw',left:0,width:'100%',textAlign:'center',fontWeight:700,fontSize:'1.3vw',color:'#b87333',letterSpacing:'0.08em',zIndex:5}}>{folder.label}</div>
              {/* Paper page animation */}
              {openFolder===folder.id && (
                <div style={{
                  position:'absolute',top:'1vw',left:'1vw',width:'8vw',height:'5vw',background:'#fff',borderRadius:'0.5vw',boxShadow:'0 2px 12px #0001',zIndex:6,
                  transform:showPage?'translateY(-8vw) scale(1.2)':'translateY(0) scale(1)',
                  opacity:showPage?1:0.95,
                  transition:'transform 0.8s cubic-bezier(.77,0,.18,1), opacity 0.5s',
                }} />
              )}
            </div>
            {folder.description && (
              <div style={{fontSize:'1vw',color:'#b87333',marginTop:'0.5vw',opacity:0.7}}>{folder.description}</div>
            )}
          </div>
        ))}
      </div>
      <style>{`
        .folder-icon { box-shadow: 0 4px 24px #0002; }
        .folder-icon.open { box-shadow: 0 0 40px #b8733340; }
      `}</style>
    </div>
  );
}

export default FolderMenu;
