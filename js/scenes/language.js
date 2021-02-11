class language extends Phaser.Scene {
  constructor() {
    super("language");
  }

  create() {
    //menu.
    this.add.image(680, 384, "language");

    //buttons.
    b_es = this.add
      .image(470, 359, "b_es")
      .setInteractive()
      .on("pointerover", () => b_es.setTexture("b_es_over"))
      .on("pointerout", () => b_es.setTexture("b_es"))
      .on("pointerdown", () => {
        lang = "es";
        this.scene.start("main");
      });

    b_en = this.add
      .image(915, 359, "b_en")
      .setInteractive()
      .on("pointerover", () => b_en.setTexture("b_en_over"))
      .on("pointerout", () => b_en.setTexture("b_en"))
      .on("pointerdown", () => {
        lang = "en";
        this.scene.start("main");
      });
  }
}

export default language;
