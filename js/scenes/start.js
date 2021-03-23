class start extends Phaser.Scene {
  constructor() {
    super("start");
  }
  create() {
    //player anims.
    this.anims.create({
      key: "main_walk",
      frames: this.anims.generateFrameNumbers("main_walk", {
        start: 0,
        end: 13,
      }),
      frameRate: 30,
      repeat: -1,
    });
    this.anims.create({
      key: "main_stop",
      frames: [{ key: "main_walk", frame: 13 }],
      frameRate: 13,
      repeat: -1,
    });

    //start.
    this.add.image(680, 384, "main_background");
    player = this.physics.add.sprite(-89, 434, "main_walk");
    player.anims.play("main_walk", true).setVelocityX(120);
    this.add.image(680, 548, "main_mountains");
    walk = true;

    //buttons.
    b_full = this.add
      .image(1330, 30, "b_full")
      .setInteractive()
      .on("pointerover", () => b_full.setTexture("b_full_over"))
      .on("pointerout", () => b_full.setTexture("b_full"))
      .on("pointerdown", () => {
        if (this.scale.isFullscreen) {
          this.scale.stopFullscreen();
        } else {
          this.scale.startFullscreen();
        }
    });
  }

  update() {
    if (player.x > 677) {
      player.setVelocityX(0);
      player.anims.play("main_stop", true);
      this.time.addEvent({
        delay: 2000,
        callback: ()=> {
          this.add.image(680, 154, "start_text_" + lang);
          walk = false;
        },
        callbackScope: this,
        loop: false,
      });
    }
    if (game.input.mousePointer.isDown && walk == false) {
      this.scene.start("main");
    }
  }
}

export default start;
