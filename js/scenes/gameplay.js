import Player from "../classes/player.js";
import Enemy from "../classes/enemy.js";
import { count_2 } from "../others/count.js";

class gameplay extends Phaser.Scene {
  constructor() {
    super("gameplay");
  }

  create() {
    if (track != undefined && music == "on") {
      track.pause();
      track = undefined;
      track = this.sound.add("wind", {volume: 0.2}, { loop: true });
      track.play();
    }
    gun_shot = this.sound.add("gun_shot", {volume: 0.2});
    //difficulty depending on the level.
    if (level <= 5) {
      difficulty = Phaser.Math.FloatBetween(0.45, 0.60);
    }
    //level 1.
    if (level == 1) {
      this.add.image(680, 384, "level_1_sky");
      this.physics.add.image(1480, 74, "level_1_cloud_1").setVelocityX(-20);
      this.physics.add.image(1780, 164, "level_1_cloud_2").setVelocityX(-20);
      this.add.image(680, 456, "level_1_mountains");
      this.add.image(680, 301, "level_1_building");
    //level 2.
    } else if (level >= 2) {
      this.add.image(680, 384, "level_2");
      this.add.image(680, 177, "level_2_sky");
      this.physics.add.image(1610, 74, "level_2_cloud_1").setVelocityX(-20);
      this.physics.add.image(1910, 164, "level_2_cloud_2").setVelocityX(-20);
      this.add.image(680, 456, "level_2_mountains");
    }

    //buttons.
    b_music = this.add
      .image(1180, 30, "b_music_" + music)
      .setInteractive()
      .on("pointerover", () => b_music.setTexture("b_music_" + music + "_over"))
      .on("pointerout", () => b_music.setTexture("b_music_" + music))
      .on("pointerdown", () => {
        if (music == "on") {
          music = "off";
          click_01.play();
          track.pause();
          track = undefined;
        } else {
          music = "on";
          click_02.play();
          track = this.sound.add("wind", {volume: 0.2}, { loop: true });
          track.play();
        }
        b_music.setTexture("b_music_" + music + "_over");
      });

    b_sfx = this.add
      .image(1220, 30, "b_sfx_" + sfx)
      .setInteractive()
      .on("pointerover", () => b_sfx.setTexture("b_sfx_" + sfx + "_over"))
      .on("pointerout", () => b_sfx.setTexture("b_sfx_" + sfx))
      .on("pointerdown", () => {
        if (sfx == "on") {
          sfx = "off";
          click_01.play();
        } else {
          sfx = "on";
          click_02.play();
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
          if (sfx == "on") {
            click_02.play();
          }
          this.scale.stopFullscreen();
        } else {
          if (sfx == "on") {
            click_01.play();
          }
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
          if (sfx == "on") {
            click_01.play();
          }
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
    this.anims.create({
      key: "playerDeath",
      frames: this.anims.generateFrameNumbers("player_death", {
        start: 0,
        end: 12,
      }),
      frameRate: 30,
      repeat: 0,
    });
    this.anims.create({
      key: "playerDead",
      frames: [{ key: "player_death", frame: 12 }],
      frameRate: 30,
      repeat: -1,
    });

    //enemy anims.
    this.anims.create({
      key: "enemy_" + level + "_Left",
      frames: this.anims.generateFrameNumbers("enemy_" + level + "_walk", {
        start: 13,
        end: 0,
      }),
      frameRate: 30,
      repeat: -1,
    });
    this.anims.create({
      key: "enemy_" + level + "_Stop",
      frames: [{ key: "enemy_" + level + "_walk", frame: 1 }],
      frameRate: 30,
      repeat: -1,
    });
    this.anims.create({
      key: "enemy_" + level + "_Shoot",
      frames: this.anims.generateFrameNumbers("enemy_" + level + "_shoot", {
        start: 29,
        end: 0,
      }),
      frameRate: 35,
      repeat: 0,
    });
    this.anims.create({
      key: "enemy_" + level + "_Death",
      frames: this.anims.generateFrameNumbers("enemy_" + level + "_death", {
        start: 13,
        end: 0,
      }),
      frameRate: 30,
      repeat: 0,
    });
    this.anims.create({
      key: "enemy_" + level + "_Dead",
      frames: [{ key: "enemy_" + level + "_death", frame: 0 }],
      frameRate: 30,
      repeat: -1,
    });

    //player and enemy.
    player = new Player({ scene: this, x: -80, y: 550, texture: "player_walk" });
    enemy = new Enemy({ scene: this, x: 1470, y: 550, texture: "enemy_" + level + "_walk" });
    playerHealth = 150;
    enemyHealth = 150;
    hat = undefined;
    dead = undefined;
    walk = true;
  }
  update() {
    if (player.x == 200 && walk == true) {
      player.anims.play("playerStop", true);
      enemy.anims.play("enemy_" + level + "_Stop", true);
      walk = false;
      this.count_3();
    }
    if (player.anims.currentFrame.frame.name == 12 && player.anims.currentAnim.key == "playerShoot") {
      playerBullet = this.physics.add.image(200, 525, "bullet");
      playerBullet.setVelocityX(2000);
      if (sfx == "on") {
        gun_shot.play();
      }
      //collider.
      this.physics.add.overlap(playerBullet, enemy, (playerBullet, enemy) => {
        playerBullet.destroy();
        playerBullet = undefined;
        enemyBar
          .clear()
          .fillRect(1135, 390, (enemyHealth -= 12.5), 19);
      }, null, this);
    } else if (enemy.anims.currentFrame.frame.name == 17 && enemy.anims.currentAnim.key == "enemy_" + level + "_Shoot") {
      enemyBullet = this.physics.add.image(1140, 525, "bullet");
      enemyBullet.setVelocityX(-2000);
      if (sfx == "on") {
        gun_shot.play();
      }
      //collider.
      this.physics.add.overlap(enemyBullet, player, (enemyBullet, player) => {
        enemyBullet.destroy();
        enemyBullet = undefined;
        playerBar
          .clear()
          .fillRect(100, 390, (playerHealth -= 12.5), 19);
      }, null, this);
    }
    //player victory.
    if (enemyHealth == 0 && pause == undefined) {
      playerTimer.paused = true;
      enemyTimer.paused = true;
      if (playerBullet !== undefined) {
        playerBullet.destroy();
        playerBullet = undefined;
      }
      if (enemyBullet !== undefined) {
        enemyBullet.destroy();
        enemyBullet = undefined;
      }
      if (enemy.anims.currentFrame.frame.name == 1 && enemy.anims.currentAnim.key == "enemy_" + level + "_Death") {
        dead = true;
      } else {
        enemy.anims.play("enemy_" + level + "_Death", true);
      }
      if (dead == true) {
        enemy.anims.play("enemy_" + level + "_Dead", true);
        if (hat == undefined) {
          hat = this.physics.add
            .image(1123, 650, "enemy_" + level + "_hat")
            .setScale(0.70)
            .setInteractive()
            .on("pointerdown", ()=> {
              if (sfx == "on") {
                click_01.play();
              }
              playerBar.destroy();
              walk = true;
            })
        }
      }
      this.physics.add.overlap(player, hat, ()=> {
        if (sfx == "on") {
          end_sfx = this.sound.add("win", {volume: 0.4});
          end_sfx.play();
        }
        hat.destroy();
        walk = false;
        this.physics.pause();
        this.add.image(680, 384, "count_background");
        pause = this.add.image(680, 384, "victory_chart");
        this.add.image(680, 234, "victory_text_1_" + lang);
        text = this.add.image(680, 334, "victory_text_2_" + lang);
        hat = this.add.image(680, 454, "hat_" + level + "_" + lang)
        b_skip = this.add
          .image(950, 534, "b_skip")
          .setInteractive()
          .on("pointerover", () => b_skip.setScale(1.1))
          .on("pointerout", () => b_skip.setScale(1))
          .on("pointerdown", () => {
            if (sfx == "on") {
              click_01.play();
            }
            hat.destroy();
            text.destroy();
            b_skip.destroy();
            b_next = this.add
              .image(685, 372, "b_next_" + lang)
              .setInteractive()
              .on("pointerover", () => b_next.setScale(1.1))
              .on("pointerout", () => b_next.setScale(1))
              .on("pointerdown", () => {
                if (sfx == "on") {
                  click_01.play();
                }
                if (level < 2) {
                  level += 1;
                  lastWin += 1;
                }
                this.restart();
              });
            b_main = this.add
              .image(595, 472, "b_main_" + lang)
              .setInteractive()
              .on("pointerover", () => b_main.setScale(1.1))
              .on("pointerout", () => b_main.setScale(1))
              .on("pointerdown", () => {
                if (sfx == "on") {
                  click_01.play();
                }
                if (level > lastWin) {
                  lastWin += 1;
                }
                this.main();
              });
            b_retry = this.add
              .image(775, 472, "b_retry_" + lang)
              .setInteractive()
              .on("pointerover", () => b_retry.setScale(1.1))
              .on("pointerout", () => b_retry.setScale(1))
              .on("pointerdown", () => {
                if (sfx == "on") {
                  click_01.play();
                }
                if (level > lastWin) {
                  lastWin += 1;
                }
                this.restart();
              });
          });
      })
    }
    //player defeat.
    if (playerHealth == 0 && pause == undefined) {
      playerTimer.paused = true;
      enemyTimer.paused = true;
      if (playerShoot == true) {
        playerShoot = false;
      }
      if (player.anims.currentFrame.frame.name == 11 && player.anims.currentAnim.key == "playerDeath") {
        dead = true;
      } else {
        player.anims.play("playerDeath", true);
      }
      if (dead == true) {
        player.anims.play("playerDead", true);
        this.physics.pause();
        playerTimer.paused = true;
        enemyTimer.paused = true;
        if (playerBullet !== undefined) {
          playerBullet.destroy();
          playerBullet = undefined;
        }
        if (sfx == "on") {
          end_sfx = this.sound.add("defeat", {volume: 0.2});
          end_sfx.play();
        }
        enemyBar.destroy();
        this.add.image(680, 384, "count_background");
        pause = this.add.image(680, 384, "pause_defeat_chart");
        this.add.image(680, 284, "defeat_text_" + lang);
        b_retry = this.add
          .image(685, 382, "b_retry_" + lang)
          .setInteractive()
          .on("pointerover", () => b_retry.setScale(1.1))
          .on("pointerout", () => b_retry.setScale(1))
          .on("pointerdown", () => {
            if (sfx == "on") {
              click_01.play();
            }
            this.restart()
          });
        b_main = this.add
          .image(685, 462, "b_main_" + lang)
          .setInteractive()
          .on("pointerover", () => b_main.setScale(1.1))
          .on("pointerout", () => b_main.setScale(1))
          .on("pointerdown", () => {
            if (sfx == "on") {
              click_01.play();
            }
            this.main()
          });
      }
    }
  }
  //count before the gameplay.
  count_3() {
    player.anims.play("playerStop", true).setVelocityX(0);
    enemy.anims.play("enemy_" + level + "_Stop", true).setVelocityX(0);
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
  //go to the pause menu.
  inPause() {
    this.physics.pause();
    playerTimer.paused = true;
    enemyTimer.paused = true
    count_b = this.add.image(680, 384, "count_background");
    pause = this.add.image(680, 384, "pause_defeat_chart");
    text = this.add.image(683, 272, "pause_text_" + lang);
    b_resume = this.add
      .image(685, 372, "b_resume_" + lang)
      .setInteractive()
      .on("pointerover", () => b_resume.setScale(1.1))
      .on("pointerout", () => b_resume.setScale(1))
      .on("pointerdown", () => {
        if (help !== undefined) {
          if (sfx == "on") {
            click_01.play();
          }
          this.outPause()
        }
      });
    b_help = this.add
      .image(605, 452, "b_help_2_" + lang)
      .setInteractive()
      .on("pointerover", () => b_help.setScale(1.1))
      .on("pointerout", () => b_help.setScale(1))
      .on("pointerdown", () => {
        if (help !== undefined) {
          if (sfx == "on") {
            click_01.play();
          }
          this.help()
        }
      });
    b_main = this.add
      .image(765, 452, "b_main_" + lang)
      .setInteractive()
      .on("pointerover", () => b_main.setScale(1.1))
      .on("pointerout", () => b_main.setScale(1))
      .on("pointerdown", () => {
        if (help !== undefined) {
          if (sfx == "on") {
            click_01.play();
          }
          this.main();
        }
      });
  }
  help() {
    help = this.add.image(680, 384, "count_background");
    chart = this.add.image(680, 384, "help_chart");
    title = this.add.image(680, 192, "help_title_" + lang);
    text_2 = this.add.image(680, 574, "help_text_1_" + lang);
    video = this.add.video(680, 384, 'help_video_1').setScale(0.4)
    video.play(true);

    //buttons.
    b_back = this.add
      .image(50, 45, "b_back")
      .setInteractive()
      .on("pointerover", () => b_back.setTexture("b_back_over"))
      .on("pointerout", () => b_back.setTexture("b_back"))
      .on("pointerdown", () => {
        if (sfx == "on") {
          click_02.play();
        }
        help.destroy();
        chart.destroy();
        title.destroy();
        text_2.destroy();
        video.destroy();
        b_back.destroy();
        b_skip.destroy();
        help = undefined;
      });

    b_skip = this.add
      .image(1000, 390, "b_skip")
      .setInteractive()
      .setScale(0.7)
      .on("pointerover", () => b_skip.setScale(0.8))
      .on("pointerout", () => b_skip.setScale(0.7))
      .on("pointerdown", () => {
        if (text_2.texture.key == "help_text_1_" + lang) {
          if (sfx == "on") {
            click_01.play();
          }
          video.changeSource('help_video_2_' + lang).setScale(0.4);
          text_2.setTexture("help_text_2_" + lang);
          b_skip.setX(360).setAngle(180);
        } else {
          if (sfx == "on") {
            click_02.play();
          }
          video.changeSource('help_video_1').setScale(0.4);
          text_2.setTexture("help_text_1_" + lang);
          b_skip.setX(1000).setAngle(360);
        }
    });
  }
  //out pause.
  outPause() {
    count_b.destroy();
    pause.destroy();
    text.destroy();
    b_resume.destroy();
    b_help.destroy();
    b_main.destroy();
    pause = undefined;
    this.physics.resume();
    playerTimer.paused = false;
    enemyTimer.paused = false;
  }
  //restart level.
  restart() {
    this.physics.resume();
    playerTimer.paused = false;
    enemyTimer.paused = false;
    this.scene.start("gameplay");
  }
  //out gameplay, and go to the main menu.
  main() {
    playerTimer.paused = false;
    enemyTimer.paused = false;
    if (track != undefined && music == "on") {
      track.pause();
      track = undefined;
    }
    this.scene.start("main");
  }
}

export default gameplay;
