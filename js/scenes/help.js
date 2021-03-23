class help extends Phaser.Scene {
  constructor() {
    super("help");
  }
  create() {
    this.add.image(680, 384, "menus_background");
    this.add.image(680, 384, "help_chart");
    this.add.image(680, 192, "help_title_" + lang);
    t_pause = this.add.image(680, 574, "help_text_1_" + lang);

    //buttons.
    b_back = this.add
      .image(50, 45, "b_back")
      .setInteractive()
      .on("pointerover", () => b_back.setTexture("b_back_over"))
      .on("pointerout", () => b_back.setTexture("b_back"))
      .on("pointerdown", () => this.scene.start("main"));

    b_skip = this.add
      .image(1000, 390, "b_skip")
      .setInteractive()
      .setScale(0.7)
      .on("pointerover", () => b_skip.setScale(0.8))
      .on("pointerout", () => b_skip.setScale(0.7))
      .on("pointerdown", () => {
        if (t_pause.texture.key == "help_text_1_" + lang) {
          t_pause.setTexture("help_text_2_" + lang);
          b_skip.setX(360).setAngle(180);
        } else {
          t_pause.setTexture("help_text_1_" + lang);
          b_skip.setX(1000).setAngle(360);
        }
    });
  }
}

export default help;
