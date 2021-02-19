class Enemy extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.texture);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.scene.events.on("update", this.update, this);
    this.setScale(0.7).setSize(300, 350);
  }

  update() {
    if (walk == true) {
      enemy.anims.play("enemyLeft", true).setVelocityX(-150);
    } else if (pattern2 < 0.7) {
      enemy.anims.play("enemyShoot", true).setVelocityX(0);
      enemyShoot = true;
    } else if (pattern2 >= 0.7 && pattern2 <= 1) {
      enemy.anims.play("enemyStop", true).setVelocityX(0);
    }
    if (enemy.anims.currentFrame.frame.name == 0) {
      pattern2 = 2;
      enemy.anims.play("enemyStop", true);
    }
  }
}

export function enemyMov() {
  pattern2 = Phaser.Math.FloatBetween(0, 1);
}

export default Enemy;
