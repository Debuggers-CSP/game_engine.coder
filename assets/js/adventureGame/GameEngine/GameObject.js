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
     * Final safeguard: resolve any residual overlaps after movement.
     * Uses engine-space AABB minimal-overlap separation independent of velocity.
     */
    resolvePenetrations() {
        if (!this.gameEnv || !this.gameEnv.gameObjects) return;
        const selfW = (this.width ?? this.canvas?.width ?? 0);
        const selfH = (this.height ?? this.canvas?.height ?? 0);
        for (const other of this.gameEnv.gameObjects) {
            if (!other || other === this || !other.canvas) continue;
            // Compute current bounds
            const thisW = selfW;
            const thisH = selfH;
            const otherW = (other.width ?? other.canvas?.width ?? 0);
            const otherH = (other.height ?? other.canvas?.height ?? 0);
            const thisX = this.transform?.x ?? 0;
            const thisY = this.transform?.y ?? 0;
            const otherX = other.transform?.x ?? 0;
            const otherY = other.transform?.y ?? 0;

            const thisWidthReduction = thisW * (this.hitbox?.widthPercentage || 0.0);
            const thisHeightReduction = thisH * (this.hitbox?.heightPercentage || 0.0);
            const otherWidthReduction = otherW * (other.hitbox?.widthPercentage || 0.0);
            const otherHeightReduction = otherH * (other.hitbox?.heightPercentage || 0.0);

            const thisLeft = thisX + thisWidthReduction;
            const thisTop = thisY + thisHeightReduction;
            const thisRight = thisX + thisW - thisWidthReduction;
            const thisBottom = thisY + thisH;
            const otherLeft = otherX + otherWidthReduction;
            const otherTop = otherY + otherHeightReduction;
            const otherRight = otherX + otherW - otherWidthReduction;
            const otherBottom = otherY + otherH;

            const hit = (
                thisLeft < otherRight &&
                thisRight > otherLeft &&
                thisTop < otherBottom &&
                thisBottom > otherTop
            );
            if (!hit) continue;

            const SEP_EPS = 1;
            const dxRight = Math.max(0, thisRight - otherLeft);
            const dxLeft = Math.max(0, otherRight - thisLeft);
            const dyBottom = Math.max(0, thisBottom - otherTop);
            const dyTop = Math.max(0, otherBottom - thisTop);
            const overlapX = Math.min(dxRight, dxLeft);
            const overlapY = Math.min(dyBottom, dyTop);

            if (overlapX <= overlapY) {
                if (dxRight <= dxLeft) {
                    this.transform.x -= (dxRight + SEP_EPS);
                    this.state.movement.right = false;
                    if (this.transform.xv > 0) this.transform.xv = 0;
                } else {
                    this.transform.x += (dxLeft + SEP_EPS);
                    this.state.movement.left = false;
                    if (this.transform.xv < 0) this.transform.xv = 0;
                }
            } else {
                if (dyBottom <= dyTop) {
                    this.transform.y -= (dyBottom + SEP_EPS);
                    this.state.movement.down = false;
                    if (this.transform.yv > 0) this.transform.yv = 0;
                } else {
                    this.transform.y += (dyTop + SEP_EPS);
                    this.state.movement.up = false;
                    if (this.transform.yv < 0) this.transform.yv = 0;
                }
            }
        }
        // Bounds clamp at the end
        const w = (this.width ?? this.canvas?.width ?? 0);
        const h = (this.height ?? this.canvas?.height ?? 0);
        this.transform.x = Math.max(0, Math.min(this.transform.x, this.gameEnv.innerWidth - w));
        this.transform.y = Math.max(0, Math.min(this.transform.y, this.gameEnv.innerHeight - h));
    }

    /**
     * Preemptively stop movement if the next step would collide with a barrier.
     * Uses engine-space AABB on predicted next position.
     */
    preemptCollisionStop() {
        if (!this.gameEnv || !this.gameEnv.gameObjects) return;
        const nextX = (this.transform?.x ?? 0) + (this.transform?.xv ?? 0);
        const nextY = (this.transform?.y ?? 0) + (this.transform?.yv ?? 0);
        const w = (this.width ?? this.canvas?.width ?? 0);
        const h = (this.height ?? this.canvas?.height ?? 0);
        const thisWidthReduction = w * (this.hitbox?.widthPercentage || 0.0);
        const thisHeightReduction = h * (this.hitbox?.heightPercentage || 0.0);

        const nLeft = nextX + thisWidthReduction;
        const nTop = nextY + thisHeightReduction;
        const nRight = nextX + w - thisWidthReduction;
        const nBottom = nextY + h;

        for (const other of this.gameEnv.gameObjects) {
            if (!other || other === this || !other.canvas) continue;
            // Heuristic: barriers have spriteData.passZones defined
            const isBarrier = !!(other.spriteData && other.spriteData.passZones !== undefined);
            if (!isBarrier) continue;
            const ow = (other.width ?? other.canvas?.width ?? 0);
            const oh = (other.height ?? other.canvas?.height ?? 0);
            const ox = other.transform?.x ?? 0;
            const oy = other.transform?.y ?? 0;
            const oWidthReduction = ow * (other.hitbox?.widthPercentage || 0.0);
            const oHeightReduction = oh * (other.hitbox?.heightPercentage || 0.0);
            const oLeft = ox + oWidthReduction;
            const oTop = oy + oHeightReduction;
            const oRight = ox + ow - oWidthReduction;
            const oBottom = oy + oh;

            const willHit = (nLeft < oRight && nRight > oLeft && nTop < oBottom && nBottom > oTop);
            if (!willHit) continue;

            // Stop components that push into the barrier
            if (this.transform.xv > 0 && (nRight > oLeft) && ((this.transform.x + w - thisWidthReduction) <= oLeft)) {
                this.transform.xv = 0;
                this.state.movement.right = false;
                // Clamp flush against left side
                this.transform.x = oLeft - (w - thisWidthReduction);
            } else if (this.transform.xv < 0 && (nLeft < oRight) && ((this.transform.x + thisWidthReduction) >= oRight)) {
                this.transform.xv = 0;
                this.state.movement.left = false;
                // Clamp flush against right side
                this.transform.x = oRight - thisWidthReduction;
            }

            if (this.transform.yv > 0 && (nBottom > oTop) && ((this.transform.y + h) <= oTop)) {
                this.transform.yv = 0;
                this.state.movement.down = false;
                // Clamp flush above top side
                this.transform.y = oTop - h;
            } else if (this.transform.yv < 0 && (nTop < oBottom) && ((this.transform.y + thisHeightReduction) >= oBottom)) {
                this.transform.yv = 0;
                this.state.movement.up = false;
                // Clamp flush below bottom side
                this.transform.y = oBottom - thisHeightReduction;
            }
        }
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
        // Reset movement each frame; collisions will selectively block
        this.state.movement = { up: true, down: true, left: true, right: true };

        for (var gameObj of this.gameEnv.gameObjects) {
            if (gameObj.canvas && this != gameObj) {
                this.isCollision(gameObj);
                if (this.collisionData.hit) {
                    collisionDetected = true;
                    this.handleCollisionEvent();
                }
            }
        }

        // Reset collision events and ensure movement remains unblocked when clear
        if (!collisionDetected) {
            this.state.collisionEvents = [];
            this.state.movement = { up: true, down: true, left: true, right: true };
        }
    }

    /** Collision detection method
     * usage: if (object.isCollision(platform)) { // action }
     */
    isCollision(other) {
        // Prefer engine-space bounds (faster, scale-agnostic)
        const thisW = (this.width ?? this.canvas?.width ?? 0);
        const thisH = (this.height ?? this.canvas?.height ?? 0);
        const otherW = (other.width ?? other.canvas?.width ?? 0);
        const otherH = (other.height ?? other.canvas?.height ?? 0);

        const thisX = this.transform?.x ?? 0;
        const thisY = this.transform?.y ?? 0;
        const otherX = other.transform?.x ?? 0;
        const otherY = other.transform?.y ?? 0;

        const thisWidthReduction = thisW * (this.hitbox?.widthPercentage || 0.0);
        const thisHeightReduction = thisH * (this.hitbox?.heightPercentage || 0.0);
        const otherWidthReduction = otherW * (other.hitbox?.widthPercentage || 0.0);
        const otherHeightReduction = otherH * (other.hitbox?.heightPercentage || 0.0);

        const thisLeft = thisX + thisWidthReduction;
        const thisTop = thisY + thisHeightReduction;
        const thisRight = thisX + thisW - thisWidthReduction;
        const thisBottom = thisY + thisH; // preserve original bottom behavior

        const otherLeft = otherX + otherWidthReduction;
        const otherTop = otherY + otherHeightReduction;
        const otherRight = otherX + otherW - otherWidthReduction;
        const otherBottom = otherY + otherH;

        // Hit test in engine coordinates
        const hit = (
            thisLeft < otherRight &&
            thisRight > otherLeft &&
            thisTop < otherBottom &&
            thisBottom > otherTop
        );

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

        this.collisionData = {
            hit,
            touchPoints,
            bounds: {
                this: { left: thisLeft, top: thisTop, right: thisRight, bottom: thisBottom, w: thisW, h: thisH },
                other: { left: otherLeft, top: otherTop, right: otherRight, bottom: otherBottom, w: otherW, h: otherH }
            }
        };
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
            // Do not reset movement here; it is reset at frame start in collisionChecks().

            // Robust separation: resolve minimal overlap on primary axis using engine-space bounds
            const b2 = this.collisionData?.bounds;
            if (b2 && b2.this && b2.other) {
                const SEP_EPS = 1; // separation epsilon to avoid sticky re-collisions
                const dxRight = Math.max(0, b2.this.right - b2.other.left);
                const dxLeft = Math.max(0, b2.other.right - b2.this.left);
                const dyBottom = Math.max(0, b2.this.bottom - b2.other.top);
                const dyTop = Math.max(0, b2.other.bottom - b2.this.top);
                const overlapX = Math.min(dxRight, dxLeft);
                const overlapY = Math.min(dyBottom, dyTop);

                // Proactively block adding velocity into the collided sides
                if (dxRight > 0 && this.transform.xv > 0) { this.state.movement.right = false; this.transform.xv = 0; }
                if (dxLeft > 0 && this.transform.xv < 0) { this.state.movement.left = false; this.transform.xv = 0; }
                if (dyBottom > 0 && this.transform.yv > 0) { this.state.movement.down = false; this.transform.yv = 0; }
                if (dyTop > 0 && this.transform.yv < 0) { this.state.movement.up = false; this.transform.yv = 0; }

                if (overlapX > 0 || overlapY > 0) {
                    if (overlapX <= overlapY) {
                        // Separate horizontally
                        if (this.transform.xv > 0) {
                            this.transform.x -= (dxRight + SEP_EPS); // moving right, push left
                            this.state.movement.right = false;
                        } else if (this.transform.xv < 0) {
                            this.transform.x += (dxLeft + SEP_EPS); // moving left, push right
                            this.state.movement.left = false;
                        } else {
                            // No velocity: choose nearest side
                            if (dxRight <= dxLeft) { this.transform.x -= (dxRight + SEP_EPS); this.state.movement.right = false; }
                            else { this.transform.x += (dxLeft + SEP_EPS); this.state.movement.left = false; }
                        }
                        // Stop horizontal motion
                        this.transform.xv = 0;
                    } else {
                        // Separate vertically
                        if (this.transform.yv > 0) {
                            this.transform.y -= (dyBottom + SEP_EPS); // moving down, push up
                            this.state.movement.down = false;
                        } else if (this.transform.yv < 0) {
                            this.transform.y += (dyTop + SEP_EPS); // moving up, push down
                            this.state.movement.up = false;
                        } else {
                            // No velocity: choose nearest side
                            if (dyBottom <= dyTop) { this.transform.y -= (dyBottom + SEP_EPS); this.state.movement.down = false; }
                            else { this.transform.y += (dyTop + SEP_EPS); this.state.movement.up = false; }
                        }
                        // Stop vertical motion
                        this.transform.yv = 0;
                    }
                    // Clamp final position within bounds
                    const w = (this.width ?? this.canvas?.width ?? 0);
                    const h = (this.height ?? this.canvas?.height ?? 0);
                    this.transform.x = Math.max(0, Math.min(this.transform.x, this.gameEnv.innerWidth - w));
                    this.transform.y = Math.max(0, Math.min(this.transform.y, this.gameEnv.innerHeight - h));
                }
            }

        }
    }
}

export default GameObject;