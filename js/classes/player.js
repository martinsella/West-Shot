class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.texture);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.scene.events.on("update", this.update, this);
    this.setScale(0.35).setSize(430, 660).setCollideWorldBounds(true);
  }

  update() {
    playerFrame = player.anims.currentFrame.frame.name;
    playerAnim = player.anims.currentAnim.key;
    if (playerShoot == false && cursors !== undefined && cursors.left.isDown) {
      player.anims.play("playerLeft", true).setVelocityX(-150);
    } else if (playerShoot == false && cursors !== undefined && cursors.right.isDown) {
      player.anims.play("playerRight", true).setVelocityX(150);
    } else if (cursors !== undefined && game.input.mousePointer.isDown || playerShoot == true) {
      player.anims.play("playerShoot", true).setVelocityX(0);
      playerShoot = true;
    } else {
      player.anims.play("playerStop", true).setVelocityX(0);
    }
    if (playerFrame == 43) {
      playerShoot = false;
    }
  }
}

export default Player;
