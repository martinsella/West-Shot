import Player from "../classes/player.js";
import Enemy from "../classes/enemy.js";
import { count_2 } from "../others/count.js";

class gameplay extends Phaser.Scene {
  constructor() {
    super("gameplay");
  }

  create() {
    //level 1.
    this.add.image(680, 384, "level_1_sky");
    this.physics.add.image(1480, 74, "level_1_cloud_1").setVelocityX(-20);
    this.physics.add.image(1780, 164, "level_1_cloud_2").setVelocityX(-20);
    this.add.image(680, 456, "level_1_mountains");
    this.add.image(680, 301, "level_1_building");

    //buttons.
    b_music = this.add
      .image(1220, 30, "b_music_on")
      .setInteractive()
      .on("pointerover", () => b_music.setTexture("b_music_" + music + "_over"))
      .on("pointerout", () => b_music.setTexture("b_music_" + music))
      .on("pointerdown", () => {
        if (music == "on") {
          music = "off";
        } else {
          music = "on";
        }
        b_music.setTexture("b_music_" + music + "_over");
      });

    b_sfx = this.add
      .image(1270, 30, "b_sfx_on")
      .setInteractive()
      .on("pointerover", () => b_sfx.setTexture("b_sfx_" + sfx + "_over"))
      .on("pointerout", () => b_sfx.setTexture("b_sfx_" + sfx))
      .on("pointerdown", () => {
        if (sfx == "on") {
          sfx = "off";
        } else {
          sfx = "on";
        }
        b_sfx.setTexture("b_sfx_" + sfx + "_over");
      });

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

    //player anims.
    this.anims.create({
      key: "playerRight",
      frames: this.anims.generateFrameNumbers("player_walk", {
        start: 0,
        end: 13,
      }),
      frameRate: 30,
      repeat: -1,
    });
    this.anims.create({
      key: "playerStop",
      frames: [{ key: "player_walk", frame: 12 }],
      frameRate: 30,
      repeat: -1,
    });
    this.anims.create({
      key: "playerShoot",
      frames: this.anims.generateFrameNumbers("player_shoot", {
        start: 0,
        end: 29,
      }),
      frameRate: 35,
      repeat: 0,
    });

    //enemy anims.
    this.anims.create({
      key: "enemyLeft",
      frames: this.anims.generateFrameNumbers("enemy_walk", {
        start: 13,
        end: 0,
      }),
      frameRate: 30,
      repeat: -1,
    });
    this.anims.create({
      key: "enemyStop",
      frames: [{ key: "enemy_walk", frame: 1 }],
      frameRate: 30,
      repeat: -1,
    });
    this.anims.create({
      key: "enemyShoot",
      frames: this.anims.generateFrameNumbers("enemy_shoot", {
        start: 29,
        end: 0,
      }),
      frameRate: 35,
      repeat: 0,
    });

    //player.
    player = new Player({ scene: this, x: -80, y: 550, texture: "player_walk" });
    enemy = new Enemy({ scene: this, x: 1470, y: 550, texture: "enemy_walk" });
    walk = true;
  }

  //count.
  count_3() {
    player.anims.play("playerStop", true).setVelocityX(0);
    enemy.anims.play("enemyStop", true).setVelocityX(0);
    this.physics.pause();
    count_b = this.add.image(680, 384, "count_background");
    count = this.add.image(680, 384, "count_fire_3");
    this.time.addEvent({
      delay: 1500,
      callback: count_2,
      callbackScope: this,
      loop: false,
    });
  }
  update() {
    if (player.x == 200 && walk == true) {
      player.anims.play("playerStop", true)
      enemy.anims.play("enemyStop", true)
      walk = false;
      this.count_3();
    }
  }
}

export default gameplay;
