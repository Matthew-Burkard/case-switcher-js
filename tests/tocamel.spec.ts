import { describe } from "mocha";
import { expect } from "chai";
import { toCamel } from "../src";
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

describe("To camelCase", () => {
  describe("To camel from camel", () => {
    it(`From ${camelSample}.`, () => {
      expect(toCamel(camelSample)).to.equal("coffeeJSONDonut");
    });
  });
  describe("To camel from dot", () => {
    it(`From ${dotSample}.`, () => {
      expect(toCamel(dotSample)).to.equal("coffeeJsonDonut");
    });
  });
  describe("To camel from kebab", () => {
    it(`From ${kebabSample}.`, () => {
      expect(toCamel(kebabSample)).to.equal("coffeeJsonDonut");
    });
  });
  describe("To camel from pascal", () => {
    it(`From ${pascalSample}.`, () => {
      expect(toCamel(pascalSample)).to.equal("coffeeJSONDonut");
    });
  });
  describe("To camel from path", () => {
    it(`From ${pathSample}.`, () => {
      expect(toCamel(pathSample)).to.equal("coffeeJsonDonut");
    });
  });
  describe("To camel from snake", () => {
    it(`From ${snakeSample}.`, () => {
      expect(toCamel(snakeSample)).to.equal("coffeeJsonDonut");
    });
  });
  describe("To camel from title", () => {
    it(`From ${titleSample}.`, () => {
      expect(toCamel(titleSample)).to.equal("coffeeJSONDonut");
    });
  });
  describe("To camel from lone word", () => {
    it(`From ${loneWordSample}.`, () => {
      expect(toCamel(loneWordSample)).to.equal("honey");
    });
  });
  describe("To camel from lone upper word", () => {
    it(`From ${loneUpperWordSample}.`, () => {
      expect(toCamel(loneUpperWordSample)).to.equal("ICING");
    });
  });
  describe("To camel from nothing", () => {
    it("Should nothing", () => {
      expect(toCamel("")).to.equal("");
    });
  });
  describe("To camel from mix", () => {
    it(`From ${mixedSample}.`, () => {
      expect(toCamel(mixedSample)).to.equal(
        "avocadoBagelCoffeeDONUTEclairFoodGravy"
      );
    });
  });
});
