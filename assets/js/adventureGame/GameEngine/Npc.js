// Npc.js with DialogueSystem integration
import Character from "./Character.js";
import DialogueSystem from "./DialogueSystem.js";

class Npc extends Character {
    constructor(data = null, gameEnv = null) {
        super(data, gameEnv);
        this.interact = data?.interact; // Interact function
        this.currentQuestionIndex = 0;
        this.alertTimeout = null;
        this.isInteracting = false; // Flag to track if currently interacting
        this.handleKeyDownBound = this.handleKeyDown.bind(this);
        this.handleKeyUpBound = this.handleKeyUp.bind(this);
        this.bindInteractKeyListeners();
        
        // IMPORTANT: Create a unique ID for each NPC to avoid conflicts
        this.uniqueId = data?.id + "_" + Math.random().toString(36).substr(2, 9);
        
        // IMPORTANT: Create a local dialogue system for this NPC specifically
        if (data?.dialogues) {
            this.dialogueSystem = new DialogueSystem({
                dialogues: data.dialogues,
                
                id: this.uniqueId
            });
        } else {
            // Create a default dialogue system with a greeting based on NPC data
            const greeting = data?.greeting || "Hello, traveler!";
            this.dialogueSystem = new DialogueSystem({
                dialogues: [
                    greeting, 
                    "Nice weather we're having, isn't it?",
                    "I've been standing here for quite some time."
                ],
                // Pass unique ID to prevent conflicts
                id: this.uniqueId
            });
        }
        
        // Register with game control for cleanup during transitions
        if (gameEnv && gameEnv.gameControl) {
            gameEnv.gameControl.registerInteractionHandler(this);
        }
    }

    update() {
        this.draw();
        // Check if player is still in collision - add null checks
        const players = this.gameEnv.gameObjects.filter(
            obj => obj && obj.state && obj.state.collisionEvents && obj.state.collisionEvents.includes(this.spriteData.id)
        );

        // UX: Show interact hint when player is near this NPC
        const nearby = this.isPlayerNearby();
        const playerObjs = this.getPlayerObjects();
        if (playerObjs && playerObjs.length) {
            for (const p of playerObjs) {
                if (nearby && typeof p.showInteractButton === 'function') {
                    p.showInteractButton();
                } else if (!nearby && typeof p.hideInteractButton === 'function') {
                    p.hideInteractButton();
                }
            }
        }
        
        // Reset interaction state if player moved away
        if (players.length === 0 && this.isInteracting) {
            this.isInteracting = false;
        }
    }

    bindInteractKeyListeners() {
        // Add event listeners for keydown and keyup
        document.addEventListener('keydown', this.handleKeyDownBound);
        document.addEventListener('keyup', this.handleKeyUpBound);
    }

    removeInteractKeyListeners() {
        // Remove event listeners to prevent memory leaks
        document.removeEventListener('keydown', this.handleKeyDownBound);
        document.removeEventListener('keyup', this.handleKeyUpBound);
        
        // Clear any pending timeouts
        if (this.alertTimeout) {
            clearTimeout(this.alertTimeout);
            this.alertTimeout = null;
        }
        
        // Close any open dialogue
        if (this.dialogueSystem && this.dialogueSystem.isDialogueOpen()) {
            this.dialogueSystem.closeDialogue();
        }
        
        // Reset interaction state
        this.isInteracting = false;
    }

    handleKeyDown(event) {
        // Robust E-key detection: accept 'e', 'E', and 'KeyE'.
        const isEKey = (event.key === 'e' || event.key === 'E' || event.code === 'KeyE');
        const isUKey = (event.key === 'u' || event.key === 'U');
        // Ignore if typing in inputs/textareas to avoid accidental triggers
        const tag = event.target && event.target.tagName;
        if (tag === 'INPUT' || tag === 'TEXTAREA') return;
        if (isEKey || isUKey) {
            this.handleKeyInteract();
        }
    }

    handleKeyUp(event) {
        const isEKey = (event.key === 'e' || event.key === 'E' || event.code === 'KeyE');
        const isUKey = (event.key === 'u' || event.key === 'U');
        if (isEKey || isUKey) {
            if (this.alertTimeout) {
                clearTimeout(this.alertTimeout);
                this.alertTimeout = null;
            }
        }
    }

    // Helper: find any player-like objects (heuristic: has keypress mapping)
    getPlayerObjects() {
        if (!this.gameEnv || !this.gameEnv.gameObjects) return [];
        return this.gameEnv.gameObjects.filter(obj => obj && obj.keypress);
    }

