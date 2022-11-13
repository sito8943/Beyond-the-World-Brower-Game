// @ts-check
import Unit from "./Units";
import Entity from "./Entity";
import { Price } from "./Currency";

class Hero extends Unit {
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
    super(id, name, price, life, speed, req);
  }
}

export default Hero;
