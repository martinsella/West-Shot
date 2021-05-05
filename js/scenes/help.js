class help extends Phaser.Scene {
  constructor() {
    super("help");
  }
  create() {
    this.add.image(680, 384, "menus_background");
    this.add.image(680, 384, "help_chart");
    this.add.image(680, 192, "help_title_" + lang);
    text = this.add.image(680, 574, "help_text_1_" + lang);
    video = this.add.video(680, 384, 'help_video_1').setScale(0.4)
    video.play(true);

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
        this.scene.start("main");
      });

    b_skip = this.add
      .image(1000, 390, "b_skip")
      .setInteractive()
      .setScale(0.7)
      .on("pointerover", () => b_skip.setScale(0.8))
      .on("pointerout", () => b_skip.setScale(0.7))
      .on("pointerdown", () => {
        if (text.texture.key == "help_text_1_" + lang) {
          if (sfx == "on") {
            click_01.play();
          }
          video.changeSource('help_video_2_' + lang).setScale(0.4);
          text.setTexture("help_text_2_" + lang);
          b_skip.setX(360).setAngle(180);
        } else {
          if (sfx == "on") {
            click_02.play();
          }
          video.changeSource('help_video_1').setScale(0.4);
          text.setTexture("help_text_1_" + lang);
          b_skip.setX(1000).setAngle(360);
        }
    });
  }
}

export default help;
