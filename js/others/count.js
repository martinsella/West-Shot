import { playerMov } from "../classes/player.js";
import { enemyMov } from "../classes/enemy.js";

//rest of the count.
export function count_2() {
  walk = false;
  count.setTexture("count_fire_2");
  this.time.addEvent({
    delay: 1500,
    callback: count_1,
    callbackScope: this,
    loop: false,
  });
}
export function count_1() {
  count.setTexture("count_fire_1");
  this.time.addEvent({
    delay: 1500,
    callback: count_fire,
    callbackScope: this,
    loop: false,
  });
}
export function count_fire() {
  count.setTexture("count_fire_" + lang);
  this.time.addEvent({
    delay: 1500,
    callback: count_out,
    callbackScope: this,
    loop: false,
  });
}
export function count_out() {
  count_b.destroy();
  count.destroy();
  count = 0;
  this.physics.resume();
  pause = undefined;

  //player and enemy can't out.
  player.setCollideWorldBounds(true);
  enemy.setCollideWorldBounds(true);

  //controls keys.
  keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
  keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
  keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);

  //player and enemy health bar.
  playerBar = this.add
    .graphics()
    .fillRect(100, 390, playerHealth, 19)
    .fillStyle(0x2f933e, 1);
  enemyBar = this.add
    .graphics()
    .fillRect(1135, 390, enemyHealth, 19)
    .fillStyle(0x2f933e, 1);
    
  //player movement.
  playerTimer = this.time.addEvent({
    delay: 3000,
    callback: playerMov,
    callbackScope: this,
    loop: true,
  });
  //enemy movement.
  enemyTimer = this.time.addEvent({
    delay: 3000,
    callback: enemyMov,
    callbackScope: this,
    loop: true,
  });
}
