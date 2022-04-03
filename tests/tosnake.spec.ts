import { describe } from "mocha";
import { expect } from "chai";
import { toSnake } from "../src";
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

describe("To snake_case", () => {
  describe("To snake from camel", () => {
    it(`From ${camelSample}.`, () => {
      expect(toSnake(camelSample)).to.equal("coffee_json_donut");
    });
  });
  describe("To snake from dot", () => {
    it(`From ${dotSample}.`, () => {
      expect(toSnake(dotSample)).to.equal("coffee_json_donut");
    });
  });
  describe("To snake from kebab", () => {
    it(`From ${kebabSample}.`, () => {
      expect(toSnake(kebabSample)).to.equal("coffee_json_donut");
    });
  });
  describe("To snake from pascal", () => {
    it(`From ${pascalSample}.`, () => {
      expect(toSnake(pascalSample)).to.equal("coffee_json_donut");
    });
  });
  describe("To snake from path", () => {
    it(`From ${pathSample}.`, () => {
      expect(toSnake(pathSample)).to.equal("coffee_json_donut");
    });
  });
  describe("To snake from snake", () => {
    it(`From ${snakeSample}.`, () => {
      expect(toSnake(snakeSample)).to.equal("coffee_json_donut");
    });
  });
  describe("To snake from title", () => {
    it(`From ${titleSample}.`, () => {
      expect(toSnake(titleSample)).to.equal("coffee_json_donut");
    });
  });
  describe("To snake from lone word", () => {
    it(`From ${loneWordSample}.`, () => {
      expect(toSnake(loneWordSample)).to.equal("honey");
    });
  });
  describe("To snake from lone upper word", () => {
    it(`From ${loneUpperWordSample}.`, () => {
      expect(toSnake(loneUpperWordSample)).to.equal("icing");
    });
  });
  describe("To snake from nothing", () => {
    it("Should be nothing", () => {
      expect(toSnake("")).to.equal("");
    });
  });
  describe("To snake from mix", () => {
    it(`From ${mixedSample}.`, () => {
      expect(toSnake(mixedSample)).to.equal(
        "avocado_bagel_coffee_donut_eclair_food_gravy"
      );
    });
  });
});
