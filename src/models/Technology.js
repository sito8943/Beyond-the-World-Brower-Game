// @ts-check
import Entity from "./Entity";

class Technology extends Entity {
  /**
   * @param {string} id
   * @param {string} name
   */
  constructor(id, name) {
    super(id, name);
    this.id = id;
    this.name = name;
  }

  get Id() {
    return this.id;
  }

  get Name() {
    return this.name;
  }
}

export default Technology;
