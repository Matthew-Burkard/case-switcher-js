import { describe } from "mocha";
import { expect } from "chai";
import { capitalize } from "../src/caseswitcher";
import { getWords } from "../src/caseswitcher";

const camelSample = "coffeeJSONDonut";
const dotSample = "coffee.json.donut";
const kebabSample = "coffee-json-donut";
const pascalSample = "CoffeeJSONDonut";
const snakeSample = "coffee_json_donut";
const titleSample = "Coffee JSON Donut";
const mixedSample = "avocado bagel-coffeeDONUTEclair_food.gravy";
const loneUpperWordSample = "ICING";
const numbersSample = "JSON1Jelly23kebab";

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
