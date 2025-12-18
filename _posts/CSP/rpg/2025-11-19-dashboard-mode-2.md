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
/* Reset and Base Styles */
.page-content .wrapper,
.page-content {
    max-width: 100% !important;
    width: 100% !important;
    padding: 0 !important;
    margin: 0 auto !important;
}

body {
    font-family: 'Cinzel', 'Georgia', serif;
    background: #1a1a2e;
    min-height: 100vh;
    margin: 0;
    padding: 20px;
}

/* Main Container */
.main-container {
    max-width: 1400px;
    margin: 0 auto;
}

/* Header - Minimal */
.dashboard-header {
    text-align: center;
    margin-bottom: 40px;
    padding: 20px;
}

.header-icon {
    font-size: 5em;
    margin-bottom: 15px;
    filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.5));
    animation: float 6s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

/* Visual Grid */
.visual-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin-bottom: 40px;
}

/* Visual Card - 90% visual, 10% text */
.visual-card {
    height: 350px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    background: linear-gradient(135deg, rgba(30, 30, 60, 0.9), rgba(20, 20, 40, 0.9));
    border: 2px solid rgba(255, 215, 0, 0.2);
    box-shadow: 
        0 10px 30px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.visual-card:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: rgba(255, 215, 0, 0.5);
    box-shadow: 
        0 20px 50px rgba(0, 0, 0, 0.6),
        0 0 50px rgba(255, 215, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

/* Visual Content Area - 90% */
.card-visual {
    height: 315px; /* 90% of 350px */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

/* Main Icon */
.main-icon {
    font-size: 8em;
    filter: drop-shadow(0 0 20px currentColor);
    opacity: 0.9;
    z-index: 2;
    position: relative;
}

/* Particle Effects */
.particle-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
}

.particle {
    position: absolute;
    border-radius: 50%;
    opacity: 0.6;
    filter: blur(1px);
}

/* Color Themes for Sections */
.visual-card[data-section="story"] .main-icon { color: #9B59B6; }
.visual-card[data-section="game-creator"] .main-icon { color: #3498DB; }
.visual-card[data-section="controls"] .main-icon { color: #2ECC71; }
.visual-card[data-section="systems"] .main-icon { color: #E67E22; }
.visual-card[data-section="review"] .main-icon { color: #E74C3C; }
.visual-card[data-section="tools"] .main-icon { color: #95A5A6; }

/* Title Area - 10% */
.card-title {
    height: 35px; /* 10% of 350px */
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(5px);
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgba(255, 215, 0, 0.2);
}

.section-name {
    color: #ffd700;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: 1px;
    text-transform: uppercase;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
}

/* Status Indicator */
.status-indicator {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 2px solid rgba(255, 255, 255, 0.3);
    z-index: 3;
}

.status-active {
    background: #22c55e;
    box-shadow: 0 0 15px rgba(34, 197, 94, 0.5);
    animation: pulse 2s infinite;
}

.status-completed {
    background: #4cc9f0;
    box-shadow: 0 0 15px rgba(76, 201, 240, 0.5);
}

.status-locked {
    background: #ff6b6b;
    box-shadow: 0 0 15px rgba(255, 107, 107, 0.5);
}

@keyframes pulse {
    0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7); }
    70% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
    100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
}

/* Completion Badge */
.completion-badge {
    position: absolute;
    bottom: 15px;
    left: 15px;
    background: rgba(255, 215, 0, 0.1);
    border: 1px solid rgba(255, 215, 0, 0.3);
    border-radius: 15px;
    padding: 4px 10px;
    color: #ffd700;
    font-size: 0.8em;
    z-index: 3;
    backdrop-filter: blur(5px);
}

/* Progress Overview - Visual Only */
.progress-overview {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
    flex-wrap: wrap;
}

.progress-circle {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 215, 0, 0.1);
    border: 2px solid rgba(255, 215, 0, 0.3);
    font-size: 1.5em;
    color: #ffd700;
    font-weight: bold;
}

/* Actions Bar - Icon Only */
.actions-bar {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
}

.action-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 215, 0, 0.1);
    border: 2px solid rgba(255, 215, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    color: #ffd700;
    cursor: pointer;
    transition: all 0.3s ease;
}

.action-icon:hover {
    background: rgba(255, 215, 0, 0.2);
    border-color: #ffd700;
    transform: scale(1.1) rotate(10deg);
    box-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
}

/* Tooltip on Hover */
.visual-card::after {
    content: attr(data-tooltip);
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(20, 20, 40, 0.9);
    color: #ffd700;
    padding: 8px 12px;
    border-radius: 8px;
    font-size: 0.9em;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    white-space: nowrap;
    border: 1px solid rgba(255, 215, 0, 0.3);
    z-index: 4;
}

.visual-card:hover::after {
    opacity: 1;
}

/* Responsive */
@media (max-width: 1200px) {
    .visual-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .visual-grid {
        grid-template-columns: 1fr;
    }
    
    .visual-card {
        height: 300px;
    }
    
    .card-visual {
        height: 270px; /* 90% of 300px */
    }
    
    .card-title {
        height: 30px; /* 10% of 300px */
    }
    
    .main-icon {
        font-size: 6em;
    }
}

@media (max-width: 480px) {
    .visual-card {
        height: 250px;
    }
    
    .card-visual {
        height: 225px; /* 90% of 250px */
    }
    
    .card-title {
        height: 25px; /* 10% of 250px */
    }
    
    .main-icon {
        font-size: 4em;
    }
    
    .progress-circle {
        width: 50px;
        height: 50px;
        font-size: 1.2em;
    }
    
    .action-icon {
        width: 40px;
        height: 40px;
        font-size: 1.2em;
    }
}
</style>

<div class="main-container">
    <!-- Minimal Header -->
    <div class="dashboard-header">
        <div class="header-icon">⚔️</div>
    </div>

    <!-- Progress Overview -->
    <div class="progress-overview">
        <div class="progress-circle" data-tooltip="Active Sections">2</div>
        <div class="progress-circle" data-tooltip="Completed">3</div>
        <div class="progress-circle" data-tooltip="Locked">1</div>
        <div class="progress-circle" data-tooltip="Overall Progress">43%</div>
    </div>

    <!-- Visual Grid -->
    <div class="visual-grid">
        <!-- Story -->
        <div class="visual-card" 
             data-section="story" 
             data-tooltip="Craft your epic tale"
             onclick="navigateTo('story')">
            <div class="card-visual">
                <div class="particle-layer" id="particles-story"></div>
                <div class="main-icon">📖</div>
                <div class="completion-badge">85%</div>
                <div class="status-indicator status-active"></div>
            </div>
            <div class="card-title">
                <span class="section-name">Story</span>
            </div>
        </div>

        <!-- Game Creator -->
        <div class="visual-card" 
             data-section="game-creator" 
             data-tooltip="Build gameplay mechanics"
             onclick="navigateTo('game-creator')">
            <div class="card-visual">
                <div class="particle-layer" id="particles-game"></div>
                <div class="main-icon">🎮</div>
                <div class="completion-badge">30%</div>
                <div class="status-indicator status-active"></div>
            </div>
            <div class="card-title">
                <span class="section-name">Game</span>
            </div>
        </div>

        <!-- Controls -->
        <div class="visual-card" 
             data-section="controls" 
             data-tooltip="Design controls & UI"
             onclick="navigateTo('controls')">
            <div class="card-visual">
                <div class="particle-layer" id="particles-controls"></div>
                <div class="main-icon">🎯</div>
                <div class="completion-badge">100%</div>
                <div class="status-indicator status-completed"></div>
            </div>
            <div class="card-title">
                <span class="section-name">Controls</span>
            </div>
        </div>

        <!-- Systems -->
        <div class="visual-card" 
             data-section="systems" 
             data-tooltip="Implement game systems"
             onclick="navigateTo('systems')">
            <div class="card-visual">
                <div class="particle-layer" id="particles-systems"></div>
                <div class="main-icon">⚙️</div>
                <div class="completion-badge">100%</div>
                <div class="status-indicator status-completed"></div>
            </div>
            <div class="card-title">
                <span class="section-name">Systems</span>
            </div>
        </div>

        <!-- Review -->
        <div class="visual-card locked" 
             data-section="review" 
             data-tooltip="Complete previous sections"
             onclick="showLockedMessage('review')">
            <div class="card-visual">
                <div class="particle-layer" id="particles-review"></div>
                <div class="main-icon">📋</div>
                <div class="completion-badge">0%</div>
                <div class="status-indicator status-locked"></div>
            </div>
            <div class="card-title">
                <span class="section-name">Review</span>
            </div>
        </div>

        <!-- Tools -->
        <div class="visual-card" 
             data-section="tools" 
             data-tooltip="Additional utilities"
             onclick="navigateTo('tools')">
            <div class="card-visual">
                <div class="particle-layer" id="particles-tools"></div>
                <div class="main-icon">🧰</div>
                <div class="completion-badge">40%</div>
                <div class="status-indicator status-active"></div>
            </div>
            <div class="card-title">
                <span class="section-name">Tools</span>
            </div>
        </div>
    </div>

    <!-- Actions Bar -->
    <div class="actions-bar">
        <div class="action-icon" onclick="saveAll()" data-tooltip="Save">💾</div>
        <div class="action-icon" onclick="exportProject()" data-tooltip="Export">📤</div>
        <div class="action-icon" onclick="showHelp()" data-tooltip="Help">❓</div>
        <div class="action-icon" onclick="resetProgress()" data-tooltip="Reset">🔄</div>
    </div>
</div>

<script>
// Visual Dashboard Manager
class VisualDashboard {
    constructor() {
        this.sections = {
            'story': { 
                status: 'active', 
                progress: 85, 
                path: '/rpg/story',
                particles: 15 
            },
            'game-creator': { 
                status: 'active', 
                progress: 30, 
                path: '/rpg/game-creator',
                particles: 12 
            },
            'controls': { 
                status: 'completed', 
                progress: 100, 
                path: '/rpg/controls',
                particles: 8 
            },
            'systems': { 
                status: 'completed', 
                progress: 100, 
                path: '/rpg/systems',
                particles: 10 
            },
            'review': { 
                status: 'locked', 
                progress: 0, 
                path: '/rpg/review',
                particles: 5 
            },
            'tools': { 
                status: 'active', 
                progress: 40, 
                path: '/rpg/tools',
                particles: 18 
            }
        };
        
        this.initDashboard();
    }
    
    initDashboard() {
        this.createParticles();
        this.updateProgressOverview();
        this.setupCardEffects();
        this.setupTooltips();
    }
    
    createParticles() {
        Object.keys(this.sections).forEach(section => {
            const container = document.getElementById(`particles-${section}`);
            if (!container) return;
            
            const count = this.sections[section].particles;
            
            for (let i = 0; i < count; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random properties
                const size = Math.random() * 20 + 5;
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                const duration = Math.random() * 10 + 10;
                const delay = Math.random() * 5;
                
                // Apply styles
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${x}%`;
                particle.style.top = `${y}%`;
                particle.style.background = `radial-gradient(circle, 
                    rgba(255,215,0,0.3) 0%, 
                    rgba(255,215,0,0.1) 50%, 
                    transparent 100%)`;
                particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
                
                container.appendChild(particle);
            }
        });
    }
    
    updateProgressOverview() {
        const total = Object.keys(this.sections).length;
        const active = Object.values(this.sections).filter(s => s.status === 'active').length;
        const completed = Object.values(this.sections).filter(s => s.status === 'completed').length;
        const locked = Object.values(this.sections).filter(s => s.status === 'locked').length;
        const overall = Math.round((completed / total) * 100);
        
        // Update progress circles
        const circles = document.querySelectorAll('.progress-circle');
        circles[0].textContent = active;
        circles[1].textContent = completed;
        circles[2].textContent = locked;
        circles[3].textContent = `${overall}%`;
    }
    
    setupCardEffects() {
        const cards = document.querySelectorAll('.visual-card');
        
        cards.forEach(card => {
            // Click effect
            card.addEventListener('click', (e) => {
                if (card.classList.contains('locked')) {
                    this.showLockedEffect(card);
                    return;
                }
                
                this.animateClick(card);
                
                // Navigate after animation
                setTimeout(() => {
                    const section = card.dataset.section;
                    this.navigateTo(section);
                }, 300);
            });
            
            // Hover sound effect simulation
            card.addEventListener('mouseenter', () => {
                this.animateHover(card);
            });
        });
    }
    
    setupTooltips() {
        // Add tooltip positioning
        const tooltips = document.querySelectorAll('[data-tooltip]');
        
        tooltips.forEach(element => {
            element.addEventListener('mouseenter', (e) => {
                const tooltip = e.target.getAttribute('data-tooltip');
                if (!tooltip) return;
                
                // Create tooltip element
                const tooltipEl = document.createElement('div');
                tooltipEl.className = 'tooltip';
                tooltipEl.textContent = tooltip;
                tooltipEl.style.cssText = `
                    position: fixed;
                    background: rgba(20, 20, 40, 0.95);
                    color: #ffd700;
                    padding: 8px 12px;
                    border-radius: 6px;
                    border: 1px solid rgba(255, 215, 0, 0.3);
                    font-size: 0.9em;
                    pointer-events: none;
                    z-index: 10000;
                    white-space: nowrap;
                    transform: translate(-50%, -100%);
                    margin-top: -10px;
                `;
                
                document.body.appendChild(tooltipEl);
                
                // Position tooltip
                const rect = e.target.getBoundingClientRect();
                tooltipEl.style.left = `${rect.left + rect.width / 2}px`;
                tooltipEl.style.top = `${rect.top}px`;
                
                // Store reference
                e.target._tooltip = tooltipEl;
            });
            
            element.addEventListener('mouseleave', (e) => {
                if (e.target._tooltip) {
                    e.target._tooltip.remove();
                    delete e.target._tooltip;
                }
            });
        });
    }
    
    animateClick(card) {
        card.style.transform = 'scale(0.95)';
        card.style.filter = 'brightness(0.8)';
        
        setTimeout(() => {
            card.style.transform = '';
            card.style.filter = '';
        }, 300);
    }
    
    animateHover(card) {
        const icon = card.querySelector('.main-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
            
            setTimeout(() => {
                icon.style.transform = '';
            }, 200);
        }
    }
    
    showLockedEffect(card) {
        card.style.animation = 'shake 0.5s ease';
        
        // Create lock icon effect
        const lockEffect = document.createElement('div');
        lockEffect.innerHTML = '🔒';
        lockEffect.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 3em;
            z-index: 10;
            animation: fadeOut 1s ease forwards;
        `;
        
        card.appendChild(lockEffect);
        
        setTimeout(() => {
            card.style.animation = '';
            lockEffect.remove();
        }, 1000);
        
        // Add shake animation
        if (!document.getElementById('shake-animation')) {
            const style = document.createElement('style');
            style.id = 'shake-animation';
            style.textContent = `
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                    20%, 40%, 60%, 80% { transform: translateX(5px); }
                }
                @keyframes fadeOut {
                    0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                    100% { opacity: 0; transform: translate(-50%, -50%) scale(1.5); }
                }
            `;
            document.head.appendChild(style);
        }
    }
    
    navigateTo(section) {
        const sectionData = this.sections[section];
        if (sectionData && sectionData.status !== 'locked') {
            this.showLoading();
            setTimeout(() => {
                window.location.href = sectionData.path;
            }, 500);
        }
    }
    
    showLoading() {
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(20, 20, 40, 0.95);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        `;
        
        overlay.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 4em; animation: spin 1s linear infinite;">⚔️</div>
                <div style="color: #ffd700; margin-top: 20px; font-size: 1.2em;">LOADING</div>
            </div>
        `;
        
        document.body.appendChild(overlay);
        
        // Add spin animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
    }
    
    // Public methods
    saveAll() {
        alert('💾 Progress saved');
    }
    
    exportProject() {
        alert('📤 Export started');
    }
    
    resetProgress() {
        if (confirm('Reset all progress?')) {
            location.reload();
        }
    }
    
    showHelp() {
        alert('❓ Hover over icons for info\nClick to select\nColors show status\nSave frequently');
    }
}

// Initialize dashboard
document.addEventListener('DOMContentLoaded', () => {
    window.dashboard = new VisualDashboard();
});

// Global functions
function navigateTo(section) {
    if (window.dashboard) {
        window.dashboard.navigateTo(section);
    }
}

function showLockedMessage(section) {
    if (window.dashboard) {
        window.dashboard.showLockedEffect(event.currentTarget);
    }
}

function saveAll() {
    if (window.dashboard) {
        window.dashboard.saveAll();
    }
}

function exportProject() {
    if (window.dashboard) {
        window.dashboard.exportProject();
    }
}

function showHelp() {
    if (window.dashboard) {
        window.dashboard.showHelp();
    }
}

function resetProgress() {
    if (window.dashboard) {
        window.dashboard.resetProgress();
    }
}
</script>