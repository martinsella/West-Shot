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
    b_1 = this.add
      .image(401, 250, "b_1")
      .setInteractive()
      .on("pointerover", () => b_1.setScale(1.2))
      .on("pointerout", () => b_1.setScale(1))
      .on("pointerdown", () => {
        level = 1;
        this.scene.start("gameplay");
      });

    //level 2.
    b_2 = this.add
      .image(542, 250, "b_block")
      .setInteractive()
      .on("pointerover", () => {
        if (lastWin == 1) {
          b_2.setScale(1.2)
        }
      })
      .on("pointerout", () => {
        if (lastWin == 1) {
          b_2.setScale(1);
        }      
      })
      .on("pointerdown", () => {
        if (lastWin == 1) {
          level = 2;
          this.scene.start("gameplay");
        }
      });
    if (lastWin == 1) {
      b_2.setTexture("b_2");
    }
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