import { describe } from "mocha";
import { expect } from "chai";
import { toUpperKebab } from "../src";
import {
  camelSample,
  dotSample,
  kebabSample,
  loneUpperWordSample,
  loneWordSample,
  mixedSample,
  pascalSample,
  pathSample,
  snakeSample,
  titleSample,
} from "./samples";

describe("To UPPER-KEBAB-CASE", () => {
  describe("To upper kebab from camel", () => {
    it(`From ${camelSample}.`, () => {
      expect(toUpperKebab(camelSample)).to.equal("COFFEE-JSON-DONUT");
    });
  });
  describe("To upper kebab from dot", () => {
    it(`From ${dotSample}.`, () => {
      expect(toUpperKebab(dotSample)).to.equal("COFFEE-JSON-DONUT");
    });
  });
  describe("To upper kebab from kebab", () => {
    it(`From ${kebabSample}.`, () => {
      expect(toUpperKebab(kebabSample)).to.equal("COFFEE-JSON-DONUT");
    });
  });
  describe("To upper kebab from pascal", () => {
    it(`From ${pascalSample}.`, () => {
      expect(toUpperKebab(pascalSample)).to.equal("COFFEE-JSON-DONUT");
    });
  });
  describe("To upper kebab from path", () => {
    it(`From ${pathSample}.`, () => {
      expect(toUpperKebab(pathSample)).to.equal("COFFEE-JSON-DONUT");
    });
  });
  describe("To upper kebab from snake", () => {
    it(`From ${snakeSample}.`, () => {
      expect(toUpperKebab(snakeSample)).to.equal("COFFEE-JSON-DONUT");
    });
  });
  describe("To upper kebab from title", () => {
    it(`From ${titleSample}.`, () => {
      expect(toUpperKebab(titleSample)).to.equal("COFFEE-JSON-DONUT");
    });
  });
  describe("To upper kebab from lone word", () => {
    it(`From ${loneWordSample}.`, () => {
      expect(toUpperKebab(loneWordSample)).to.equal("HONEY");
    });
  });
  describe("To upper kebab from lone upper word", () => {
    it(`From ${loneUpperWordSample}.`, () => {
      expect(toUpperKebab(loneUpperWordSample)).to.equal("ICING");
    });
  });
  describe("To upper kebab from nothing", () => {
    it("Should be nothing", () => {
      expect(toUpperKebab("")).to.equal("");
    });
  });
  describe("To upper kebab from mix", () => {
    it(`From ${mixedSample}.`, () => {
      expect(toUpperKebab(mixedSample)).to.equal(
        "AVOCADO-BAGEL-COFFEE-DONUT-ECLAIR-FOOD-GRAVY"
      );
    });
  });
});
