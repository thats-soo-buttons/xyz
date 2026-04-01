import React, { useState, useRef, useEffect } from 'react';

const PROMPT = 'xyzthians >';
const WELCOME = [
  'Initializing...\n',
  'Welcome, Seeker.',
  'You have accessed the XYZTHIANS Paradox Archive.',
  'Type HELP for available commands.',
  '',
];

const COMMANDS = {
  HELP: {
    output: [
      'Available commands:',
      '  LIST         List known XYZTHIANS',
      '  ACCESS [name]  Access a XYZTHIAN (e.g. ACCESS XAERON)',
      '  MIRACLE       [REDACTED]',
      '  BUTTON        [REDACTED]',
      '  ABOUT        About this archive',
      '',
    ],
  },
  LIST: {
    output: [
      'Known XYZTHIANS:',
      '  XAERON, YTAERON, ZOTREXONS, TENEBRAEUM, HELIXOTOPES, IANTHEOS, ALITHIANOS, NYMSLYORNT, SEITITNE',
      '',
    ],
  },
  ABOUT: {
    output: [
      'This archive is a secret, interactive learning tool for the XYZTHIANS mythos.',
      'Discover, explore, and unlock paradoxes.',
      '',
    ],
  },
  MIRACLE: {
    output: [
      '[MIRACLE PROJECT ACCESS DENIED]',
      'Hint: Some doors open only for the curious.',
      '',
    ],
  },
  BUTTON: {
    output: [
      '[BUTTON SURVEILLANCE SYSTEM]',
      'Status: Watching. Always watching.',
      '',
    ],
  },
};

const XYZTHIAN_DATA = {
  XAERON: [
    'Xaeron: The Fracture, the Origin.',
    'Keywords: Fracture, Origin, Split, Shard, Beginning, Division, Creation, Paradox.',
    'Lore: Xaeron is the paradox of beginnings and endings, the split that creates possibility.',
    '',
  ],
  YTAERON: [
    'Ytaeron: The Whisper, the Balance.',
    'Keywords: Chaos, Whisper, Storm, Peace, Balance, Eye, Flow, Spiral.',
    'Lore: Ytaeron is the eye of the storm, the balance between chaos and peace.',
    '',
  ],
  ZOTREXONS: [
    'Zotrexons: The Vessel, the Unseen.',
    'Keywords: Potential, Vessel, Shape, Choice, Unseen, Flow, Destiny, Form.',
    'Lore: Zotrexons is the unseen vessel, the form that destiny takes.',
    '',
  ],
  TENEBRAEUM: [
    'Tenebraeum: The Shadow, the Truth.',
    'Keywords: Revelation, Shadow, Light, Truth, Secret, Mystery, End, Veil.',
    'Lore: Tenebraeum is the shadow that reveals the truth, the veil that is also the end.',
    '',
  ],
  HELIXOTOPES: [
    'Helixotopes: The Bridge, the Sequence.',
    'Keywords: Dimension, Spiral, Bridge, Echo, Sequence, Loop, Pathway.',
    'Lore: Helixotopes is the spiral bridge, the echo of dimensions.',
    '',
  ],
  IANTHEOS: [
    'Iantheos: The Becoming, the Faith.',
    'Keywords: Devotion, Will, Becoming, Unbecoming, Faith, Change, Resolve.',
    'Lore: Iantheos is the will to become, the faith to change.',
    '',
  ],
  ALITHIANOS: [
    'Alithianos: The Thread, the Mask.',
    'Keywords: Reality, Illusion, Thread, Tapestry, Dream, Fabric, Mask.',
    'Lore: Alithianos is the thread of reality, the mask of dreams.',
    '',
  ],
  NYMSLYORNT: [
    'Nymslyornt: The Dance, the Flux.',
    'Keywords: Change, Current, Dance, Unpredictable, Flux, Neon, Pulse.',
    'Lore: Nymslyornt is the dance of change, the pulse of flux.',
    '',
  ],
  SEITITNE: [
    'Seititne: The Veil, the Portal.',
    'Keywords: Fragment, Glow, Veil, Thin, Rift, Portal, Shard.',
    'Lore: Seititne is the thin veil, the portal between fragments.',
    '',
  ],
};

function parseCommand(input) {
  const cmd = input.trim().toUpperCase();
  if (COMMANDS[cmd]) return COMMANDS[cmd].output;
  if (cmd.startsWith('ACCESS ')) {
    const name = cmd.slice(7).replace(/[^A-Z]/g, '');
    if (XYZTHIAN_DATA[name]) return XYZTHIAN_DATA[name];
    return ['[ACCESS DENIED]', 'Unknown entity.', ''];
  }
  return ['[UNKNOWN COMMAND]', 'Type HELP for available commands.', ''];
}

export default function XyzthiansTerminal() {
  const [lines, setLines] = useState([...WELCOME]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [lines]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setLines(prev => [
      ...prev,
      PROMPT + ' ' + input,
      ...parseCommand(input),
    ]);
    setInput('');
  }

  return (
    <div style={{
      height: '100vh',
      width: '100vw',
      background: 'radial-gradient(ellipse at center, #18181a 0%, #000 100%)',
      color: '#39ff14',
      fontFamily: 'Share Tech Mono, monospace',
      fontSize: '1.3vw',
      padding: '0',
      margin: '0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'stretch',
      overflow: 'hidden',
      userSelect: 'none',
    }}>
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '4vw 6vw 2vw 6vw',
        whiteSpace: 'pre-wrap',
        letterSpacing: '0.04em',
        textShadow: '0 0 8px #39ff14, 0 0 2px #000',
      }}>
        {lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit} style={{ display: 'flex', padding: '0 6vw 4vw 6vw' }} autoComplete="off">
        <span style={{ color: '#39ff14', fontWeight: 700, marginRight: '0.5vw' }}>{PROMPT}</span>
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{
            background: 'none',
            border: 'none',
            outline: 'none',
            color: '#39ff14',
            fontFamily: 'Share Tech Mono, monospace',
            fontSize: '1.3vw',
            flex: 1,
            caretColor: '#fff',
            textShadow: '0 0 8px #39ff14',
          }}
          autoFocus
          spellCheck={false}
        />
      </form>
    </div>
  );
}
