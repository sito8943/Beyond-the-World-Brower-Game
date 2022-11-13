// @ts-check

import Entity from "./Entity";
import { CurrencyEnum, Price, ProductionType } from "./Currency";

class BuildingType {
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

class Building extends Entity {
  /**
   *
   * @param {string} id
   * @param {string} name
   * @param {Price} price
   * @param {BuildingType} type
   * @param {ProductionType} production
   * @param {Entity[]} req
   */
  constructor(id, name, price, type, production, req) {
    super(id, name);
    this.price = price;
    this.currentPrice = new Price(price.Currency, price.Count);
    this.type = type;
    this.production = production;
    this.req = req;
  }
}

export const BuildingTypeEnum = {
  Rm9ydHJlc3M: new BuildingType("Rm9ydHJlc3M", "Fortress"),
  UHJvZHVjdGlvbg: new BuildingType("UHJvZHVjdGlvbg", "Production"),
  TWlsaXRhcg: new BuildingType("TWlsaXRhcg", "Militar"),
  VGVjaG5vbG9neQ: new BuildingType("VGVjaG5vbG9neQ", "Technology"),
};

export const BuildingEnum = {
  Q2FtcA: new Building(
    "Q2FtcA",
    "Camp",
    new Price(CurrencyEnum.UGVzb3M, 0),
    BuildingTypeEnum.Rm9ydHJlc3M,
    new ProductionType(CurrencyEnum.UGVzb3M, 100),
    []
  ),
};

export default Building;
