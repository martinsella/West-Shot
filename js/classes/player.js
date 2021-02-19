class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, config.texture);
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.scene.events.on("update", this.update, this);
    this.setScale(0.7).setSize(300, 350);
  }

  update() {
    if (walk == true) {
      player.anims.play("playerRight", true).setVelocityX(150);
    } else if (walk == false && playerShoot == true) {
      player.anims.play("playerShoot", true);
      playerShoot = true;
    } else {
      player.anims.play("playerStop", true).setVelocityX(0);
    }
    if (player.anims.currentFrame.frame.name == 29 && player.anims.currentAnim.key == "playerShoot") {
      playerShoot = false;
    }
    if (keyW !== undefined && keyW.isDown) {
      console.log('W');
      if (player.anims.currentAnim.key == "playerShoot" && enemy.anims.currentAnim.key == "enemyWalk") {
        b_key.setTexture("b_w_true");
      } else {
        b_key.setTexture("b_w_false");
      }
      keyW = undefined;
      playerShoot = true;
    }
    if (keyA !== undefined && keyA.isDown) {
      console.log('A');
      b_key.setTexture("b_a_true");
      keyA = undefined;
      playerShoot = true;
    }
    if (keyS !== undefined && keyS.isDown) {
      console.log('S');
      b_key.setTexture("b_s_true");
      keyS = undefined;
      playerShoot = true;
    }
    if (keyD !== undefined && keyD.isDown) {
      console.log('D');
      b_key.setTexture("b_d_true");
      keyD = undefined;
      playerShoot = true;
    }
  }
}

export function playerMov() {
  //controls and movements assignment.
  pattern = Phaser.Math.FloatBetween(0, 1);
  cursors = this.input.keyboard.createCursorKeys();
  if (pattern < 0.25) {
    b_key = this.add.image(175, 350, "b_w");
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  } else if (pattern >= 0.25 && pattern < 0.50) {
    b_key = this.add.image(175, 350, "b_a");
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  } else if (pattern >= 0.50 && pattern < 0.75) {
    b_key = this.add.image(175, 350, "b_s");
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  } else {
    b_key = this.add.image(175, 350, "b_d");
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
  }
}

export default Player;
