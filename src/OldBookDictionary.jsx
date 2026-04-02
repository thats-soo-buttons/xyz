import React, { useState } from 'react';
import oldBook from './old-leather-book.png'; // Place your image in src/ as old-leather-book.png
import './OldBookDictionary.css';

export default function OldBookDictionary() {
  const [open, setOpen] = useState(false);

  return (
    <div className="oldbook-dictionary-root">
      <img
        src={oldBook}
        alt="Old Leather Book"
        className={`oldbook-img ${open ? 'open' : ''}`}
        onClick={() => setOpen((v) => !v)}
        title="Open the Thesaurus/Dictionary"
      />
      {open && (
        <div className="oldbook-dictionary-panel">
          <h2>Thesaurus / Dictionary</h2>
          <div className="oldbook-dictionary-content">
            <p><b>Calling Coins:</b> Totems used to communicate with or summon Xyzthians, existing as human-made 'Prayers' or god-specific 'Summonings'.</p>
            <p><b>The Foyer:</b> The initial arrival point within the Veil for newly deceased souls or those awaiting rebirth.</p>
            <p><b>The Sandbox:</b> A creative nexus with mutable sand floors where gods manifest and test new ideas.</p>
            <p><b>The In-Between:</b> A liminal space where ancient spirits are trapped, unable to fully pass on or manifest elsewhere.</p>
            <p><b>The Void/Gaps:</b> Unformed, chaotic spaces representing the 'misprints' of creation where fragmented truths reside.</p>
            <p><b>The Crossroads:</b> The central hub and primary entry point that connects all other sectors of the Veil.</p>
            <p><b>The Sanctuary:</b> A designated safe zone and neutral ground offering respite and healing within the Veil.</p>
            <hr style={{margin:'1em 0',borderColor:'#b0b3b8'}} />
            <p><b>Example:</b> <i>Consciousness</i> — awareness, sentience, perception, cognition, understanding, realization.</p>
            <p><b>Example:</b> <i>Peace</i> — tranquility, calm, serenity, harmony, stillness, quietude.</p>
            <p style={{color:'#b0b3b8'}}>More coming soon...</p>
          </div>
        </div>
      )}
    </div>
  );
}
