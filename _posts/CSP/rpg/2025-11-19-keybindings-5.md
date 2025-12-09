---
layout: post
title: Key Bindings & Player Controls
description: Guide users through implementing core game controls.
permalink: /rpg/controls
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
      <!-- This is the current page -->
      <a href="/rpg/controls" class="nav-link active" data-page="5">
        <span class="nav-number">5</span>
        <span class="nav-text">Controls</span>
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

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Cinzel', 'Georgia', serif;
    background: #1a1a2e;
    min-height: 100vh;
    height: auto;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 40px 20px;
}

/* Animated background particles */
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
        radial-gradient(2px 2px at 20% 30%, white, transparent),
        radial-gradient(2px 2px at 60% 70%, white, transparent),
        radial-gradient(1px 1px at 50% 50%, white, transparent),
        radial-gradient(1px 1px at 80% 10%, white, transparent),
        radial-gradient(2px 2px at 90% 60%, white, transparent);
    background-size: 200% 200%;
    animation: stars 20s linear infinite;
    opacity: 0.3;
    z-index: 0;
}

@keyframes stars {
    from { transform: translate(0, 0); }
    to { transform: translate(-50%, -50%); }
}

.container {
    position: relative;
    z-index: 10;
    max-width: 900px;
    margin: 0 auto;
}

/* Header card */
.header-card {
    background: linear-gradient(145deg, rgba(30, 30, 60, 0.95), rgba(20, 20, 40, 0.95));
    border-radius: 20px;
    padding: 32px 28px;
    box-shadow: 
        0 8px 32px 0 rgba(0, 0, 0, 0.7),
        inset 0 0 20px rgba(255, 215, 0, 0.1),
        0 0 40px rgba(255, 215, 0, 0.2);
    border: 2px solid rgba(255, 215, 0, 0.3);
    backdrop-filter: blur(10px);
    text-align: center;
    margin-bottom: 28px;
}

.title-icon {
    font-size: 3.5em;
    margin-bottom: 12px;
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
}

.main-title {
    color: #ffd700;
    font-size: 2.4em;
    margin-bottom: 10px;
    text-shadow: 
        0 0 10px rgba(255, 215, 0, 0.5),
        0 0 20px rgba(255, 215, 0, 0.3),
        2px 2px 4px rgba(0, 0, 0, 0.8);
    letter-spacing: 2px;
}

.subtitle {
    color: #c0c0c0;
    font-size: 1.05em;
    font-style: italic;
    opacity: 0.9;
    margin-bottom: 16px;
}

/* Mode selector */
.mode-selector {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-bottom: 14px;
    flex-wrap: wrap;
}

