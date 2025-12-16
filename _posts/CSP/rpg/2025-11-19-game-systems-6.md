---
layout: post
title: Game Systems & Starting State
description: Configure your core gameplay loop and design defaults for your RPG save file.
permalink: /rpg/systems
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
      <a href="/rpg/character-creation" class="nav-link" data-page="4">
        <span class="nav-number">4</span>
        <span class="nav-text">Character Creation</span>
        <span class="nav-check">✓</span>
      </a>
      <a href="/rpg/keybindings" class="nav-link" data-page="5">
        <span class="nav-number">5</span>
        <span class="nav-text">Controls</span>
        <span class="nav-check">✓</span>
      </a>

      <!-- Current page -->
      <a href="/rpg/systems" class="nav-link active" data-page="6">
        <span class="nav-number">6</span>
        <span class="nav-text">Game Systems</span>
        <span class="nav-check">✓</span>
      </a>

      <!-- Final page -->
      <a href="/rpg/review" class="nav-link locked" data-page="7" id="review-link">
        <span class="nav-number">7</span>
        <span class="nav-text">Review</span>
        <span class="nav-lock">🔒</span>
        <span class="nav-check">✓</span>
      </a>
    </nav>
  </div>
</div>

<style>
  * { margin:0; padding:0; box-sizing:border-box; }

  body{
    font-family:'Cinzel','Georgia',serif;
    background:#1a1a2e;
    min-height:100vh;
    overflow-x:hidden;
    padding:40px 20px;
    color:#e0e0e0;
  }

  body::before{
    content:'';
    position:fixed; inset:0;
    background-image:
      radial-gradient(2px 2px at 20% 30%, white, transparent),
      radial-gradient(2px 2px at 60% 70%, white, transparent),
      radial-gradient(1px 1px at 50% 50%, white, transparent),
      radial-gradient(1px 1px at 80% 10%, white, transparent),
      radial-gradient(2px 2px at 90% 60%, white, transparent);
    background-size:200% 200%;
    animation:stars 20s linear infinite;
    opacity:0.25;
    z-index:0;
  }
  @keyframes stars { from{ transform:translate(0,0);} to{ transform:translate(-50%,-50%);} }

  .container{ position:relative; z-index:10; max-width:980px; margin:0 auto; }

  .card{
    background:linear-gradient(145deg, rgba(30, 30, 60, 0.95), rgba(20, 20, 40, 0.95));
    border-radius:22px;
    padding:26px 24px;
    border:2px solid rgba(255,215,0,0.28);
    box-shadow:0 10px 32px rgba(0,0,0,0.75), inset 0 0 18px rgba(255,215,0,0.08);
    backdrop-filter: blur(10px);
    margin-bottom:18px;
  }

  .hero{
    text-align:center;
    padding:30px 24px;
  }
  .hero-icon{ font-size:3em; filter: drop-shadow(0 0 10px rgba(255,215,0,0.45)); }
  .hero-title{
    color:#ffd700;
    font-size:2.3em;
    letter-spacing:3px;
    margin-top:10px;
    text-shadow:0 0 14px rgba(255,215,0,0.35), 2px 2px 4px rgba(0,0,0,0.8);
  }
  .hero-sub{
    margin-top:8px;
    color:#c0c0c0;
    font-style:italic;
    opacity:0.95;
  }

  .pillbar{
    display:flex;
    flex-wrap:wrap;
    gap:10px;
    justify-content:center;
    margin-top:16px;
  }
  .pill{
    font-family:'Fira Code','Consolas',monospace;
    background:rgba(0,0,0,0.45);
    border:1px solid rgba(255,215,0,0.35);
    color:#ffed4e;
    border-radius:999px;
    padding:7px 12px;
    font-size:0.92em;
  }

  .status{
    margin-top:14px;
    font-weight:800;
    letter-spacing:0.5px;
  }
  .status.warn{ color:#ffed4e; }
  .status.bad{ color:#ff6b6b; }
  .status.good{ color:#7CFC00; }
  .status.muted{ color:#c0c0c0; font-weight:700; opacity:0.9; }

  .section-title{
    color:#ffd700;
    font-size:1.35em;
    margin-bottom:10px;
    text-shadow:0 0 10px rgba(255,215,0,0.28);
    display:flex;
    gap:10px;
    align-items:center;
  }
  .section-hint{
    color:#c0c0c0;
    opacity:0.92;
    font-size:0.92em;
    margin-top:-2px;
    line-height:1.5;
  }

  .grid-tiles{
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap:12px;
    margin-top:12px;
  }
  @media (max-width: 860px){
    .grid-tiles{ grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 520px){
    .grid-tiles{ grid-template-columns: 1fr; }
  }

  .tile{
    background:rgba(0,0,0,0.45);
    border:1px solid rgba(255,215,0,0.25);
    border-radius:16px;
    padding:14px 14px;
    cursor:pointer;
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
    min-height:92px;
    position:relative;
    overflow:hidden;
  }
  .tile:hover{
    transform: translateY(-2px);
    border-color: rgba(255,215,0,0.55);
    box-shadow: 0 10px 26px rgba(0,0,0,0.55), inset 0 0 18px rgba(255,215,0,0.07);
  }
  .tile.selected{
    border-color:#ffd700;
    box-shadow:0 0 0 2px rgba(255,215,0,0.25), 0 14px 30px rgba(0,0,0,0.6);
  }

  .tile-top{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:10px;
  }
  .tile-emoji{ font-size:1.3em; }
  .tile-name{ color:#ffed4e; font-weight:900; letter-spacing:0.4px; }
  .tile-tag{
    font-family:'Fira Code','Consolas',monospace;
    font-size:0.78em;
    color:#c0ffc4;
    opacity:0.95;
  }
  .tile-desc{
    margin-top:8px;
    color:#c0c0c0;
    opacity:0.95;
    font-size:0.88em;
    line-height:1.35;
  }

  .loop-diagram{
    margin-top:14px;
    border-radius:18px;
    border:1px solid rgba(255,215,0,0.28);
    background: radial-gradient(circle at top left, rgba(255,215,0,0.08), rgba(0,0,0,0.55));
    padding:14px;
  }
  .loop-row{
    display:flex;
    gap:10px;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
  }
  .node{
    padding:10px 12px;
    border-radius:999px;
    border:1px solid rgba(255,215,0,0.32);
    background:rgba(0,0,0,0.45);
    color:#ffed4e;
    font-family:'Fira Code','Consolas',monospace;
    font-size:0.9em;
  }
  .arrow{
    color:#c0c0c0;
    opacity:0.85;
    font-weight:900;
  }

  .mini-row{
    display:grid;
    grid-template-columns: 1fr;
    gap:12px;
    margin-top:14px;
  }
  .field{
    background:rgba(0,0,0,0.45);
    border:1px solid rgba(255,215,0,0.25);
    border-radius:16px;
    padding:14px;
  }

  .field-head{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:12px;
    margin-bottom:8px;
  }
  .field-label{
    color:#ffed4e;
    font-weight:900;
    letter-spacing:0.4px;
  }
  .field-value{
    font-family:'Fira Code','Consolas',monospace;
    color:#c0ffc4;
    font-size:0.9em;
    opacity:0.95;
  }
  .field-sub{
    color:#c0c0c0;
    opacity:0.92;
    font-size:0.86em;
    line-height:1.4;
  }

  input[type="range"]{
    width:100%;
    margin-top:10px;
    accent-color:#ffd700;
  }

  .confirm-bar{
    display:flex;
    flex-wrap:wrap;
    gap:12px;
    align-items:center;
    justify-content:space-between;
    margin-top:12px;
    padding-top:12px;
    border-top:1px solid rgba(255,215,0,0.22);
  }

  .btn{
    padding:13px 18px;
    border:none;
    border-radius:14px;
    cursor:pointer;
    font-weight:900;
    letter-spacing:1.2px;
    text-transform:uppercase;
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }
  .btn.primary{
    background:linear-gradient(135deg, #ffd700, #ffed4e);
    color:#1a1a2e;
    box-shadow:0 6px 18px rgba(255,215,0,0.35);
  }
  .btn.secondary{
    background:rgba(0,0,0,0.45);
    border:1px solid rgba(255,215,0,0.35);
    color:#ffed4e;
    font-weight:800;
  }
  .btn:hover{ transform: translateY(-2px); box-shadow:0 10px 26px rgba(0,0,0,0.6); }

  /* RPG Navigation Sidebar Styles */
  .rpg-nav-sidebar{
    position:fixed;
    left:0; top:0;
    height:100vh; width:280px;
    background:linear-gradient(145deg, rgba(20,20,40,0.98), rgba(10,10,20,0.98));
    backdrop-filter: blur(10px);
    box-shadow: 4px 0 20px rgba(0,0,0,0.5);
    transform: translateX(-280px);
    transition: transform 0.3s ease;
    z-index: 1000;
    border-right:2px solid rgba(255,215,0,0.3);
  }
  .rpg-nav-sidebar.open{ transform: translateX(0); }
  .nav-toggle{
    position:absolute;
    right:-50px; top:20px;
    width:50px; height:50px;
    background:linear-gradient(145deg, rgba(20,20,40,0.98), rgba(10,10,20,0.98));
    border:2px solid rgba(255,215,0,0.3);
    border-left:none;
    border-radius:0 10px 10px 0;
    color:#ffd700;
    font-size:24px;
    cursor:pointer;
    display:flex; align-items:center; justify-content:center;
    transition: all 0.3s ease;
  }
  .nav-toggle:hover{ background: rgba(255,215,0,0.1); box-shadow: 0 0 15px rgba(255,215,0,0.25); }
  .nav-content{ padding:30px 20px; height:100%; overflow-y:auto; }
  .nav-title{
    color:#ffd700; font-size:1.5em; text-align:center; margin-bottom:10px;
    text-shadow:0 0 10px rgba(255,215,0,0.5);
  }
  .nav-divider{
    height:2px;
    background:linear-gradient(90deg, transparent, #ffd700, transparent);
    margin-bottom:20px;
  }
  .nav-links{ display:flex; flex-direction:column; gap:10px; }
  .nav-link{
    display:flex; align-items:center;
    padding:15px;
    background:rgba(0,0,0,0.3);
    border:2px solid rgba(255,215,0,0.2);
    border-radius:10px;
    color:#c0c0c0;
    text-decoration:none;
    transition: all 0.3s ease;
  }
  .nav-link:hover:not(.locked){
    background:rgba(255,215,0,0.1);
    border-color:#ffd700;
    transform: translateX(5px);
  }
  .nav-link.active{
    background:rgba(255,215,0,0.15);
    border-color:#ffd700;
    box-shadow:0 0 15px rgba(255,215,0,0.2);
  }
  .nav-link.visited .nav-check{ display:inline; }
  .nav-link.locked{
    opacity:0.5;
    cursor:not-allowed;
    pointer-events:none;
  }
  .nav-number{
    width:30px; height:30px;
    display:flex; align-items:center; justify-content:center;
    border-radius:50%;
    background:rgba(255,215,0,0.2);
    color:#ffd700;
    font-weight:bold;
    margin-right:12px;
    flex-shrink:0;
  }
  .nav-text{ flex:1; font-size:0.95em; }
  .nav-check{ color:#4cc9f0; font-size:1.2em; display:none; margin-left:8px; }
  .nav-lock{ color:#ff6b6b; font-size:1em; margin-left:8px; display:inline; }
  .nav-link:not(.locked) .nav-lock{ display:none; }

  @media (max-width:768px){
    .rpg-nav-sidebar{ width:240px; transform: translateX(-240px); }
  }
</style>

<div class="container">
  <div class="card hero">
    <div class="hero-icon">🧩</div>
    <div class="hero-title">GAME SYSTEMS</div>
    <div class="hero-sub">Set your game’s core gameplay loop — the “rules of the run.”</div>

    <div class="pillbar">
      <span class="pill" id="pill-github">GitHub ID: —</span>
      <span class="pill" id="pill-mode">Mode: —</span>
    </div>

    <div id="page-status" class="status muted">Loading…</div>
  </div>

  <div class="card">
    <div class="section-title">🧠 Core Loop Builder</div>
    <div class="section-hint">
      Pick a loop that matches your story + character vibes. Confirm at the bottom to save.
    </div>

    <div class="grid-tiles" id="loop-tiles"></div>
    <div class="loop-diagram">
      <div class="loop-row" id="loop-diagram-row"></div>
    </div>

    <div class="mini-row">
      <div class="field">
        <div class="field-head">
          <div class="field-label">Progression Style</div>
          <div class="field-value" id="progression-value">—</div>
        </div>
        <div class="grid-tiles" style="grid-template-columns:repeat(3,1fr);" id="progression-tiles"></div>
      </div>

      <div class="field">
        <div class="field-head">
          <div class="field-label">Failure Rules</div>
          <div class="field-value" id="failure-value">—</div>
        </div>
        <div class="grid-tiles" style="grid-template-columns:repeat(3,1fr);" id="failure-tiles"></div>
      </div>

      <div class="field">
        <div class="field-head">
          <div class="field-label">Session Pacing</div>
          <div class="field-value" id="pacing-value">—</div>
        </div>
        <div class="field-sub">How “run-sized” your game feels (short sessions vs long sessions).</div>
        <input id="pacing" type="range" min="1" max="5" step="1" />
        <div class="pillbar" style="justify-content:flex-start; margin-top:10px;">
          <span class="pill" id="pacing-pill">—</span>
        </div>
      </div>
    </div>

    <div class="confirm-bar">
      <div>
        <div class="status muted" id="confirm-status">Make your selections, then Confirm to save.</div>
      </div>
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <button class="btn secondary" id="refresh-btn" type="button">Refresh</button>
        <button class="btn primary" id="confirm-btn" type="button">Confirm</button>
      </div>
    </div>
  </div>
</div>

<script type="module">
  import { pythonURI } from '{{ site.baseurl }}/assets/js/api/config.js';

  // Use the same pattern as your other working page: pythonURI is imported, not global.
  const API_BASE = pythonURI || 'http://localhost:8587'; // fallback only if needed

  const currentPage = 6;

  let gameMode = localStorage.getItem('rpgGameMode') || 'action';
  let session = null;

  let systemsState = {
    gameMode: gameMode,
    loopKey: 'explore_fight_loot',
    progressionKey: 'leveling',
    failureKey: 'respawn_penalty',
    pacing: 3,
    confirmed: false
  };

  const LOOPS = [
    { key:'explore_fight_loot', emoji:'🗺️⚔️💰', name:'Explore → Fight → Loot', tag:'Classic', desc:'Travel, battle, rewards, repeat.', nodes:['Explore','Encounter','Loot','Upgrade'] },
    { key:'explore_dialogue_choice', emoji:'🗺️💬🧭', name:'Explore → Dialogue → Choice', tag:'Narrative', desc:'Decisions and consequences drive the run.', nodes:['Explore','Dialogue','Choice','Outcome'] },
    { key:'explore_craft_upgrade', emoji:'🌿🛠️✨', name:'Explore → Craft → Upgrade', tag:'Cozy/Builder', desc:'Gather, build, improve tools and world.', nodes:['Explore','Gather','Craft','Upgrade'] },
    { key:'dungeon_run_upgrade_repeat', emoji:'🏰🎲⬆️', name:'Run → Upgrade → Repeat', tag:'Roguelite', desc:'Short runs, meta progression, fast iteration.', nodes:['Run','Rewards','Meta-Upgrades','Next Run'] },
    { key:'quest_complete_reward', emoji:'📜✅🎁', name:'Quest → Complete → Reward', tag:'Questing', desc:'Objectives structure player goals.', nodes:['Quest','Objectives','Complete','Reward'] },
    { key:'investigate_puzzle_reveal', emoji:'🕵️🧩🌙', name:'Investigate → Puzzle → Reveal', tag:'Mystery', desc:'Clues and puzzles unlock reveals.', nodes:['Investigate','Clue','Puzzle','Reveal'] },
  ];

  const PROGRESSION = [
    { key:'leveling', emoji:'⭐', name:'Leveling', tag:'RPG', desc:'XP → levels → stat growth.' },
    { key:'skill_tree', emoji:'🌳', name:'Skill Tree', tag:'Builds', desc:'Unlock perks and playstyles.' },
    { key:'gear_based', emoji:'🛡️', name:'Gear-Based', tag:'Loot', desc:'Power is mostly equipment.' },
  ];

  const FAILURE = [
    { key:'no_penalty', emoji:'🫶', name:'No Penalty', tag:'Cozy', desc:'Respawn with minimal friction.' },
    { key:'respawn_penalty', emoji:'⏳', name:'Respawn Penalty', tag:'Standard', desc:'Lose time/currency, keep momentum.' },
    { key:'lose_items', emoji:'💀', name:'Lose Items', tag:'Hardcore', desc:'High stakes; recovery feels meaningful.' },
  ];

  const PACING_LABELS = {
    1: 'Short sessions (10–15 min)',
    2: 'Quick sessions (15–25 min)',
    3: 'Balanced sessions (25–40 min)',
    4: 'Long sessions (40–60 min)',
    5: 'Epic sessions (60+ min)'
  };

  function setPageStatus(msg, type='muted'){
    const el = document.getElementById('page-status');
    el.textContent = msg;
    el.className = 'status ' + type;
  }

  function prettyMode(mode){
    return mode === 'cozy' ? '🌿 Cozy RPG' : '⚔️ Action RPG';
  }

  function safeParseJSON(raw){
    try { return JSON.parse(raw); } catch { return null; }
  }

  function selectTile(containerId, selectedKey){
    document.querySelectorAll(`#${containerId} .tile`).forEach(t => {
      t.classList.toggle('selected', t.dataset.key === selectedKey);
    });
  }

  function renderTiles(containerId, items, selectedKey, onPick){
    const el = document.getElementById(containerId);
    el.innerHTML = items.map(it => `
      <div class="tile ${it.key === selectedKey ? 'selected' : ''}" data-key="${it.key}">
        <div class="tile-top">
          <div style="display:flex; align-items:center; gap:10px;">
            <div class="tile-emoji">${it.emoji}</div>
            <div>
              <div class="tile-name">${it.name}</div>
              <div class="tile-tag">${it.tag}</div>
            </div>
          </div>
        </div>
        <div class="tile-desc">${it.desc}</div>
      </div>
    `).join('');

    el.querySelectorAll('.tile').forEach(tile => {
      tile.addEventListener('click', () => onPick(tile.dataset.key));
    });
  }

  function renderLoopDiagram(loopKey){
    const loop = LOOPS.find(l => l.key === loopKey) || LOOPS[0];
    const row = document.getElementById('loop-diagram-row');
    row.innerHTML = '';
    loop.nodes.forEach((n, i) => {
      const node = document.createElement('div');
      node.className = 'node';
      node.textContent = n;
      row.appendChild(node);
      if (i < loop.nodes.length - 1) {
        const a = document.createElement('div');
        a.className = 'arrow';
        a.textContent = '→';
        row.appendChild(a);
      }
    });
  }

  function updateTopPills(){
    document.getElementById('pill-mode').textContent = `Mode: ${prettyMode(gameMode)}`;
    document.getElementById('pill-github').textContent = `GitHub ID: ${session && session.githubId ? session.githubId : '—'}`;
  }

  function updateFieldValues(){
    const prog = PROGRESSION.find(p => p.key === systemsState.progressionKey);
    const fail = FAILURE.find(f => f.key === systemsState.failureKey);

    document.getElementById('progression-value').textContent = prog ? prog.name : '—';
    document.getElementById('failure-value').textContent = fail ? fail.name : '—';

    document.getElementById('pacing').value = String(systemsState.pacing);
    document.getElementById('pacing-value').textContent = PACING_LABELS[systemsState.pacing] || '—';
    document.getElementById('pacing-pill').textContent = `Pacing: ${PACING_LABELS[systemsState.pacing] || '—'}`;

    renderLoopDiagram(systemsState.loopKey);
  }

  function getCurrentUserSession(){
    return safeParseJSON(localStorage.getItem('userSession') || 'null');
  }

  async function loadSystems(){
    session = getCurrentUserSession();
    gameMode = localStorage.getItem('rpgGameMode') || 'action';
    systemsState.gameMode = gameMode;

    updateTopPills();

    if (!session || !session.githubId) {
      setPageStatus('❌ Log in first to save your game systems.', 'bad');
      renderAllUI();
      return;
    }

    setPageStatus('Loading your saved game systems…', 'warn');

    try {
      const url = `${API_BASE}/api/rpg/systems?userGithubId=${encodeURIComponent(session.githubId)}&gameMode=${encodeURIComponent(gameMode)}`;

      const res = await fetch(url);

      if (res.ok) {
        const data = await res.json();
        const s = data.systems || data;

        systemsState.loopKey = s.loopKey || systemsState.loopKey;
        systemsState.progressionKey = s.progressionKey || systemsState.progressionKey;
        systemsState.failureKey = s.failureKey || systemsState.failureKey;
        systemsState.pacing = Number(s.pacing || systemsState.pacing);
        systemsState.confirmed = !!s.confirmed;

        setPageStatus('✅ Loaded your saved game systems.', 'good');
      } else {
        setPageStatus('No saved systems found for this mode. Using defaults.', 'warn');
      }

      renderAllUI();
    } catch (e) {
      console.error(e);
      setPageStatus('❌ Could not reach the server. Make sure the Flask backend is running.', 'bad');
      renderAllUI();
    }
  }

  async function saveSystems(){
    const status = document.getElementById('confirm-status');

    if (!session || !session.githubId) {
      status.textContent = '❌ You must be logged in to save.';
      status.className = 'status bad';
      return;
    }

    const payload = {
      userGithubId: session.githubId,
      gameMode: gameMode,
      loopKey: systemsState.loopKey,
      progressionKey: systemsState.progressionKey,
      failureKey: systemsState.failureKey,
      pacing: systemsState.pacing,
      confirmed: true
    };

    try {
      status.textContent = 'Saving…';
      status.className = 'status warn';

      const res = await fetch(`${API_BASE}/api/rpg/systems`, {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify(payload)
      });

      const out = await res.json().catch(() => ({}));

      if (!res.ok) {
        status.textContent = `❌ ${out.message || 'Failed to save.'}`;
        status.className = 'status bad';
        return;
      }

      status.textContent = '✅ Confirmed and saved.';
      status.className = 'status good';
      setPageStatus('✅ Confirmed. You can proceed to Review.', 'good');

      trackPageVisit(currentPage);
      updateVisitedIndicators();
      updateReviewLock();
    } catch (e) {
      console.error(e);
      status.textContent = '❌ Could not reach the server.';
      status.className = 'status bad';
    }
  }

  function renderAllUI(){
    renderTiles('loop-tiles', LOOPS, systemsState.loopKey, (key) => {
      systemsState.loopKey = key;
      selectTile('loop-tiles', key);
      updateFieldValues();
    });

    renderTiles('progression-tiles', PROGRESSION, systemsState.progressionKey, (key) => {
      systemsState.progressionKey = key;
      selectTile('progression-tiles', key);
      updateFieldValues();
    });

    renderTiles('failure-tiles', FAILURE, systemsState.failureKey, (key) => {
      systemsState.failureKey = key;
      selectTile('failure-tiles', key);
      updateFieldValues();
    });

    const pacing = document.getElementById('pacing');
    pacing.value = String(systemsState.pacing);
    pacing.addEventListener('input', () => {
      systemsState.pacing = Number(pacing.value);
      updateFieldValues();
    });

    updateFieldValues();
    updateTopPills();
    updateReviewLock();
    updateVisitedIndicators();
  }

  // ---------- Navigation tracking (unlock review) ----------
  function trackPageVisit(pageNumber) {
    let visitedPages = JSON.parse(localStorage.getItem('rpgVisitedPages') || '[]');
    if (!visitedPages.includes(pageNumber)) {
      visitedPages.push(pageNumber);
      localStorage.setItem('rpgVisitedPages', JSON.stringify(visitedPages));
    }
  }

  function updateVisitedIndicators() {
    const visitedPages = JSON.parse(localStorage.getItem('rpgVisitedPages') || '[]');
    document.querySelectorAll('.nav-link').forEach(link => {
      const pageNum = parseInt(link.dataset.page);
      if (visitedPages.includes(pageNum)) link.classList.add('visited');
    });
  }

  function updateReviewLock() {
    const visitedPages = JSON.parse(localStorage.getItem('rpgVisitedPages') || '[]');
    const requiredPages = [2,3,4,5,6];
    const allVisited = requiredPages.every(p => visitedPages.includes(p));

    const reviewLink = document.getElementById('review-link');
    if (reviewLink) {
      if (allVisited) reviewLink.classList.remove('locked');
      else reviewLink.classList.add('locked');
    }
  }

  // Sidebar toggle
  const sidebar = document.getElementById('rpg-nav-sidebar');
  const navToggle = document.getElementById('nav-toggle');
  if (navToggle) navToggle.addEventListener('click', () => sidebar.classList.toggle('open'));

  // Buttons
  document.getElementById('refresh-btn').addEventListener('click', () => loadSystems());
  document.getElementById('confirm-btn').addEventListener('click', () => saveSystems());

  // Init
  trackPageVisit(currentPage);
  updateVisitedIndicators();
  updateReviewLock();
  loadSystems();
</script>
