/**
 * The GameObject class serves as a base class for all game objects.
 * It mimics an interface by defining abstract methods that must be implemented
 * by any subclass. This ensures that all game objects have a consistent interfaces
 * and can be managed uniformly within GameControl.js.
 * 
 * @class GameObject
 * @method draw - Draws the object on the canvas. Must be implemented by subclasses.
 * @method update - Updates the object's state. Must be implemented by subclasses.
 * @method resize - Resizes the object based on the canvas size. Must be implemented by subclasses.
 * @method destroy - Removes the object from the game environment. Must be implemented by subclasses.
 * @method collisionChecks - Checks for collisions with other game objects.
 * @method isCollision - Detects collisions with other game objects.
 * @method handleCollisionEvent - Updates the collisions array when player is touching the object.
 * @method handleReaction - Handles player reaction / state updates to the collision.
 */
class GameObject {
    
    constructor(gameEnv = null) {
        if (new.target === GameObject) {
            throw new TypeError("Cannot construct GameObject instances directly");
        }
        this.gameEnv = gameEnv; 
        this.collisionWidth = 0;
        this.collisionHeight = 0;
        this.collisionData = {};
        this.hitbox = {};
        this.state = {
            collisionEvents: [],
            movement: { up: true, down: true, left: true, right: true },
        };
    }

    /**
     * Updates the object's state.
     * This method must be implemented by subclasses.
     * @abstract
     */
    update() {
        throw new Error("Method 'update()' must be implemented.");
    }

    /**
     * Draws the object on the canvas.
     * This method must be implemented by subclasses.
     * @abstract
     */
    draw() {
        throw new Error("Method 'draw()' must be implemented.");
    }

    /**
     * Resizes the object based on the canvas size.
     * This method must be implemented by subclasses.
     * @abstract
     */
    resize() {
        throw new Error("Method 'resize()' must be implemented.");
    }

    /**
     * Removes the object from the game environment.
     * This method must be implemented by subclasses.
     * @abstract
     */
    destroy() {
        throw new Error("Method 'destroy()' must be implemented.");
    }

    /** Collision checks
     * uses Player isCollision to detect hit
     * calls collisionAction on hit
     */
    collisionChecks() {
        let collisionDetected = false;

        for (var gameObj of this.gameEnv.gameObjects) {
            if (gameObj.canvas && this != gameObj) {
                this.isCollision(gameObj);
                if (this.collisionData.hit) {
                    collisionDetected = true;
                    this.handleCollisionEvent();
                }
            }
        }

        // Reset collision events if no collisions detected
        if (!collisionDetected) {
            this.state.collisionEvents = [];
        }
    }