.mode-btn {
    padding: 10px 22px;
    background: rgba(0, 0, 0, 0.4);
    border: 2px solid rgba(255, 215, 0, 0.3);
    border-radius: 999px;
    color: #c0c0c0;
    font-size: 0.95em;
    font-family: 'Cinzel', 'Georgia', serif;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.mode-btn:hover {
    border-color: #ffd700;
    color: #ffd700;
    transform: translateY(-2px);
}

.mode-btn.active {
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    color: #1a1a2e;
    border-color: #ffd700;
    font-weight: bold;
}

.mode-indicator {
    text-align: center;
    color: #c0c0c0;
    font-size: 0.9em;
    margin-bottom: 4px;
    font-style: italic;
}

.mode-description {
    text-align: center;
    color: #ffed4e;
    font-size: 0.9em;
    margin-bottom: 4px;
}

/* Prompt box */
.prompt-box {
    background: rgba(0, 0, 0, 0.4);
    border-left: 4px solid #ffd700;
    padding: 12px 16px;
    margin: 14px 0;
    border-radius: 5px;
    color: #ffed4e;
    font-size: 0.9em;
}

/* Generic section card (used only for keybind panel now) */
.section-card {
    background: linear-gradient(145deg, rgba(30, 30, 60, 0.95), rgba(20, 20, 40, 0.95));
    border-radius: 20px;
    padding: 26px 24px;
    box-shadow: 
        0 8px 32px 0 rgba(0, 0, 0, 0.7),
        inset 0 0 20px rgba(255, 215, 0, 0.1);
    border: 2px solid rgba(255, 215, 0, 0.3);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    margin-bottom: 28px;
}

.section-card:hover {
    transform: translateY(-3px);
    box-shadow: 
        0 12px 40px 0 rgba(0, 0, 0, 0.8),
        inset 0 0 30px rgba(255, 215, 0, 0.2),
        0 0 60px rgba(255, 215, 0, 0.3);
}

.section-icon {
    font-size: 2.3em;
    margin-bottom: 8px;
    display: block;
}

.section-title {
    color: #ffd700;
    font-size: 1.7em;
    margin-bottom: 8px;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
}

/* Keybinding preferences – “Bindings Manager” look */
.keybind-table {
    margin-top: 12px;
    border-radius: 14px;
    overflow: hidden;
    border: 1px solid rgba(255, 215, 0, 0.35);
    background: radial-gradient(circle at top left, rgba(255, 215, 0, 0.08), rgba(5, 5, 15, 0.95));
    box-shadow:
        0 10px 35px rgba(0, 0, 0, 0.8),
        inset 0 0 10px rgba(255, 215, 0, 0.08);
    font-size: 0.9em;
}

.keybind-header-row,
.keybind-row {
    display: grid;
    grid-template-columns: 1.7fr 1.1fr 1.3fr;
    align-items: center;
    column-gap: 18px;
    padding: 10px 18px;
}

.keybind-header-row {
    background: linear-gradient(
        90deg,
        rgba(255, 215, 0, 0.22),
        rgba(255, 215, 0, 0.08)
    );
    color: #ffed4e;
    font-size: 0.8em;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    border-bottom: 1px solid rgba(255, 215, 0, 0.5);
}

.keybind-header-row div {
    opacity: 0.95;
}

.keybind-row {
    background: rgba(0, 0, 0, 0.55);
    border-bottom: 1px solid rgba(255, 255, 255, 0.03);
    transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.1s ease;
}

.keybind-row:nth-child(odd) {
    background: rgba(15, 15, 35, 0.85);
}

.keybind-row:last-child {
    border-bottom: none;
}

.keybind-row:hover {
    background: rgba(40, 40, 70, 0.95);
    box-shadow: inset 2px 0 0 rgba(255, 215, 0, 0.7);
    transform: translateY(-1px);
}

.keybind-action-name {
    font-weight: 600;
    color: #ffed4e;
}

.keybind-action-sub {
    font-size: 0.78em;
    color: #c0c0c0;
    opacity: 0.85;
    margin-top: 2px;
}

.keybind-desc {
    font-size: 0.8em;
    color: #c0c0c0;
}

/* Select styling */
.keybind-select {
    width: 100%;
    padding: 8px 10px;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    border: 1px solid rgba(255, 215, 0, 0.4);
    color: #ffed4e;
    font-family: 'Fira Code', 'Consolas', 'Courier New', monospace;
    font-size: 0.9em;
}

.keybind-select:focus {
    outline: none;
    box-shadow: 0 0 12px rgba(255, 215, 0, 0.4);
}

/* Button styling (reused for Save) */
.generator-btn {
    padding: 14px 32px;
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    border: none;
    border-radius: 10px;
    color: #1a1a2e;
    font-size: 1.05em;
    font-weight: bold;
    font-family: 'Cinzel', 'Georgia', serif;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 2px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(255, 215, 0, 0.4);
    position: relative;
    overflow: hidden;
}

.generator-btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

.generator-btn:hover::before {
    width: 280px;
    height: 280px;
}

.generator-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(255, 215, 0, 0.6);
}

.keybind-save-btn {
    margin-top: 20px;
    font-size: 0.95em;
}

/* Status text */
.keybind-status {
    margin-top: 12px;
    font-size: 0.9em;
    font-weight: bold;
}

/* Responsive */
@media (max-width: 900px) {
    .keybind-header-row,
    .keybind-row {
        grid-template-columns: 1.4fr 1fr;
        row-gap: 6px;
    }

    .keybind-desc {
        grid-column: 1 / -1;
    }
}

