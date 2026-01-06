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

    // Expose simple control handling for parent pages via postMessage
    let isPaused = false;
    window.addEventListener('message', (event) => {
        const data = event?.data;
        if (!data || data.type !== 'rpg:control') return;
        const action = data.action;
        try {
            switch (action) {
                case 'start':
                    if (typeof GameControl.stop === 'function') {
                        try { GameControl.stop(); } catch (e) {}
                    }
                    GameControl.start(path);
                    engineActive = true;
                    disableBlockers();
                    isPaused = false;
                    break;
                case 'pause':
                    if (typeof GameControl.pause === 'function') {
                        GameControl.pause();
                        isPaused = true;
                    }
                    break;
                case 'resume':
                    if (typeof GameControl.resume === 'function') {
                        GameControl.resume();
                        isPaused = false;
                    }
                    break;
                case 'stop':
                    if (typeof GameControl.stop === 'function') {
                        GameControl.stop();
                    } else {
                        location.reload();
                    }
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
</script>
