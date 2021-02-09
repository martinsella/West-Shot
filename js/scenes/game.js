import preloader from "./preloader.js";
import main from "./main.js";
import language from "./language.js";
import credits from "./credits.js";
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
  scene: [preloader, language, main, credits, gameplay], 
};

//most important variable.
game = new Phaser.Game(config);

//device verification function.
isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  },
};

if (isMobile.any()) console.log("mobile");
else {
  console.log("pc");
}
