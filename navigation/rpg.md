---
layout: opencs
title: RPG
permalink: /rpg/latest
---

<style>
.embedded .site-header,
.embedded .post-header,
.embedded .site-footer,
.embedded .page-description { display: none !important; }
.embedded body { margin: 0 !important; }
.embedded .page-content .wrapper { max-width: 100% !important; padding: 0 !important; margin: 0 !important; }
.embedded .page-content, .embedded .post-content, .embedded main, .embedded .page { margin: 0 !important; padding: 0 !important; }
html.embedded, html.embedded body { overflow: hidden !important; }

html, body { height: 100%; }
#gameContainer { width: 100%; height: 85vh; margin: 0; position: relative; }
.embedded #gameContainer { height: 100vh; position: fixed; top: 0; left: 0; right: 0; }
#gameCanvas { width: 100%; height: 100%; display: block; }

/* Ensure a black screen when the engine is not started */
#gameContainer, #gameCanvas { background: #000; }

/* Overlay to block interactions and ensure black screen when stopped */
#engine-blocker {
    position: absolute;
    inset: 0;
    background: #000;
    z-index: 10;
    display: none; /* shown when engine is stopped */
}

.custom-alert {
    display: none;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
}

.custom-alert button {
    background-color: transparent; /* Fully transparent background */
    display: flex; /* Use flexbox for layout */
    align-items: center; /* Center items vertically */
    justify-content: center; /* Center items horizontally */
    width: 100%; /* Adjust width to fit content */
    height: 100%; /* Adjust height to fit content */
    position: absolute; /* Position the button relative to the alert box */
}

</style>

<script>
// Enable embed mode when inside an iframe or with ?embed=1
(function() {
    try {
        const params = new URLSearchParams(window.location.search);
        if (params.get('embed') === '1' || window.self !== window.top) {
            document.documentElement.classList.add('embedded');
        }
    } catch (e) {
        // no-op
    }
})();
</script>

<div id="gameContainer">
    <canvas id='gameCanvas'></canvas>
    <div id="engine-blocker" aria-hidden="true"></div>
</div>

<div id="custom-alert" class="custom-alert">
    <button onclick="closeCustomAlert()" id="custom-alert-message"></button>
</div>

