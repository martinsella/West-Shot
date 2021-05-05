class language extends Phaser.Scene {
  constructor() {
    super("language");
  }

  create() {
    //menu.
    this.add.image(680, 384, "language");
    click_01 = this.sound.add("click_01");
    click_02 = this.sound.add("click_02");

    //buttons.
    if (delay == 0) {
      b_back = this.add
      .image(50, 45, "b_back")
      .setInteractive()
      .on("pointerover", () => b_back.setTexture("b_back_over"))
      .on("pointerout", () => b_back.setTexture("b_back"))
      .on("pointerdown", () => {
        if (sfx == "on") {
          click_02.play();
        }
        this.scene.start("main");
      });
    }

    b_es = this.add
      .image(470, 359, "b_es")
      .setInteractive()
      .on("pointerover", () => b_es.setTexture("b_es_over"))
      .on("pointerout", () => b_es.setTexture("b_es"))
      .on("pointerdown", () => {
        lang = "es";
        if (sfx == "on") {
          click_01.play();
        }
        if (delay == 0) {
          this.scene.start("main");
        } else {
          this.scene.start("start");
        }
      });

    b_en = this.add
      .image(915, 359, "b_en")
      .setInteractive()
      .on("pointerover", () => b_en.setTexture("b_en_over"))
      .on("pointerout", () => b_en.setTexture("b_en"))
      .on("pointerdown", () => {
        lang = "en";
        if (sfx == "on") {
          click_01.play();
        }
        if (delay == 0) {
          this.scene.start("main");
        } else {
          this.scene.start("start");
        }
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
    }
  }

export default language;
