---
layout: post
title: Dashboard
description: Complete content selection and creation interface for your RPG adventure
permalink: /rpg/dashboard
comments: True
---
<style>
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

.nav-dashboard {
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
</style>

<!-- RPG Navigation Sidebar -->
<div id="rpg-nav-sidebar" class="rpg-nav-sidebar">
  <button id="nav-toggle" class="nav-toggle">☰</button>
  <div class="nav-dashboard">
    <h3 class="nav-title">🎮 RPG Creator</h3>
    <div class="nav-divider"></div>
    <nav class="nav-links">
      <a href="/rpg/login" class="nav-link" data-page="1">
        <span class="nav-number">1</span>
        <span class="nav-text">Login</span>
      </a>
      <a href="/rpg/dashboard" class="nav-link active" data-page="2">
        <span class="nav-number">2</span>
        <span class="nav-text">Dashboard</span>
        <span class="nav-check">✓</span>
      </a>
      <a href="/rpg/story" class="nav-link" data-page="3">
        <span class="nav-number">3</span>
        <span class="nav-text">Story & Narrative</span>
        <span class="nav-check">✓</span>
      </a>
      <a href="/rpg/game-creater" class="nav-link" data-page="4">
        <span class="nav-number">4</span>
        <span class="nav-text">Game creator</span>
        <span class="nav-lock">✓</span>
      </a>
      <a href="/rpg/keybindings" class="nav-link" data-page="5">
        <span class="nav-number">5</span>
        <span class="nav-text">Controls</span>
        <span class="nav-check">✓</span>
      </a>
      <a href="/rpg/systems" class="nav-link" data-page="6">
        <span class="nav-number">6</span>
        <span class="nav-text">Game Systems</span>
        <span class="nav-check">✓</span>
      </a>
      <a href="/rpg/review" class="nav-link" data-page="7">
        <span class="nav-number">7</span>
        <span class="nav-text">Review</span>
        <span class="nav-lock">✓</span>
      </a>
    </nav>
  </div>
</div>

<script>
// Navigation Sidebar Functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navSidebar = document.getElementById('rpg-nav-sidebar');
    
    if (navToggle && navSidebar) {
        navToggle.addEventListener('click', function() {
            navSidebar.classList.toggle('open');
        });
    }
    
    // Mark visited pages
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
            link.classList.add('visited');
            link.querySelector('.nav-check').style.display = 'inline';
        }
    });
});
</script>

<style>
/* Override theme width restrictions */
.page-content .wrapper {
    max-width: 100% !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 auto !important;
}

.page-content {
    width: 100% !important;
    max-width: 100% !important;
    padding: 0 !important;
    margin: 0 auto !important;
}

body {
    font-family: 'Cinzel', 'Georgia', serif;
    background: #1a1a2e;
    min-height: 100vh;
    height: auto;
    position: relative;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0;
    margin: 0;
}

/* Main container */
.main-container {
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 1800px;
    margin: 0 auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 30px;
}

/* Dashboard header */
.dashboard-header {
    background: linear-gradient(145deg, rgba(30, 30, 60, 0.95), rgba(20, 20, 40, 0.95));
    border-radius: 20px;
    padding: 40px;
    box-shadow: 
        0 8px 32px 0 rgba(0, 0, 0, 0.7),
        inset 0 0 20px rgba(255, 215, 0, 0.1),
        0 0 40px rgba(255, 215, 0, 0.2);
    border: 2px solid rgba(255, 215, 0, 0.3);
    backdrop-filter: blur(10px);
    text-align: center;
}

.header-icon {
    font-size: 4em;
    margin-bottom: 20px;
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.5));
}

.main-title {
    color: #ffd700;
    font-size: 3em;
    margin-bottom: 15px;
    text-shadow: 
        0 0 10px rgba(255, 215, 0, 0.5),
        0 0 20px rgba(255, 215, 0, 0.3),
        2px 2px 4px rgba(0, 0, 0, 0.8);
    letter-spacing: 3px;
}

