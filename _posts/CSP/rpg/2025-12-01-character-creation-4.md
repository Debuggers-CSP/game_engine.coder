---
layout: post
title: Game creator
description: Let the user create character
permalink: /rpg/character-creation
comments: True
---

<!-- RPG Navigation Sidebar -->
<div id="rpg-nav-sidebar" class="rpg-nav-sidebar">
  <button id="nav-toggle" class="nav-toggle">☰</button>
  <div class="nav-content">
    <h3 class="nav-title">🎮 RPG Creator</h3>
    <div class="nav-divider"></div>
    <nav class="nav-links">
      <a href="/rpg/login" class="nav-link" data-page="1">
        <span class="nav-number">1</span>
        <span class="nav-text">Login</span>
      </a>
      <a href="/rpg/mode" class="nav-link" data-page="2">
        <span class="nav-number">2</span>
        <span class="nav-text">Game Mode</span>
        <span class="nav-check">✓</span>
      </a>
      <a href="/rpg/story" class="nav-link" data-page="3">
        <span class="nav-number">3</span>
        <span class="nav-text">Story & Narrative</span>
        <span class="nav-check">✓</span>
      </a>
      <a href="/rpg/character-creation" class="nav-link active" data-page="4">
        <span class="nav-number">4</span>
        <span class="nav-text">Game creator</span>
        <span class="nav-check">✓</span>
      </a>
      <a href="/rpg/keybindings" class="nav-link" data-page="5">
        <span class="nav-number">5</span>
        <span class="nav-text">Controls</span>
        <span class="nav-check">✓</span>
      </a>
      <a href="/rpg/systems" class="nav-link active" data-page="6">
        <span class="nav-number">6</span>
        <span class="nav-text">Game Systems</span>
        <span class="nav-check">✓</span>
      </a>
      <a href="/rpg/review" class="nav-link locked" data-page="6" id="review-link">
        <span class="nav-number">6</span>
        <span class="nav-text">Review</span>
        <span class="nav-lock">🔒</span>
        <span class="nav-check">✓</span>
      </a>
    </nav>
  </div>
</div>


<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game creator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background-color: #1a1a2e;
            color: #e6e6e6;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }
        

        
        header {
            text-align: center;
            padding: 20px;
            border-bottom: 2px solid #4cc9f0;
            margin-bottom: 20px;
        }
        
        h1 {
            font-size: 2.8rem;
            color: #804cf0ff;
            text-shadow: 0 0 10px rgba(76, 201, 240, 0.5);
            margin-bottom: 10px;
            letter-spacing: 1px;
        }
        
        .subtitle {
            font-size: 1.2rem;
            color: #a9a9b3;
            max-width: 600px;
            margin: 0 auto;
        }
        
        
        .main-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 40px;
        }
        
