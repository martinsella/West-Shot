class main extends Phaser.Scene {
  constructor() {
    super("main");
  }

  create() {
    //main.
    this.add.image(680, 384, "main_background");
    this.add.image(680, 548, "main_mountains");
    player = this.physics.add.sprite(681, 434, "main_walk");
    player.anims.play("main_stop", true);
    this.time.addEvent({
      delay: count,
      callback: ()=> {
        this.add.image(299, 215, "main_title");
        delay = 1000;
      },
      callbackScope: this,
      loop: false,
    });

    this.time.addEvent({
      delay: delay,
      callback: this.buttons,
      callbackScope: this,
      loop: false,
    });

    if (track == undefined && music == "on") {
      track = this.sound.add("music", {volume: 0.2}, { loop: true });
      track.play();
    }
  }

  buttons() {
  if (delay == 1000) {
    count = 0;
    delay = 0;
  }
  this.add.image(1080, 414, "main_stick");
  //buttons.
  b_play = this.add
    .image(1095, 225, "b_play_" + lang)
    .setInteractive()
    .on("pointerover", () => b_play.setTexture("b_play_over_" + lang))
    .on("pointerout", () => b_play.setTexture("b_play_" + lang))
    .on("pointerdown", () => {
      if (sfx == "on") {
        click_01.play();
      }
      this.scene.start("selector")
    });

  b_collection = this.add
    .image(1081, 355, "b_collection_" + lang)
    .setInteractive()
    .on("pointerover", () => b_collection.setTexture("b_collection_over_" + lang))
    .on("pointerout", () => b_collection.setTexture("b_collection_" + lang))
    .on("pointerdown", () => {
      if (sfx == "on") {
        click_01.play();
      }
      this.scene.start("collection")
    });

  b_help = this.add
    .image(1084, 476, "b_help_" + lang)
    .setInteractive()
    .on("pointerover", () => b_help.setTexture("b_help_over_" + lang))
    .on("pointerout", () => b_help.setTexture("b_help_" + lang))
    .on("pointerdown", () => {
      if (sfx == "on") {
        click_01.play();
      }
      this.scene.start("help")
    });

  b_language = this.add
    .image(1165, 33, "b_language")
    .setInteractive()
    .on("pointerover", () => b_language.setTexture("b_language_over"))
    .on("pointerout", () => b_language.setTexture("b_language"))
    .on("pointerdown", () => {
      if (sfx == "on") {
        click_01.play();
      }
      this.scene.start("language")
    });

  b_music = this.add
    .image(1220, 30, "b_music_" + music)
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
        track = this.sound.add("music", {volume: 0.2}, { loop: true });
        track.play();
      }
      b_music.setTexture("b_music_" + music + "_over");
    });

  b_sfx = this.add
    .image(1270, 30, "b_sfx_" + sfx)
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
    .image(1330, 30, "b_full")
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

  b_cred = this.add
    .image(60, 715, "b_cred")
    .setInteractive()
    .on("pointerover", () => b_cred.setTexture("b_cred_over"))
    .on("pointerout", () => b_cred.setTexture("b_cred"))
    .on("pointerdown", () => {
      if (sfx == "on") {
        click_01.play();
      }
      this.scene.start("credits")
    });
  }
}

export default main;
