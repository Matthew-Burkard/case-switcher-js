import { describe } from "mocha";
import { expect } from "chai";
import { toDot } from "../src";
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

describe("To dot.case", () => {
  describe("To dot from camel", () => {
    it(`From ${camelSample}.`, () => {
      expect(toDot(camelSample)).to.equal("coffee.json.donut");
    });
  });
  describe("To dot from dot", () => {
    it(`From ${dotSample}.`, () => {
      expect(toDot(dotSample)).to.equal("coffee.json.donut");
    });
  });
  describe("To dot from kebab", () => {
    it(`From ${kebabSample}.`, () => {
      expect(toDot(kebabSample)).to.equal("coffee.json.donut");
    });
  });
  describe("To dot from pascal", () => {
    it(`From ${pascalSample}.`, () => {
      expect(toDot(pascalSample)).to.equal("coffee.json.donut");
    });
  });
  describe("To dot from path", () => {
    it(`From ${pathSample}.`, () => {
      expect(toDot(pathSample)).to.equal("coffee.json.donut");
    });
  });
  describe("To dot from snake", () => {
    it(`From ${snakeSample}.`, () => {
      expect(toDot(snakeSample)).to.equal("coffee.json.donut");
    });
  });
  describe("To dot from title", () => {
    it(`From ${titleSample}.`, () => {
      expect(toDot(titleSample)).to.equal("coffee.json.donut");
    });
  });
  describe("To dot from lone word", () => {
    it(`From ${loneWordSample}.`, () => {
      expect(toDot(loneWordSample)).to.equal("honey");
    });
  });
  describe("To dot from lone upper word", () => {
    it(`From ${loneUpperWordSample}.`, () => {
      expect(toDot(loneUpperWordSample)).to.equal("icing");
    });
  });
  describe("To dot from nothing", () => {
    it("Should be nothing", () => {
      expect(toDot("")).to.equal("");
    });
  });
  describe("To dot from mix", () => {
    it(`From ${mixedSample}.`, () => {
      expect(toDot(mixedSample)).to.equal(
        "avocado.bagel.coffee.donut.eclair.food.gravy"
      );
    });
  });
});
