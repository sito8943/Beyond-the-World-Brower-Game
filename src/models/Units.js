// @ts-check
import Entity from "./Entity";

import { Price } from "./Currency";

class Unit extends Entity {
  /**
   *
   * @param {string} id
   * @param {string} name
   * @param {Price} price
   * @param {number} life
   * @param {number} speed
   * @param {Entity[]} req
   */
  constructor(id, name, price, life, speed, req) {
    super(id, name);
    this.price = price;
    this.currentPrice = new Price(price.Currency, price.Count);
    this.life = life;
    this.currentLife = life;
    this.speed = speed;
    this.currentSpeed = speed;
    this.req = req;
  }

  get Price() {
    return this.price;
  }

  get CurrentPrice() {
    return this.currentPrice;
  }

  set CurrentPrice(newPrice) {
    this.currentPrice = newPrice;
  }

  get Life() {
    return this.life;
  }

  get CurrentLife() {
    return this.currentLife;
  }

  set CurrentLife(newLife) {
    this.currentLife = newLife;
  }

  get Speed() {
    return this.speed;
  }

  get CurrentSpeed() {
    return this.currentSpeed;
  }

  set CurrentSpeed(newSpeed) {
    this.currentSpeed = newSpeed;
  }

  get Req() {
    return this.req;
  }
}

export default Unit;
