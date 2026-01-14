import Character from './Character.js';

/**
 * Wall is a simple rectangular collider drawn as a canvas element.
 * It uses the base collision handling in GameObject to block movement
 * when the player (or any moving Character) intersects it.
 */
class Wall extends Character {
  constructor(data = null, gameEnv = null) {
    // Expect data: { id, INIT_POSITION: {x,y}, pixels: {width,height}, hitbox?, fillStyle?, zIndex? }
    super(data, gameEnv);
    // Ensure no sprite sheet is used; drawDefaultSquare renders the rectangle
    this.spriteSheet = null;
    this.spriteReady = false;
    // Default visual style for walls if not provided
    this.data.fillStyle = this.data.fillStyle || 'rgba(255, 215, 0, 0.35)';
    // Full collision area by default
    this.hitbox = this.data.hitbox || { widthPercentage: 0.0, heightPercentage: 0.0 };
  }

  update() {
    // Draw static rectangle and run collision checks so movement is constrained
    this.draw();
    this.collisionChecks();
  }

  // Character.draw handles default square drawing and canvas placement
}

export default Wall;
