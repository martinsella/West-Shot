class collection extends Phaser.Scene {
  constructor() {
    super("collection");
  }
  create() {
    this.add.image(680, 384, "collection");

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
        this.scene.start("main")
      });

    if (lastWin >= 1) {
      this.add.image(330, 251, "hat_1_" + lang);
    }
    if (lastWin >= 2) {
      this.add.image(506, 255, "hat_2_" + lang);
    }
  }
}

export default collection;
