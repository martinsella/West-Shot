class credits extends Phaser.Scene {
  constructor() {
    super("credits");
  }
  create() {
    this.add.image(680, 384, "credits");
    this.add.image(700, 370, "cred_text_" + lang);
  }
}

export default credits;
