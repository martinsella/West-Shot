class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.texture);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.scene.events.on("update", this.update, this);
    this.setScale(0.7).setSize(40, 350);
  }

  update() {
    if (walk == true) {
      player.anims.play("playerRight", true).setVelocityX(150);
    } else if (walk == false && playerShoot == true) {
      player.anims.play("playerShoot", true);
    } else if (playerHealth !== 0) {
      player.anims.play("playerStop", true).setVelocityX(0);
    }
    if (player.anims.currentFrame.frame.name == 29 && player.anims.currentAnim.key == "playerShoot") {
      playerShoot = false;
    }
    if (b_key !== undefined && whatKey !== undefined && keyW.isDown) {
      if (whatKey == "w") {
        b_key.setTexture("b_" + whatKey + "_true");
        playerShoot = true;
      } else {
        b_key.setTexture("b_" + whatKey + "_false");
      }
      whatKey = undefined;
    }
    if (b_key !== undefined && whatKey !== undefined && keyA.isDown) {
      if (whatKey == "a") {
        b_key.setTexture("b_" + whatKey + "_true");
        playerShoot = true;
      } else {
        b_key.setTexture("b_" + whatKey + "_false");
      }
      whatKey = undefined;
    }
    if (b_key !== undefined && whatKey !== undefined && keyS.isDown) {
      if (whatKey == "s") {
        b_key.setTexture("b_" + whatKey + "_true");
        playerShoot = true;
      } else {
        b_key.setTexture("b_" + whatKey + "_false");
      }
      whatKey = undefined;
    }
    if (b_key !== undefined && whatKey !== undefined && keyD.isDown) {
      if (whatKey == "d") {
        b_key.setTexture("b_" + whatKey + "_true");
        playerShoot = true;
      } else {
        b_key.setTexture("b_" + whatKey + "_false");
      }
      whatKey = undefined;
    }
  }
}

export function playerMov() {
  //controls and movements assignment.
  pattern = Phaser.Math.FloatBetween(0, 1);
  if (pattern < 0.25) {
    whatKey = "w"
    b_key = this.add.image(185, 720, "b_w");
  } else if (pattern >= 0.25 && pattern < 0.50) {
    whatKey = "a"
    b_key = this.add.image(185, 720, "b_a");
  } else if (pattern >= 0.50 && pattern < 0.75) {
    whatKey = "s"
    b_key = this.add.image(185, 720, "b_s");
  } else {
    whatKey = "d"
    b_key = this.add.image(185, 720, "b_d");
  }
    this.time.addEvent({
      delay: 1500,
      callback: keyDestroy,
    callbackScope: this,
    loop: false,
  });
}

export function keyDestroy() {
  b_key.destroy();
  b_key = undefined;
}

export default Player;
