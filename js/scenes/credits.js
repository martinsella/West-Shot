class credits extends Phaser.Scene {
  constructor() {
    super("credits");
  }
  create() {
    //menu.
    this.add.image(680, 384, "menus_background");
    this.add.image(680, 384, "credits_chart");
    this.add.image(688, 370, "cred_text_" + lang);

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

  }
}

export default credits;
