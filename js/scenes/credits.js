class credits extends Phaser.Scene {
  constructor() {
    super("credits");
  }
  create() {
    //menu.
    this.add.image(680, 384, "credits");
    this.add.image(700, 370, "cred_text_" + lang);

    //buttons.
    b_back = this.add
      .image(335, 75, "b_back")
      .setInteractive()
      .on("pointerover", () => b_back.setTexture("b_back_over"))
      .on("pointerout", () => b_back.setTexture("b_back"))
      .on("pointerdown", () => this.scene.start("main"));

  }
}

export default credits;
