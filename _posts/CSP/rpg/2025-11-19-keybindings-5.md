---
layout: post
title: Key Bindings & Player Controls
description: Choose and save your RPG key bindings.
permalink: /rpg/keybindings
comments: True
---


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

/* Main container - keep original layout structure */
.main-container {
    position: relative;
    z-index: 10;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
}

/* Header section - dark fantasy style */
.header-section {
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
    margin-bottom: 40px;
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

/* Main content area - keep left-right layout */
.main-content {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 30px;
    margin-bottom: 40px;
}

@media (max-width: 1024px) {
    .main-content {
        grid-template-columns: 1fr;
    }
}

/* Left column: game mode cards */
.left-column {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

/* Game mode cards grid */
.game-modes-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
}

@media (max-width: 768px) {
    .game-modes-grid {
        grid-template-columns: 1fr;
    }
}

/* Game mode card styles - dark fantasy style */
.game-mode-card {
    background: linear-gradient(145deg, rgba(30, 30, 60, 0.95), rgba(20, 20, 40, 0.95));
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 
        0 8px 32px 0 rgba(0, 0, 0, 0.7),
        inset 0 0 20px rgba(255, 215, 0, 0.1);
    border: 2px solid rgba(255, 215, 0, 0.3);
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    cursor: pointer;
    position: relative;
}

.game-mode-card:hover {
    transform: translateY(-5px);
    box-shadow: 
        0 12px 40px 0 rgba(0, 0, 0, 0.8),
        inset 0 0 30px rgba(255, 215, 0, 0.2),
        0 0 60px rgba(255, 215, 0, 0.3);
}

.game-mode-card.selected {
    border-color: #ffd700;
    box-shadow: 
        0 0 30px rgba(255, 215, 0, 0.4),
        inset 0 0 30px rgba(255, 215, 0, 0.2);
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% { box-shadow: 0 0 30px rgba(255, 215, 0, 0.4); }
    50% { box-shadow: 0 0 40px rgba(255, 215, 0, 0.6); }
    100% { box-shadow: 0 0 30px rgba(255, 215, 0, 0.4); }
}

/* Game mode image area */
.game-mode-image-container {
    height: 200px;
    overflow: hidden;
    position: relative;
}

.game-mode-image {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.game-mode-card[data-mode="chill"] .game-mode-image {
    background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(59, 130, 246, 0.2));
}

.game-mode-card[data-mode="action"] .game-mode-image {
    background: linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(249, 115, 22, 0.2));
}

.mode-emoji {
    font-size: 5em;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
    margin-bottom: 10px;
}

.mode-type-label {
    color: #fff;
    font-size: 1.1em;
    font-weight: bold;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    background: rgba(0, 0, 0, 0.4);
    padding: 5px 15px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Game mode content */
.game-mode-content {
    padding: 25px;
}

.game-mode-title {
    color: #ffd700;
    font-size: 1.6em;
    margin-bottom: 12px;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
}

.game-mode-description {
    color: #e0e0e0;
    line-height: 1.6;
    margin-bottom: 20px;
    font-size: 1em;
}

.game-mode-features {
    list-style: none;
    padding-left: 0;
    margin-top: 15px;
}

.game-mode-features li {
    padding: 6px 0 6px 25px;
    position: relative;
    color: #c0c0c0;
    margin-bottom: 6px;
    font-size: 0.95em;
}

.game-mode-features li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #ffd700;
    font-weight: bold;
}

/* Top right selection circle */
.game-mode-selection-indicator {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 28px;
    height: 28px;
    border: 2px solid rgba(255, 215, 0, 0.5);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all 0.3s ease;
    background: rgba(0, 0, 0, 0.3);
}

.game-mode-card.selected .game-mode-selection-indicator {
    opacity: 1;
    background: rgba(255, 215, 0, 0.2);
    border-color: #ffd700;
}

.selection-dot {
    width: 14px;
    height: 14px;
    background: #ffd700;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.8);
}

/* Right column: statistics area */
.right-column {
    display: flex;
    flex-direction: column;
}

/* Statistics card - dark fantasy style */
.stats-card {
    background: linear-gradient(145deg, rgba(30, 30, 60, 0.95), rgba(20, 20, 40, 0.95));
    border-radius: 20px;
    padding: 30px;
    box-shadow: 
        0 8px 32px 0 rgba(0, 0, 0, 0.7),
        inset 0 0 20px rgba(255, 215, 0, 0.1);
    border: 2px solid rgba(255, 215, 0, 0.3);
    backdrop-filter: blur(10px);
    height: 100%;
}

.stats-title {
    color: #ffd700;
    font-size: 1.8em;
    margin-bottom: 10px;
    text-align: center;
    text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
}

.stats-subtitle {
    color: #c0c0c0;
    text-align: center;
    margin-bottom: 25px;
    font-size: 0.95em;
}

/* Statistics cards */
.stats-cards-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 25px;
}

.stat-item {
    background: rgba(0, 0, 0, 0.4);
    border: 2px solid rgba(255, 215, 0, 0.2);
    border-radius: 12px;
    padding: 18px;
    transition: all 0.3s ease;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.stat-item:hover {
    border-color: rgba(255, 215, 0, 0.4);
    transform: translateY(-2px);
}

.stat-item.chill {
    border-left: 4px solid rgba(34, 197, 94, 0.7);
}

.stat-item.action {
    border-left: 4px solid rgba(239, 68, 68, 0.7);
}

.stat-item.total {
    border-left: 4px solid rgba(59, 130, 246, 0.7);
}

.stat-info {
    display: flex;
    align-items: center;
    gap: 12px;
}

.stat-icon {
    font-size: 1.8em;
}

.stat-text h4 {
    color: #ffd700;
    font-size: 1.1em;
    margin-bottom: 4px;
}

.stat-text p {
    color: #c0c0c0;
    font-size: 0.85em;
    opacity: 0.8;
}

.stat-numbers {
    text-align: right;
}

.stat-count {
    color: #fff;
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 4px;
}

.stat-percentage {
    color: #c0c0c0;
    font-size: 1em;
}

/* Chart container */
.chart-container {
    background: rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 215, 0, 0.2);
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 20px;
    height: 250px;
}

.chart-title {
    color: #ffd700;
    font-size: 1.2em;
    margin-bottom: 15px;
    text-align: center;
}

/* Reset button */
.reset-button {
    background: transparent;
    border: 1px solid rgba(255, 215, 0, 0.3);
    color: rgba(255, 215, 0, 0.7);
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-family: 'Cinzel', 'Georgia', serif;
    transition: all 0.3s ease;
    font-size: 0.9em;
    display: block;
    margin: 0 auto;
    width: fit-content;
}

.reset-button:hover {
    background: rgba(255, 215, 0, 0.1);
    color: #ffd700;
    border-color: #ffd700;
}

/* Continue button area */
.continue-section {
    text-align: center;
    margin: 40px 0;
}

