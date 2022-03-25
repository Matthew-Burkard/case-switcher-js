import { describe } from "mocha";
import { expect } from "chai";
import {
  capitalize,
  getWords,
  toCamel,
  toDot,
  toKebab,
  toPascal,
  toSnake,
  toTitle,
  toUpperDot,
  toUpperKebab,
  toUpperSnake,
} from "../src";

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
      expect(getWords(numbersSample)).to.members(["JSON1", "Jelly23", "kebab"]);
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

describe("To PascalCase", () => {
  describe("To pascal from camel", () => {
    it(`From ${camelSample}.`, () => {
      expect(toPascal(camelSample)).to.equal("CoffeeJSONDonut");
    });
  });
  describe("To pascal from dot", () => {
    it(`From ${dotSample}.`, () => {
      expect(toPascal(dotSample)).to.equal("CoffeeJsonDonut");
    });
  });
  describe("To pascal from kebab", () => {
    it(`From ${kebabSample}.`, () => {
      expect(toPascal(kebabSample)).to.equal("CoffeeJsonDonut");
    });
  });
  describe("To pascal from pascal", () => {
    it(`From ${pascalSample}.`, () => {
      expect(toPascal(pascalSample)).to.equal("CoffeeJSONDonut");
    });
  });
  describe("To pascal from snake", () => {
    it(`From ${snakeSample}.`, () => {
      expect(toPascal(snakeSample)).to.equal("CoffeeJsonDonut");
    });
  });
  describe("To pascal from title", () => {
    it(`From ${titleSample}.`, () => {
      expect(toPascal(titleSample)).to.equal("CoffeeJSONDonut");
    });
  });
  describe("To pascal from lone word", () => {
    it(`From ${loneWordSample}.`, () => {
      expect(toPascal(loneWordSample)).to.equal("Honey");
    });
  });
  describe("To pascal from lone upper word", () => {
    it(`From ${loneUpperWordSample}.`, () => {
      expect(toPascal(loneUpperWordSample)).to.equal("ICING");
    });
  });
  describe("To pascal from nothing", () => {
    it("Should be nothing", () => {
      expect(toPascal("")).to.equal("");
    });
  });
  describe("To pascal from mix", () => {
    it(`From ${mixedSample}.`, () => {
      expect(toPascal(mixedSample)).to.equal(
        "AvocadoBagelCoffeeDONUTEclairFoodGravy"
      );
    });
  });
});

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

describe("To UPPER.DOT.CASE", () => {
  describe("To upper dot from camel", () => {
    it(`From ${camelSample}.`, () => {
      expect(toUpperDot(camelSample)).to.equal("COFFEE.JSON.DONUT");
    });
  });
  describe("To upper dot from dot", () => {
    it(`From ${dotSample}.`, () => {
      expect(toUpperDot(dotSample)).to.equal("COFFEE.JSON.DONUT");
    });
  });
  describe("To upper dot from kebab", () => {
    it(`From ${kebabSample}.`, () => {
      expect(toUpperDot(kebabSample)).to.equal("COFFEE.JSON.DONUT");
    });
  });
  describe("To upper dot from pascal", () => {
    it(`From ${pascalSample}.`, () => {
      expect(toUpperDot(pascalSample)).to.equal("COFFEE.JSON.DONUT");
    });
  });
  describe("To upper dot from snake", () => {
    it(`From ${snakeSample}.`, () => {
      expect(toUpperDot(snakeSample)).to.equal("COFFEE.JSON.DONUT");
    });
  });
  describe("To upper dot from title", () => {
    it(`From ${titleSample}.`, () => {
      expect(toUpperDot(titleSample)).to.equal("COFFEE.JSON.DONUT");
    });
  });
  describe("To upper dot from lone word", () => {
    it(`From ${loneWordSample}.`, () => {
      expect(toUpperDot(loneWordSample)).to.equal("HONEY");
    });
  });
  describe("To upper dot from lone upper word", () => {
    it(`From ${loneUpperWordSample}.`, () => {
      expect(toUpperDot(loneUpperWordSample)).to.equal("ICING");
    });
  });
  describe("To upper dot from nothing", () => {
    it("Should be nothing", () => {
      expect(toUpperDot("")).to.equal("");
    });
  });
  describe("To upper dot from mix", () => {
    it(`From ${mixedSample}.`, () => {
      expect(toUpperDot(mixedSample)).to.equal(
        "AVOCADO.BAGEL.COFFEE.DONUT.ECLAIR.FOOD.GRAVY"
      );
    });
  });
});

describe("To UPPER-KEBAB-CASE", () => {
  describe("To upper kebab from camel", () => {
    it(`From ${camelSample}.`, () => {
      expect(toUpperKebab(camelSample)).to.equal("COFFEE-JSON-DONUT");
    });
  });
  describe("To upper kebab from dot", () => {
    it(`From ${dotSample}.`, () => {
      expect(toUpperKebab(dotSample)).to.equal("COFFEE-JSON-DONUT");
    });
  });
  describe("To upper kebab from kebab", () => {
    it(`From ${kebabSample}.`, () => {
      expect(toUpperKebab(kebabSample)).to.equal("COFFEE-JSON-DONUT");
    });
  });
  describe("To upper kebab from pascal", () => {
    it(`From ${pascalSample}.`, () => {
      expect(toUpperKebab(pascalSample)).to.equal("COFFEE-JSON-DONUT");
    });
  });
  describe("To upper kebab from snake", () => {
    it(`From ${snakeSample}.`, () => {
      expect(toUpperKebab(snakeSample)).to.equal("COFFEE-JSON-DONUT");
    });
  });
  describe("To upper kebab from title", () => {
    it(`From ${titleSample}.`, () => {
      expect(toUpperKebab(titleSample)).to.equal("COFFEE-JSON-DONUT");
    });
  });
  describe("To upper kebab from lone word", () => {
    it(`From ${loneWordSample}.`, () => {
      expect(toUpperKebab(loneWordSample)).to.equal("HONEY");
    });
  });
  describe("To upper kebab from lone upper word", () => {
    it(`From ${loneUpperWordSample}.`, () => {
      expect(toUpperKebab(loneUpperWordSample)).to.equal("ICING");
    });
  });
  describe("To upper kebab from nothing", () => {
    it("Should be nothing", () => {
      expect(toUpperKebab("")).to.equal("");
    });
  });
  describe("To upper kebab from mix", () => {
    it(`From ${mixedSample}.`, () => {
      expect(toUpperKebab(mixedSample)).to.equal(
        "AVOCADO-BAGEL-COFFEE-DONUT-ECLAIR-FOOD-GRAVY"
      );
    });
  });
});

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
