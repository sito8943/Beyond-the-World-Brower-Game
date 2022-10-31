// @ts-check

class Currency {
  /**
   *
   * @param {string} id
   * @param {string} name
   */
  constructor(id, name) {
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

export class Price {
  /**
   *
   * @param {Currency} currency
   * @param {number} count
   */
  constructor(currency, count) {
    this.currency = currency;
    this.count = count;
    this.currentCount = count;
  }

  get Currency() {
    return this.currency;
  }

  get Count() {
    return this.count;
  }

  get CurrentCount() {
    return this.currentCount;
  }

  set CurrentCount(newCount) {
    this.currentCount = newCount;
  }
}

export class ProductionType {
  /**
   *
   * @param {Currency} currency
   * @param {number} count
   */
  constructor(currency, count) {
    this.currency = currency;
    this.count = count;
    this.currentCount = count;
  }

  get Currency() {
    return this.Currency;
  }

  get Count() {
    return this.count;
  }

  get CurrentCount() {
    return this.currentCount;
  }

  set CurrentCount(newCount) {
    this.currentCount = newCount;
  }
}

export const CurrencyEnum = {
  UGVzb3M: new Currency("UGVzb3M", "Pesos"),
  Rm9vZA: new Currency("Rm9vZA", "Food"),
  V29vZA: new Currency("V29vZA", "Wood"),
  U3RvbmU: new Currency("U3RvbmU", "Stone"),
  R2FsIERvbGxhcnM: new Currency("R2FsIERvbGxhcnM", "Gal Dollars"),
  R29sZA: new Currency("R29sZA", "Gold"),
};

export default Currency;
