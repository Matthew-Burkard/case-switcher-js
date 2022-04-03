import { describe } from "mocha";
import { expect } from "chai";
import { capitalize, getWords } from "../src";
import {
  camelSample,
  dotSample,
  kebabSample,
  loneUpperWordSample,
  mixedSample,
  numbersSample,
  pascalSample,
  pathSample,
  snakeSample,
  titleSample,
  // @ts-ignore
} from "./samples";

describe("Capitalize", () => {
  describe("Capitalize all lower case", () => {
    it("Should be Coffee", () => {
      expect(capitalize("coffee")).to.equal("Coffee");
    });
  });
  describe("Capitalize all upper case", () => {
    it("Should be Coffee", () => {
      expect(capitalize("COFFEE")).to.equal("Coffee");
    });
  });
  describe("Numbers remain unchanged", () => {
    it("Should be 123", () => {
      expect(capitalize("123")).to.equal("123");
    });
  });
  describe("One letter word.", () => {
    it("Should be A", () => {
      expect(capitalize("a")).to.equal("A");
    });
  });
});

describe("Get Words", () => {
  describe("Get words from camelCase string.", () => {
    it(`From ${camelSample}.`, () => {
      expect(getWords(camelSample)).to.members(["coffee", "JSON", "Donut"]);
    });
  });
  describe("Get words from dot.case string.", () => {
    it(`From ${dotSample}.`, () => {
      expect(getWords(dotSample)).to.members(["coffee", "json", "donut"]);
    });
  });
  describe("Get words from kebab-case string.", () => {
    it(`From ${kebabSample}.`, () => {
      expect(getWords(kebabSample)).to.members(["coffee", "json", "donut"]);
    });
  });
  describe("Get words from PascalCase string.", () => {
    it(`From ${pascalSample}.`, () => {
      expect(getWords(pascalSample)).to.members(["Coffee", "JSON", "Donut"]);
    });
  });
  describe("Get words from path/case string.", () => {
    it(`From ${pathSample}.`, () => {
      expect(getWords(pathSample)).to.members(["coffee", "json", "donut"]);
    });
  });
  describe("Get words from snake_case string.", () => {
    it(`From ${snakeSample}.`, () => {
      expect(getWords(snakeSample)).to.members(["coffee", "json", "donut"]);
    });
  });
  describe("Get words from Title Case string.", () => {
    it(`From ${titleSample}.`, () => {
      expect(getWords(titleSample)).to.members(["Coffee", "JSON", "Donut"]);
    });
  });
  describe("Get words from lone word.", () => {
    it(`From ${loneUpperWordSample}.`, () => {
      expect(getWords(loneUpperWordSample)).to.members([loneUpperWordSample]);
    });
  });
  describe("Get words from nothing.", () => {
    it("From nothing.", () => {
      expect(getWords("")).to.members([]);
    });
  });
  describe("Get words from mixed case string.", () => {
    it(`From ${mixedSample}.`, () => {
      expect(getWords(mixedSample)).to.members([
        "avocado",
        "bagel",
        "coffee",
        "DONUT",
        "Eclair",
        "food",
        "gravy",
      ]);
    });
  });
  describe("Get words with numbers.", () => {
    it(`From ${numbersSample}.`, () => {
      expect(getWords(numbersSample)).to.members(["JSON1", "Jelly23", "kebab"]);
    });
  });
});
