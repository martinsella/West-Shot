class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.texture);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.scene.events.on("update", this.update, this);
    this.setScale(0.25).setSize(430, 660).setCollideWorldBounds(true);
  }

  update() {
    if (cursors.left.isDown) {
      player.anims.play("playerLeft", true).setVelocityX(-150);
    } else if (cursors.right.isDown) {
      player.anims.play("playerRight", true).setVelocityX(150);
    } else {
      player.anims.play("playerStop", true).setVelocityX(0);
    }
  }
}

export default Player;