@media (max-width: 768px) {
    .main-title {
        font-size: 2em;
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

<div class="container">
    <!-- Header -->
    <div class="header-card">
        <div class="title-icon">🎮</div>
        <h1 class="main-title">KEY BINDINGS</h1>
        <p class="subtitle">
            Pick your keys and save them to your RPG profile.
        </p>
        
        <div class="mode-selector">
            <button class="mode-btn" data-mode="action" onclick="switchMode(event, 'action')">
                ⚔️ Action RPG
            </button>
            <button class="mode-btn" data-mode="cozy" onclick="switchMode(event, 'cozy')">
                🌿 Cozy RPG
            </button>
        </div>
        <p class="mode-indicator">
            💡 Your key layout is saved separately for each mode.
        </p>
        <p class="mode-description" id="mode-description"></p>
    </div>

    <!-- Save Your Key Bindings -->
    <div class="section-card">
        <span class="section-icon">💾</span>
        <h2 class="section-title">Choose Your Keys</h2>
        <div class="section-content">
            <p style="color:#e0e0e0; line-height:1.6; font-size:0.95em;">
                Select the main key for each action below. 
                <strong>Action RPG</strong> uses a fast-paced WASD + mouse layout. 
                <strong>Cozy RPG</strong> uses slower, arrow-key-friendly controls.
            </p>

            <div class="prompt-box">
                You need to be logged in first. We use your saved <strong>GitHub ID</strong> to remember these controls.
            </div>

            <form id="keybind-preferences-form" onsubmit="handleKeybindingSave(event)">
                <div class="keybind-table">
                    <div class="keybind-header-row">
                        <div>Action</div>
                        <div>Primary Key</div>
                        <div>Description</div>
                    </div>

                    <div class="keybind-row">
                        <div>
                            <div class="keybind-action-name">Move Up / Forward</div>
                            <div class="keybind-action-sub">Action: W • Cozy: ↑</div>
                        </div>
                        <div>
                            <select id="bind-move-up" class="keybind-select">
                                <option value="w">W</option>
                                <option value="ArrowUp">Arrow Up</option>
                                <option value="i">I</option>
                            </select>
                        </div>
                        <div class="keybind-desc">
                            Move your character forward or up.
                        </div>
                    </div>

                    <div class="keybind-row">
                        <div>
                            <div class="keybind-action-name">Move Down / Backward</div>
                            <div class="keybind-action-sub">Action: S • Cozy: ↓</div>
                        </div>
                        <div>
                            <select id="bind-move-down" class="keybind-select">
                                <option value="s">S</option>
                                <option value="ArrowDown">Arrow Down</option>
                                <option value="k">K</option>
                            </select>
                        </div>
                        <div class="keybind-desc">
                            Move backward or down on a 2D map.
                        </div>
                    </div>

                    <div class="keybind-row">
                        <div>
                            <div class="keybind-action-name">Move Left</div>
                            <div class="keybind-action-sub">Action: A • Cozy: ←</div>
                        </div>
                        <div>
                            <select id="bind-move-left" class="keybind-select">
                                <option value="a">A</option>
                                <option value="ArrowLeft">Arrow Left</option>
                                <option value="j">J</option>
                            </select>
                        </div>
                        <div class="keybind-desc">
                            Move or strafe left.
                        </div>
                    </div>

                    <div class="keybind-row">
                        <div>
                            <div class="keybind-action-name">Move Right</div>
                            <div class="keybind-action-sub">Action: D • Cozy: →</div>
                        </div>
                        <div>
                            <select id="bind-move-right" class="keybind-select">
                                <option value="d">D</option>
                                <option value="ArrowRight">Arrow Right</option>
                                <option value="l">L</option>
                            </select>
                        </div>
                        <div class="keybind-desc">
                            Move or strafe right.
                        </div>
                    </div>

                    <div class="keybind-row">
                        <div>
                            <div class="keybind-action-name">Interact</div>
                            <div class="keybind-action-sub">Action: E • Cozy: Space</div>
                        </div>
                        <div>
                            <select id="bind-interact" class="keybind-select">
                                <option value="e">E</option>
                                <option value="f">F</option>
                                <option value="q">Q</option>
                                <option value="r">R</option>
                                <option value="Space">Space</option>
                            </select>
                        </div>
                        <div class="keybind-desc">
                            Use for doors, NPCs, loot, and context actions.
                        </div>
                    </div>

                    <div class="keybind-row">
                        <div>
                            <div class="keybind-action-name">Jump / Hop</div>
                            <div class="keybind-action-sub">Action: Space • Cozy: (None or small hop)</div>
                        </div>
                        <div>
                            <select id="bind-jump" class="keybind-select">
                                <option value="Space">Space</option>
                                <option value="j">J</option>
                                <option value="k">K</option>
                                <option value="ShiftLeft">Left Shift</option>
                                <option value="ShiftRight">Right Shift</option>
                                <option value="">(None)</option>
                            </select>
                        </div>
                        <div class="keybind-desc">
                            Vertical movement like jumping, vaulting, or light hops.
                        </div>
                    </div>

                    <div class="keybind-row">
                        <div>
                            <div class="keybind-action-name">Sprint / Quick Walk</div>
                            <div class="keybind-action-sub">Action: Shift • Cozy: (Off by default)</div>
                        </div>
                        <div>
                            <select id="bind-sprint" class="keybind-select">
                                <option value="ShiftLeft">Left Shift</option>
                                <option value="ShiftRight">Right Shift</option>
                                <option value="ControlLeft">Left Ctrl</option>
                                <option value="ControlRight">Right Ctrl</option>
                                <option value="">(None)</option>
                            </select>
                        </div>
                        <div class="keybind-desc">
                            Sprint in action games or a gentle quick-walk in cozy games.
                        </div>
                    </div>
                </div>

                <button type="submit" class="generator-btn keybind-save-btn">
                    <span style="position: relative; z-index: 1;">Save Key Bindings</span>
                </button>
            </form>

            <div id="keybind-status" class="keybind-status"></div>
        </div>
    </div>
</div>

<script>
const API_URL = 'http://localhost:8587/api';

// Shared game mode with other pages
let gameMode = localStorage.getItem('rpgGameMode') || 'action'; // default to action

// Default layouts that are VERY different between modes
const modeDefaultBindings = {
    action: {
        moveUpKey: 'w',
        moveDownKey: 's',
        moveLeftKey: 'a',
        moveRightKey: 'd',
        interactKey: 'e',
        jumpKey: 'Space',
        sprintKey: 'ShiftLeft'
    },
    cozy: {
        moveUpKey: 'ArrowUp',
        moveDownKey: 'ArrowDown',
        moveLeftKey: 'ArrowLeft',
        moveRightKey: 'ArrowRight',
        interactKey: 'Space',
        jumpKey: '',
        sprintKey: ''
    }
};

// Navigation sidebar + page tracking
const currentPage = 5; // This is page 5
const sidebar = document.getElementById('rpg-nav-sidebar');
const navToggle = document.getElementById('nav-toggle');

// On load: mode state, page tracking, and keybinding load
window.addEventListener('load', () => {
    updateContentForMode(gameMode);
    updateModeSelector(gameMode);

    // Track current page visit and update sidebar state
    trackPageVisit(currentPage);
    updateVisitedIndicators();
    updateReviewLock();

    // Load any previously saved key bindings for this user and mode,
    // or fall back to the mode's default layout.
    loadExistingKeybindings();
});

// Toggle sidebar
if (navToggle) {
    navToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });
}

