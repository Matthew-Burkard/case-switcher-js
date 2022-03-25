import { describe } from "mocha";
import { expect } from "chai";
import { toPascal } from "../src";
import {
  camelSample,
  dotSample,
  kebabSample,
  loneUpperWordSample,
  loneWordSample,
  mixedSample,
  pascalSample,
  snakeSample,
  titleSample,
  // @ts-ignore
} from "./samples";

describe("To PascalCase", () => {
  describe("To pascal from camel", () => {
    it(`From ${camelSample}.`, () => {
      expect(toPascal(camelSample)).to.equal("CoffeeJSONDonut");
    });
  });
  describe("To pascal from dot", () => {
    it(`From ${dotSample}.`, () => {
      expect(toPascal(dotSample)).to.equal("CoffeeJsonDonut");
    });
  });
  describe("To pascal from kebab", () => {
    it(`From ${kebabSample}.`, () => {
      expect(toPascal(kebabSample)).to.equal("CoffeeJsonDonut");
    });
  });
  describe("To pascal from pascal", () => {
    it(`From ${pascalSample}.`, () => {
      expect(toPascal(pascalSample)).to.equal("CoffeeJSONDonut");
    });
  });
  describe("To pascal from snake", () => {
    it(`From ${snakeSample}.`, () => {
      expect(toPascal(snakeSample)).to.equal("CoffeeJsonDonut");
    });
  });
  describe("To pascal from title", () => {
    it(`From ${titleSample}.`, () => {
      expect(toPascal(titleSample)).to.equal("CoffeeJSONDonut");
    });
  });
  describe("To pascal from lone word", () => {
    it(`From ${loneWordSample}.`, () => {
      expect(toPascal(loneWordSample)).to.equal("Honey");
    });
  });
  describe("To pascal from lone upper word", () => {
    it(`From ${loneUpperWordSample}.`, () => {
      expect(toPascal(loneUpperWordSample)).to.equal("ICING");
    });
  });
  describe("To pascal from nothing", () => {
    it("Should be nothing", () => {
      expect(toPascal("")).to.equal("");
    });
  });
  describe("To pascal from mix", () => {
    it(`From ${mixedSample}.`, () => {
      expect(toPascal(mixedSample)).to.equal(
        "AvocadoBagelCoffeeDONUTEclairFoodGravy"
      );
    });
  });
});
