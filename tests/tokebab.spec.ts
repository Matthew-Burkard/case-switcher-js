import { describe } from "mocha";
import { expect } from "chai";
import { toKebab } from "../src";
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

describe("To kebab-case", () => {
  describe("To kebab from camel", () => {
    it(`From ${camelSample}.`, () => {
      expect(toKebab(camelSample)).to.equal("coffee-json-donut");
    });
  });
  describe("To kebab from dot", () => {
    it(`From ${dotSample}.`, () => {
      expect(toKebab(dotSample)).to.equal("coffee-json-donut");
    });
  });
  describe("To kebab from kebab", () => {
    it(`From ${kebabSample}.`, () => {
      expect(toKebab(kebabSample)).to.equal("coffee-json-donut");
    });
  });
  describe("To kebab from pascal", () => {
    it(`From ${pascalSample}.`, () => {
      expect(toKebab(pascalSample)).to.equal("coffee-json-donut");
    });
  });
  describe("To kebab from snake", () => {
    it(`From ${snakeSample}.`, () => {
      expect(toKebab(snakeSample)).to.equal("coffee-json-donut");
    });
  });
  describe("To kebab from path", () => {
    it(`From ${pathSample}.`, () => {
      expect(toKebab(pathSample)).to.equal("coffee-json-donut");
    });
  });
  describe("To kebab from title", () => {
    it(`From ${titleSample}.`, () => {
      expect(toKebab(titleSample)).to.equal("coffee-json-donut");
    });
  });
  describe("To kebab from lone word", () => {
    it(`From ${loneWordSample}.`, () => {
      expect(toKebab(loneWordSample)).to.equal("honey");
    });
  });
  describe("To kebab from lone upper word", () => {
    it(`From ${loneUpperWordSample}.`, () => {
      expect(toKebab(loneUpperWordSample)).to.equal("icing");
    });
  });
  describe("To kebab from nothing", () => {
    it("Should be nothing", () => {
      expect(toKebab("")).to.equal("");
    });
  });
  describe("To kebab from mix", () => {
    it(`From ${mixedSample}.`, () => {
      expect(toKebab(mixedSample)).to.equal(
        "avocado-bagel-coffee-donut-eclair-food-gravy"
      );
    });
  });
});