.options-panel {
    grid-column: 1;
    grid-row: 1;
    background-color: #16213e;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    height: fit-content;
}
.preview-panel {
    grid-column: 2;
    grid-row: 1 / span 2;
    background-color: #16213e;
    border-radius: 15px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
    height: fit-content; 
}

        
        .section-title {
            font-size: 1.5rem;
            color: #4cc9f0;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #2d374d;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        
        .section-title i {
            font-size: 1.3rem;
        }
        
   .option-group {
    margin-bottom: 15px; 
}
        
        .option-label {
            display: block;
            font-size: 1.1rem;
            margin-bottom: 12px;
            color: #b8c1d9;
        }
        
.class-selector {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px; 
}
    
.color-options-row {
    grid-column: 1;
    grid-row: 2;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px; 
    margin-top: 0;
}
        
        .class-option {
            background-color: #0f3460;
            border: 2px solid #2d374d;
            border-radius: 10px;
            padding: 15px 10px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .class-option:hover {
            transform: translateY(-5px);
            border-color: #4cc9f0;
            box-shadow: 0 5px 15px rgba(76, 201, 240, 0.2);
        }
        
        .class-option.selected {
            border-color: #4cc9f0;
            background-color: rgba(76, 201, 240, 0.1);
            box-shadow: 0 0 15px rgba(76, 201, 240, 0.3);
        }
        
        .class-icon {
            font-size: 2rem;
            margin-bottom: 8px;
            color: #4cc9f0;
        }
        
        .class-name {
            font-weight: 600;
            font-size: 0.7rem;
        }
        
.option-group .color-selector {
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    row-gap: 6px;   
    column-gap: 4px;
    justify-items: center;
    align-items: center; 
}
        
        .color-option {
            width: 25px;
            height: 25px;
            border-radius: 50%;
            cursor: pointer;
            border: 2px solid transparent;
            transition: all 0.2s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
        }
        
        .color-option:hover {
            transform: scale(1.1);
        }
        
        .color-option.selected {
            border-color: white;
            transform: scale(1.1);
            box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
        }
        
    .color-label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px; 
}
        
        .selected-color-hex {
            background-color: #0f3460;
            padding: 5px 12px;
            border-radius: 20px;
            font-family: monospace;
            font-size: 1rem;
            color: #e6e6e6;
        }
        
        .pixel-canvas-container {
            background-color: #0f3460;
            border-radius: 10px;
            padding: 20px;
            margin-bottom: 25px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .pixel-canvas {
            image-rendering: pixelated;
            image-rendering: crisp-edges;
            width: 200px;
            height: 200px;
            background-color: #1a1a2e;
            border-radius: 5px;
        }
        
        .character-details {
            width: 100%;
            background-color: #0f3460;
            border-radius: 10px;
            padding: 20px;
            margin-top: 10px;
        }
        
        .detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #2d374d;
        }
        
        .detail-label {
            color: #b8c1d9;
        }
        
        .detail-value {
            font-weight: 600;
            color: #4cc9f0;
        }
        
        .action-buttons {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 30px;
            flex-wrap: wrap;
        }
        
        .btn {
            padding: 15px 30px;
            border: none;
            border-radius: 10px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 10px;
            transition: all 0.3s ease;
        }
        
        .btn-reset {
            background-color: #7a7a8c;
            color: white;
        }
        
        .btn-reset:hover {
            background-color: #5a5a6c;
            transform: translateY(-3px);
        }
        
        .btn-confirm {
            background-color: #ffd700;
            color: #1a1a2e;
        }
        
        .btn-confirm:hover {
            background-color: #ffd700;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(76, 201, 240, 0.4);
        }
        
        footer {
            margin-top: 30px;
            text-align: center;
            color: #7a7a8c;
            font-size: 0.9rem;
            padding: 20px;
            border-top: 1px solid #2d374d;
            width: 100%;
        }
        
        @media (max-width: 768px) {
            .main-content {
                grid-template-columns: 1fr;
            }
            
            .color-options-row {
                grid-template-columns: 1fr;
            }
            
            h1 {
                font-size: 2.2rem;
            }
            
            .class-selector {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        /* RPG Navigation Sidebar Styles */
        .rpg-nav-sidebar {
            position: fixed;
            left: 0;
            top: 0;
            height: 100vh;
            width: 280px;
            background: linear-gradient(145deg, rgba(20, 20, 40, 0.98), rgba(10, 10, 20, 0.98));
            backdrop-filter: blur(10px);
            box-shadow: 4px 0 20px rgba(0, 0, 0, 0.5);
            transform: translateX(-280px);
            transition: transform 0.3s ease;
            z-index: 1000;
            border-right: 2px solid rgba(255, 215, 0, 0.3);
        }

        .rpg-nav-sidebar.open {
            transform: translateX(0);
        }

        .nav-toggle {
            position: absolute;
            right: -50px;
            top: 20px;
            width: 50px;
            height: 50px;
            background: linear-gradient(145deg, rgba(20, 20, 40, 0.98), rgba(10, 10, 20, 0.98));
            border: 2px solid rgba(255, 215, 0, 0.3);
            border-left: none;
            border-radius: 0 10px 10px 0;
            color: #ffd700;
            font-size: 24px;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .nav-toggle:hover {
            background: rgba(255, 215, 0, 0.1);
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
        }

        .nav-content {
            padding: 30px 20px;
            height: 100%;
            overflow-y: auto;
        }

        .nav-title {
            color: #ffd700;
            font-size: 1.5em;
            font-family: 'Cinzel', 'Georgia', serif;
            text-align: center;
            margin-bottom: 10px;
            text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
        }

        .nav-divider {
            height: 2px;
            background: linear-gradient(90deg, transparent, #ffd700, transparent);
            margin-bottom: 20px;
        }

        .nav-links {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .nav-link {
            display: flex;
            align-items: center;
            padding: 15px;
            background: rgba(0, 0, 0, 0.3);
            border: 2px solid rgba(255, 215, 0, 0.2);
            border-radius: 10px;
            color: #c0c0c0;
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
        }

        .nav-link:hover:not(.locked) {
            background: rgba(255, 215, 0, 0.1);
            border-color: #ffd700;
            transform: translateX(5px);
        }

        .nav-link.active {
            background: rgba(255, 215, 0, 0.15);
            border-color: #ffd700;
            box-shadow: 0 0 15px rgba(255, 215, 0, 0.2);
        }

        .nav-link.visited .nav-check {
            display: inline;
        }

        .nav-link.locked {
            opacity: 0.5;
            cursor: not-allowed;
            pointer-events: none;
        }

        .nav-link.locked .nav-lock {
            display: inline;
        }

        .nav-link:not(.locked) .nav-lock {
            display: none;
        }

        .nav-number {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 30px;
            height: 30px;
            background: rgba(255, 215, 0, 0.2);
            border-radius: 50%;
            color: #ffd700;
            font-weight: bold;
            margin-right: 12px;
            flex-shrink: 0;
        }

        .nav-text {
            flex: 1;
            font-size: 0.95em;
        }

        .nav-check {
            color: #4cc9f0;
            font-size: 1.2em;
            display: none;
            margin-left: 8px;
        }

        .nav-lock {
            color: #ff6b6b;
            font-size: 1em;
            margin-left: 8px;
        }

        @media (max-width: 768px) {
            .rpg-nav-sidebar {
                width: 240px;
                transform: translateX(-240px);
            }
        }
    </style>
</head>
<body>
<!-- World Map Builder (Tile Paint + Pins) -->
<div class="generator-card" id="world-map-builder">
  <div style="width:100%;">
    <h2 class="generator-title" style="padding: 0 40px;">World Map Builder</h2>
    <p style="color:#c0c0c0; padding: 0 40px; margin-bottom: 12px;">Tap or drag to paint your world with tiles; add pins.</p>
  </div>
  <style>
    .wm-wrap { max-width:1400px; margin:0 auto; padding:0 40px; display:grid; grid-template-columns: 1fr 300px; gap:12px; align-items:stretch; }
    .wm-canvas { background:#0e1726; border:2px solid rgba(255,215,0,0.3); border-radius:10px; box-shadow:0 6px 24px rgba(0,0,0,0.5); touch-action: none; width:100%; height:auto; display:block; }
    .wm-side { display:flex; flex-direction:column; gap:8px; align-self:stretch; height:100%; overflow:hidden; }
    .wm-panel { background: rgba(0,0,0,0.35); border:1px solid rgba(255,215,0,0.25); border-radius:10px; padding:8px; display:flex; flex-direction:column; min-height:0; }
    .wm-panel .wm-title { color:#ffd700; text-align:center; font-size:1.3em !important; line-height:1.15 !important; font-weight: 400; margin: 0 0 2px 0; letter-spacing: 0.3px; }
    .wm-palette-panel { flex: 1 1 50%; padding:6px; font-size:0.95em; }
    .wm-tools-panel { flex: 1 1 60%; }
    .wm-palette { display:flex; flex-direction:column; gap:3px; overflow: auto; min-height:0; }
    .wm-group-title { color:#cfe3ff; font-size:0.72em; margin:0; padding:1px 3px; border-left:3px solid rgba(255,215,0,0.35); background: rgba(255,215,0,0.06); border-radius:6px; }
    .wm-group-grid { display:grid; grid-template-columns: repeat(5, 1fr); gap:3px; }
    .wm-tile { display:flex; flex-direction:column; align-items:center; justify-content:center; gap:2px; border:1px solid rgba(255,215,0,0.25); border-radius:6px; padding:3px; cursor:pointer; background:rgba(255,215,0,0.08); }
    .wm-emoji { font-size:1.1em; filter:drop-shadow(0 0 2px rgba(255,215,0,0.25)); }
    .wm-tile.active { border-color:#ffd700; background: rgba(255,215,0,0.12); box-shadow: inset 0 0 0 2px rgba(255,215,0,0.22); }
    .wm-tools-panel .generator-btn.wm-mini.active,
    .wm-tools-panel .generator-btn.wm-mini[aria-pressed="true"] { background: linear-gradient(135deg, #ffed4e, #ffd700) !important; border: 1px solid rgba(255,215,0,0.6) !important; box-shadow: inset 0 1px 0 rgba(0,0,0,0.25) !important; transform: translateY(1px); }
    .wm-tools-panel .wm-controls { display:grid; grid-template-columns: 1fr 1fr; gap:6px; justify-content:stretch; align-items:stretch; overflow:hidden; }
    .wm-tools-panel .generator-btn.wm-mini { padding:6px 12px !important; font-size:clamp(0.72em, 1.6vh, 0.85em) !important; line-height:1.15 !important; width:100% !important; border-radius:6px !important; letter-spacing:0.4px !important; text-transform:none !important; box-shadow:none; background: linear-gradient(135deg, #2a2f45, #1f2538) !important; color:#e0e6ff !important; border:1px solid rgba(255,255,255,0.08) !important; }
    .wm-tools-panel .generator-btn.wm-mini::before { display:none; }
    .wm-tools-panel .generator-btn.wm-mini:hover { filter: brightness(1.05); }
    .wm-tools-group-title { grid-column: 1 / -1; color:#cfe3ff; font-size: 0.7em; opacity:0.85; letter-spacing:1px; text-transform: uppercase; padding:2px 0; border-bottom: 1px dashed rgba(255,255,255,0.12); margin: 4px 0 2px; }
    .wm-current { color:#a7b3ff; font-size: 0.72em; text-align:center; margin: 4px 0 8px; }
    @media (max-width: 1000px) { .wm-wrap { padding: 0 20px; grid-template-columns: 1fr 260px; } }
    @media (max-width: 820px) { .wm-wrap { grid-template-columns: 1fr; } .wm-side { order: 2; } }
  </style>
  <div class="wm-wrap">
    <canvas id="wm-canvas" class="wm-canvas" width="960" height="600" aria-label="World map canvas"></canvas>
    <div class="wm-side">
      <div class="wm-panel wm-palette-panel">
        <h3 class="wm-title">Palette</h3>
        <div id="wm-palette" class="wm-palette" aria-label="Tile palette"></div>
      </div>
      <div class="wm-panel wm-tools-panel">
        <h3 class="wm-title">Tools</h3>
        <div id="wm-current-tool" class="wm-current">Current Tool: Paint</div>
        <div class="wm-controls">
          <div class="wm-tools-group-title">Tools</div>
          <button id="wm-tool-paint" class="generator-btn wm-mini" title="Paint selected tile (drag to draw)">🖌️ Paint</button>
          <button id="wm-tool-erase" class="generator-btn wm-mini" title="Erase tiles (drag to erase)">🧽 Erase</button>
          <button id="wm-tool-bucket" class="generator-btn wm-mini" title="Fill contiguous region with selected tile">🪣 Bucket</button>
          <div class="wm-tools-group-title">Actions</div>
          <button id="wm-undo" class="generator-btn wm-mini" title="Undo last change">↩️ Undo</button>
          <button id="wm-clear" class="generator-btn wm-mini" title="Clear the entire map">🗑️ Clear</button>
          <button id="wm-export" class="generator-btn wm-mini" title="Export the map as a PNG image">🖼️ Save PNG</button>
          <div class="wm-tools-group-title">View</div>
          <button id="wm-zoom-out" class="generator-btn wm-mini" title="Zoom out">➖ Zoom Out</button>
          <button id="wm-zoom-in" class="generator-btn wm-mini" title="Zoom in">➕ Zoom In</button>
          <button id="wm-zoom-reset" class="generator-btn wm-mini" title="Reset view to default">🔄 Reset View</button>
        </div>
      </div>
    </div>
  </div>
  <script>
    (function(){
      const canvas = document.getElementById('wm-canvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const cols = 10, rows = 10, cell = 40; // big virtual grid
      const state = { grid: Array.from({length: rows}, () => Array(cols).fill(null)), pins: [], tool: 'paint', selected: { kind:'tile', category:'water', subtype:'Ocean' }, history: [] };
      const view = { scale: 1, min: 0.5, max: 2.5, offsetX: 0, offsetY: 0 };
      const COLORS = { WATER:'#1e3a8a', LAND:'#6b4f2a', DESERT:'#f59e0b' };
      function resizeCanvasToDisplaySize(){
        const rect = canvas.getBoundingClientRect();
        const dpr = window.devicePixelRatio || 1;
        const newW = Math.floor(rect.width * dpr);
        const newH = Math.floor(rect.height * dpr);
        if (canvas.width !== newW || canvas.height !== newH){
          canvas.width = newW;
          canvas.height = newH;
        }
      }
      function clampView(){
        const cs = cell * view.scale;
        const totalW = cols * cs, totalH = rows * cs;
        // X bounds
        if (totalW <= canvas.width){
          view.offsetX = Math.floor((canvas.width - totalW) / 2);
        } else {
          const minX = canvas.width - totalW, maxX = 0;
          if (view.offsetX < minX) view.offsetX = minX;
          if (view.offsetX > maxX) view.offsetX = maxX;
        }
        // Y bounds
        if (totalH <= canvas.height){
          view.offsetY = Math.floor((canvas.height - totalH) / 2);
        } else {
          const minY = canvas.height - totalH, maxY = 0;
          if (view.offsetY < minY) view.offsetY = minY;
          if (view.offsetY > maxY) view.offsetY = maxY;
        }
      }

      const GROUPS = [
        { title:'Water', items:[
          { emoji:'🌊', kind:'tile', category:'water', subtype:'Ocean', label:'Ocean' },
          { emoji:'🌊', kind:'tile', category:'water', subtype:'Sea', label:'Sea' },
          { emoji:'🌊', kind:'tile', category:'water', subtype:'Lake', label:'Lake' },
          { emoji:'🌊', kind:'tile', category:'water', subtype:'River', label:'River' }
        ]},
        { title:'Land', items:[
          { emoji:'🏞️', kind:'tile', category:'land', subtype:'Land', label:'Land' },
          { emoji:'⛰️', kind:'tile', category:'land', subtype:'Mountain', label:'Mountain' },
          { emoji:'🌲', kind:'tile', category:'land', subtype:'Forest', label:'Forest' },
          { emoji:'🏜️', kind:'tile', category:'land', subtype:'Desert', label:'Desert' }
        ]},
        { title:'Civilization', items:[
          { emoji:'🏘️', color:'#b45309', kind:'tile', category:'civ', subtype:'Town', label:'Town' },
          { emoji:'🏰', color:'#6b7280', kind:'tile', category:'civ', subtype:'Castle', label:'Castle' },
          { emoji:'🛣️', color:'#9ca3af', kind:'tile', category:'civ', subtype:'Road', label:'Road' }
        ]}
      ];
      const PIN = { emoji:'📍', kind:'pin', label:'Pin' };

      const paletteEl = document.getElementById('wm-palette');
      function buildPalette(){
        paletteEl.innerHTML='';
        GROUPS.forEach(group => {
          const title = document.createElement('div'); title.className='wm-group-title'; title.textContent = group.title;
          const grid = document.createElement('div'); grid.className='wm-group-grid';
          group.items.forEach(p => {
            const d = document.createElement('div'); d.className='wm-tile'; d.dataset.kind='tile'; d.dataset.category=p.category; d.dataset.subtype=p.subtype;
            const e = document.createElement('div'); e.className='wm-emoji'; e.textContent=p.emoji;
            const t = document.createElement('div'); t.style.color='#bfbfbf'; t.style.fontSize='0.6em'; t.style.whiteSpace='nowrap'; t.style.overflow='hidden'; t.style.textOverflow='ellipsis'; t.textContent=p.label;
            d.appendChild(e); d.appendChild(t);
            d.addEventListener('click', () => { state.selected = { kind:'tile', category:p.category, subtype:p.subtype, color:p.color, emoji:p.emoji }; updatePaletteActive(); });
            grid.appendChild(d);
          });
          paletteEl.appendChild(title); paletteEl.appendChild(grid);
        });
        const pinWrapTitle = document.createElement('div'); pinWrapTitle.className='wm-group-title'; pinWrapTitle.textContent='Pin';
        const pinGrid = document.createElement('div'); pinGrid.className='wm-group-grid';
        const pinEl = document.createElement('div'); pinEl.className='wm-tile'; pinEl.dataset.kind='pin';
        const pinEmoji = document.createElement('div'); pinEmoji.className='wm-emoji'; pinEmoji.textContent=PIN.emoji;
        const pinLabel = document.createElement('div'); pinLabel.style.color='#bfbfbf'; pinLabel.style.fontSize='0.6em'; pinLabel.style.whiteSpace='nowrap'; pinLabel.style.overflow='hidden'; pinLabel.style.textOverflow='ellipsis'; pinLabel.textContent=PIN.label;
        pinEl.appendChild(pinEmoji); pinEl.appendChild(pinLabel);
        pinEl.addEventListener('click', () => { state.selected = { kind:'pin', emoji: PIN.emoji }; updatePaletteActive(); });
        pinGrid.appendChild(pinEl);
        paletteEl.appendChild(pinWrapTitle); paletteEl.appendChild(pinGrid);
      }

      function updatePaletteActive(){
        const tiles = paletteEl.querySelectorAll('.wm-tile');
        tiles.forEach(el => el.classList.remove('active'));
        if (state.selected.kind === 'tile') {
          const match = Array.from(tiles).find(el => el.dataset.kind==='tile' && el.dataset.category===state.selected.category && el.dataset.subtype===state.selected.subtype);
          if (match) match.classList.add('active');
        } else if (state.selected.kind === 'pin') {
          const pin = paletteEl.querySelector('.wm-tile[data-kind="pin"]');
          if (pin) pin.classList.add('active');
        }
      }

      function pushHistory(){
        state.history.push({ grid: state.grid.map(r=>r.slice()), pins: state.pins.map(p=>({...p})) });
        if (state.history.length>50) state.history.shift();
      }
      // Compute contiguous water regions (by label) and return their centroids
      function computeWaterRegions(){
        const visited = Array.from({length: rows}, () => Array(cols).fill(false));
        const regions = [];
        const dirs = [[1,0],[-1,0],[0,1],[0,-1]];
        for (let r=0; r<rows; r++){
          for (let c=0; c<cols; c++){
            if (visited[r][c]) continue;
            const cell = state.grid[r][c];
            if (!cell || cell.color !== COLORS.WATER || !cell.label) continue;
            const label = cell.label;
            let queue = [[r,c]];
            visited[r][c] = true;
            let sumR=0, sumC=0, count=0;
            while(queue.length){
              const [rr, cc] = queue.shift();
              sumR += rr; sumC += cc; count++;
              for (const [dr, dc] of dirs){
                const nr = rr+dr, nc = cc+dc;
                if (nr<0||nc<0||nr>=rows||nc>=cols) continue;
                if (visited[nr][nc]) continue;
                const ncell = state.grid[nr][nc];
                if (ncell && ncell.color === COLORS.WATER && ncell.label === label){
                  visited[nr][nc] = true;
                  queue.push([nr,nc]);
                }
              }
            }
            const cr = Math.round(sumR / count), cc = Math.round(sumC / count);
            regions.push({ r: cr, c: cc, label });
          }
        }
        return regions;
      }

      function redraw(){
        ctx.fillStyle = '#0e1726'; ctx.fillRect(0,0,canvas.width,canvas.height);
        const cs = cell * view.scale;
        // Determine visible cell range in view space (allow beyond world bounds)
        const startC = Math.floor((-view.offsetX) / cs) - 1;
        const endC = Math.floor((canvas.width - view.offsetX) / cs) + 1;
        const startR = Math.floor((-view.offsetY) / cs) - 1;
        const endR = Math.floor((canvas.height - view.offsetY) / cs) + 1;

        for (let r=startR; r<=endR; r++){
          for (let c=startC; c<=endC; c++){
            const x = c*cs + view.offsetX;
            const y = r*cs + view.offsetY;
            // Draw tile only if within world bounds
            if (r>=0 && r<rows && c>=0 && c<cols){
              const cellData = state.grid[r][c];
              if (cellData){
                if (cellData.color){
                  ctx.fillStyle = cellData.color; ctx.fillRect(x, y, cs, cs);
                }
                if (cellData.emoji){
                  ctx.font = Math.max(16, Math.floor(24*view.scale)) + 'px "Segoe UI Emoji"'; ctx.textAlign='center'; ctx.textBaseline='middle';
                  ctx.fillText(cellData.emoji, x+cs/2, y+cs/2);
                }
                // overlays (mountain/forest/desert) on top of base
                if (cellData.overlay){
                  ctx.font = Math.max(16, Math.floor(22*view.scale)) + 'px "Segoe UI Emoji"'; ctx.textAlign='center'; ctx.textBaseline='middle';
                  ctx.fillText(cellData.overlay, x+cs/2, y+cs/2);
                }
              }
            }
            // Grid lines continue visually beyond bounds
            ctx.strokeStyle = 'rgba(255,215,0,0.08)';
            ctx.strokeRect(x, y, cs, cs);
          }
        }
          // Single label per water region
          const regions = computeWaterRegions();
          regions.forEach(reg => {
            const x = reg.c*cs + view.offsetX + cs/2;
            const y = reg.r*cs + view.offsetY + cs/2;
            ctx.fillStyle = '#e5f0ff';
            ctx.font = Math.max(10, Math.floor(14*view.scale)) + 'px sans-serif';
            ctx.textAlign='center'; ctx.textBaseline='middle';
            ctx.fillText(reg.label, x, y);
          });
        // Pins (only within bounds)
        state.pins.forEach(p=>{
          const x = p.x*cs + view.offsetX + cs/2;
          const y = p.y*cs + view.offsetY + cs/2;
          ctx.font = Math.max(18, Math.floor(26*view.scale)) + 'px "Segoe UI Emoji"'; ctx.textAlign='center'; ctx.textBaseline='middle';
          ctx.fillText(p.emoji, x, y);
        });
      }

      function cellFromEvent(evt){
        const rect = canvas.getBoundingClientRect();
        const clientX = (evt.touches?evt.touches[0].clientX:evt.clientX);
        const clientY = (evt.touches?evt.touches[0].clientY:evt.clientY);
        const pxCss = clientX - rect.left;
        const pyCss = clientY - rect.top;
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const px = pxCss * scaleX;
        const py = pyCss * scaleY;
        const cs = cell * view.scale;
        const c = Math.floor((px - view.offsetX) / cs);
        const r = Math.floor((py - view.offsetY) / cs);
        return { c, r, px, py };
      }

      let drawing=false, panning=false, spaceDown=false; let panStart = { x:0, y:0, ox:0, oy:0 };
      function paintAt(c,r){
        if (c<0||r<0||c>=cols||r>=rows) return;
        const sel = state.selected;
        const cellObj = state.grid[r][c] || { color:null, emoji:null, label:null, overlay:null };
        if (sel.category==='water'){
          cellObj.color = COLORS.WATER; cellObj.label = sel.subtype; cellObj.emoji = null; cellObj.overlay = null;
        } else if (sel.category==='land'){
          if (sel.subtype==='Land'){
            cellObj.color = COLORS.LAND; cellObj.label = null; cellObj.emoji = null; // keep overlay if any
          } else if (sel.subtype==='Desert'){
            cellObj.color = COLORS.DESERT; cellObj.label = null; cellObj.emoji = null; cellObj.overlay = '🏜️';
          } else if (sel.subtype==='Mountain'){
            if (cellObj.color === COLORS.LAND || cellObj.color === COLORS.DESERT){ cellObj.overlay = '⛰️'; }
          } else if (sel.subtype==='Forest'){
            if (cellObj.color === COLORS.LAND || cellObj.color === COLORS.DESERT){ cellObj.overlay = '🌲'; }
          }
        } else if (sel.category==='civ'){
          // Civ paints should not set a background color; keep existing base
          cellObj.label = null; cellObj.overlay = null; cellObj.emoji = sel.emoji;
        }
        state.grid[r][c] = cellObj;
      }
      function applySelectedToCell(cellObj){
        const sel = state.selected;
        if (sel.category==='water'){
          cellObj.color = COLORS.WATER; cellObj.label = sel.subtype; cellObj.emoji = null; cellObj.overlay = null;
        } else if (sel.category==='land'){
          if (sel.subtype==='Land'){
            cellObj.color = COLORS.LAND; cellObj.label = null; cellObj.emoji = null;
          } else if (sel.subtype==='Desert'){
            cellObj.color = COLORS.DESERT; cellObj.label = null; cellObj.emoji = null; cellObj.overlay = '🏜️';
          } else if (sel.subtype==='Mountain'){
            if (cellObj.color === COLORS.LAND || cellObj.color === COLORS.DESERT){ cellObj.overlay = '⛰️'; }
          } else if (sel.subtype==='Forest'){
            if (cellObj.color === COLORS.LAND || cellObj.color === COLORS.DESERT){ cellObj.overlay = '🌲'; }
          }
        } else if (sel.category==='civ'){
          cellObj.label = null; cellObj.overlay = null; cellObj.emoji = sel.emoji;
        }
        return cellObj;
      }
      function bucketFill(startC, startR){
        // If starting on colored cell, fill all blank cells across page with selected
        const startCell = (startR>=0&&startR<rows&&startC>=0&&startC<cols) ? state.grid[startR][startC] : null;
        if (startCell && startCell.color){
          for (let r=0;r<rows;r++){
            for (let c=0;c<cols;c++){
              if (!state.grid[r][c]){
                state.grid[r][c] = applySelectedToCell({ color:null, emoji:null, label:null, overlay:null });
              }
            }
          }
          return;
        }
        // Flood region of blank cells; decide if enclosed by colored boundary
        const visited = Array.from({length: rows}, () => Array(cols).fill(false));
        const queue = [];
        const region = [];
        let touchesEdge = false;
        const enqueue = (c,r)=>{
          if (c<0||r<0||c>=cols||r>=rows) return;
          if (visited[r][c]) return;
          const cell = state.grid[r][c];
          if (cell && cell.color) return; // boundary blocks
          visited[r][c] = true; queue.push([c,r]);
        };
        enqueue(startC,startR);
        while(queue.length){
          const [c,r] = queue.shift();
          region.push([c,r]);
          if (r===0||c===0||r===rows-1||c===cols-1) touchesEdge = true;
          enqueue(c+1,r); enqueue(c-1,r); enqueue(c,r+1); enqueue(c,r-1);
        }
        if (region.length===0) return;
        if (touchesEdge){
          // Not enclosed: fill all blank cells on page
          for (let rr=0; rr<rows; rr++){
            for (let cc=0; cc<cols; cc++){
              if (!state.grid[rr][cc]){
                state.grid[rr][cc] = applySelectedToCell({ color:null, emoji:null, label:null, overlay:null });
              }
            }
          }
        } else {
          // Enclosed: fill region only
          region.forEach(([c,r])=>{
            state.grid[r][c] = applySelectedToCell(state.grid[r][c] || { color:null, emoji:null, label:null, overlay:null });
          });
        }
      }
      function eraseAt(c,r){ if (c<0||r<0||c>=cols||r>=rows) return; state.grid[r][c] = null; }
      function placePin(c,r){ if (c<0||r<0||c>=cols||r>=rows) return; state.pins.push({ x:c, y:r, emoji: '📍' }); }

      canvas.addEventListener('mousedown', (e)=>{
        const data = cellFromEvent(e);
        if (spaceDown){
          panning = true; drawing = false;
          panStart = { x: data.px, y: data.py, ox: view.offsetX, oy: view.offsetY };
          return;
        }
        drawing=true; pushHistory();
        const {c,r}=data;
        if (state.selected.kind==='pin') { placePin(c,r); }
        else if (state.tool==='paint') { paintAt(c,r); }
        else if (state.tool==='erase') { eraseAt(c,r); }
        else if (state.tool==='bucket') { bucketFill(c,r); }
        redraw();
      });
      canvas.addEventListener('mousemove', (e)=>{
        const data = cellFromEvent(e);
        if (panning){ view.offsetX = panStart.ox + (data.px - panStart.x); view.offsetY = panStart.oy + (data.py - panStart.y); clampView(); redraw(); return; }
        if(!drawing) return;
        const {c,r}=data;
        if (state.selected.kind==='tile') { if (state.tool==='paint') { paintAt(c,r); } else if (state.tool==='erase') { eraseAt(c,r); } redraw(); }
      });
      window.addEventListener('mouseup', ()=>{ drawing=false; panning=false; });

      canvas.addEventListener('touchstart', (e)=>{ drawing=true; pushHistory(); const {c,r}=cellFromEvent(e); if (state.selected.kind==='pin') placePin(c,r); else if (state.tool==='paint') paintAt(c,r); else if (state.tool==='erase') eraseAt(c,r); redraw(); e.preventDefault(); }, { passive:false });
      canvas.addEventListener('touchmove', (e)=>{ if(!drawing) return; const {c,r}=cellFromEvent(e); if (state.selected.kind==='tile') { if (state.tool==='paint') { paintAt(c,r); } else if (state.tool==='erase') { eraseAt(c,r); } redraw(); } e.preventDefault(); }, { passive:false });
      window.addEventListener('touchend', ()=> drawing=false);

            // Keyboard pan (hold Space to pan) — do not block typing in inputs/textareas
            function isTextInput(el){
                return el && (el.tagName==='INPUT' || el.tagName==='TEXTAREA' || el.isContentEditable);
            }
            window.addEventListener('keydown', (e)=>{
                if (e.code==='Space') {
                    const target = e.target || document.activeElement;
                    if (!isTextInput(target)) { spaceDown = true; e.preventDefault(); }
                }
            });
            window.addEventListener('keyup', (e)=>{
                if (e.code==='Space') { spaceDown = false; }
            });

      // Mouse wheel zoom (focus under cursor)
      canvas.addEventListener('wheel', (e)=>{
        e.preventDefault();
        const rect = canvas.getBoundingClientRect();
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;
        const prev = view.scale;
        const factor = e.deltaY < 0 ? 1.1 : 0.9;
        view.scale = Math.max(view.min, Math.min(view.max, view.scale * factor));
        const scaleRatio = view.scale / prev;
        view.offsetX = x - (x - view.offsetX) * scaleRatio;
        view.offsetY = y - (y - view.offsetY) * scaleRatio;
        clampView();
        redraw();
      }, { passive:false });

      const paintBtn = document.getElementById('wm-tool-paint'); paintBtn.dataset.tool='paint';
      const eraseBtn = document.getElementById('wm-tool-erase'); eraseBtn.dataset.tool='erase';
      const bucketBtn = document.getElementById('wm-tool-bucket'); bucketBtn.dataset.tool='bucket';

      function updateToolActive(){
        const label = document.getElementById('wm-current-tool');
        [paintBtn, eraseBtn, bucketBtn].forEach(btn => {
          const isActive = btn.dataset.tool === state.tool;
          btn.classList.toggle('active', isActive);
          btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        });
        if (label) {
          const name = state.tool.charAt(0).toUpperCase() + state.tool.slice(1);
          label.textContent = `Current Tool: ${name}`;
        }
      }

      paintBtn.addEventListener('click', ()=> { state.tool='paint'; updateToolActive(); });
      eraseBtn.addEventListener('click', ()=> { state.tool='erase'; updateToolActive(); });
      bucketBtn.addEventListener('click', ()=> { state.tool='bucket'; updateToolActive(); });
      document.getElementById('wm-undo').addEventListener('click', ()=>{ const last=state.history.pop(); if(!last) return; state.grid=last.grid.map(r=>r.slice()); state.pins=last.pins.map(p=>({...p})); redraw(); });
      document.getElementById('wm-clear').addEventListener('click', ()=>{ pushHistory(); state.grid=Array.from({length: rows}, () => Array(cols).fill(null)); state.pins=[]; redraw(); });
      document.getElementById('wm-export').addEventListener('click', ()=>{ const a=document.createElement('a'); a.href=canvas.toDataURL('image/png'); a.download='world-map.png'; document.body.appendChild(a); a.click(); document.body.removeChild(a); });
      function zoomAt(cx, cy, dir){
        const prev = view.scale; const factor = dir>0 ? 1.1 : 0.9;
        view.scale = Math.max(view.min, Math.min(view.max, view.scale * factor));
        const scaleRatio = view.scale / prev;
        view.offsetX = cx - (cx - view.offsetX) * scaleRatio;
        view.offsetY = cy - (cy - view.offsetY) * scaleRatio;
        clampView();
        redraw();
      }
      document.getElementById('wm-zoom-in').addEventListener('click', ()=> zoomAt(canvas.width/2, canvas.height/2, +1));
      document.getElementById('wm-zoom-out').addEventListener('click', ()=> zoomAt(canvas.width/2, canvas.height/2, -1));
      document.getElementById('wm-zoom-reset').addEventListener('click', ()=>{ view.scale=1; view.offsetX=0; view.offsetY=0; clampView(); redraw(); });

      buildPalette();
      updatePaletteActive();
      updateToolActive();
      resizeCanvasToDisplaySize();
      window.addEventListener('resize', ()=>{ resizeCanvasToDisplaySize(); clampView(); redraw(); });
      redraw();
    })();
  </script>
</div>

    <!-- World Map Quest Tracker -->
    <div class="generator-card">
        <div style="width: 100%;">
        <h2 class="generator-title" style="padding: 0 40px;">World Map Quest Tracker</h2>
        <p style="color: #c0c0c0; margin-bottom: 25px; padding: 0 40px;">Build your campaign by creating quests for different locations!</p>
        
        <form id="quest-form" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 25px; text-align: left; max-width: 1400px; margin: 0 auto; padding: 0 40px; width: 100%;">
            <div style="margin-bottom: 20px;">
                <label style="display: block; color: #ffd700; margin-bottom: 8px; font-weight: bold;">Quest Title:</label>
                <input type="text" id="quest-title" required
                    style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.4); border: 2px solid rgba(255, 215, 0, 0.3); border-radius: 8px; color: #e0e0e0; font-family: 'Cinzel', 'Georgia', serif; font-size: 1em;">
                <small style="color: #a0a0a0; font-size: 0.85em; margin-top: 5px; display: block;">The name of your quest (e.g., "The Lost Crown of Eldoria")</small>
            </div>
            
            <div style="margin-bottom: 20px;">
                <label style="display: block; color: #ffd700; margin-bottom: 8px; font-weight: bold;">Location Type:</label>
                <select id="quest-location" required
                    style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.4); border: 2px solid rgba(255, 215, 0, 0.3); border-radius: 8px; color: #e0e0e0; font-family: 'Cinzel', 'Georgia', serif; font-size: 1em;">
                    <option value="">Select a location...</option>
                    <option value="town">Town</option>
                    <option value="dungeon">Dungeon</option>
                    <option value="forest">Forest</option>
                    <option value="mountain">Mountain</option>
                    <option value="castle">Castle</option>
                    <option value="cave">Cave</option>
                    <option value="ocean">Ocean</option>
                    <option value="desert">Desert</option>
                </select>
            </div>
            
            <div style="margin-bottom: 20px;">
                <label style="display: block; color: #ffd700; margin-bottom: 8px; font-weight: bold;">Quest Objective:</label>
                <textarea id="quest-objective" required rows="3"
                    style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.4); border: 2px solid rgba(255, 215, 0, 0.3); border-radius: 8px; color: #e0e0e0; font-family: 'Cinzel', 'Georgia', serif; font-size: 1em; resize: vertical;"></textarea>
                <small style="color: #a0a0a0; font-size: 0.85em; margin-top: 5px; display: block;">What players need to accomplish (e.g., "Defeat the dragon guarding the ancient temple")</small>
            </div>
            
            <div style="margin-bottom: 20px;">
                <label style="display: block; color: #ffd700; margin-bottom: 8px; font-weight: bold;">Difficulty Level:</label>
                <select id="quest-difficulty" required
                    style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.4); border: 2px solid rgba(255, 215, 0, 0.3); border-radius: 8px; color: #e0e0e0; font-family: 'Cinzel', 'Georgia', serif; font-size: 1em;">
                    <option value="">Select difficulty...</option>
                    <option value="easy">⭐ Easy</option>
                    <option value="medium">⭐⭐ Medium</option>
                    <option value="hard">⭐⭐⭐ Hard</option>
                    <option value="epic">⭐⭐⭐⭐ Epic</option>
                </select>
            </div>
            
            <div style="margin-bottom: 25px;">
                <label style="display: block; color: #ffd700; margin-bottom: 8px; font-weight: bold;">Reward:</label>
                <input type="text" id="quest-reward" required
                    style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.4); border: 2px solid rgba(255, 215, 0, 0.3); border-radius: 8px; color: #e0e0e0; font-family: 'Cinzel', 'Georgia', serif; font-size: 1em;">
                <small style="color: #a0a0a0; font-size: 0.85em; margin-top: 5px; display: block;">What players earn for completing the quest (e.g., "500 gold coins and a magic sword")</small>
            </div>
            
<div style="grid-column: 1 / -1;">
    <button type="submit" 
            class="btn btn-confirm" 
            style="width: 100%; max-width: 500px; margin: 0 auto; display: block;">
        <i class="fas fa-plus-circle"></i>
        <span style="position: relative; z-index: 1;">Add Quest to Log</span>
    </button>
</div>
        </form>

    <div class="container">
        <header>
            <h1>Game creator</h1>
            <p class="subtitle">Build your character's background story and customize their visual appearance!</p>
        </header>
        
        <!-- Character Background Builder Section -->
        <div style="background: linear-gradient(145deg, rgba(30, 30, 60, 0.95), rgba(20, 20, 40, 0.95)); border-radius: 20px; padding: 40px; box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.7), inset 0 0 20px rgba(255, 215, 0, 0.1); border: 2px solid rgba(255, 215, 0, 0.3); backdrop-filter: blur(10px); margin-bottom: 40px;">
            <h2 style="color: #ffd700; font-size: 2em; margin-bottom: 20px; text-shadow: 0 0 10px rgba(255, 215, 0, 0.3); text-align: center;">Character Background Builder</h2>
            <p style="color: #c0c0c0; margin-bottom: 25px; text-align: center;">Create a detailed character sheet by filling out the form below!</p>
            
            <form id="character-form" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 25px; text-align: left;">
                <div style="margin-bottom: 20px;">
                    <label style="display: block; color: #ffd700; margin-bottom: 8px; font-weight: bold;">Character Name:</label>
                    <input type="text" id="char-name" name="name" required
                        style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.4); border: 2px solid rgba(255, 215, 0, 0.3); border-radius: 8px; color: #e0e0e0; font-family: 'Segoe UI', sans-serif; font-size: 1em;">
                </div>
                
                <div style="margin-bottom: 20px;">
                    <label style="display: block; color: #ffd700; margin-bottom: 8px; font-weight: bold;">Motivation (What drives them?):</label>
                    <textarea id="char-motivation" name="motivation" required rows="3"
                        style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.4); border: 2px solid rgba(255, 215, 0, 0.3); border-radius: 8px; color: #e0e0e0; font-family: 'Segoe UI', sans-serif; font-size: 1em; resize: vertical;"></textarea>
                </div>
                
                <div style="margin-bottom: 20px;">
                    <label style="display: block; color: #ffd700; margin-bottom: 8px; font-weight: bold;">Greatest Fear:</label>
                    <textarea id="char-fear" name="fear" required rows="3"
                        style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.4); border: 2px solid rgba(255, 215, 0, 0.3); border-radius: 8px; color: #e0e0e0; font-family: 'Segoe UI', sans-serif; font-size: 1em; resize: vertical;"></textarea>
                </div>
                
                <div style="margin-bottom: 25px;">
                    <label style="display: block; color: #ffd700; margin-bottom: 8px; font-weight: bold;">Hidden Secret:</label>
                    <textarea id="char-secret" name="secret" required rows="3"
                        style="width: 100%; padding: 12px; background: rgba(0, 0, 0, 0.4); border: 2px solid rgba(255, 215, 0, 0.3); border-radius: 8px; color: #e0e0e0; font-family: 'Segoe UI', sans-serif; font-size: 1em; resize: vertical;"></textarea>
                </div>
                
                <div style="grid-column: 1 / -1;">
                    <button type="submit" class="btn btn-confirm" style="width: 100%; max-width: 500px; margin: 0 auto; display: block;">
                        <span style="position: relative; z-index: 1;">Create Character Sheet</span>
                    </button>
                </div>
            </form>
            
            <div id="character-sheet-result" style="margin-top: 30px; display: none; opacity: 0; transition: opacity 0.3s ease;">
                <div id="character-sheet-content" style="color: #e0e0e0;"></div>
                <button onclick="downloadCharacterSheet()" class="btn btn-confirm" style="margin-top: 20px; padding: 12px 30px; font-size: 1em; display: block; margin-left: auto; margin-right: auto;">
                    <span style="position: relative; z-index: 1;"><i class="fas fa-download"></i> Download Character Sheet</span>
                </button>
            </div>
        </div>

        <!-- Visual Character Creator Section -->
        <div style="background: linear-gradient(145deg, rgba(30, 30, 60, 0.95), rgba(20, 20, 40, 0.95)); border-radius: 20px; padding: 40px; box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.7), inset 0 0 20px rgba(255, 215, 0, 0.1); border: 2px solid rgba(255, 215, 0, 0.3); backdrop-filter: blur(10px); margin-bottom: 40px;">
            <h2 style="color: #ffd700; font-size: 2em; margin-bottom: 20px; text-shadow: 0 0 10px rgba(255, 215, 0, 0.3); text-align: center;">Visual Character Creator</h2>
            <p style="color: #c0c0c0; margin-bottom: 25px; text-align: center;">Customize your character's appearance. Your pixel art character will update in real-time.</p>
        
        <div class="main-content">
            <!-- Character Class Selection (Left) -->
            <div class="options-panel">
                <h2 class="section-title"><i class="fas fa-helmet-battle"></i> Character Class</h2>
                <div class="class-selector" id="classSelector">
                    <!-- Class options will be generated by JavaScript -->
                </div>
            </div>
            
            <!-- Character Preview (Right) -->
            <div class="preview-panel">
                <h2 class="section-title"><i class="fas fa-eye"></i> Character Preview</h2>
                
                <div class="pixel-canvas-container">
                    <canvas id="characterCanvas" class="pixel-canvas" width="16" height="16"></canvas>
                </div>
                
                <div class="character-details">
                    <div class="detail-row">
                        <span class="detail-label">Class:</span>
                        <span class="detail-value" id="previewClass">Warrior</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Hair Color:</span>
                        <span class="detail-value" id="previewHairColor">Golden</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Clothing Color:</span>
                        <span class="detail-value" id="previewClothingColor">Royal Blue</span>
                    </div>
                </div>
            </div>
            
            <!-- Color Options Row (Spans Both Columns Below) -->
            <div class="color-options-row">
                <div class="option-group">
                    <div class="color-label">
                        <h2 class="section-title"><i class="fas fa-palette"></i> Hair Color</h2>
                    </div>
                    <div class="color-selector" id="hairColorSelector">
                        <!-- Hair color options will be generated by JavaScript -->
                    </div>
                </div>
                
                <div class="option-group">
                    <div class="color-label">
                        <h2 class="section-title"><i class="fas fa-tshirt"></i> Clothing Color</h2>
                    </div>
                    <div class="color-selector" id="clothingColorSelector">
                        <!-- Clothing color options will be generated by JavaScript -->
                    </div>
                </div>
            </div>
        </div>
        
        <div class="action-buttons">
            <button class="btn btn-reset" id="resetButton">
                <i class="fas fa-redo"></i> Reset
            </button>
            <button class="btn btn-confirm" id="confirmButton">
                <i class="fas fa-check-circle"></i> Confirm Character
            </button>
        </div>
        </div>
        
        <footer>
            <p>RPG Character Creator | Use your created character in your next adventure!</p>
        </footer>
    </div>

    <script>
        // Character class data
        const characterClasses = [
            { id: 'warrior', name: 'Warrior', icon: 'fas fa-shield-alt', color: '#4361ee', defaultHair: '#D4A017', defaultClothing: '#4361EE' },
            { id: 'mage', name: 'Mage', icon: 'fas fa-hat-wizard', color: '#9d4edd', defaultHair: '#F77F00', defaultClothing: '#9D4EDD' },
            { id: 'archer', name: 'Archer', icon: 'fas fa-crosshairs', color: '#2a9d8f', defaultHair: '#A8DADC', defaultClothing: '#2A9D8F' },
            { id: 'assassin', name: 'Assassin', icon: 'fas fa-user-ninja', color: '#e63946', defaultHair: '#1D3557', defaultClothing: '#E63946' },
            { id: 'cleric', name: 'Cleric', icon: 'fas fa-pray', color: '#ff9e00', defaultHair: '#F1FAEE', defaultClothing: '#FF9E00' },
            { id: 'civilian', name: 'Civilian', icon: 'fas fa-user', color: '#588157', defaultHair: '#8D99AE', defaultClothing: '#588157' }
        ];

        // Color palettes
        const hairColors = [
            { name: 'Golden', value: '#D4A017' },
            { name: 'Blonde', value: '#F6DCAC' },
            { name: 'Brown', value: '#8B4513' },
            { name: 'Black', value: '#1D1D1D' },
            { name: 'Red', value: '#A41623' },
            { name: 'White', value: '#F8F9FA' },
            { name: 'Silver', value: '#C0C0C0' },
            { name: 'Blue', value: '#4A90E2' }
        ];

        const clothingColors = [
            { name: 'Royal Blue', value: '#4361EE' },
            { name: 'Crimson', value: '#A41623' },
            { name: 'Forest Green', value: '#2A9D8F' },
            { name: 'Deep Purple', value: '#7209B7' },
            { name: 'Shadow Black', value: '#212529' },
            { name: 'Steel Gray', value: '#6C757D' },
            { name: 'Gold', value: '#FF9E00' },
            { name: 'White', value: '#F8F9FA' }
        ];

        // Current selections
        let currentClass = 'warrior';
        let currentHairColor = '#D4A017';
        let currentClothingColor = '#4361EE';

        // Initialize the page
        document.addEventListener('DOMContentLoaded', function() {
            initializeClassSelector();
            initializeColorSelectors();
            updateCharacterPreview();
            setupEventListeners();
        });

        // Initialize class selection options
        function initializeClassSelector() {
            const classSelector = document.getElementById('classSelector');
            
            characterClasses.forEach(cls => {
                const classOption = document.createElement('div');
                classOption.className = `class-option ${cls.id === currentClass ? 'selected' : ''}`;
                classOption.dataset.classId = cls.id;
                
                classOption.innerHTML = `
                    <div class="class-icon"><i class="${cls.icon}"></i></div>
                    <div class="class-name">${cls.name}</div>
                `;
                
                classOption.addEventListener('click', () => {
                    document.querySelectorAll('.class-option').forEach(opt => opt.classList.remove('selected'));
                    classOption.classList.add('selected');
                    
                    currentClass = cls.id;
                    // Update default colors for this class
                    const selectedClass = characterClasses.find(c => c.id === currentClass);
                    currentHairColor = selectedClass.defaultHair;
                    currentClothingColor = selectedClass.defaultClothing;
                    
                    updateColorSelections();
                    updateCharacterPreview();
                });
                
                classSelector.appendChild(classOption);
            });
        }

        // Initialize color selection options
        function initializeColorSelectors() {
            const hairColorSelector = document.getElementById('hairColorSelector');
            const clothingColorSelector = document.getElementById('clothingColorSelector');
            
            // Hair colors
            hairColors.forEach(color => {
                const colorOption = document.createElement('div');
                colorOption.className = `color-option ${color.value === currentHairColor ? 'selected' : ''}`;
                colorOption.style.backgroundColor = color.value;
                colorOption.dataset.colorValue = color.value;
                colorOption.dataset.colorName = color.name;
                
                colorOption.addEventListener('click', () => {
                    document.querySelectorAll('#hairColorSelector .color-option').forEach(opt => opt.classList.remove('selected'));
                    colorOption.classList.add('selected');
                    
                    currentHairColor = color.value;
                    updateCharacterPreview();
                });
                
                hairColorSelector.appendChild(colorOption);
            });
            
            // Clothing colors
            clothingColors.forEach(color => {
                const colorOption = document.createElement('div');
                colorOption.className = `color-option ${color.value === currentClothingColor ? 'selected' : ''}`;
                colorOption.style.backgroundColor = color.value;
                colorOption.dataset.colorValue = color.value;
                colorOption.dataset.colorName = color.name;
                
                colorOption.addEventListener('click', () => {
                    document.querySelectorAll('#clothingColorSelector .color-option').forEach(opt => opt.classList.remove('selected'));
                    colorOption.classList.add('selected');
                    
                    currentClothingColor = color.value;
                    updateCharacterPreview();
                });
                
                clothingColorSelector.appendChild(colorOption);
            });
        }

        // Update color selections after class change
        function updateColorSelections() {
            // Update hair color selection
            document.querySelectorAll('#hairColorSelector .color-option').forEach(opt => {
                opt.classList.toggle('selected', opt.dataset.colorValue === currentHairColor);
            });
            
            // Update clothing color selection
            document.querySelectorAll('#clothingColorSelector .color-option').forEach(opt => {
                opt.classList.toggle('selected', opt.dataset.colorValue === currentClothingColor);
            });
        }

        // Update character preview canvas
        function updateCharacterPreview() {
            const canvas = document.getElementById('characterCanvas');
            const ctx = canvas.getContext('2d');
            
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Get selected class data
            const selectedClass = characterClasses.find(c => c.id === currentClass);
            
            // Update text details
            document.getElementById('previewClass').textContent = selectedClass.name;
            document.getElementById('previewHairColor').textContent = 
                hairColors.find(c => c.value === currentHairColor)?.name || 'Custom';
            document.getElementById('previewClothingColor').textContent = 
                clothingColors.find(c => c.value === currentClothingColor)?.name || 'Custom';
            
            // Draw pixel art character based on class
            drawPixelCharacter(ctx, selectedClass.id);
        }

        // Draw pixel character based on class
        function drawPixelCharacter(ctx, classId) {
            // Base character shape (same for all classes)
            const skinColor = '#F8C8B0';
            const pantsColor = '#2D1B00';
            const bootColor = '#1A1A1A';
            
            // Draw skin (body)
            ctx.fillStyle = skinColor;
            // Head
            ctx.fillRect(6, 1, 4, 3);
            // Body
            ctx.fillRect(5, 4, 6, 5);
            
            // Draw hair
            ctx.fillStyle = currentHairColor;
            ctx.fillRect(5, 0, 6, 2);
            ctx.fillRect(4, 1, 8, 2);
            ctx.fillRect(5, 3, 6, 1);
            
            // Draw clothing (class-specific)
            ctx.fillStyle = currentClothingColor;
            
            // Class-specific clothing patterns
            if (classId === 'warrior') {
                // Warrior armor
                ctx.fillRect(5, 4, 6, 2);
                // Shoulder pads
                ctx.fillRect(3, 5, 2, 2);
                ctx.fillRect(11, 5, 2, 2);
            } else if (classId === 'mage') {
                // Mage robe
                ctx.fillRect(5, 4, 6, 5);
                // Robe triangle bottom
                ctx.fillRect(6, 9, 4, 1);
                ctx.fillRect(7, 10, 2, 1);
            } else if (classId === 'archer') {
                // Archer tunic
                ctx.fillRect(5, 4, 6, 3);
                // Quiver
                ctx.fillRect(12, 4, 2, 4);
            } else if (classId === 'assassin') {
                // Assassin hood and torso
                ctx.fillRect(5, 2, 6, 1);
                ctx.fillRect(5, 4, 6, 3);
            } else if (classId === 'cleric') {
                // Cleric robe with cross
                ctx.fillRect(5, 4, 6, 5);
                // Cross symbol
                ctx.fillStyle = '#FFD700';
                ctx.fillRect(7, 5, 2, 3);
                ctx.fillRect(6, 6, 4, 1);
            } else if (classId === 'civilian') {
                // Civilian simple robe
                ctx.fillRect(5, 4, 6, 5);
                // Belt
                ctx.fillStyle = '#8B4513';
                ctx.fillRect(5, 7, 6, 1);
            }
            
            // Draw pants
            ctx.fillStyle = pantsColor;
            ctx.fillRect(5, 9, 6, 3);
            
            // Draw boots
            ctx.fillStyle = bootColor;
            ctx.fillRect(4, 12, 3, 2);
            ctx.fillRect(9, 12, 3, 2);
            
            // Draw class-specific equipment
            ctx.fillStyle = '#FFFFFF';
            if (classId === 'warrior') {
                // Sword
                ctx.fillRect(1, 5, 3, 1);
                ctx.fillRect(2, 4, 1, 3);
            } else if (classId === 'mage') {
                // Staff
                ctx.fillRect(1, 3, 1, 10);
                ctx.fillRect(0, 3, 3, 1);
            } else if (classId === 'archer') {
                // Bow
                ctx.fillRect(1, 6, 4, 1);
                ctx.fillRect(2, 5, 2, 3);
            } else if (classId === 'assassin') {
                // Dagger
                ctx.fillRect(1, 7, 2, 1);
                ctx.fillRect(2, 6, 1, 3);
            }
        }

        // Set up event listeners for buttons
        function setupEventListeners() {
            // Reset button
            document.getElementById('resetButton').addEventListener('click', function() {
                // Reset to default warrior
                document.querySelectorAll('.class-option').forEach(opt => opt.classList.remove('selected'));
                document.querySelector('.class-option[data-class-id="warrior"]').classList.add('selected');
                
                currentClass = 'warrior';
                const warriorClass = characterClasses.find(c => c.id === 'warrior');
                currentHairColor = warriorClass.defaultHair;
                currentClothingColor = warriorClass.defaultClothing;
                
                updateColorSelections();
                updateCharacterPreview();
            });
            
            // Second confirm button with navigation
document.getElementById('confirmButton').addEventListener('click', function() {
    const selectedClass = characterClasses.find(c => c.id === currentClass);
    const hairColorName = hairColors.find(c => c.value === currentHairColor)?.name || 'Custom';
    const clothingColorName = clothingColors.find(c => c.value === currentClothingColor)?.name || 'Custom';
    
    // Show confirmation with emoji
    const userConfirmed = confirm(`🎉 Character Created!\n\nClass: ${selectedClass.name}\nHair Color: ${hairColorName}\nClothing Color: ${clothingColorName}\n\nYour character is ready for adventure!\n\nClick OK to continue to controls page.`);
    
    // Navigate to controls page if user confirms
    if (userConfirmed) {
        window.location.href = 'http://localhost:4500//rpg/keybindings';
    }
});

        }

        // Character Builder Form Handler
        let characterSheetData = null;
        let gameMode = localStorage.getItem('rpgGameMode') || 'action';

        // Setup character form event listener
        const characterForm = document.getElementById('character-form');
        if (characterForm) {
            characterForm.addEventListener('submit', handleCharacterSubmit);
        }

        async function handleCharacterSubmit(event) {
            event.preventDefault();
            
            // Get user session data
            const userSession = localStorage.getItem('userSession');
            if (!userSession) {
                alert('Please login first to create characters!');
                window.location.href = '/rpg/login';
                return;
            }
            
            const sessionData = JSON.parse(userSession);
            
            const formData = {
                name: document.getElementById('char-name').value,
                motivation: document.getElementById('char-motivation').value,
                fear: document.getElementById('char-fear').value,
                secret: document.getElementById('char-secret').value,
                gameMode: gameMode,
                userGithubId: sessionData.githubId
            };
            
            try {
                const response = await fetch('http://localhost:8587/api/rpg/character', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
                if (response.ok) {
                    const result = await response.json();
                    characterSheetData = result;
                    displayCharacterSheet(result);
                } else {
                    alert('Error creating character sheet. Please try again.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Could not connect to server. Please make sure the Flask backend is running.');
            }
        }

        function displayCharacterSheet(data) {
            const resultBox = document.getElementById('character-sheet-result');
            const content = document.getElementById('character-sheet-content');
            
            content.innerHTML = `
                <div style="border: 3px solid #ffd700; border-radius: 15px; padding: 30px; background: rgba(0, 0, 0, 0.6);">
                    <h2 style="color: #ffd700; text-align: center; font-size: 2.5em; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 3px;">
                        ${data.name}
                    </h2>
                    <p style="text-align: center; color: #ffed4e; font-style: italic; margin-bottom: 30px; font-size: 1.1em;">
                        ${data.gameMode === 'cozy' ? '🌿 Cozy RPG Character' : '⚔️ Action RPG Character'}
                    </p>
                    
                    <div style="margin-bottom: 25px; padding: 20px; background: rgba(255, 215, 0, 0.1); border-radius: 10px; border-left: 4px solid #ffd700;">
                        <h3 style="color: #ffed4e; margin-bottom: 10px; font-size: 1.3em;">💫 Motivation</h3>
                        <p style="color: #e0e0e0; line-height: 1.8; font-size: 1.1em;">${data.motivation}</p>
                    </div>
                    
                    <div style="margin-bottom: 25px; padding: 20px; background: rgba(255, 215, 0, 0.1); border-radius: 10px; border-left: 4px solid #ffd700;">
                        <h3 style="color: #ffed4e; margin-bottom: 10px; font-size: 1.3em;">😰 Greatest Fear</h3>
                        <p style="color: #e0e0e0; line-height: 1.8; font-size: 1.1em;">${data.fear}</p>
                    </div>
                    
                    <div style="margin-bottom: 25px; padding: 20px; background: rgba(255, 215, 0, 0.1); border-radius: 10px; border-left: 4px solid #ffd700;">
                        <h3 style="color: #ffed4e; margin-bottom: 10px; font-size: 1.3em;">🤫 Hidden Secret</h3>
                        <p style="color: #e0e0e0; line-height: 1.8; font-size: 1.1em;">${data.secret}</p>
                    </div>
                    
                    <div style="padding: 20px; background: rgba(255, 215, 0, 0.05); border-radius: 10px; border: 2px dashed #ffd700;">
                        <h3 style="color: #ffed4e; margin-bottom: 15px; font-size: 1.3em;">📝 Character Analysis</h3>
                        <p style="color: #c0c0c0; line-height: 1.8; font-size: 1em;">${data.analysis}</p>
                    </div>
                    
                    <p style="text-align: center; color: #888; margin-top: 25px; font-size: 0.9em;">
                        Created on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
                    </p>
                </div>
            `;
            
            resultBox.style.display = 'block';
            setTimeout(() => {
                resultBox.style.opacity = '1';
            }, 10);
        }

        function downloadCharacterSheet() {
            if (!characterSheetData) {
                alert('No character sheet to download!');
                return;
            }
            
            const textContent = `
═══════════════════════════════════════════════════════
    CHARACTER SHEET
═══════════════════════════════════════════════════════

NAME: ${characterSheetData.name}
TYPE: ${characterSheetData.gameMode === 'cozy' ? 'Cozy RPG Character' : 'Action RPG Character'}

═══════════════════════════════════════════════════════
MOTIVATION
═══════════════════════════════════════════════════════
${characterSheetData.motivation}

═══════════════════════════════════════════════════════
GREATEST FEAR
═══════════════════════════════════════════════════════
${characterSheetData.fear}

═══════════════════════════════════════════════════════
HIDDEN SECRET
═══════════════════════════════════════════════════════
${characterSheetData.secret}

═══════════════════════════════════════════════════════
CHARACTER ANALYSIS
═══════════════════════════════════════════════════════
${characterSheetData.analysis}

═══════════════════════════════════════════════════════
Created on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
═══════════════════════════════════════════════════════
            `;
            
            const blob = new Blob([textContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `${characterSheetData.name.replace(/\s+/g, '_')}_CharacterSheet.txt`;
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
            document.body.removeChild(a);
        }

        // Navigation Sidebar Functionality
        const sidebar = document.getElementById('rpg-nav-sidebar');
        const navToggle = document.getElementById('nav-toggle');
        const currentPage = 4; // This is page 4

        // Toggle sidebar
        navToggle.addEventListener('click', () => {
            sidebar.classList.toggle('open');
        });

        // Track page visit
        function trackPageVisit(pageNumber) {
            let visitedPages = JSON.parse(localStorage.getItem('rpgVisitedPages') || '[]');
            if (!visitedPages.includes(pageNumber)) {
                visitedPages.push(pageNumber);
                localStorage.setItem('rpgVisitedPages', JSON.stringify(visitedPages));
            }
        }

        // Check if review page should be unlocked
        function updateReviewLock() {
            const visitedPages = JSON.parse(localStorage.getItem('rpgVisitedPages') || '[]');
            const requiredPages = [2, 3, 4, 5];
            const allVisited = requiredPages.every(page => visitedPages.includes(page));
            
            const reviewLink = document.getElementById('review-link');
            if (reviewLink) {
                if (allVisited) {
                    reviewLink.classList.remove('locked');
                } else {
                    reviewLink.classList.add('locked');
                }
            }
        }

        // Update visited page indicators
        function updateVisitedIndicators() {
            const visitedPages = JSON.parse(localStorage.getItem('rpgVisitedPages') || '[]');
            document.querySelectorAll('.nav-link').forEach(link => {
                const pageNum = parseInt(link.dataset.page);
                if (visitedPages.includes(pageNum)) {
                    link.classList.add('visited');
                }
            });
        }

        // Track current page visit
        trackPageVisit(currentPage);
        updateVisitedIndicators();
        updateReviewLock();
    </script>