    // Helper: check if any player is currently colliding with this NPC
    isPlayerColliding() {
        if (!this.gameEnv || !this.gameEnv.gameObjects) return false;
        const colliders = this.gameEnv.gameObjects.filter(
            obj => obj && obj.state && obj.state.collisionEvents && obj.state.collisionEvents.includes(this.spriteData.id)
        );
        return colliders.length > 0;
    }

    // Helper: proximity check within a reasonable interaction radius
    isPlayerNearby() {
        const players = this.getPlayerObjects();
        if (!players.length) return false;

        const npcX = this.transform?.x ?? 0;
        const npcY = this.transform?.y ?? 0;
        const npcW = (this.width ?? this.canvas?.width ?? 0);
        const npcH = (this.height ?? this.canvas?.height ?? 0);
        const npcCx = npcX + npcW / 2;
        const npcCy = npcY + npcH / 2;

        // Interaction radius based on sprite size; minimum 40px
        const baseRadius = Math.max(40, Math.min(npcW, npcH));
        const radiusSq = baseRadius * baseRadius;

        for (const p of players) {
            const px = p.transform?.x ?? 0;
            const py = p.transform?.y ?? 0;
            const pw = (p.width ?? p.canvas?.width ?? 0);
            const ph = (p.height ?? p.canvas?.height ?? 0);
            const pCx = px + pw / 2;
            const pCy = py + ph / 2;
            const dx = npcCx - pCx;
            const dy = npcCy - pCy;
            if ((dx * dx + dy * dy) <= radiusSq) return true;
        }
        return false;
    }

    handleKeyInteract() {
        // Check if game is active - don't allow interactions during transitions
        if (this.gameEnv.gameControl && this.gameEnv.gameControl.isPaused) {
            return;
        }
        
        // Check if dialogue is already open - close it instead of opening new one
        if (this.dialogueSystem && this.dialogueSystem.isDialogueOpen()) {
            this.dialogueSystem.closeDialogue();
            return;
        }
        
        // Add null checks here too
        const isColliding = this.isPlayerColliding();
        const isNearby = this.isPlayerNearby();
        const hasInteract = (typeof this.interact === 'function');

        // Only trigger interaction if:
        // 1. Player is colliding OR within proximity radius
        // 2. NPC has an interact function
        // 3. Not already interacting
        if ((isColliding || isNearby) && !this.isInteracting) {
            this.isInteracting = true;
            
            if (hasInteract) {
                // Store a reference to this NPC's interact function
                const originalInteract = this.interact;
                // Execute the interact function
                originalInteract.call(this);
            } else {
                // Fallbacks: show dialogue when available
                if (this.dialogueSystem && Array.isArray(this.dialogueSystem.dialogues) && this.dialogueSystem.dialogues.length > 0) {
                    this.showRandomDialogue();
                } else if (this.spriteData?.greeting) {
                    this.showReactionDialogue();
                }
            }
            
            // Check if we're still in the same game level after interaction
            // This is important for transitions to other levels
            if (this.gameEnv && this.gameEnv.gameControl && 
                !this.gameEnv.gameControl.isPaused) {
                // Reset interaction state after a short delay
                // This prevents multiple rapid interactions
                setTimeout(() => {
                    this.isInteracting = false;
                }, 500);
            }
        }
    }
    
    // Method for showing reaction dialogue
    showReactionDialogue() {
        if (!this.dialogueSystem) return;
        
        // Get NPC name and avatar if available
        const npcName = this.spriteData?.id || "";
        const npcAvatar = this.spriteData?.src || null;
        
        // Show dialogue with greeting message
        const greeting = this.spriteData?.greeting || "Hello!";
        if (this.spriteData?.greeting == false){
            console.log("Greeting set to false!")
            return;
        }
        this.dialogueSystem.showDialogue(greeting, npcName, npcAvatar);
    }
    
    // Method for showing random interaction dialogue
    showRandomDialogue() {
        if (!this.dialogueSystem) return;
        
        // Get NPC name and avatar if available
        const npcName = this.spriteData?.id || "";
        const npcAvatar = this.spriteData?.src || null;
        
        // Show random dialogue
        this.dialogueSystem.showRandomDialogue(npcName, npcAvatar);
    }

    // Clean up event listeners when NPC is destroyed
    destroy() {
        // Unregister from game control
        if (this.gameEnv && this.gameEnv.gameControl) {
            this.gameEnv.gameControl.unregisterInteractionHandler(this);
        }
        
        this.removeInteractKeyListeners();
        super.destroy();
    }
}

export default Npc;