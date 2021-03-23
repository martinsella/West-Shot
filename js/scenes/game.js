import preloader from "./preloader.js";
import language from "./language.js";
import start from "./start.js";
import main from "./main.js";
import credits from "./credits.js";
import collection from "./collection.js";
import help from "./help.js";
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
  scene: [preloader, language, start, main, credits, collection, help, selector, gameplay],
};

//most important variable.
game = new Phaser.Game(config);
