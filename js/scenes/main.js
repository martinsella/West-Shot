class main extends Phaser.Scene {
  constructor() {
    super("main");
  }

  create() {
    //main.
    this.add.image(680, 384, "main_background");
    this.add.image(299, 215, "main_title");

    //buttons.
    b_play = this.add
      .image(1095, 215, "b_play_" + lang)
      .setInteractive()
      .on("pointerover", () => b_play.setTexture("b_play_over_" + lang))
      .on("pointerout", () => b_play.setTexture("b_play_" + lang))
      .on("pointerdown", () => this.scene.start("selector"));

    b_collection = this.add
      .image(1081, 335, "b_collection_" + lang)
      .setInteractive()
      .on("pointerover", () => b_collection.setTexture("b_collection_over_" + lang))
      .on("pointerout", () => b_collection.setTexture("b_collection_" + lang));

    b_help = this.add
      .image(1084, 446, "b_help_" + lang)
      .setInteractive()
      .on("pointerover", () => b_help.setTexture("b_help_over_" + lang))
      .on("pointerout", () => b_help.setTexture("b_help_" + lang));

    b_exit = this.add
      .image(1084, 550, "b_exit_" + lang)
      .setInteractive()
      .on("pointerover", () => b_exit.setTexture("b_exit_over_" + lang))
      .on("pointerout", () => b_exit.setTexture("b_exit_" + lang))
      .on("pointerdown", () => window.location.href = "http://www.google.com");

    b_language = this.add
      .image(1165, 33, "b_language")
      .setInteractive()
      .on("pointerover", () => b_language.setTexture("b_language_over"))
      .on("pointerout", () => b_language.setTexture("b_language"))
      .on("pointerdown", () => this.scene.start("language"));

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

    b_cred = this.add
      .image(60, 715, "b_cred")
      .setInteractive()
      .on("pointerover", () => b_cred.setTexture("b_cred_over"))
      .on("pointerout", () => b_cred.setTexture("b_cred"))
      .on("pointerdown", () => this.scene.start("credits"));
  }
}

export default main;
