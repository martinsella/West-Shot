class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.texture);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.scene.events.on("update", this.update, this);
    this.setScale(0.35).setSize(430, 660).setCollideWorldBounds(true);
  }

  update() {
    enemyFrame = enemy.anims.currentFrame.frame.name;
    enemyAnim = enemy.anims.currentAnim.key;
    if (enemyShoot == false && pattern <= 0.25) {
      enemy.anims.play("enemyLeft", true).setVelocityX(-150);
    } else if (enemyShoot == false && pattern > 0.25 && pattern <= 0.50) {
      enemy.anims.play("enemyRight", true).setVelocityX(150);
    } else if (enemyShoot == false && pattern > 0.50 && pattern <= 0.75) {
      enemy.anims.play("enemyStop", true).setVelocityX(0);
    } else if (enemyShoot == false && pattern > 0.75 || enemyShoot == true) {
      enemy.anims.play("enemyShoot", true).setVelocityX(0);
      enemyShoot = true;
    }
    if (enemyFrame == 0) {
      enemyShoot = false;
    }
  }
}

export function enemyMov() {
  pattern = Phaser.Math.FloatBetween(0, 1);
}

export default Enemy;
