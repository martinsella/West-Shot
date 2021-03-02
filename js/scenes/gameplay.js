import Player from "../classes/player.js";
import Enemy from "../classes/enemy.js";
import { count_2 } from "../others/count.js";

class gameplay extends Phaser.Scene {
  constructor() {
    super("gameplay");
  }

  create() {
    //level 1.
    if (level == 1 || level !== 2) {
      this.add.image(680, 384, "level_1_sky");
      this.physics.add.image(1480, 74, "level_1_cloud_1").setVelocityX(-20);
      this.physics.add.image(1780, 164, "level_1_cloud_2").setVelocityX(-20);
      this.add.image(680, 456, "level_1_mountains");
      this.add.image(680, 301, "level_1_building");
    } else if (level == 2) {
      this.add.image(680, 384, "level_2");
    }
    
    //buttons.
    b_music = this.add
      .image(1180, 30, "b_music_on")
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
      .image(1220, 30, "b_sfx_on")
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
      .image(1270, 30, "b_full")
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

    b_pause = this.add
      .image(1320, 30, "b_pause")
      .setInteractive()
      .on("pointerover", () => {
        if (playerBar !== undefined && pause == undefined) {
          b_pause.setTexture("b_pause_over");
        }
      })
      .on("pointerout", () => {
        if (playerBar !== undefined && pause == undefined) {
          b_pause.setTexture("b_pause")
        }
      })
      .on("pointerdown", () => {
        if (playerBar !== undefined && pause == undefined) {
          this.inPause();
          b_pause.setTexture("b_pause");
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

    //player and enemy.
    player = new Player({ scene: this, x: -80, y: 550, texture: "player_walk" });
    enemy = new Enemy({ scene: this, x: 1470, y: 550, texture: "enemy_walk" });
    walk = true;
  }
  update() {
    if (player.x == 200 && walk == true) {
      player.anims.play("playerStop", true);
      enemy.anims.play("enemyStop", true);
      walk = false;
      this.count_3();
    }
    if (player.anims.currentFrame.frame.name == 12 && player.anims.currentAnim.key == "playerShoot") {
      playerBullet = this.physics.add.image(200, 525, "bullet");
      playerBullet.setVelocityX(2000);
      //collider.
      this.physics.add.overlap(playerBullet, enemy, (playerBullet, enemy) => {
        playerBullet.destroy();
        enemyBar
          .clear()
          .fillRect(1135, 390, (enemyHealth -= 12.5), 19);
      }, null, this);
    } else if (enemy.anims.currentFrame.frame.name == 17 && enemy.anims.currentAnim.key == "enemyShoot") {
      enemyBullet = this.physics.add.image(1140, 525, "bullet");
      enemyBullet.setVelocityX(-2000);
      //collider.
      this.physics.add.overlap(enemyBullet, player, (enemyBullet, player) => {
        enemyBullet.destroy();
        playerBar
          .clear()
          .fillRect(100, 390, (playerHealth -= 12.5), 19);
      }, null, this);
    }
    if (enemyHealth == 0 && pause == undefined) {
      this.physics.pause();
      playerTimer.paused = true;
      enemyTimer.paused = true
      pause = this.add.image(680, 384, "victory_chart");
      this.add.image(680, 234, "victory_text_1_" + lang);
      t_pause = this.add.image(680, 334, "victory_text_2_" + lang);
      b_skip = this.add
        .image(950, 534, "b_skip")
        .setInteractive()
        .on("pointerover", () => b_skip.setScale(1.1))
        .on("pointerout", () => b_skip.setScale(1))
        .on("pointerdown", () => {
          t_pause.destroy();
          b_next = this.add
            .image(685, 372, "b_next_" + lang)
            .setInteractive()
            .on("pointerover", () => b_next.setScale(1.1))
            .on("pointerout", () => b_next.setScale(1))
            .on("pointerdown", () => {
              level += 1;
              lastWin += 1;
              this.restart();
            });
          b_main = this.add
            .image(595, 472, "b_main_" + lang)
            .setInteractive()
            .on("pointerover", () => b_main.setScale(1.1))
            .on("pointerout", () => b_main.setScale(1))
            .on("pointerdown", () => this.main());
          b_retry = this.add
            .image(775, 472, "b_retry_" + lang)
            .setInteractive()
            .on("pointerover", () => b_retry.setScale(1.1))
            .on("pointerout", () => b_retry.setScale(1))
            .on("pointerdown", () => {
              if (level > lastWin) {
                lastWin += 1;
              }
              this.restart();
            });
      });
    }
    if (playerHealth == 0 && pause == undefined) {
      this.physics.pause();
      playerTimer.paused = true;
      enemyTimer.paused = true
      pause = this.add.image(680, 384, "pause_defeat_chart");
      this.add.image(680, 284, "defeat_text_" + lang);
      b_retry = this.add
        .image(685, 382, "b_retry_" + lang)
        .setInteractive()
        .on("pointerover", () => b_retry.setScale(1.1))
        .on("pointerout", () => b_retry.setScale(1))
        .on("pointerdown", () => this.restart());
      b_main = this.add
        .image(685, 462, "b_main_" + lang)
        .setInteractive()
        .on("pointerover", () => b_main.setScale(1.1))
        .on("pointerout", () => b_main.setScale(1))
        .on("pointerdown", () => this.main());
    }
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
  //pause menu.
  inPause() {
    this.physics.pause();
    playerTimer.paused = true;
    enemyTimer.paused = true
    count_b = this.add.image(680, 384, "count_background");
    pause = this.add.image(680, 384, "pause_defeat_chart");
    t_pause = this.add.image(683, 272, "pause_text_" + lang);
    b_resume = this.add
      .image(685, 372, "b_resume_" + lang)
      .setInteractive()
      .on("pointerover", () => b_resume.setScale(1.1))
      .on("pointerout", () => b_resume.setScale(1))
      .on("pointerdown", () => this.outPause());
    b_help = this.add
      .image(605, 452, "b_help_2_" + lang)
      .setInteractive()
      .on("pointerover", () => b_help.setScale(1.1))
      .on("pointerout", () => b_help.setScale(1));
    b_main = this.add
      .image(765, 452, "b_main_" + lang)
      .setInteractive()
      .on("pointerover", () => b_main.setScale(1.1))
      .on("pointerout", () => b_main.setScale(1))
      .on("pointerdown", () => this.scene.start("main"));
  }
  outPause() {
    count_b.destroy();
    pause.destroy();
    t_pause.destroy();
    b_resume.destroy();
    b_help.destroy();
    b_main.destroy();
    pause = undefined;
    this.physics.resume();
    playerTimer.paused = false;
    enemyTimer.paused = false;
  }
  restart() {
    this.physics.resume();
    playerTimer.paused = false;
    enemyTimer.paused = false;
    playerHealth = 150;
    enemyHealth = 150;
    this.scene.start("gameplay");
  }
  main() {
    this.physics.resume();
    playerTimer.paused = false;
    enemyTimer.paused = false;
    playerHealth = 150;
    enemyHealth = 150;
    this.scene.start("main");
  }
}

export default gameplay;
