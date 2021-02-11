import { enemyMov } from "../classes/enemy.js";

//rest of the count.
export function count_2() {
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
  //default controls.
  cursors = this.input.keyboard.createCursorKeys();
  //enemy movement.
  this.time.addEvent({
    delay: 300,
    callback: enemyMov,
    callbackScope: this,
    loop: true,
  });
}