// Mode selector visual state
function updateModeSelector(mode) {
    const buttons = document.querySelectorAll('.mode-btn');
    buttons.forEach(btn => {
        if (btn.dataset.mode === mode) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const subtitle = document.querySelector('.subtitle');
    const modeDesc = document.getElementById('mode-description');

    if (subtitle) {
        subtitle.textContent = mode === 'cozy'
            ? 'Cozy mode: slow, comfy controls that focus on exploration and chill vibes.'
            : 'Action mode: fast, responsive controls built for combat and quick reactions.';
    }

    if (modeDesc) {
        modeDesc.textContent = mode === 'cozy'
            ? '🌿 Cozy layout uses arrow keys, Space to interact, and no sprint or jump by default.'
            : '⚔️ Action layout uses WASD movement, E to interact, Space to jump, and Shift to sprint.';
    }
}

// Handle mode switch
function switchMode(event, mode) {
    gameMode = mode;
    localStorage.setItem('rpgGameMode', mode);
    updateContentForMode(mode);
    updateModeSelector(mode);

    // When mode changes, load that mode's bindings if they exist,
    // otherwise apply the mode-specific defaults.
    loadExistingKeybindings();
}

// In this page, the content differences are mainly defaults & descriptions,
// but we keep a hook in case you later want to show/hide mode-specific UI.
function updateContentForMode(mode) {
    // No per-element show/hide needed anymore; left here for extension.
}

/* ======== Save & Load Key Bindings via Backend ======== */

// Safely get the logged-in user session from localStorage
function getCurrentUserSession() {
    try {
        const raw = localStorage.getItem('userSession');
        if (!raw) return null;
        return JSON.parse(raw);
    } catch (e) {
        console.error('Failed to parse userSession from localStorage', e);
        return null;
    }
}

// Apply mode-specific defaults to the select fields
function applyDefaultBindingsForMode(mode) {
    const defaults = modeDefaultBindings[mode];
    if (!defaults) return;

    const mapping = {
        'bind-move-up': defaults.moveUpKey,
        'bind-move-down': defaults.moveDownKey,
        'bind-move-left': defaults.moveLeftKey,
        'bind-move-right': defaults.moveRightKey,
        'bind-interact': defaults.interactKey,
        'bind-jump': defaults.jumpKey,
        'bind-sprint': defaults.sprintKey
    };

    Object.entries(mapping).forEach(([id, value]) => {
        const el = document.getElementById(id);
        if (el) {
            // allow empty string for "(None)"
            el.value = (typeof value === 'string') ? value : '';
        }
    });
}

// Load existing key bindings for the current user + mode
async function loadExistingKeybindings() {
    const status = document.getElementById('keybind-status');
    const session = getCurrentUserSession();

    if (!status) return;

    if (!session || !session.githubId) {
        applyDefaultBindingsForMode(gameMode);
        status.textContent = "Tip: Log in to save these bindings. Using the default layout for this mode.";
        status.style.color = "#ffed4e";
        return;
    }

    try {
        const url = `${API_URL}/rpg/keybindings?userGithubId=${encodeURIComponent(session.githubId)}&gameMode=${encodeURIComponent(gameMode)}`;
        const response = await fetch(url);

        if (!response.ok) {
            // No saved binding yet: use defaults
            applyDefaultBindingsForMode(gameMode);
            status.textContent = "No saved key bindings found for this mode. Using the default layout.";
            status.style.color = "#ffed4e";
            return;
        }

        const data = await response.json();
        if (data && data.binding) {
            setKeybindingFormFromData(data.binding);
            status.textContent = "✅ Loaded your saved key bindings for this mode.";
            status.style.color = "#7CFC00";
        } else {
            applyDefaultBindingsForMode(gameMode);
            status.textContent = "No saved key bindings found for this mode. Using the default layout.";
            status.style.color = "#ffed4e";
        }
    } catch (error) {
        console.error('Error loading key bindings:', error);
        applyDefaultBindingsForMode(gameMode);
        status.textContent = "⚠️ Could not load saved bindings. Using the default layout.";
        status.style.color = "#ffed4e";
    }
}

// Apply binding data returned from backend to the select fields
function setKeybindingFormFromData(binding) {
    // Normalize legacy space values to the new "Space" string
    if (binding.jumpKey === ' ') binding.jumpKey = 'Space';
    if (binding.interactKey === ' ') binding.interactKey = 'Space';

    const mapping = {
        'bind-move-up': binding.moveUpKey,
        'bind-move-left': binding.moveLeftKey,
        'bind-move-down': binding.moveDownKey,
        'bind-move-right': binding.moveRightKey,
        'bind-interact': binding.interactKey,
        'bind-jump': binding.jumpKey,
        'bind-sprint': binding.sprintKey
    };

    Object.entries(mapping).forEach(([id, value]) => {
        const el = document.getElementById(id);
        if (el && typeof value === 'string') {
            el.value = value;
        }
    });
}

// Handle save button: send preferred bindings to backend
async function handleKeybindingSave(event) {
    event.preventDefault();

    const status = document.getElementById('keybind-status');
    if (!status) return;

    const session = getCurrentUserSession();
    if (!session || !session.githubId) {
        status.textContent = "❌ You must be logged in before saving key bindings. Go to the Login step first.";
        status.style.color = "#ff6b6b";
        return;
    }

    const payload = {
        userGithubId: session.githubId,
        gameMode: gameMode,
        moveUpKey: document.getElementById('bind-move-up').value,
        moveLeftKey: document.getElementById('bind-move-left').value,
        moveDownKey: document.getElementById('bind-move-down').value,
        moveRightKey: document.getElementById('bind-move-right').value,
        interactKey: document.getElementById('bind-interact').value,
        jumpKey: document.getElementById('bind-jump').value,
        sprintKey: document.getElementById('bind-sprint').value
    };

    try {
        status.textContent = "Saving key bindings...";
        status.style.color = "#ffed4e";

        const response = await fetch(`${API_URL}/rpg/keybindings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (response.ok) {
            status.textContent = "✅ Key bindings saved for this game mode!";
            status.style.color = "#7CFC00";
        } else {
            status.textContent = `❌ ${data.message || 'Failed to save key bindings.'}`;
            status.style.color = "#ff6b6b";
        }
    } catch (error) {
        console.error('Error saving key bindings:', error);
        status.textContent = "❌ Could not reach the server. Make sure the Flask backend is running.";
        status.style.color = "#ff6b6b";
    }
}

/* ======== Navigation Sidebar Functionality ======== */

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
</script>
