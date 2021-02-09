import Player from "../classes/player.js";
import Enemy from "../classes/enemy.js";
import { enemyMov } from "../classes/enemy.js";

class gameplay extends Phaser.Scene {
  constructor() {
    super("gameplay");
  }

  create() {
    //level.
    this.add.image(680, 384, "level_1_sky");
    this.physics.add.image(1480, 74, "level_1_cloud_1").setVelocityX(-20);
    this.physics.add.image(1780, 164, "level_1_cloud_2").setVelocityX(-20);
    this.add.image(680, 456, "level_1_mountains");
    this.add.image(680, 301, "level_1_building");

    //player.
    player = new Player({ scene: this, x: 300, y: 550, texture: "player" });
    enemy = new Enemy({ scene: this, x: 900, y: 550, texture: "enemy" });
    this.time.addEvent({
      delay: 500,
      callback: enemyMov,
      callbackScope: this,
      loop: true,
    });

    //player anims.
    this.anims.create({
      key: "playerLeft",
      frames: this.anims.generateFrameNumbers("player", {
        start: 0,
        end: 13,
      }),
      frameRate: 25,
      repeat: -1,
    });
    this.anims.create({
      key: "playerRight",
      frames: this.anims.generateFrameNumbers("player", {
        start: 0,
        end: 13,
      }),
      frameRate: 25,
      repeat: -1,
    });
    this.anims.create({
      key: "playerStop",
      frames: [{ key: "player", frame: 0 }],
      frameRate: 25,
      repeat: -1,
    });

    //enemy anims.
    this.anims.create({
      key: "enemyLeft",
      frames: this.anims.generateFrameNumbers("enemy", {
        start: 0,
        end: 13,
      }),
      frameRate: 25,
      repeat: -1,
    });
    this.anims.create({
      key: "enemyRight",
      frames: this.anims.generateFrameNumbers("enemy", {
        start: 0,
        end: 13,
      }),
      frameRate: 25,
      repeat: -1,
    });
    this.anims.create({
      key: "enemyStop",
      frames: [{ key: "enemy", frame: 0 }],
      frameRate: 25,
      repeat: -1,
    });

    //default controls.
    cursors = this.input.keyboard.createCursorKeys();
  }
}
export default gameplay;
