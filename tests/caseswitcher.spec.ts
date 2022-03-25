import { describe } from "mocha";
import { expect } from "chai";
import { capitalize, getWords, toCamel, toDot } from "../src/caseswitcher";

const camelSample = "coffeeJSONDonut";
const dotSample = "coffee.json.donut";
const kebabSample = "coffee-json-donut";
const pascalSample = "CoffeeJSONDonut";
const snakeSample = "coffee_json_donut";
const titleSample = "Coffee JSON Donut";
const mixedSample = "avocado bagel-coffeeDONUTEclair_food.gravy";
const loneWordSample = "Honey";
const loneUpperWordSample = "ICING";
const numbersSample = "JSON1Jelly23kebab";

describe("Case Switcher Tests", () => {
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
        expect(getWords(numbersSample)).to.members([
          "JSON1",
          "Jelly23",
          "kebab",
        ]);
      });
    });
  });

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
});
