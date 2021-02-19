class selector extends Phaser.Scene {
  constructor() {
    super("selector");
  }
  create() {
    //menu.
    this.add.image(680, 384, "menus_background");
    this.add.image(680, 384, "selector_chart");

    //buttons.
    b_back = this.add
      .image(50, 45, "b_back")
      .setInteractive()
      .on("pointerover", () => b_back.setTexture("b_back_over"))
      .on("pointerout", () => b_back.setTexture("b_back"))
      .on("pointerdown", () => this.scene.start("main"));

    //level 1.
    this.add
      .image(401, 250, "b_1")
      .setInteractive()
      .on("pointerdown", () => this.scene.start("gameplay"));

    this.add.image(542, 250, "b_block");
    this.add.image(683, 250, "b_block");
    this.add.image(824, 250, "b_block");
    this.add.image(965, 250, "b_block");
    this.add.image(401, 380, "b_block");
    this.add.image(542, 380, "b_block");
    this.add.image(683, 380, "b_block");
    this.add.image(824, 380, "b_block");
    this.add.image(965, 380, "b_block");
    this.add.image(401, 510, "b_block");
    this.add.image(542, 510, "b_block");
    this.add.image(683, 510, "b_block");
    this.add.image(824, 510, "b_block");
    this.add.image(965, 510, "b_block");
  }
}

export default selector;