.subtitle {
    color: #c0c0c0;
    font-size: 1.2em;
    font-style: italic;
    opacity: 0.9;
}

/* Progress tracker */
.progress-tracker {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
    border: 2px solid rgba(255, 215, 0, 0.3);
    border-radius: 15px;
    padding: 20px 30px;
    margin-top: 20px;
}

.progress-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.step-number {
    width: 40px;
    height: 40px;
    background: rgba(255, 215, 0, 0.1);
    border: 2px solid rgba(255, 215, 0, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffd700;
    font-weight: bold;
    font-size: 1.2em;
    transition: all 0.3s ease;
}

.step-number.active {
    background: rgba(255, 215, 0, 0.3);
    border-color: #ffd700;
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.5);
}

.step-number.completed {
    background: rgba(76, 201, 240, 0.3);
    border-color: #4cc9f0;
}

.step-label {
    color: #c0c0c0;
    font-size: 0.9em;
    text-align: center;
    max-width: 120px;
}

.step-label.active {
    color: #ffd700;
    font-weight: bold;
}

/* Content sections grid */
.content-sections {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
}

/* Section card */
.section-card {
    background: linear-gradient(145deg, rgba(30, 30, 60, 0.95), rgba(20, 20, 40, 0.95));
    border-radius: 20px;
    padding: 30px;
    box-shadow: 
        0 8px 32px 0 rgba(0, 0, 0, 0.7),
        inset 0 0 20px rgba(255, 215, 0, 0.1);
    border: 2px solid rgba(255, 215, 0, 0.3);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}

.section-card:hover {
    transform: translateY(-5px);
    box-shadow: 
        0 12px 40px 0 rgba(0, 0, 0, 0.8),
        inset 0 0 30px rgba(255, 215, 0, 0.2),
        0 0 60px rgba(255, 215, 0, 0.3);
    border-color: #ffd700;
}

.section-card.completed {
    border-color: #4cc9f0;
}

.section-card.completed::before {
    content: '✓ Completed';
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(76, 201, 240, 0.2);
    color: #4cc9f0;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.8em;
    font-weight: bold;
}

.section-card.locked {
    opacity: 0.6;
    cursor: not-allowed;
    pointer-events: none;
}

.section-card.locked::before {
    content: '🔒 Locked';
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(255, 107, 107, 0.2);
    color: #ff6b6b;
    padding: 5px 10px;
    border-radius: 15px;
    font-size: 0.8em;
    font-weight: bold;
}

.section-icon {
    font-size: 3em;
    margin-bottom: 20px;
    filter: drop-shadow(0 0 10px rgba(255, 215, 0, 0.3));
}

.section-title {
    color: #ffd700;
    font-size: 1.8em;
    margin-bottom: 15px;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
}

.section-description {
    color: #c0c0c0;
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 1em;
}

.section-features {
    list-style: none;
    padding-left: 0;
    margin-top: 20px;
}

.section-features li {
    padding: 8px 0 8px 25px;
    position: relative;
    color: #c0c0c0;
    margin-bottom: 8px;
    font-size: 0.95em;
    border-bottom: 1px solid rgba(255, 215, 0, 0.1);
}

.section-features li::before {
    content: '✨';
    position: absolute;
    left: 0;
    color: #ffd700;
}

/* Action buttons */
.section-actions {
    display: flex;
    gap: 15px;
    margin-top: 25px;
}

.action-btn {
    flex: 1;
    padding: 12px 20px;
    background: rgba(255, 215, 0, 0.1);
    border: 2px solid rgba(255, 215, 0, 0.3);
    border-radius: 10px;
    color: #ffd700;
    font-family: 'Cinzel', 'Georgia', serif;
    font-size: 1em;
    cursor: pointer;
    transition: all 0.3s ease;
    text-align: center;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
}

.action-btn:hover {
    background: rgba(255, 215, 0, 0.2);
    border-color: #ffd700;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.3);
}

.action-btn.primary {
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    color: #1a1a2e;
    font-weight: bold;
}

