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
  this.physics.resume();
  //player and enemy can't out.
  player.setCollideWorldBounds(true);
  enemy.setCollideWorldBounds(true);
  //player movement.
  this.time.addEvent({
    delay: 3000,
    callback: playerMov,
    callbackScope: this,
    loop: true,
  });
  //enemy movement.
  this.time.addEvent({
    delay: 3000,
    callback: enemyMov,
    callbackScope: this,
    loop: true,
  });
}
