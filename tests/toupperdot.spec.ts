import { describe } from "mocha";
import { expect } from "chai";
import { toUpperDot } from "../src";
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
  // @ts-ignore
} from "./samples";

describe("To UPPER.DOT.CASE", () => {
  describe("To upper dot from camel", () => {
    it(`From ${camelSample}.`, () => {
      expect(toUpperDot(camelSample)).to.equal("COFFEE.JSON.DONUT");
    });
  });
  describe("To upper dot from dot", () => {
    it(`From ${dotSample}.`, () => {
      expect(toUpperDot(dotSample)).to.equal("COFFEE.JSON.DONUT");
    });
  });
  describe("To upper dot from kebab", () => {
    it(`From ${kebabSample}.`, () => {
      expect(toUpperDot(kebabSample)).to.equal("COFFEE.JSON.DONUT");
    });
  });
  describe("To upper dot from pascal", () => {
    it(`From ${pascalSample}.`, () => {
      expect(toUpperDot(pascalSample)).to.equal("COFFEE.JSON.DONUT");
    });
  });
  describe("To upper dot from snake", () => {
    it(`From ${pathSample}.`, () => {
      expect(toUpperDot(pathSample)).to.equal("COFFEE.JSON.DONUT");
    });
  });
  describe("To upper dot from snake", () => {
    it(`From ${snakeSample}.`, () => {
      expect(toUpperDot(snakeSample)).to.equal("COFFEE.JSON.DONUT");
    });
  });
  describe("To upper dot from title", () => {
    it(`From ${titleSample}.`, () => {
      expect(toUpperDot(titleSample)).to.equal("COFFEE.JSON.DONUT");
    });
  });
  describe("To upper dot from lone word", () => {
    it(`From ${loneWordSample}.`, () => {
      expect(toUpperDot(loneWordSample)).to.equal("HONEY");
    });
  });
  describe("To upper dot from lone upper word", () => {
    it(`From ${loneUpperWordSample}.`, () => {
      expect(toUpperDot(loneUpperWordSample)).to.equal("ICING");
    });
  });
  describe("To upper dot from nothing", () => {
    it("Should be nothing", () => {
      expect(toUpperDot("")).to.equal("");
    });
  });
  describe("To upper dot from mix", () => {
    it(`From ${mixedSample}.`, () => {
      expect(toUpperDot(mixedSample)).to.equal(
        "AVOCADO.BAGEL.COFFEE.DONUT.ECLAIR.FOOD.GRAVY"
      );
    });
  });
});
