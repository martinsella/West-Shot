import preloader from "./preloader.js";
import main from "./main.js";
import language from "./language.js";
import credits from "./credits.js";
import selector from "./selector.js";
import gameplay from "./gameplay.js";

//base configuration.
var config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH, 
    width: 1360, 
    height: 768,
  },
  physics: {
    default: "arcade", 
    arcade: {
      gravity: { y: 0 }, 
      debug: false,
    },
  },
  scene: [preloader, language, main, credits, selector, gameplay],
};

//most important variable.
game = new Phaser.Game(config);