    /** Collision detection method
     * usage: if (object.isCollision(platform)) { // action }
     */
    isCollision(other) {
        // Bounding rectangles from Canvas
        const thisRect = this.canvas.getBoundingClientRect();
        const otherRect = other.canvas.getBoundingClientRect();

        // Calculate hitbox constants for this object
        const thisWidthReduction = thisRect.width * (this.hitbox?.widthPercentage || 0.0);
        const thisHeightReduction = thisRect.height * (this.hitbox?.heightPercentage || 0.0);

        // Calculate hitbox constants for other object
        const otherWidthReduction = otherRect.width * (other.hitbox?.widthPercentage || 0.0);
        const otherHeightReduction = otherRect.height * (other.hitbox?.heightPercentage || 0.0);

        // Build hitbox by subtracting reductions from the left, right, and top
        const thisLeft = thisRect.left + thisWidthReduction;
        const thisTop = thisRect.top + thisHeightReduction;
        const thisRight = thisRect.right - thisWidthReduction;
        const thisBottom = thisRect.bottom;

        const otherLeft = otherRect.left + otherWidthReduction;
        const otherTop = otherRect.top + otherHeightReduction;
        const otherRight = otherRect.right - otherWidthReduction;
        const otherBottom = otherRect.bottom;

        // Determine hit and touch points of hit
        let hit = (
            thisLeft < otherRight &&
            thisRight > otherLeft &&
            thisTop < otherBottom &&
            thisBottom > otherTop
        );

        // Clamp suggestion used by pass-zone logic; must be function-scoped
        let clamp = null;

        // Pass-zone logic: treat union of blue rectangles as walkable area inside the red barrier
        if (hit && other && other.spriteData && Array.isArray(other.spriteData.passZones) && other.spriteData.passZones.length > 0) {
            const playerCenterX = (thisLeft + thisRight) / 2;
            const playerCenterY = (thisTop + thisBottom) / 2;
            const barrierOriginX = otherLeft;
            const barrierOriginY = otherTop;

            // Movement intent: prefer keypress; fallback to velocity sign
            const movingLeft = (this.pressedKeys && this.keypress) ? !!this.pressedKeys[this.keypress.left] : this.transform.xv < 0;
            const movingRight = (this.pressedKeys && this.keypress) ? !!this.pressedKeys[this.keypress.right] : this.transform.xv > 0;
            const movingUp = (this.pressedKeys && this.keypress) ? !!this.pressedKeys[this.keypress.up] : this.transform.yv < 0;
            const movingDown = (this.pressedKeys && this.keypress) ? !!this.pressedKeys[this.keypress.down] : this.transform.yv > 0;

            // Project a small step in the intended direction and evaluate zones
            const epsStep = 2;
            const dx = movingRight ? epsStep : (movingLeft ? -epsStep : 0);
            const dy = movingDown ? epsStep : (movingUp ? -epsStep : 0);
            const targetCX = playerCenterX + dx;
            const targetCY = playerCenterY + dy;

            const pointInZone = (z, x, y) => {
                const zx = barrierOriginX + (Number(z.x) || 0);
                const zy = barrierOriginY + (Number(z.y) || 0);
                const zw = Number(z.width) || 0;
                const zh = Number(z.height) || 0;
                return x >= zx && x <= zx + zw && y >= zy && y <= zy + zh;
            };

            const rectsIntersect = (ax, ay, aw, ah, bx, by, bw, bh) => (
                ax < bx + bw && ax + aw > bx && ay < by + bh && ay + ah > by
            );

            // Intersection rectangle between player and barrier hitboxes
            const interLeft = Math.max(thisLeft, otherLeft);
            const interTop = Math.max(thisTop, otherTop);
            const interRight = Math.min(thisRight, otherRight);
            const interBottom = Math.min(thisBottom, otherBottom);
            const interW = Math.max(0, interRight - interLeft);
            const interH = Math.max(0, interBottom - interTop);

            const zones = other.spriteData.passZones;
            const currentZone = zones.find(z => pointInZone(z, playerCenterX, playerCenterY));
            const nextZone = zones.find(z => pointInZone(z, targetCX, targetCY));
            // Also allow entry when the intersection region overlaps any zone (helps on edges)
            const interOverlapsZone = interW > 0 && interH > 0 && zones.some(z => {
                const zx = barrierOriginX + (Number(z.x) || 0);
                const zy = barrierOriginY + (Number(z.y) || 0);
                const zw = Number(z.width) || 0;
                const zh = Number(z.height) || 0;
                return rectsIntersect(interLeft, interTop, interW, interH, zx, zy, zw, zh);
            });

            let suppressCollision = false;

            if (currentZone) {
                if (nextZone) {
                    // Moving within blue or into adjacent blue: allow
                    suppressCollision = true;
                } else {
                    // Clamp to stay within currentZone bounds
                    const zx = barrierOriginX + (Number(currentZone.x) || 0);
                    const zy = barrierOriginY + (Number(currentZone.y) || 0);
                    const zw = Number(currentZone.width) || 0;
                    const zh = Number(currentZone.height) || 0;
                    const eps = 0.5;
                    let clampX = null;
                    let clampY = null;
                    if (movingLeft && thisLeft < zx) {
                        clampX = this.transform.x + (zx - thisLeft) + eps;
                    } else if (movingRight && thisRight > zx + zw) {
                        clampX = this.transform.x + ((zx + zw) - thisRight) - eps;
                    }
                    if (movingUp && thisTop < zy) {
                        clampY = this.transform.y + (zy - thisTop) + eps;
                    } else if (movingDown && thisBottom > zy + zh) {
                        clampY = this.transform.y + ((zy + zh) - thisBottom) - eps;
                    }
                    clamp = { x: clampX, y: clampY };
                }
            } else {
                // Outside any blue zone center; allow entry if next center is inside a zone
                // OR if the current intersection overlaps a pass zone (edge entry)
                if (nextZone || interOverlapsZone) {
                    suppressCollision = true;
                }
            }

            if (suppressCollision) {
                hit = false;
            }
        }

        const touchPoints = {
            this: {
                id: this.canvas.id,
                greet: this.spriteData?.greeting || 'Hello',
                top: thisBottom > otherTop && thisTop < otherTop,
                bottom: thisTop < otherBottom && thisBottom > otherBottom,
                left: thisRight > otherLeft && thisLeft < otherLeft,
                right: thisLeft < otherRight && thisRight > otherRight,
            },
            other: {
                id: other.canvas.id,
                greet: other.spriteData?.greeting || 'Hello',
                reaction: other.spriteData?.reaction || null,
                top: otherBottom > thisTop && otherTop < thisTop,
                bottom: otherTop < thisBottom && otherBottom > thisBottom,
                left: otherRight > thisLeft && otherLeft < thisLeft,
                right: otherLeft < thisRight && otherRight > thisRight,
            },
        };

        this.collisionData = { hit, touchPoints };
        if (clamp) {
            this.collisionData.clamp = clamp;
        }
    }

