// @ts-check
import Currency, { CurrencyEnum } from "./Currency";
import Building, { BuildingEnum } from "./Building";
import Technology from "./Technology";
import Unit from "./Units";
import Hero from "./Heros";

class Nation {
  /**
   *
   * @param {string} id
   * @param {string} name
   * @param {Currency[]} currencies
   * @param {Building[]} buildings
   * @param {Unit[]} units
   * @param {Technology[]} technologies
   * @param {Hero[]} heros
   */
  constructor(id, name, currencies, buildings, units, technologies, heros) {
    this.id = id;
    this.name = name;
    this.currencies = currencies;
    this.buildings = buildings;
    this.units = units;
    this.technologies = technologies;
    this.heros = heros;
  }

  get Id() {
    return this.id;
  }

  get Name() {
    return this.name;
  }

  get Currencies() {
    return this.currencies;
  }

  get Building() {
    return this.buildings;
  }

  get Units() {
    return this.units;
  }

  get Technologies() {
    return this.technologies;
  }

  get Heros() {
    return this.heros;
  }
}

export const NationsEnum = {
  R2FyZGVuIFBhcmsncyBCYW5kaXQgQm95cw: new Nation(
    "R2FyZGVuIFBhcmsncyBCYW5kaXQgQm95cw",
    "Garden Park's Bandit Boys",
    [
      CurrencyEnum.UGVzb3M,
      CurrencyEnum.Rm9vZA,
      CurrencyEnum.V29vZA,
      CurrencyEnum.U3RvbmU,
    ],
    [BuildingEnum.Q2FtcA],
    [],
    [],
    []
  ),
};

export default Nation;