<script type="module">
    import GameControl from '{{site.baseurl}}/assets/js/rpg/latest/GameControl.js';
    import AdventureGame from '{{site.baseurl}}/assets/js/adventureGame/GameEngine/Game.js';

    const path = "{{site.baseurl}}";
    
    // Respect autostart query parameter (default: true)
    const params = new URLSearchParams(window.location.search);
    const autostartParam = (params.get('autostart') || '').toLowerCase();
    const autoStart = !(autostartParam === '0' || autostartParam === 'false' || autostartParam === 'no');

    // Blockers: prevent all input when engine inactive
    let engineActive = !!autoStart;
    const blockerEl = document.getElementById('engine-blocker');
    const blockEvents = [
        'keydown','keyup','keypress',
        'mousedown','mouseup','mousemove','contextmenu',
        'wheel','touchstart','touchmove','touchend','pointerdown','pointermove','pointerup'
    ];
    const handlers = new Map();

    function enableBlockers() {
        if (blockerEl) blockerEl.style.display = 'block';
        blockEvents.forEach(type => {
            if (!handlers.has(type)) {
                const h = (e) => { e.preventDefault(); e.stopPropagation(); };
                document.addEventListener(type, h, { capture: true, passive: false });
                handlers.set(type, h);
            }
        });
    }

    function disableBlockers() {
        if (blockerEl) blockerEl.style.display = 'none';
        handlers.forEach((h, type) => {
            document.removeEventListener(type, h, { capture: true });
        });
        handlers.clear();
    }

    if (!engineActive) {
        enableBlockers();
    } else {
        // Start game engine by default
        GameControl.start(path);
        disableBlockers();
    }

    // Track live Adventure engine instance (from code runner)
    let liveAdventure = null;

    // Expose simple control handling for parent pages via postMessage
    let isPaused = false;
    window.addEventListener('message', (event) => {
        const data = event?.data;
        if (!data || data.type !== 'rpg:control') return;
        const action = data.action;
        try {
            switch (action) {
                case 'start':
                    if (document.documentElement.classList.contains('embedded')) {
                        // In embedded/live mode, parent will send rpg:run-code. No default turtle.
                        // Keep blockers until code arrives.
                        engineActive = false;
                        enableBlockers();
                        isPaused = false;
                    } else {
                        if (typeof GameControl.stop === 'function') {
                            try { GameControl.stop(); } catch (e) {}
                        }
                        GameControl.start(path);
                        engineActive = true;
                        disableBlockers();
                        isPaused = false;
                    }
                    break;
                case 'pause':
                    if (liveAdventure && liveAdventure.gameControl && typeof liveAdventure.gameControl.pause === 'function') {
                        liveAdventure.gameControl.pause();
                        isPaused = true;
                    } else if (typeof GameControl.pause === 'function') {
                        GameControl.pause();
                        isPaused = true;
                    }
                    break;
                case 'resume':
                    if (liveAdventure && liveAdventure.gameControl && typeof liveAdventure.gameControl.resume === 'function') {
                        liveAdventure.gameControl.resume();
                        isPaused = false;
                    } else if (typeof GameControl.resume === 'function') {
                        GameControl.resume();
                        isPaused = false;
                    }
                    break;
                case 'stop':
                    // For consistency and clean teardown, reload.
                    location.reload();
                    engineActive = false;
                    // Ensure black screen and block all input
                    enableBlockers();
                    break;
                case 'reset':
                    // Reload resets the canvas/game state safely
                    location.reload();
                    break;
            }
        } catch (err) {
            console.error('Runner control error:', err);
        }
    });

    // Live code runner: accept code string, dynamic-import, and start engine
    window.addEventListener('message', async (event) => {
        const data = event?.data;
        if (!data || data.type !== 'rpg:run-code') return;
        let code = String(data.code || '');
        if (!code.trim()) return;
        try {
            // Show blockers during load
            enableBlockers();
            engineActive = false;

            // Rewrite absolute import specifiers (e.g., '/assets/...') to fully-qualified URLs
            const origin = window.location.origin;
            const basePrefix = `${origin}${path || ''}`;
            const fromAbsRe = /(from\s*["'])(\/[^"']+)(["'])/g; // import ... from '/x/y'
            const dynImpRe = /(import\(\s*["'])(\/[^"']+)(["']\s*\))/g; // import('/x/y')
            code = code
                .replace(fromAbsRe, (m, p1, p2, p3) => {
                    return `${p1}${basePrefix}${p2}${p3}`;
                })
                .replace(dynImpRe, (m, p1, p2, p3) => {
                    return `${p1}${basePrefix}${p2}${p3}`;
                });

            // Create module blob and import
            const blob = new Blob([code], { type: 'application/javascript' });
            const url = URL.createObjectURL(blob);
            let mod = null;
            try {
                mod = await import(url);
            } finally {
                URL.revokeObjectURL(url);
            }

            // Prepare environment references
            const env = {
                path,
                gameContainer: document.getElementById('gameContainer'),
                gameCanvas: document.getElementById('gameCanvas'),
                pythonURI: '',
                javaURI: '',
                fetchOptions: {}
            };

            const levelClasses = Array.isArray(mod.gameLevelClasses) ? mod.gameLevelClasses : [];

            let started = false;
            // Preferred: Use Adventure Game engine entrypoint with provided levels
            if (levelClasses.length > 0 && AdventureGame && typeof AdventureGame.main === 'function') {
                try {
                    liveAdventure = AdventureGame.main({
                        path: env.path,
                        gameContainer: env.gameContainer,
                        gameCanvas: env.gameCanvas,
                        pythonURI: env.pythonURI,
                        javaURI: env.javaURI,
                        fetchOptions: env.fetchOptions,
                        gameLevelClasses: levelClasses
                    });
                    started = true;
                } catch (e) {
                    console.warn('Adventure Game main failed, trying fallbacks:', e);
                }
            }

            // Fallback: object-literal GameControl with start(path) from the module
            if (!started && mod.GameControl && typeof mod.GameControl.start === 'function') {
                try {
                    mod.GameControl.start(path);
                    started = true;
                } catch (e) {
                    console.warn('Fallback start failed:', e);
                }
            }

            if (started) {
                engineActive = true;
                disableBlockers();
            } else {
                throw new Error('Could not start game from provided code. Ensure it exports GameControl and gameLevelClasses.');
            }
            }
        catch (err) {
            console.error('Live code run error:', err);
            // Show error via custom alert overlay if available
            try {
                const el = document.getElementById('custom-alert');
                const msgBtn = document.getElementById('custom-alert-message');
                if (el && msgBtn) {
                    msgBtn.textContent = `Error: ${err.message || err}`;
                    el.style.display = 'block';
                    // also keep blockers on to ensure black screen
                    enableBlockers();
                }
            } catch (_) {}
        }
    });
</script>