.continue-button {
    padding: 16px 50px;
    background: linear-gradient(135deg, #ffd700, #ffed4e);
    border: none;
    border-radius: 10px;
    color: #1a1a2e;
    font-size: 1.2em;
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

.continue-button::before {
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

.continue-button:hover::before {
    width: 300px;
    height: 300px;
}

.continue-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(255, 215, 0, 0.6);
}

.continue-button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
}

.continue-button:disabled:hover::before {
    width: 0;
    height: 0;
}

.selection-hint {
    color: #c0c0c0;
    margin-top: 15px;
    font-style: italic;
    font-size: 0.95em;
}

.selection-hint.selected {
    color: #ffd700;
    font-weight: bold;
}

/* Information note */
.info-note {
    text-align: center;
    color: rgba(192, 192, 192, 0.6);
    font-size: 0.85em;
    margin-top: 20px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .main-title {
        font-size: 2.2em;
    }
    
    .subtitle {
        font-size: 1em;
    }
    
    .header-section {
        padding: 30px 20px;
    }
    
    .game-mode-content {
        padding: 20px;
    }
    
    .game-mode-title {
        font-size: 1.4em;
    }
    
    .stats-card {
        padding: 20px;
    }
}
</style>

<div class="main-container">
    <!-- Header section -->
    <div class="header-section">
        <div class="header-icon">🎮</div>
        <h1 class="main-title">Choose Your RPG Adventure</h1>
        <p class="subtitle">
            Select the type of RPG experience you want to create. This will shape the examples and style recommendations throughout the creation process.
        </p>
    </div>

    <!-- Main content area: maintain left-right layout -->
    <div class="main-content">
        <!-- Left column: game mode cards -->
        <div class="left-column">
            <div class="game-modes-grid">
                <!-- Chill / Cozy RPG card -->
                <div class="game-mode-card" data-mode="chill">
                    <div class="game-mode-image-container">
                        <div class="game-mode-image">
                            <div class="mode-emoji">🌿</div>
                            <div class="mode-type-label">Calm & Exploratory</div>
                        </div>
                    </div>
                    <div class="game-mode-content">
                        <h3 class="game-mode-title">Chill / Cozy RPG</h3>
                        <p class="game-mode-description">
                            Relaxed pace, exploration-focused gameplay with emphasis on storytelling, character development, and atmospheric world-building.
                        </p>
                        <ul class="game-mode-features">
                            <li>Peaceful exploration</li>
                            <li>Rich narrative depth</li>
                            <li>Character relationships</li>
                            <li>Low-stress gameplay</li>
                        </ul>
                    </div>
                    <div class="game-mode-selection-indicator">
                        <div class="selection-dot"></div>
                    </div>
                </div>

                <!-- Action RPG card -->
                <div class="game-mode-card" data-mode="action">
                    <div class="game-mode-image-container">
                        <div class="game-mode-image">
                            <div class="mode-emoji">⚔️</div>
                            <div class="mode-type-label">Fast & Exciting</div>
                        </div>
                    </div>
                    <div class="game-mode-content">
                        <h3 class="game-mode-title">Action RPG</h3>
                        <p class="game-mode-description">
                            Fast-paced, combat-driven experience with intense battles, quick decision-making, and adrenaline-pumping encounters.
                        </p>
                        <ul class="game-mode-features">
                            <li>Dynamic combat system</li>
                            <li>Quick reflexes required</li>
                            <li>Epic boss battles</li>
                            <li>High-intensity moments</li>
                        </ul>
                    </div>
                    <div class="game-mode-selection-indicator">
                        <div class="selection-dot"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right column: statistics area -->
        <div class="right-column">
            <div class="stats-card">
                <h2 class="stats-title">Community Preferences</h2>
                <p class="stats-subtitle">See what other creators are choosing</p>
                
                <div class="stats-cards-container">
                    <!-- Chill statistics -->
                    <div class="stat-item chill">
                        <div class="stat-info">
                            <div class="stat-icon">🌿</div>
                            <div class="stat-text">
                                <h4>Chill / Cozy RPG</h4>
                                <p>Calm & Exploratory</p>
                            </div>
                        </div>
                        <div class="stat-numbers">
                            <div class="stat-count" id="chill-count">0</div>
                            <div class="stat-percentage" id="chill-percentage">0%</div>
                        </div>
                    </div>

                    <!-- Action statistics -->
                    <div class="stat-item action">
                        <div class="stat-info">
                            <div class="stat-icon">⚔️</div>
                            <div class="stat-text">
                                <h4>Action RPG</h4>
                                <p>Fast & Exciting</p>
                            </div>
                        </div>
                        <div class="stat-numbers">
                            <div class="stat-count" id="action-count">0</div>
                            <div class="stat-percentage" id="action-percentage">0%</div>
                        </div>
                    </div>

                    <!-- Total statistics -->
                    <div class="stat-item total">
                        <div class="stat-info">
                            <div class="stat-icon">📊</div>
                            <div class="stat-text">
                                <h4>Total Votes</h4>
                                <p>All community selections</p>
                            </div>
                        </div>
                        <div class="stat-numbers">
                            <div class="stat-count" id="total-count">0</div>
                            <div class="stat-percentage">users</div>
                        </div>
                    </div>
                </div>

                <!-- Chart -->
                <div class="chart-container">
                    <h3 class="chart-title">Visual Distribution</h3>
                    <canvas id="stats-chart"></canvas>
                </div>

                <!-- Reset button -->
                <button id="reset-stats" class="reset-button">
                    Reset Demo Data
                </button>
            </div>
        </div>
    </div>

    <!-- Continue button -->
    <div class="continue-section">
        <button id="continue-btn" class="continue-button" disabled>
            Continue to Next Step
        </button>
        <p id="selection-hint" class="selection-hint">
            Please select a content to continue
        </p>
    </div>

    <!-- Information note -->
    <div class="info-note">
        <p>Statistics are stored locally in your browser for demonstration purposes.</p>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
// Game mode selection and statistics functionality
class StatisticsManager {
    constructor() {
        this.storageKey = 'rpgModeStatistics_fallback';
        this.stats = { chill: 0, action: 0, total: 0, history: [] };
        this.chart = null;
        this.API_BASE = "http://localhost:8304/api";
        this.ENDPOINTS = {
            getStats: `${this.API_BASE}/rpg_stats`,
            record: `${this.API_BASE}/rpg_stats/record`,
            reset: `${this.API_BASE}/rpg_stats/reset`,
            health: `${this.API_BASE}/rpg_stats/health`,
        };
    }

    getLocalUserSession() {
        try { return JSON.parse(localStorage.getItem("userSession") || "{}"); }
        catch (e) { return {}; }
    }

    async getUserGithubId() {
        const s = this.getLocalUserSession();
        if (s?.githubId) return String(s.githubId);
        let userId = sessionStorage.getItem('rpgUserId');
        if (userId) return userId;
        userId = 'user_' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('rpgUserId', userId);
        return userId;
    }

    async fetchJSON(url, options = {}) {
        const res = await fetch(url, {
            headers: { 'Content-Type': 'application/json' },
            ...options
        });
        let body = null;
        try { body = await res.json(); } catch (e) {}
        if (!res.ok) {
            const msg = body?.error || body?.message || `HTTP ${res.status}`;
            throw new Error(msg);
        }
        return body;
    }

    async loadFromBackend() {
        const data = await this.fetchJSON(this.ENDPOINTS.getStats, { method: 'GET' });
        this.stats = this.normalizeStats(data);
        this.updateDisplay();
    }

    async recordSelectionBackend(mode) {
        const userGithubId = await this.getUserGithubId();
        const data = await this.fetchJSON(this.ENDPOINTS.record, {
            method: 'POST',
            body: JSON.stringify({ mode, userGithubId })
        });
        this.stats = this.normalizeStats(data);
        this.updateDisplay();
    }

    async resetBackend() {
        const data = await this.fetchJSON(this.ENDPOINTS.reset, { method: 'POST' });
        this.stats = this.normalizeStats(data);
        this.updateDisplay();
    }

    normalizeStats(data) {
        const chill = Number(data?.chill ?? 0);
        const action = Number(data?.action ?? 0);
        const total = Number(data?.total ?? (chill + action));
        const history = Array.isArray(data?.history) ? data.history : [];
        return { chill, action, total, history };
    }

    loadFallback() {
        const defaultStats = { chill: 0, action: 0, total: 0, history: [] };
        try {
            const stored = localStorage.getItem(this.storageKey);
            return stored ? JSON.parse(stored) : defaultStats;
        } catch (e) { return defaultStats; }
    }

    saveFallback() {
        try { localStorage.setItem(this.storageKey, JSON.stringify(this.stats)); }
        catch (e) {}
    }

    async recordSelectionFallback(mode) {
        const userGithubId = await this.getUserGithubId();
        const timestamp = new Date().toISOString();
        this.stats.history.push({ userGithubId, mode, timestamp });
        if (mode === 'chill' || mode === 'action') {
            this.stats[mode]++;
            this.stats.total++;
        }
        this.saveFallback();
        this.updateDisplay();
    }

    resetFallback() {
        this.stats = { chill: 0, action: 0, total: 0, history: [] };
        this.saveFallback();
        this.updateDisplay();
    }

    getPercentage(mode) {
        if (this.stats.total === 0) return 0;
        return Math.round((this.stats[mode] / this.stats.total) * 100);
    }

    updateDisplay() {
        document.getElementById('chill-count').textContent = this.stats.chill;
        document.getElementById('action-count').textContent = this.stats.action;
        document.getElementById('total-count').textContent = this.stats.total;
        document.getElementById('chill-percentage').textContent = `${this.getPercentage('chill')}%`;
        document.getElementById('action-percentage').textContent = `${this.getPercentage('action')}%`;
        this.updateChart();
    }

    updateChart() {
        if (!this.chart) return;
        this.chart.data.datasets[0].data = [this.stats.chill, this.stats.action];
        this.chart.update();
    }

    initChart() {
        const ctx = document.getElementById('stats-chart').getContext('2d');
        
        // Set Chart.js default styles to match theme
        Chart.defaults.color = '#fff';
        Chart.defaults.font.family = "'Cinzel', 'Georgia', serif";
        Chart.defaults.font.size = 12;
        
        this.chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Chill / Cozy', 'Action'],
                datasets: [{
                    data: [this.stats.chill, this.stats.action],
                    backgroundColor: [
                        'rgba(34, 197, 94, 0.8)',
                        'rgba(239, 68, 68, 0.8)'
                    ],
                    borderColor: [
                        'rgb(34, 197, 94)',
                        'rgb(239, 68, 68)'
                    ],
                    borderWidth: 2,
                    borderAlign: 'inner'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#ffd700',
                            padding: 15,
                            font: {
                                size: 14,
                                family: "'Cinzel', 'Georgia', serif"
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: 'rgba(20, 20, 40, 0.9)',
                        bodyColor: '#e0e0e0',
                        titleColor: '#ffd700',
                        borderColor: 'rgba(255, 215, 0, 0.3)',
                        borderWidth: 1,
                        titleFont: {
                            family: "'Cinzel', 'Georgia', serif",
                            size: 13
                        },
                        bodyFont: {
                            family: "'Cinzel', 'Georgia', serif",
                            size: 12
                        }
                    }
                },
                cutout: '65%'
            }
        });
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', async function () {
    const gameModeCards = document.querySelectorAll('.game-mode-card');
    const continueBtn = document.getElementById('continue-btn');
    const selectionHint = document.getElementById('selection-hint');
    const resetStatsBtn = document.getElementById('reset-stats');
    let selectedMode = null;

    const statsManager = new StatisticsManager();
    statsManager.initChart();
    statsManager.updateDisplay();

    // Try to load statistics from backend
    try {
        await statsManager.loadFromBackend();
    } catch (e) {
        // If backend is unavailable, use local storage data
        statsManager.stats = statsManager.loadFallback();
        statsManager.updateDisplay();
    }

    // Initialize session storage
    if (!sessionStorage.getItem('rpgCreatorPreferences')) {
        sessionStorage.setItem('rpgCreatorPreferences', JSON.stringify({}));
    }

    // Game mode card selection functionality
    gameModeCards.forEach(card => {
        card.addEventListener('click', async function () {
            const mode = this.dataset.mode;
            
            // Remove selected state from all cards
            gameModeCards.forEach(c => c.classList.remove('selected'));
            
            // Add selected state to current card
            this.classList.add('selected');
            selectedMode = mode;
            
            // Enable continue button
            continueBtn.disabled = false;
            
            // Update hint text
            selectionHint.textContent = `Selected: ${mode === 'chill' ? 'Chill / Cozy RPG' : 'Action RPG'}`;
            selectionHint.classList.add('selected');
            
            // Save selection to session storage
            const preferences = JSON.parse(sessionStorage.getItem('rpgCreatorPreferences'));
            preferences.gameMode = mode;
            sessionStorage.setItem('rpgCreatorPreferences', JSON.stringify(preferences));
        });
    });

    let hasRecordedMode = false;

    // Continue button click event
    continueBtn.addEventListener('click', async function () {
        if (!selectedMode) return;
        if (hasRecordedMode) return;
        
        hasRecordedMode = true;
        continueBtn.disabled = true;
        
        try {
            // Try to record selection to backend
            await statsManager.recordSelectionBackend(selectedMode);
        } catch (e) {
            // If backend is unavailable, use local storage
            statsManager.stats = statsManager.loadFallback();
            await statsManager.recordSelectionFallback(selectedMode);
        }
        
        // Redirect to next page
        window.location.href = "/rpg/story";
    });

    // Reset statistics button
    resetStatsBtn.addEventListener('click', async function () {
        if (!confirm("Are you sure you want to reset all statistics?")) return;
        
        try {
            await statsManager.resetBackend();
        } catch (e) {
            statsManager.resetFallback();
        }
    });
});
</script>

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
      <a href="/rpg/dashboard" class="nav-link" data-page="2">
        <span class="nav-number">2</span>
        <span class="nav-text">Dashboard</span>
        <span class="nav-check">✓</span>
      </a>
      <a href="/rpg/story" class="nav-link" data-page="3">
        <span class="nav-number">3</span>
        <span class="nav-text">Story & Narrative</span>
        <span class="nav-check">✓</span>
      </a>
      <a href="/rpg/game-creator" class="nav-link" data-page="4">
        <span class="nav-number">4</span>
        <span class="nav-text">Game creator</span>
        <span class="nav-check">✓</span>
      </a>
      <a href="/rpg/keybindings" class="nav-link active" data-page="5">
        <span class="nav-number">5</span>
        <span class="nav-text">Controls</span>
        <span class="nav-check">✓</span>
      </a>
            <a href="/rpg/systems" class="nav-link" data-page="6">
        <span class="nav-number">6</span>
        <span class="nav-text">Game Systems</span>
        <span class="nav-lock">✓</span>
      </a>
      <a href="/rpg/review" class="nav-link" data-page="6" id="review-link">
        <span class="nav-number">6</span>
        <span class="nav-text">Review</span>
        <span class="nav-lock">✓</span>
        <span class="nav-check">✓</span>
      </a>
    </nav>
  </div>
