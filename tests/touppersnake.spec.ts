import { describe } from "mocha";
import { expect } from "chai";
import { toUpperSnake } from "../src";
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

describe("To UPPER_SNAKE_CASE", () => {
  describe("To upper snake from camel", () => {
    it(`From ${camelSample}.`, () => {
      expect(toUpperSnake(camelSample)).to.equal("COFFEE_JSON_DONUT");
    });
  });
  describe("To upper snake from dot", () => {
    it(`From ${dotSample}.`, () => {
      expect(toUpperSnake(dotSample)).to.equal("COFFEE_JSON_DONUT");
    });
  });
  describe("To upper snake from kebab", () => {
    it(`From ${kebabSample}.`, () => {
      expect(toUpperSnake(kebabSample)).to.equal("COFFEE_JSON_DONUT");
    });
  });
  describe("To upper snake from pascal", () => {
    it(`From ${pascalSample}.`, () => {
      expect(toUpperSnake(pascalSample)).to.equal("COFFEE_JSON_DONUT");
    });
  });
  describe("To upper snake from snake", () => {
    it(`From ${snakeSample}.`, () => {
      expect(toUpperSnake(snakeSample)).to.equal("COFFEE_JSON_DONUT");
    });
  });
  describe("To upper snake from title", () => {
    it(`From ${titleSample}.`, () => {
      expect(toUpperSnake(titleSample)).to.equal("COFFEE_JSON_DONUT");
    });
  });
  describe("To upper snake from lone word", () => {
    it(`From ${loneWordSample}.`, () => {
      expect(toUpperSnake(loneWordSample)).to.equal("HONEY");
    });
  });
  describe("To upper snake from lone upper word", () => {
    it(`From ${loneUpperWordSample}.`, () => {
      expect(toUpperSnake(loneUpperWordSample)).to.equal("ICING");
    });
  });
  describe("To upper snake from nothing", () => {
    it("Should be nothing", () => {
      expect(toUpperSnake("")).to.equal("");
    });
  });
  describe("To upper snake from mix", () => {
    it(`From ${mixedSample}.`, () => {
      expect(toUpperSnake(mixedSample)).to.equal(
        "AVOCADO_BAGEL_COFFEE_DONUT_ECLAIR_FOOD_GRAVY"
      );
    });
  });
});