.action-btn.secondary {
    background: rgba(76, 201, 240, 0.1);
    border-color: rgba(76, 201, 240, 0.3);
    color: #4cc9f0;
}

.action-btn.secondary:hover {
    background: rgba(76, 201, 240, 0.2);
    border-color: #4cc9f0;
}

/* Status indicator */
.status-indicator {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 107, 107, 0.5);
}

.status-indicator.active {
    background: rgba(34, 197, 94, 0.8);
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
    100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
}

/* Completion status */
.completion-status {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.4);
    border: 2px solid rgba(255, 215, 0, 0.3);
    border-radius: 15px;
    padding: 25px;
    margin-bottom: 30px;
}

.completion-text {
    color: #c0c0c0;
    font-size: 1.1em;
}

.completion-text strong {
    color: #ffd700;
}

.progress-bar {
    flex: 1;
    max-width: 400px;
    height: 20px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    overflow: hidden;
    margin: 0 20px;
    border: 1px solid rgba(255, 215, 0, 0.2);
}

.progress-fill {
    height: 100%;
    background: linear-gradient(90deg, #ffd700, #ffed4e);
    border-radius: 10px;
    transition: width 0.5s ease;
    position: relative;
    overflow: hidden;
}

.progress-fill::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.3), 
        transparent);
    animation: shimmer 2s infinite;
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.completion-percentage {
    color: #ffd700;
    font-size: 1.3em;
    font-weight: bold;
    min-width: 60px;
    text-align: center;
}

/* Preview panel */
.preview-panel {
    background: linear-gradient(145deg, rgba(30, 30, 60, 0.95), rgba(20, 20, 40, 0.95));
    border-radius: 20px;
    padding: 30px;
    box-shadow: 
        0 8px 32px 0 rgba(0, 0, 0, 0.7),
        inset 0 0 20px rgba(255, 215, 0, 0.1);
    border: 2px solid rgba(255, 215, 0, 0.3);
    backdrop-filter: blur(10px);
    margin-top: 30px;
}

.preview-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
}

.preview-title {
    color: #ffd700;
    font-size: 1.8em;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
}

.preview-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
    min-height: 300px;
}

.preview-main {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 215, 0, 0.2);
    border-radius: 15px;
    padding: 25px;
}

.preview-sidebar {
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 215, 0, 0.2);
    border-radius: 15px;
    padding: 25px;
}

.preview-label {
    color: #4cc9f0;
    font-size: 1.1em;
    margin-bottom: 15px;
    display: block;
}

.preview-text {
    color: #c0c0c0;
    line-height: 1.6;
}

/* Quick actions */
.quick-actions {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-top: 40px;
    flex-wrap: wrap;
}

.quick-action-btn {
    padding: 12px 25px;
    background: rgba(255, 215, 0, 0.1);
    border: 2px solid rgba(255, 215, 0, 0.3);
    border-radius: 10px;
    color: #ffd700;
    font-family: 'Cinzel', 'Georgia', serif;
    font-size: 1em;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 10px;
}

.quick-action-btn:hover {
    background: rgba(255, 215, 0, 0.2);
    border-color: #ffd700;
    transform: translateY(-2px);
}