    /**
     * Update the collisions array when player is touching the object
     * @param {*} objectID 
     */
    handleCollisionEvent() {
        const objectOther = this.collisionData.touchPoints.other;
        // check if the collision type is not already in the collisions array
        if (!this.state.collisionEvents.includes(objectOther.id)) {
            // add the collisionType to the collisions array, making it the current collision
            this.state.collisionEvents.push(objectOther.id);
            this.handleCollisionReaction(objectOther);
        }
        this.handleCollisionState();
    }

    /**
     * Handles the reaction to the collision, updated to use dialogue (from end team hack)
     * @param {*} other 
     */
    handleCollisionReaction(other) {
    // First check if reaction is a function that can be called
        if (other && other.reaction && typeof other.reaction === "function") {
            other.reaction();
            return;
        }
        
        // If the object has a dialogueSystem, use it instead of console.log
        if (other && other.id) {
            // Try to find the object instance to use its dialogueSystem
            const targetObject = this.gameEnv.gameObjects.find(obj => 
                obj.spriteData && obj.spriteData.id === other.id
            );
            
            if (targetObject && targetObject.dialogueSystem) {
                targetObject.showReactionDialogue();
            } else if (targetObject && targetObject.showItemMessage) {
                targetObject.showItemMessage();
            } else if (other.greeting) {
                // Fallback to greeting if available
                console.log(other.greeting);
            }
        }
    }

    /**
     * Handles Player state updates related to the collision
     */
    handleCollisionState() {
        // handle player reaction based on collision type
        if (this.state.collisionEvents.length > 0) {
            const touchPoints = this.collisionData.touchPoints.this;
            const clamp = this.collisionData.clamp;

            // Reset movement to allow all directions initially
            this.state.movement = { up: true, down: true, left: true, right: true };

            if (touchPoints.top) {
                this.state.movement.down = false;
                if (this.transform.yv > 0) {
                    this.transform.yv = 0;
                }
            }

            if (touchPoints.bottom) {
                this.state.movement.up = false;
                if (this.transform.yv < 0) {
                    this.transform.yv = 0;
                }
            }

            if (touchPoints.right) {
                this.state.movement.left = false;
                if (this.transform.xv < 0) {
                    this.transform.xv = 0;
                }
            }

            if (touchPoints.left) {
                this.state.movement.right = false;
                if (this.transform.xv > 0) {
                    this.transform.xv = 0;
                }
            }

            // If a clamp position is provided (from pass-zone boundaries), apply it
            if (clamp) {
                if (clamp.x !== null && clamp.x !== undefined && Number.isFinite(clamp.x)) {
                    this.transform.x = clamp.x;
                    this.transform.xv = 0;
                }
                if (clamp.y !== null && clamp.y !== undefined && Number.isFinite(clamp.y)) {
                    this.transform.y = clamp.y;
                    this.transform.yv = 0;
                }
            }
        }
    }
}

export default GameObject;