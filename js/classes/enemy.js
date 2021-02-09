class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.texture);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.scene.events.on("update", this.update, this);
    this.setScale(0.25).setSize(430, 660).setCollideWorldBounds(true);
  }

  update() {
    if (pattern <= 0.35) {
      enemy.anims.play("enemyLeft", true).setVelocityX(-150);
    } else if (pattern > 0.35 && pattern <= 0.7) {
      enemy.anims.play("enemyRight", true).setVelocityX(150);
    } else {
      enemy.anims.play("enemyStop", true).setVelocityX(0);
    }
  }
}

export function enemyMov() {
  pattern = Phaser.Math.FloatBetween(0, 1);
}

export default Enemy;