/* Responsive adjustments */
@media (max-width: 1200px) {
    .content-sections {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .content-sections {
        grid-template-columns: 1fr;
    }
    
    .main-title {
        font-size: 2.2em;
    }
    
    .subtitle {
        font-size: 1em;
    }
    
    .dashboard-header {
        padding: 30px 20px;
    }
    
    .progress-tracker {
        flex-direction: column;
        gap: 20px;
    }
    
    .completion-status {
        flex-direction: column;
        gap: 20px;
        text-align: center;
    }
    
    .progress-bar {
        width: 100%;
        max-width: none;
        margin: 10px 0;
    }
    
    .preview-content {
        grid-template-columns: 1fr;
    }
    
    .section-actions {
        flex-direction: column;
    }
}
</style>

<div class="main-container">
    <!-- Dashboard Header -->
    <div class="dashboard-header">
        <div class="header-icon">⚔️</div>
        <h1 class="main-title">RPG Creator Dashboard</h1>
        <p class="subtitle">
            Complete your RPG creation journey. Each section builds upon the previous one to create your perfect adventure.
        </p>
        
        <!-- Progress Tracker -->
        <div class="progress-tracker">
            <div class="progress-step">
                <div class="step-number completed">1</div>
                <div class="step-label">Login</div>
            </div>
            <div class="progress-step">
                <div class="step-number active">2</div>
                <div class="step-label active">Content</div>
            </div>
            <div class="progress-step">
                <div class="step-number">3</div>
                <div class="step-label">Story & Narrative</div>
            </div>
            <div class="progress-step">
                <div class="step-number">4</div>
                <div class="step-label">Game Creator</div>
            </div>
            <div class="progress-step">
                <div class="step-number">5</div>
                <div class="step-label">Controls</div>
            </div>
            <div class="progress-step">
                <div class="step-number">6</div>
                <div class="step-label">Game Systems</div>
            </div>
            <div class="progress-step">
                <div class="step-number">7</div>
                <div class="step-label">Review</div>
            </div>
        </div>
    </div>

    <!-- Completion Status -->
    <div class="completion-status">
        <div class="completion-text">
            <strong>Creation Progress:</strong> Complete all sections to finalize your RPG
        </div>
        <div class="progress-bar">
            <div class="progress-fill" id="progress-fill" style="width: 30%"></div>
        </div>
        <div class="completion-percentage" id="completion-percentage">30%</div>
    </div>

    <!-- Content Sections Grid -->
    <div class="content-sections">
        <!-- Story & Narrative Section -->
        <div class="section-card" id="story-section">
            <div class="section-icon">📖</div>
            <h2 class="section-title">Story & Narrative</h2>
            <p class="section-description">
                Craft the epic tale that drives your RPG. Create compelling characters, intricate plots, and immersive world lore.
            </p>
            <ul class="section-features">
                <li>Character backstories and development</li>
                <li>Main quest and side storylines</li>
                <li>Dialogue system and branching narratives</li>
                <li>World lore and mythology</li>
                <li>Plot twists and emotional arcs</li>
            </ul>
            <div class="status-indicator active"></div>
            <div class="section-actions">
                <a href="/rpg/story" class="action-btn primary">
                    <span>Continue Editing</span>
                    <span>→</span>
                </a>
                <button class="action-btn secondary" onclick="previewSection('story')">
                    <span>Preview</span>
                    <span>👁️</span>
                </button>
            </div>
        </div>

        <!-- Game Creator Section -->
        <div class="section-card" id="game-creator-section">
            <div class="section-icon">🎮</div>
            <h2 class="section-title">Game Creator</h2>
            <p class="section-description">
                Build the core gameplay mechanics, level design, and interactive elements that make your RPG come alive.
            </p>
            <ul class="section-features">
                <li>Character creation and progression</li>
                <li>Combat system design</li>
                <li>Level and world map creation</li>
                <li>Item and equipment system</li>
                <li>Quest and mission design</li>
            </ul>
            <div class="status-indicator"></div>
            <div class="section-actions">
                <button class="action-btn primary" onclick="startGameCreator()">
                    <span>Start Creating</span>
                    <span>⚡</span>
                </button>
                <button class="action-btn secondary" onclick="showTutorial('game-creator')">
                    <span>Tutorial</span>
                    <span>📚</span>
                </button>
            </div>
        </div>

        <!-- Controls Section -->
        <div class="section-card completed" id="controls-section">
            <div class="section-icon">🎯</div>
            <h2 class="section-title">Controls</h2>
            <p class="section-description">
                Design the control scheme and user interface that provides smooth and intuitive gameplay experience.
            </p>
            <ul class="section-features">
                <li>Keyboard and controller mapping</li>
                <li>UI/UX design and layout</li>
                <li>Accessibility options</li>
                <li>Camera controls and perspectives</li>
                <li>Quick action menus and shortcuts</li>
            </ul>
            <div class="section-actions">
                <a href="/rpg/keybindings" class="action-btn primary">
                    <span>Customize Controls</span>
                    <span>⚙️</span>
                </a>
                <button class="action-btn secondary" onclick="testControls()">
                    <span>Test Layout</span>
                    <span>🎮</span>
                </button>
            </div>
        </div>

        <!-- Game Systems Section -->
        <div class="section-card completed" id="systems-section">
            <div class="section-icon">⚙️</div>
            <h2 class="section-title">Game Systems</h2>
            <p class="section-description">
                Implement and balance the complex systems that govern gameplay, including economy, AI, and progression.
            </p>
            <ul class="section-features">
                <li>Economy and trading systems</li>
                <li>AI behavior and NPC routines</li>
                <li>Skill trees and abilities</li>
                <li>Weather and time systems</li>
                <li>Multiplayer integration</li>
            </ul>
            <div class="section-actions">
                <a href="/rpg/systems" class="action-btn primary">
                    <span>Configure Systems</span>
                    <span>🔧</span>
                </a>
                <button class="action-btn secondary" onclick="runSystemTest()">
                    <span>System Test</span>
                    <span>🧪</span>
                </button>
            </div>
        </div>

        <!-- Review Section -->
        <div class="section-card locked" id="review-section">
            <div class="section-icon">📋</div>
            <h2 class="section-title">Review & Publish</h2>
            <p class="section-description">
                Final review, testing, and publishing of your completed RPG. Get feedback and prepare for launch.
            </p>
            <ul class="section-features">
                <li>Comprehensive testing suite</li>
                <li>Bug reporting and fixes</li>
                <li>Performance optimization</li>
                <li>Launch checklist</li>
                <li>Marketing and distribution</li>
            </ul>
            <div class="section-actions">
                <button class="action-btn" disabled>
                    <span>Complete Previous Sections</span>
                </button>
            </div>
        </div>

        <!-- Additional Tools Section -->
        <div class="section-card" id="tools-section">
            <div class="section-icon">🧰</div>
            <h2 class="section-title">Additional Tools</h2>
            <p class="section-description">
                Extra utilities and resources to enhance your RPG creation process.
            </p>
            <ul class="section-features">
                <li>Asset importer and manager</li>
                <li>Sound and music library</li>
                <li>Visual effects generator</li>
                <li>Export and sharing tools</li>
                <li>Community templates</li>
            </ul>
            <div class="section-actions">
                <button class="action-btn primary" onclick="openTools()">
                    <span>Open Tools</span>
                    <span>🔧</span>
                </button>
                <button class="action-btn secondary" onclick="browseAssets()">
                    <span>Browse Assets</span>
                    <span>🎨</span>
                </button>
            </div>
        </div>
    </div>

    <!-- Preview Panel -->
    <div class="preview-panel" id="preview-panel" style="display: none;">
        <div class="preview-header">
            <h3 class="preview-title" id="preview-title">Section Preview</h3>
            <button class="action-btn secondary" onclick="closePreview()">
                <span>Close</span>
                <span>✕</span>
            </button>
        </div>
        <div class="preview-content">
            <div class="preview-main">
                <span class="preview-label">Current Content:</span>
                <p class="preview-text" id="preview-content">
                    Select a section to see its preview here. You'll be able to view your progress and make quick edits.
                </p>
            </div>
            <div class="preview-sidebar">
                <span class="preview-label">Quick Stats:</span>
                <p class="preview-text" id="preview-stats">
                    No section selected
                </p>
            </div>
        </div>
    </div>

    <!-- Quick Actions -->
    <div class="quick-actions">
        <button class="quick-action-btn" onclick="saveAllProgress()">
            <span>💾</span>
            <span>Save All Progress</span>
        </button>
        <button class="quick-action-btn" onclick="exportProject()">
            <span>📤</span>
            <span>Export Project</span>
        </button>
        <button class="quick-action-btn" onclick="showHelp()">
            <span>❓</span>
            <span>Get Help</span>
        </button>
        <button class="quick-action-btn" onclick="resetProgress()">
            <span>🔄</span>
            <span>Reset Progress</span>
        </button>
    </div>
</div>

<script>
// RPG Creator Dashboard Functionality
class RPGDashboard {
    constructor() {
        this.sections = {
            'story': { completed: true, progress: 85 },
            'game-creator': { completed: false, progress: 30 },
            'controls': { completed: true, progress: 100 },
            'systems': { completed: true, progress: 100 },
            'review': { completed: false, progress: 0 },
            'tools': { completed: false, progress: 40 }
        };
        
        this.currentPreview = null;
        this.initializeDashboard();
    }
    
    initializeDashboard() {
        this.updateProgressBar();
        this.loadSavedProgress();
        this.setupEventListeners();
        this.updateStatusIndicators();
    }
    
    updateProgressBar() {
        const totalSections = Object.keys(this.sections).length;
        const completedSections = Object.values(this.sections).filter(s => s.completed).length;
        const progressPercentage = Math.round((completedSections / totalSections) * 100);
        
        document.getElementById('progress-fill').style.width = `${progressPercentage}%`;
        document.getElementById('completion-percentage').textContent = `${progressPercentage}%`;
    }
    
    updateStatusIndicators() {
        Object.keys(this.sections).forEach(sectionId => {
            const section = this.sections[sectionId];
            const indicator = document.querySelector(`#${sectionId}-section .status-indicator`);
            if (indicator) {
                if (section.completed) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            }
            
            // Update card completion status
            const card = document.getElementById(`${sectionId}-section`);
            if (card) {
                if (section.completed) {
                    card.classList.add('completed');
                    card.classList.remove('locked');
                } else if (section.progress === 0) {
                    card.classList.add('locked');
                } else {
                    card.classList.remove('completed', 'locked');
                }
            }
        });
    }
    
    loadSavedProgress() {
        try {
            const saved = localStorage.getItem('rpgDashboardProgress');
            if (saved) {
                const parsed = JSON.parse(saved);
                Object.assign(this.sections, parsed);
                this.updateProgressBar();
                this.updateStatusIndicators();
            }
        } catch (e) {
            console.log('No saved progress found, starting fresh.');
        }
    }
    
    saveProgress() {
        try {
            localStorage.setItem('rpgDashboardProgress', JSON.stringify(this.sections));
            this.showNotification('Progress saved successfully!', 'success');
        } catch (e) {
            this.showNotification('Failed to save progress.', 'error');
        }
    }
    
    setupEventListeners() {
        // Save progress on page unload
        window.addEventListener('beforeunload', () => this.saveProgress());
        
        // Auto-save every 2 minutes
        setInterval(() => this.saveProgress(), 120000);
    }
    
    previewSection(sectionId) {
        const sectionData = this.sections[sectionId];
        const panel = document.getElementById('preview-panel');
        const title = document.getElementById('preview-title');
        const content = document.getElementById('preview-content');
        const stats = document.getElementById('preview-stats');
        
        this.currentPreview = sectionId;
        panel.style.display = 'block';
        
        // Scroll to preview panel
        panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Update content based on section
        switch(sectionId) {
            case 'story':
                title.textContent = 'Story & Narrative Preview';
                content.innerHTML = `
                    <strong>Current Status:</strong> ${sectionData.progress}% complete<br><br>
                    <strong>Main Quest:</strong> "The Eternal Crown" - Draft complete<br>
                    <strong>Characters Created:</strong> 12/20 planned<br>
                    <strong>Dialogue Lines:</strong> 450 written<br>
                    <strong>World Locations:</strong> 8 designed<br><br>
                    <em>Next step: Complete character backstories for the main party.</em>
                `;
                break;
                
            case 'game-creator':
                title.textContent = 'Game Creator Preview';
                content.innerHTML = `
                    <strong>Current Status:</strong> ${sectionData.progress}% complete<br><br>
                    <strong>Combat System:</strong> Turn-based (80% complete)<br>
                    <strong>Character Classes:</strong> 4/6 implemented<br>
                    <strong>Levels Designed:</strong> 3/10 complete<br>
                    <strong>Items Created:</strong> 45 total<br><br>
                    <em>Next step: Implement magic system and spell effects.</em>
                `;
                break;
                
            case 'controls':
                title.textContent = 'Controls Preview';
                content.innerHTML = `
                    <strong>Current Status:</strong> ${sectionData.progress}% complete<br><br>
                    <strong>Control Schemes:</strong> Keyboard/Mouse & Controller<br>
                    <strong>Key Bindings:</strong> Fully customizable<br>
                    <strong>UI Layout:</strong> Responsive design<br>
                    <strong>Accessibility:</strong: Colorblind mode, subtitle options<br><br>
                    <em>All control systems are fully implemented and tested.</em>
                `;
                break;
                
            case 'systems':
                title.textContent = 'Game Systems Preview';
                content.innerHTML = `
                    <strong>Current Status:</strong> ${sectionData.progress}% complete<br><br>
                    <strong>Economy:</strong> Dynamic pricing system<br>
                    <strong>AI:</strong> Advanced NPC routines<br>
                    <strong>Progression:</strong: 5-level skill trees<br>
                    <strong>Time System:</strong: Day/night cycle with events<br><br>
                    <em>All core systems are implemented and balanced.</em>
                `;
                break;
                
            default:
                title.textContent = 'Section Preview';
                content.textContent = 'Select a section to see detailed preview.';
        }
        
        stats.innerHTML = `
            <strong>Progress:</strong> ${sectionData.progress}%<br>
            <strong>Status:</strong> ${sectionData.completed ? 'Completed' : 'In Progress'}<br>
            <strong>Last Updated:</strong> Today<br>
            <strong>Estimated Time:</strong> ${this.getEstimatedTime(sectionId)}
        `;
    }
    
    getEstimatedTime(sectionId) {
        const times = {
            'story': '4-6 hours',
            'game-creator': '8-12 hours',
            'controls': '2-3 hours',
            'systems': '6-8 hours',
            'review': '3-4 hours',
            'tools': '1-2 hours'
        };
        return times[sectionId] || 'Unknown';
    }
    
    closePreview() {
        document.getElementById('preview-panel').style.display = 'none';
        this.currentPreview = null;
    }
    
    startGameCreator() {
        if (confirm('Start the Game Creator? This will open the creation interface.')) {
            window.location.href = '/rpg/game-creator';
        }
    }
    
    showTutorial(section) {
        const tutorials = {
            'game-creator': 'https://docs.example.com/rpg/game-creator-tutorial',
            'story': 'https://docs.example.com/rpg/story-tutorial',
            'controls': 'https://docs.example.com/rpg/controls-tutorial'
        };
        
        if (tutorials[section]) {
            window.open(tutorials[section], '_blank');
        } else {
            this.showNotification('Tutorial not available for this section.', 'info');
        }
    }
    
    testControls() {
        this.showNotification('Opening control testing interface...', 'info');
        // In a real implementation, this would open a control testing modal
        setTimeout(() => {
            alert('Control test interface would open here. You can test keyboard, mouse, and controller inputs.');
        }, 500);
    }
    
    runSystemTest() {
        this.showNotification('Running system tests...', 'info');
        // Simulate system test
        setTimeout(() => {
            const results = {
                'Economy System': '✓ PASS',
                'AI Behavior': '✓ PASS',
                'Progression': '✓ PASS',
                'Time System': '✓ PASS',
                'Multiplayer': '⚠ PARTIAL'
            };
            
            let resultText = 'System Test Results:\n\n';
            for (const [system, status] of Object.entries(results)) {
                resultText += `${system}: ${status}\n`;
            }
            
            alert(resultText);
        }, 1000);
    }
    
    openTools() {
        this.showNotification('Opening additional tools...', 'info');
        // In a real implementation, this would open a tools panel
    }
    
    browseAssets() {
        this.showNotification('Opening asset library...', 'info');
        // In a real implementation, this would open an asset browser
    }
    
   