</div>

<style>
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Cinzel', 'Georgia', serif;
  background: #1a1a2e;
  min-height: 100vh;
  overflow-x: hidden;
  padding: 28px 16px;
}

/* Animated background */
body::before {
  content: '';
  position: fixed;
  inset: 0;
  background-image:
    radial-gradient(2px 2px at 20% 30%, white, transparent),
    radial-gradient(2px 2px at 60% 70%, white, transparent),
    radial-gradient(1px 1px at 50% 50%, white, transparent),
    radial-gradient(1px 1px at 80% 10%, white, transparent),
    radial-gradient(2px 2px at 90% 60%, white, transparent);
  background-size: 200% 200%;
  animation: stars 20s linear infinite;
  opacity: 0.28;
  z-index: 0;
}
@keyframes stars { from { transform: translate(0,0); } to { transform: translate(-50%,-50%); } }

.container {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
}

/* Header card */
.header-card {
  background: linear-gradient(145deg, rgba(30, 30, 60, 0.95), rgba(20, 20, 40, 0.95));
  border-radius: 18px;
  padding: 22px 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.7), inset 0 0 18px rgba(255,215,0,0.1);
  border: 2px solid rgba(255,215,0,0.28);
  backdrop-filter: blur(10px);
  text-align: center;
  margin-bottom: 16px;
}
.title-icon { font-size: 2.8em; margin-bottom: 6px; filter: drop-shadow(0 0 10px rgba(255,215,0,0.45)); }
.main-title {
  color: #ffd700;
  font-size: 2em;
  margin-bottom: 6px;
  text-shadow: 0 0 10px rgba(255,215,0,0.35), 2px 2px 4px rgba(0,0,0,0.75);
  letter-spacing: 2px;
}
.subtitle { color: #c0c0c0; font-size: 0.95em; font-style: italic; opacity: 0.92; margin-bottom: 12px; }

/* Mode selector */
.mode-selector { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; margin-bottom: 8px; }
.mode-btn {
  padding: 9px 16px;
  background: rgba(0,0,0,0.35);
  border: 2px solid rgba(255,215,0,0.28);
  border-radius: 999px;
  color: #c0c0c0;
  font-size: 0.9em;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.mode-btn:hover { border-color: #ffd700; color: #ffd700; transform: translateY(-1px); }
.mode-btn.active {
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  color: #1a1a2e;
  border-color: #ffd700;
  font-weight: 700;
}
.mode-indicator { color: #c0c0c0; font-size: 0.85em; font-style: italic; }
.mode-description { color: #ffed4e; font-size: 0.86em; margin-top: 6px; }
.mode-random-tip { color: #c0ffc4; font-size: 0.83em; margin-top: 6px; }

/* Prompt box */
.prompt-box {
  background: rgba(0,0,0,0.35);
  border-left: 4px solid #ffd700;
  padding: 10px 12px;
  margin: 12px 0 10px;
  border-radius: 6px;
  color: #ffed4e;
  font-size: 0.88em;
}
.mode-tip { display: none; margin-top: 6px; font-size: 0.84em; }
.mode-tip.action { color: #ffb3b3; }
.mode-tip.cozy { color: #b3ffe0; }

/* Compact 2-column form layout */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

/* Section cards */
.section-card {
  background: linear-gradient(145deg, rgba(30, 30, 60, 0.95), rgba(20, 20, 40, 0.95));
  border-radius: 18px;
  padding: 16px 16px;
  box-shadow: 0 8px 26px rgba(0,0,0,0.7), inset 0 0 18px rgba(255,215,0,0.08);
  border: 2px solid rgba(255,215,0,0.25);
  backdrop-filter: blur(10px);
}
.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 10px;
}
.section-title {
  color: #ffd700;
  font-size: 1.2em;
  text-shadow: 0 0 10px rgba(255,215,0,0.25);
}
.section-sub {
  color: #c0c0c0;
  font-size: 0.82em;
  opacity: 0.9;
  text-align: right;
}

/* Compact bindings list */
.keybind-list {
  display: grid;
  gap: 8px;
}
.keybind-row {
  display: grid;
  grid-template-columns: 1.4fr 0.9fr;
  gap: 10px;
  padding: 10px 10px;
  border-radius: 12px;
  background: rgba(0,0,0,0.48);
  border: 1px solid rgba(255,255,255,0.04);
}
.keybind-row:nth-child(odd) { background: rgba(15, 15, 35, 0.78); }
.keybind-row:hover { background: rgba(40, 40, 70, 0.92); box-shadow: inset 2px 0 0 rgba(255,215,0,0.65); }

.keybind-left { min-width: 0; }
.keybind-action-name { font-weight: 700; color: #ffed4e; font-size: 0.9em; }
.keybind-action-sub { font-size: 0.76em; color: #c0c0c0; opacity: 0.85; margin-top: 2px; }
.keybind-desc { font-size: 0.78em; color: #c0c0c0; margin-top: 5px; line-height: 1.25; }

.keybind-select {
  width: 100%;
  padding: 8px 10px;
  background: rgba(0,0,0,0.58);
  border-radius: 10px;
  border: 1px solid rgba(255,215,0,0.35);
  color: #ffed4e;
  font-family: 'Fira Code', 'Consolas', 'Courier New', monospace;
  font-size: 0.88em;
}
.keybind-select:focus { outline: none; box-shadow: 0 0 12px rgba(255,215,0,0.35); }

/* Group separators inside a column */
.group-label {
  padding: 8px 10px;
  border-radius: 12px;
  background: rgba(255,215,0,0.10);
  border: 1px solid rgba(255,215,0,0.25);
  color: #ffc;
  font-weight: 800;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.78em;
}

/* Save bar */
.save-bar {
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
}
.generator-btn {
  padding: 12px 22px;
  background: linear-gradient(135deg, #ffd700, #ffed4e);
  border: none;
  border-radius: 12px;
  color: #1a1a2e;
  font-size: 0.95em;
  font-weight: 800;
  font-family: inherit;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 15px rgba(255,215,0,0.35);
}
.generator-btn:hover { transform: translateY(-1px); box-shadow: 0 6px 22px rgba(255,215,0,0.5); }

.keybind-status { font-size: 0.9em; font-weight: 800; }

/* Mode-conditional blocks */
.mode-block { display: none; }
.mode-block.active { display: block; }

/* Responsive */
@media (max-width: 980px) {
  .form-grid { grid-template-columns: 1fr; }
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
.rpg-nav-sidebar.open { transform: translateX(0); }
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
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-dashboard { padding: 30px 20px; height: 100%; overflow-y: auto; }
.nav-title {
  color: #ffd700;
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 10px;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}
.nav-divider { height: 2px; background: linear-gradient(90deg, transparent, #ffd700, transparent); margin-bottom: 20px; }
.nav-links { display: flex; flex-direction: column; gap: 10px; }
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
}
.nav-link:hover:not(.locked) { background: rgba(255, 215, 0, 0.1); border-color: #ffd700; transform: translateX(5px); }
.nav-link.active { background: rgba(255, 215, 0, 0.15); border-color: #ffd700; box-shadow: 0 0 15px rgba(255, 215, 0, 0.2); }
.nav-link.visited .nav-check { display: inline; }
.nav-link.locked { opacity: 0.5; cursor: not-allowed; pointer-events: none; }
.nav-link.locked .nav-lock { display: inline; }
.nav-link:not(.locked) .nav-lock { display: none; }
.nav-number {
  display: flex; align-items: center; justify-content: center;
  width: 30px; height: 30px;
  background: rgba(255, 215, 0, 0.2);
  border-radius: 50%;
  color: #ffd700;
  font-weight: bold;
  margin-right: 12px;
  flex-shrink: 0;
}
.nav-text { flex: 1; font-size: 0.95em; }
.nav-check { color: #4cc9f0; font-size: 1.2em; display: none; margin-left: 8px; }
.nav-lock { color: #ff6b6b; font-size: 1em; margin-left: 8px; }

@media (max-width: 768px) {
  .rpg-nav-sidebar { width: 240px; transform: translateX(-240px); }
}
</style>

<div class="container">
  <div class="header-card">
    <div class="title-icon">🎮</div>
    <h1 class="main-title">KEY BINDINGS</h1>
    <p class="subtitle">Pick your keys and save them to your RPG profile.</p>

    <div class="mode-selector">
      <button class="mode-btn" data-mode="action" onclick="switchMode(event, 'action')">⚔️ Action RPG</button>
      <button class="mode-btn" data-mode="cozy" onclick="switchMode(event, 'cozy')">🌿 Cozy RPG</button>
    </div>

    <p class="mode-indicator">💡 Your key layout is saved separately for each mode.</p>
    <p class="mode-description" id="mode-description"></p>
    <p class="mode-random-tip" id="mode-random-tip"></p>

    <div class="prompt-box">
      You need to be logged in first. We use your saved <strong>GitHub ID</strong> to remember these controls.
      <div class="mode-tip action" id="mode-tip-action">
        ⚔️ Action rule: try to avoid duplicate keys for important combat actions.
      </div>
      <div class="mode-tip cozy" id="mode-tip-cozy">
        🌿 Cozy rule: duplicates are fine for comfy play.
      </div>
    </div>
  </div>

  <form id="keybind-preferences-form" onsubmit="handleKeybindingSave(event)">
    <div class="form-grid">

      <!-- LEFT COLUMN: Universal -->
      <div class="section-card">
        <div class="section-head">
          <h2 class="section-title">Universal Controls</h2>
          <div class="section-sub">Movement, interaction, and menus</div>
        </div>

        <div class="keybind-list">
          <div class="group-label">Movement</div>

          <div class="keybind-row">
            <div class="keybind-left">
              <div class="keybind-action-name">Move Up / Forward</div>
              <div class="keybind-action-sub">Action: W • Cozy: ↑</div>
              <div class="keybind-desc">Move your character forward or up.</div>
            </div>
            <div>
              <select id="bind-move-up" class="keybind-select">
                <option value="w">W</option>
                <option value="ArrowUp">Arrow Up</option>
                <option value="i">I</option>
              </select>
            </div>
          </div>

          <div class="keybind-row">
            <div class="keybind-left">
              <div class="keybind-action-name">Move Down / Backward</div>
              <div class="keybind-action-sub">Action: S • Cozy: ↓</div>
              <div class="keybind-desc">Move backward or down on a 2D map.</div>
            </div>
            <div>
              <select id="bind-move-down" class="keybind-select">
                <option value="s">S</option>
                <option value="ArrowDown">Arrow Down</option>
                <option value="k">K</option>
              </select>
            </div>
          </div>

          <div class="keybind-row">
            <div class="keybind-left">
              <div class="keybind-action-name">Move Left</div>
              <div class="keybind-action-sub">Action: A • Cozy: ←</div>
              <div class="keybind-desc">Move or strafe left.</div>
            </div>
            <div>
              <select id="bind-move-left" class="keybind-select">
                <option value="a">A</option>
                <option value="ArrowLeft">Arrow Left</option>
                <option value="j">J</option>
              </select>
            </div>
          </div>

          <div class="keybind-row">
            <div class="keybind-left">
              <div class="keybind-action-name">Move Right</div>
              <div class="keybind-action-sub">Action: D • Cozy: →</div>
              <div class="keybind-desc">Move or strafe right.</div>
            </div>
            <div>
              <select id="bind-move-right" class="keybind-select">
                <option value="d">D</option>
                <option value="ArrowRight">Arrow Right</option>
                <option value="l">L</option>
              </select>
            </div>
          </div>

          <div class="group-label">Interaction</div>

          <div class="keybind-row">
            <div class="keybind-left">
              <div class="keybind-action-name">Interact</div>
              <div class="keybind-action-sub">Action: E • Cozy: Space</div>
              <div class="keybind-desc">Talk, open doors, harvest, and context actions.</div>
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
          </div>

          <div class="keybind-row">
            <div class="keybind-left">
              <div class="keybind-action-name">Jump / Tool Action</div>
              <div class="keybind-action-sub">Action: Space jump • Cozy: optional</div>
              <div class="keybind-desc">Action uses jump. Cozy can use this as a tool key or disable it.</div>
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
          </div>

          <div class="keybind-row">
            <div class="keybind-left">
              <div class="keybind-action-name">Sprint / Comfort Action</div>
              <div class="keybind-action-sub">Action: Shift hold • Cozy: optional</div>
              <div class="keybind-desc">Action sprint or cozy comfort actions.</div>
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
          </div>

          <div class="keybind-row">
            <div class="keybind-left">
              <div class="keybind-action-name">Secondary Interaction</div>
              <div class="keybind-action-sub">Universal: R</div>
              <div class="keybind-desc">Rotate items, refill tools, extra context actions.</div>
            </div>
            <div>
              <select id="bind-secondary-interact" class="keybind-select">
                <option value="r">R</option>
                <option value="q">Q</option>
                <option value="f">F</option>
                <option value="">(None)</option>
              </select>
            </div>
          </div>

          <div class="keybind-row">
            <div class="keybind-left">
              <div class="keybind-action-name">Quick Action</div>
              <div class="keybind-action-sub">Universal: F</div>
              <div class="keybind-desc">Context quick action (pet, combo finisher, etc.).</div>
            </div>
            <div>
              <select id="bind-quick-action" class="keybind-select">
                <option value="f">F</option>
                <option value="e">E</option>
                <option value="q">Q</option>
                <option value="">(None)</option>
              </select>
            </div>
          </div>

          <div class="group-label">Menus and System</div>

          <div class="keybind-row">
            <div class="keybind-left">
              <div class="keybind-action-name">Inventory / Backpack</div>
              <div class="keybind-action-sub">Universal: I</div>
              <div class="keybind-desc">Open your inventory or backpack.</div>
            </div>
            <div>
              <select id="bind-inventory" class="keybind-select">
                <option value="i">I</option>
                <option value="b">B</option>
                <option value="Tab">Tab</option>
              </select>
            </div>
          </div>

          <div class="keybind-row">
            <div class="keybind-left">
              <div class="keybind-action-name">World Map</div>
              <div class="keybind-action-sub">Universal: M</div>
              <div class="keybind-desc">Open the world or region map.</div>
            </div>
            <div>
              <select id="bind-map" class="keybind-select">
                <option value="m">M</option>
                <option value="Tab">Tab</option>
                <option value="">(None)</option>
              </select>
            </div>
          </div>

          <div class="keybind-row">
            <div class="keybind-left">
              <div class="keybind-action-name">Pause / Settings</div>
              <div class="keybind-action-sub">Universal: Esc</div>
              <div class="keybind-desc">Pause and open settings.</div>
            </div>
            <div>
              <select id="bind-pause" class="keybind-select">
                <option value="Escape">Escape</option>
                <option value="p">P</option>
                <option value="">(None)</option>
              </select>
            </div>
          </div>

          <div class="keybind-row">
            <div class="keybind-left">
              <div class="keybind-action-name">Quick Toggle Menu</div>
              <div class="keybind-action-sub">Universal: Tab</div>
              <div class="keybind-desc">Quick access to quests, character sheet, or radial menus.</div>
            </div>
            <div>
              <select id="bind-quick-menu" class="keybind-select">
                <option value="Tab">Tab</option>
                <option value="q">Q</option>
                <option value="">(None)</option>
              </select>
            </div>
          </div>

          <div class="keybind-row">
            <div class="keybind-left">
              <div class="keybind-action-name">Screenshot / Photo Mode</div>
              <div class="keybind-action-sub">Universal: F11</div>
              <div class="keybind-desc">Take a screenshot or toggle photo mode.</div>
            </div>
            <div>
              <select id="bind-screenshot" class="keybind-select">
                <option value="F11">F11</option>
                <option value="F10">F10</option>
                <option value="">(None)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN: Mode-specific -->
      <div class="section-card">
        <div class="section-head">
          <h2 class="section-title">Mode Controls</h2>
          <div class="section-sub">Cozy tools or action combat</div>
        </div>

        <!-- Cozy block -->
        <div id="mode-block-cozy" class="mode-block">
          <div class="keybind-list">
            <div class="group-label">Cozy Tools and Daily Life</div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Tool Slot 1</div>
                <div class="keybind-action-sub">Default: 1</div>
                <div class="keybind-desc">First tool (watering can, etc.).</div>
              </div>
              <div>
                <select id="bind-tool1" class="keybind-select">
                  <option value="1">1</option>
                  <option value="q">Q</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Tool Slot 2</div>
                <div class="keybind-action-sub">Default: 2</div>
                <div class="keybind-desc">Second tool slot.</div>
              </div>
              <div>
                <select id="bind-tool2" class="keybind-select">
                  <option value="2">2</option>
                  <option value="w">W</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Tool Slot 3</div>
                <div class="keybind-action-sub">Default: 3</div>
                <div class="keybind-desc">Third tool slot (fishing rod, etc.).</div>
              </div>
              <div>
                <select id="bind-tool3" class="keybind-select">
                  <option value="3">3</option>
                  <option value="e">E</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Tool Slot 4</div>
                <div class="keybind-action-sub">Default: 4</div>
                <div class="keybind-desc">Fourth tool slot.</div>
              </div>
              <div>
                <select id="bind-tool4" class="keybind-select">
                  <option value="4">4</option>
                  <option value="r">R</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Tool Slot 5</div>
                <div class="keybind-action-sub">Default: 5</div>
                <div class="keybind-desc">Fifth tool slot (brush, pick, etc.).</div>
              </div>
              <div>
                <select id="bind-tool5" class="keybind-select">
                  <option value="5">5</option>
                  <option value="f">F</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Emote Wheel</div>
                <div class="keybind-action-sub">Default: Q</div>
                <div class="keybind-desc">Open emotes (wave, laugh, sit, pet).</div>
              </div>
              <div>
                <select id="bind-emote-wheel" class="keybind-select">
                  <option value="q">Q</option>
                  <option value="AltLeft">Left Alt</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Craft / Cook Menu</div>
                <div class="keybind-action-sub">Default: C</div>
                <div class="keybind-desc">Open crafting or cooking interface.</div>
              </div>
              <div>
                <select id="bind-craft-menu" class="keybind-select">
                  <option value="c">C</option>
                  <option value="v">V</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Cozy Zoom Focus</div>
                <div class="keybind-action-sub">Default: Z</div>
                <div class="keybind-desc">Zoom in for screenshots or details.</div>
              </div>
              <div>
                <select id="bind-cozy-zoom" class="keybind-select">
                  <option value="z">Z</option>
                  <option value="x">X</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Chill Action</div>
                <div class="keybind-action-sub">Default: X</div>
                <div class="keybind-desc">Sit on benches, lie in grass, sip tea, etc.</div>
              </div>
              <div>
                <select id="bind-chill-action" class="keybind-select">
                  <option value="x">X</option>
                  <option value="z">Z</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Gardening Assistant</div>
                <div class="keybind-action-sub">Default: G</div>
                <div class="keybind-desc">Toggle auto-rows or grid placement helper.</div>
              </div>
              <div>
                <select id="bind-gardening" class="keybind-select">
                  <option value="g">G</option>
                  <option value="ShiftLeft">Left Shift</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Backpack Sort</div>
                <div class="keybind-action-sub">Default: B</div>
                <div class="keybind-desc">Auto-sort items in your bag.</div>
              </div>
              <div>
                <select id="bind-backpack" class="keybind-select">
                  <option value="b">B</option>
                  <option value="i">I</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Decoration Mode</div>
                <div class="keybind-action-sub">Default: V</div>
                <div class="keybind-desc">Place, rotate, and move furniture or decor.</div>
              </div>
              <div>
                <select id="bind-decor-mode" class="keybind-select">
                  <option value="v">V</option>
                  <option value="c">C</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Cozy Slow Walk</div>
                <div class="keybind-action-sub">Default: Ctrl (hold)</div>
                <div class="keybind-desc">Move extra slowly for cozy vibes.</div>
              </div>
              <div>
                <select id="bind-cozy-slow-walk" class="keybind-select">
                  <option value="ControlLeft">Left Ctrl</option>
                  <option value="ShiftLeft">Left Shift</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Build Grid Toggle</div>
                <div class="keybind-action-sub">Default: Alt</div>
                <div class="keybind-desc">Toggle build grid on or off.</div>
              </div>
              <div>
                <select id="bind-cozy-grid-toggle" class="keybind-select">
                  <option value="AltLeft">Left Alt</option>
                  <option value="AltRight">Right Alt</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Inspect Animal / Plant</div>
                <div class="keybind-action-sub">Default: Middle Click</div>
                <div class="keybind-desc">Inspect mood, health, or stats.</div>
              </div>
              <div>
                <select id="bind-cozy-inspect" class="keybind-select">
                  <option value="MouseMiddle">Middle Mouse</option>
                  <option value="h">H</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Whistle for Pets</div>
                <div class="keybind-action-sub">Default: H</div>
                <div class="keybind-desc">Call pets or animals to your location.</div>
              </div>
              <div>
                <select id="bind-pet-whistle" class="keybind-select">
                  <option value="h">H</option>
                  <option value="g">G</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        <!-- Action block -->
        <div id="mode-block-action" class="mode-block">
          <div class="keybind-list">
            <div class="group-label">Action Combat and Skills</div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Primary Attack</div>
                <div class="keybind-action-sub">Default: Mouse Left</div>
                <div class="keybind-desc">Basic attack or primary fire.</div>
              </div>
              <div>
                <select id="bind-primary-attack" class="keybind-select">
                  <option value="MouseLeft">Mouse Left</option>
                  <option value="e">E</option>
                  <option value="f">F</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Heavy Attack / Block</div>
                <div class="keybind-action-sub">Default: Mouse Right</div>
                <div class="keybind-desc">Heavy attack, block, or ADS.</div>
              </div>
              <div>
                <select id="bind-heavy-attack" class="keybind-select">
                  <option value="MouseRight">Mouse Right</option>
                  <option value="q">Q</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Ability Slot 1</div>
                <div class="keybind-action-sub">Default: 1</div>
                <div class="keybind-desc">First combat skill or spell.</div>
              </div>
              <div>
                <select id="bind-ability1" class="keybind-select">
                  <option value="1">1</option>
                  <option value="q">Q</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Ability Slot 2</div>
                <div class="keybind-action-sub">Default: 2</div>
                <div class="keybind-desc">Second combat skill.</div>
              </div>
              <div>
                <select id="bind-ability2" class="keybind-select">
                  <option value="2">2</option>
                  <option value="e">E</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Ability Slot 3</div>
                <div class="keybind-action-sub">Default: 3</div>
                <div class="keybind-desc">Third combat skill.</div>
              </div>
              <div>
                <select id="bind-ability3" class="keybind-select">
                  <option value="3">3</option>
                  <option value="r">R</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Ability Slot 4</div>
                <div class="keybind-action-sub">Default: 4</div>
                <div class="keybind-desc">Fourth skill or consumable.</div>
              </div>
              <div>
                <select id="bind-ability4" class="keybind-select">
                  <option value="4">4</option>
                  <option value="f">F</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Ultimate / Special</div>
                <div class="keybind-action-sub">Default: 5</div>
                <div class="keybind-desc">Ultimate ability or special mode.</div>
              </div>
              <div>
                <select id="bind-ultimate" class="keybind-select">
                  <option value="5">5</option>
                  <option value="x">X</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Dodge / Roll</div>
                <div class="keybind-action-sub">Default: Shift (tap)</div>
                <div class="keybind-desc">Quick dodge or roll to evade attacks.</div>
              </div>
              <div>
                <select id="bind-dodge" class="keybind-select">
                  <option value="ShiftLeft">Left Shift</option>
                  <option value="AltLeft">Left Alt</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Crouch / Stealth</div>
                <div class="keybind-action-sub">Default: Ctrl</div>
                <div class="keybind-desc">Crouch or enter stealth.</div>
              </div>
              <div>
                <select id="bind-crouch" class="keybind-select">
                  <option value="ControlLeft">Left Ctrl</option>
                  <option value="c">C</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Grenade / Throw</div>
                <div class="keybind-action-sub">Default: G</div>
                <div class="keybind-desc">Throw grenades or throwables.</div>
              </div>
              <div>
                <select id="bind-grenade" class="keybind-select">
                  <option value="g">G</option>
                  <option value="MouseMiddle">Middle Mouse</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Reload / Recharge</div>
                <div class="keybind-action-sub">Default: R</div>
                <div class="keybind-desc">Reload weapons or recharge abilities.</div>
              </div>
              <div>
                <select id="bind-reload" class="keybind-select">
                  <option value="r">R</option>
                  <option value="e">E</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Execute / Finisher</div>
                <div class="keybind-action-sub">Default: E</div>
                <div class="keybind-desc">Execution or finisher on weakened enemies.</div>
              </div>
              <div>
                <select id="bind-execute" class="keybind-select">
                  <option value="e">E</option>
                  <option value="f">F</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Melee Strike</div>
                <div class="keybind-action-sub">Default: F</div>
                <div class="keybind-desc">Quick melee hit at close range.</div>
              </div>
              <div>
                <select id="bind-melee" class="keybind-select">
                  <option value="f">F</option>
                  <option value="MouseMiddle">Middle Mouse</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Weapon Swap</div>
                <div class="keybind-action-sub">Default: Q</div>
                <div class="keybind-desc">Swap between weapons.</div>
              </div>
              <div>
                <select id="bind-weapon-swap" class="keybind-select">
                  <option value="q">Q</option>
                  <option value="Tab">Tab</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Mark Target / Ping</div>
                <div class="keybind-action-sub">Default: Z</div>
                <div class="keybind-desc">Mark a target or ping.</div>
              </div>
              <div>
                <select id="bind-mark-target" class="keybind-select">
                  <option value="z">Z</option>
                  <option value="MouseMiddle">Middle Mouse</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Rage / Focus State</div>
                <div class="keybind-action-sub">Default: X</div>
                <div class="keybind-desc">Enter rage or focus mode.</div>
              </div>
              <div>
                <select id="bind-focus-state" class="keybind-select">
                  <option value="x">X</option>
                  <option value="t">T</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Lock-On Target</div>
                <div class="keybind-action-sub">Default: Middle Click</div>
                <div class="keybind-desc">Lock camera onto target.</div>
              </div>
              <div>
                <select id="bind-lock-on" class="keybind-select">
                  <option value="MouseMiddle">Middle Mouse</option>
                  <option value="q">Q</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Tactical Wheel</div>
                <div class="keybind-action-sub">Default: Alt</div>
                <div class="keybind-desc">Open radial tactical menu.</div>
              </div>
              <div>
                <select id="bind-tactical-wheel" class="keybind-select">
                  <option value="AltLeft">Left Alt</option>
                  <option value="AltRight">Right Alt</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

            <div class="keybind-row">
              <div class="keybind-left">
                <div class="keybind-action-name">Taunt / Aggro</div>
                <div class="keybind-action-sub">Default: T</div>
                <div class="keybind-desc">Taunt enemies or pull aggro.</div>
              </div>
              <div>
                <select id="bind-taunt" class="keybind-select">
                  <option value="t">T</option>
                  <option value="x">X</option>
                  <option value="">(None)</option>
                </select>
              </div>
            </div>

          </div>
        </div>

        <div class="save-bar">
          <button type="submit" class="generator-btn">Save Key Bindings</button>
          <div id="keybind-status" class="keybind-status"></div>
        </div>
      </div>

    </div>
  </form>
</div>

<script>
const API_URL = 'http://localhost:8304/api';

let gameMode = localStorage.getItem('rpgGameMode') || 'action';

const modeDefaultBindings = {
  action: {
    moveUpKey: 'w', moveDownKey: 's', moveLeftKey: 'a', moveRightKey: 'd',
    interactKey: 'e', jumpKey: 'Space', sprintKey: 'ShiftLeft',
    secondaryInteractKey: 'r', quickActionKey: 'f',
    inventoryKey: 'i', mapKey: 'm', pauseKey: 'Escape', quickMenuKey: 'Tab', screenshotKey: 'F11',
    tool1Key: '', tool2Key: '', tool3Key: '', tool4Key: '', tool5Key: '',
    emoteWheelKey: '', craftMenuKey: '', cozyZoomKey: '', chillActionKey: '', gardeningKey: '',
    backpackKey: '', decorModeKey: '', cozySlowWalkKey: '', cozyGridToggleKey: '', cozyInspectKey: '', petWhistleKey: '',
    primaryAttackKey: 'MouseLeft', heavyAttackKey: 'MouseRight',
    ability1Key: '1', ability2Key: '2', ability3Key: '3', ability4Key: '4',
    ultimateKey: '5', dodgeKey: 'ShiftLeft', crouchKey: 'ControlLeft', grenadeKey: 'g',
    reloadKey: 'r', executeKey: 'e', meleeKey: 'f', weaponSwapKey: 'q',
    markTargetKey: 'z', focusStateKey: 'x', lockOnKey: 'MouseMiddle', tacticalWheelKey: 'AltLeft', tauntKey: 't'
  },
  cozy: {
    moveUpKey: 'ArrowUp', moveDownKey: 'ArrowDown', moveLeftKey: 'ArrowLeft', moveRightKey: 'ArrowRight',
    interactKey: 'Space', jumpKey: '', sprintKey: '',
    secondaryInteractKey: 'r', quickActionKey: 'f',
    inventoryKey: 'i', mapKey: 'm', pauseKey: 'Escape', quickMenuKey: 'Tab', screenshotKey: 'F11',
    tool1Key: '1', tool2Key: '2', tool3Key: '3', tool4Key: '4', tool5Key: '5',
    emoteWheelKey: 'q', craftMenuKey: 'c', cozyZoomKey: 'z', chillActionKey: 'x', gardeningKey: 'g',
    backpackKey: 'b', decorModeKey: 'v', cozySlowWalkKey: 'ControlLeft', cozyGridToggleKey: 'AltLeft', cozyInspectKey: 'MouseMiddle', petWhistleKey: 'h',
    primaryAttackKey: '', heavyAttackKey: '', ability1Key: '', ability2Key: '', ability3Key: '', ability4Key: '',
    ultimateKey: '', dodgeKey: '', crouchKey: '', grenadeKey: '', reloadKey: '', executeKey: '', meleeKey: '',
    weaponSwapKey: '', markTargetKey: '', focusStateKey: '', lockOnKey: '', tacticalWheelKey: '', tauntKey: ''
  }
};

const actionTips = [
  "Tip: Keep your pinky on Shift so sprint and dodge are always ready.",
  "Tip: Separate movement (WASD) from abilities (1-5) so you do not fat-finger skills.",
  "Tip: Put reload and interact on different keys if you keep reloading by accident."
];
const cozyTips = [
  "Tip: Arrow keys + Space + 1-5 makes a super comfy setup.",
  "Tip: Put your favorite cozy action on X so it is always in reach.",
  "Tip: Use grid toggle on Alt so building feels precise but chill."
];

// Sidebar
const currentPage = 5;
const sidebar = document.getElementById('rpg-nav-sidebar');
const navToggle = document.getElementById('nav-toggle');

window.addEventListener('load', () => {
  updateModeSelector(gameMode);
  updateContentForMode(gameMode);
  updateModeBlocks(gameMode);

  trackPageVisit(currentPage);
  updateVisitedIndicators();
  updateReviewLock();

  loadExistingKeybindings();
});

if (navToggle) {
  navToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
}

function updateModeBlocks(mode) {
  const cozy = document.getElementById('mode-block-cozy');
  const action = document.getElementById('mode-block-action');
  if (cozy) cozy.classList.toggle('active', mode === 'cozy');
  if (action) action.classList.toggle('active', mode === 'action');
}

function updateModeSelector(mode) {
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.mode === mode);
  });

  const subtitle = document.querySelector('.subtitle');
  const modeDesc = document.getElementById('mode-description');
  const randomTipEl = document.getElementById('mode-random-tip');

  if (subtitle) {
    subtitle.textContent = mode === 'cozy'
      ? 'Cozy mode: slow, comfy controls that focus on exploration and chill vibes.'
      : 'Action mode: fast, responsive controls built for combat and quick reactions.';
  }

  if (modeDesc) {
    modeDesc.textContent = mode === 'cozy'
      ? '🌿 Cozy layout uses arrow keys, Space to interact, tool keys on 1-5, and lots of building shortcuts.'
      : '⚔️ Action layout uses WASD movement, mouse for attacks, 1-5 for abilities, and classic RPG keys.';
  }

  if (randomTipEl) {
    const tips = mode === 'cozy' ? cozyTips : actionTips;
    randomTipEl.textContent = tips[Math.floor(Math.random() * tips.length)];
  }
}

function updateContentForMode(mode) {
  const actionTip = document.getElementById('mode-tip-action');
  const cozyTip = document.getElementById('mode-tip-cozy');
  if (!actionTip || !cozyTip) return;

  actionTip.style.display = (mode === 'action') ? 'block' : 'none';
  cozyTip.style.display = (mode === 'cozy') ? 'block' : 'none';
}

function switchMode(event, mode) {
  event.preventDefault();
  gameMode = mode;
  localStorage.setItem('rpgGameMode', mode);
  updateModeSelector(mode);
  updateContentForMode(mode);
  updateModeBlocks(mode);
  loadExistingKeybindings();
}

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
    'bind-sprint': defaults.sprintKey,

    'bind-secondary-interact': defaults.secondaryInteractKey,
    'bind-quick-action': defaults.quickActionKey,
    'bind-inventory': defaults.inventoryKey,
    'bind-map': defaults.mapKey,
    'bind-pause': defaults.pauseKey,
    'bind-quick-menu': defaults.quickMenuKey,
    'bind-screenshot': defaults.screenshotKey,

    'bind-tool1': defaults.tool1Key,
    'bind-tool2': defaults.tool2Key,
    'bind-tool3': defaults.tool3Key,
    'bind-tool4': defaults.tool4Key,
    'bind-tool5': defaults.tool5Key,
    'bind-emote-wheel': defaults.emoteWheelKey,
    'bind-craft-menu': defaults.craftMenuKey,
    'bind-cozy-zoom': defaults.cozyZoomKey,
    'bind-chill-action': defaults.chillActionKey,
    'bind-gardening': defaults.gardeningKey,
    'bind-backpack': defaults.backpackKey,
    'bind-decor-mode': defaults.decorModeKey,
    'bind-cozy-slow-walk': defaults.cozySlowWalkKey,
    'bind-cozy-grid-toggle': defaults.cozyGridToggleKey,
    'bind-cozy-inspect': defaults.cozyInspectKey,
    'bind-pet-whistle': defaults.petWhistleKey,

    'bind-primary-attack': defaults.primaryAttackKey,
    'bind-heavy-attack': defaults.heavyAttackKey,
    'bind-ability1': defaults.ability1Key,
    'bind-ability2': defaults.ability2Key,
    'bind-ability3': defaults.ability3Key,
    'bind-ability4': defaults.ability4Key,
    'bind-ultimate': defaults.ultimateKey,
    'bind-dodge': defaults.dodgeKey,
    'bind-crouch': defaults.crouchKey,
    'bind-grenade': defaults.grenadeKey,
    'bind-reload': defaults.reloadKey,
    'bind-execute': defaults.executeKey,
    'bind-melee': defaults.meleeKey,
    'bind-weapon-swap': defaults.weaponSwapKey,
    'bind-mark-target': defaults.markTargetKey,
    'bind-focus-state': defaults.focusStateKey,
    'bind-lock-on': defaults.lockOnKey,
    'bind-tactical-wheel': defaults.tacticalWheelKey,
    'bind-taunt': defaults.tauntKey
  };

  Object.entries(mapping).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.value = (typeof value === 'string') ? value : '';
  });
}

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

function setKeybindingFormFromData(binding) {
  if (binding.jumpKey === ' ') binding.jumpKey = 'Space';
  if (binding.interactKey === ' ') binding.interactKey = 'Space';

  const mapping = {
    'bind-move-up': binding.moveUpKey,
    'bind-move-left': binding.moveLeftKey,
    'bind-move-down': binding.moveDownKey,
    'bind-move-right': binding.moveRightKey,
    'bind-interact': binding.interactKey,
    'bind-jump': binding.jumpKey,
    'bind-sprint': binding.sprintKey,

    'bind-secondary-interact': binding.secondaryInteractKey,
    'bind-quick-action': binding.quickActionKey,
    'bind-inventory': binding.inventoryKey,
    'bind-map': binding.mapKey,
    'bind-pause': binding.pauseKey,
    'bind-quick-menu': binding.quickMenuKey,
    'bind-screenshot': binding.screenshotKey,

    'bind-tool1': binding.tool1Key,
    'bind-tool2': binding.tool2Key,
    'bind-tool3': binding.tool3Key,
    'bind-tool4': binding.tool4Key,
    'bind-tool5': binding.tool5Key,
    'bind-emote-wheel': binding.emoteWheelKey,
    'bind-craft-menu': binding.craftMenuKey,
    'bind-cozy-zoom': binding.cozyZoomKey,
    'bind-chill-action': binding.chillActionKey,
    'bind-gardening': binding.gardeningKey,
    'bind-backpack': binding.backpackKey,
    'bind-decor-mode': binding.decorModeKey,
    'bind-cozy-slow-walk': binding.cozySlowWalkKey,
    'bind-cozy-grid-toggle': binding.cozyGridToggleKey,
    'bind-cozy-inspect': binding.cozyInspectKey,
    'bind-pet-whistle': binding.petWhistleKey,

    'bind-primary-attack': binding.primaryAttackKey,
    'bind-heavy-attack': binding.heavyAttackKey,
    'bind-ability1': binding.ability1Key,
    'bind-ability2': binding.ability2Key,
    'bind-ability3': binding.ability3Key,
    'bind-ability4': binding.ability4Key,
    'bind-ultimate': binding.ultimateKey,
    'bind-dodge': binding.dodgeKey,
    'bind-crouch': binding.crouchKey,
    'bind-grenade': binding.grenadeKey,
    'bind-reload': binding.reloadKey,
    'bind-execute': binding.executeKey,
    'bind-melee': binding.meleeKey,
    'bind-weapon-swap': binding.weaponSwapKey,
    'bind-mark-target': binding.markTargetKey,
    'bind-focus-state': binding.focusStateKey,
    'bind-lock-on': binding.lockOnKey,
    'bind-tactical-wheel': binding.tacticalWheelKey,
    'bind-taunt': binding.tauntKey
  };

  Object.entries(mapping).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el && typeof value === 'string') el.value = value;
  });
}

function validateKeysForMode(keys) {
  if (gameMode === 'action') {
    const required = [
      'moveUpKey','moveDownKey','moveLeftKey','moveRightKey',
      'interactKey','jumpKey','sprintKey','primaryAttackKey'
    ];
    const missing = required.filter(k => !keys[k] || keys[k].length === 0);
    if (missing.length) {
      return { ok: false, message: "In Action mode, you must set movement, interact, jump, sprint, and primary attack." };
    }
  } else {
    if (!keys.moveUpKey || !keys.interactKey) {
      return { ok: false, message: "In Cozy mode, make sure at least Move Up and Interact have keys." };
    }
  }
  return { ok: true };
}

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

  const keys = {
    moveUpKey: document.getElementById('bind-move-up').value,
    moveLeftKey: document.getElementById('bind-move-left').value,
    moveDownKey: document.getElementById('bind-move-down').value,
    moveRightKey: document.getElementById('bind-move-right').value,
    interactKey: document.getElementById('bind-interact').value,
    jumpKey: document.getElementById('bind-jump').value,
    sprintKey: document.getElementById('bind-sprint').value,

    secondaryInteractKey: document.getElementById('bind-secondary-interact').value,
    quickActionKey: document.getElementById('bind-quick-action').value,
    inventoryKey: document.getElementById('bind-inventory').value,
    mapKey: document.getElementById('bind-map').value,
    pauseKey: document.getElementById('bind-pause').value,
    quickMenuKey: document.getElementById('bind-quick-menu').value,
    screenshotKey: document.getElementById('bind-screenshot').value,

    tool1Key: document.getElementById('bind-tool1').value,
    tool2Key: document.getElementById('bind-tool2').value,
    tool3Key: document.getElementById('bind-tool3').value,
    tool4Key: document.getElementById('bind-tool4').value,
    tool5Key: document.getElementById('bind-tool5').value,
    emoteWheelKey: document.getElementById('bind-emote-wheel').value,
    craftMenuKey: document.getElementById('bind-craft-menu').value,
    cozyZoomKey: document.getElementById('bind-cozy-zoom').value,
    chillActionKey: document.getElementById('bind-chill-action').value,
    gardeningKey: document.getElementById('bind-gardening').value,
    backpackKey: document.getElementById('bind-backpack').value,
    decorModeKey: document.getElementById('bind-decor-mode').value,
    cozySlowWalkKey: document.getElementById('bind-cozy-slow-walk').value,
    cozyGridToggleKey: document.getElementById('bind-cozy-grid-toggle').value,
    cozyInspectKey: document.getElementById('bind-cozy-inspect').value,
    petWhistleKey: document.getElementById('bind-pet-whistle').value,

    primaryAttackKey: document.getElementById('bind-primary-attack').value,
    heavyAttackKey: document.getElementById('bind-heavy-attack').value,
    ability1Key: document.getElementById('bind-ability1').value,
    ability2Key: document.getElementById('bind-ability2').value,
    ability3Key: document.getElementById('bind-ability3').value,
    ability4Key: document.getElementById('bind-ability4').value,
    ultimateKey: document.getElementById('bind-ultimate').value,
    dodgeKey: document.getElementById('bind-dodge').value,
    crouchKey: document.getElementById('bind-crouch').value,
    grenadeKey: document.getElementById('bind-grenade').value,
    reloadKey: document.getElementById('bind-reload').value,
    executeKey: document.getElementById('bind-execute').value,
    meleeKey: document.getElementById('bind-melee').value,
    weaponSwapKey: document.getElementById('bind-weapon-swap').value,
    markTargetKey: document.getElementById('bind-mark-target').value,
    focusStateKey: document.getElementById('bind-focus-state').value,
    lockOnKey: document.getElementById('bind-lock-on').value,
    tacticalWheelKey: document.getElementById('bind-tactical-wheel').value,
    tauntKey: document.getElementById('bind-taunt').value
  };

  const validation = validateKeysForMode(keys);
  if (!validation.ok) {
    status.textContent = "❌ " + validation.message;
    status.style.color = "#ff6b6b";
    return;
  }

  const payload = { userGithubId: session.githubId, gameMode: gameMode, ...keys };

  try {
    status.textContent = "Saving key bindings...";
    status.style.color = "#ffed4e";

    const response = await fetch(`${API_URL}/rpg/keybindings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    const data = await response.json();

    if (response.ok) {
      status.textContent = "✅ Key bindings saved for this content!";
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

/* Sidebar tracking */
function trackPageVisit(pageNumber) {
  let visitedPages = JSON.parse(localStorage.getItem('rpgVisitedPages') || '[]');
  if (!visitedPages.includes(pageNumber)) {
    visitedPages.push(pageNumber);
    localStorage.setItem('rpgVisitedPages', JSON.stringify(visitedPages));
  }
}

function updateReviewLock() {
  const visitedPages = JSON.parse(localStorage.getItem('rpgVisitedPages') || '[]');
  const requiredPages = [2, 3, 4, 5];
  const allVisited = requiredPages.every(page => visitedPages.includes(page));
  const reviewLink = document.getElementById('review-link');
  if (reviewLink) reviewLink.classList.toggle('locked', !allVisited);
}

function updateVisitedIndicators() {
  const visitedPages = JSON.parse(localStorage.getItem('rpgVisitedPages') || '[]');
  document.querySelectorAll('.nav-link').forEach(link => {
    const pageNum = parseInt(link.dataset.page);
    if (visitedPages.includes(pageNum)) link.classList.add('visited');
  });
}
</script>
