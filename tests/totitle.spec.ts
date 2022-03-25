import { describe } from "mocha";
import { expect } from "chai";
import { toTitle } from "../src";
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

describe("To Title Case", () => {
  describe("To title from camel", () => {
    it(`From ${camelSample}.`, () => {
      expect(toTitle(camelSample)).to.equal("Coffee JSON Donut");
    });
  });
  describe("To title from dot", () => {
    it(`From ${dotSample}.`, () => {
      expect(toTitle(dotSample)).to.equal("Coffee Json Donut");
    });
  });
  describe("To title from kebab", () => {
    it(`From ${kebabSample}.`, () => {
      expect(toTitle(kebabSample)).to.equal("Coffee Json Donut");
    });
  });
  describe("To title from pascal", () => {
    it(`From ${pascalSample}.`, () => {
      expect(toTitle(pascalSample)).to.equal("Coffee JSON Donut");
    });
  });
  describe("To title from snake", () => {
    it(`From ${snakeSample}.`, () => {
      expect(toTitle(snakeSample)).to.equal("Coffee Json Donut");
    });
  });
  describe("To title from title", () => {
    it(`From ${titleSample}.`, () => {
      expect(toTitle(titleSample)).to.equal("Coffee JSON Donut");
    });
  });
  describe("To title from lone word", () => {
    it(`From ${loneWordSample}.`, () => {
      expect(toTitle(loneWordSample)).to.equal("Honey");
    });
  });
  describe("To title from lone upper word", () => {
    it(`From ${loneUpperWordSample}.`, () => {
      expect(toTitle(loneUpperWordSample)).to.equal("ICING");
    });
  });
  describe("To title from nothing", () => {
    it("Should be nothing", () => {
      expect(toTitle("")).to.equal("");
    });
  });
  describe("To title from mix", () => {
    it(`From ${mixedSample}.`, () => {
      expect(toTitle(mixedSample)).to.equal(
        "Avocado Bagel Coffee DONUT Eclair Food Gravy"
      );
    });
  });
});
