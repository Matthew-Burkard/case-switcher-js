import { describe } from "mocha";
import { expect } from "chai";
import { toPath } from "../src";
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

describe("To path/case", () => {
  describe("To path from camel", () => {
    it(`From ${camelSample}.`, () => {
      expect(toPath(camelSample)).to.equal("coffee/json/donut");
    });
  });
  describe("To path from dot", () => {
    it(`From ${dotSample}.`, () => {
      expect(toPath(dotSample)).to.equal("coffee/json/donut");
    });
  });
  describe("To path from kebab", () => {
    it(`From ${kebabSample}.`, () => {
      expect(toPath(kebabSample)).to.equal("coffee/json/donut");
    });
  });
  describe("To path from pascal", () => {
    it(`From ${pascalSample}.`, () => {
      expect(toPath(pascalSample)).to.equal("coffee/json/donut");
    });
  });
  describe("To path from path", () => {
    it(`From ${pathSample}.`, () => {
      expect(toPath(pathSample)).to.equal("coffee/json/donut");
    });
  });
  describe("To path from snake", () => {
    it(`From ${snakeSample}.`, () => {
      expect(toPath(snakeSample)).to.equal("coffee/json/donut");
    });
  });
  describe("To path from title", () => {
    it(`From ${titleSample}.`, () => {
      expect(toPath(titleSample)).to.equal("coffee/json/donut");
    });
  });
  describe("To path from lone word", () => {
    it(`From ${loneWordSample}.`, () => {
      expect(toPath(loneWordSample)).to.equal("honey");
    });
  });
  describe("To path from lone upper word", () => {
    it(`From ${loneUpperWordSample}.`, () => {
      expect(toPath(loneUpperWordSample)).to.equal("icing");
    });
  });
  describe("To path from nothing", () => {
    it("Should be nothing", () => {
      expect(toPath("")).to.equal("");
    });
  });
  describe("To path from mix", () => {
    it(`From ${mixedSample}.`, () => {
      expect(toPath(mixedSample)).to.equal(
        "avocado/bagel/coffee/donut/eclair/food/gravy"
      );
    });
  });
});
