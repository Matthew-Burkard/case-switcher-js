import { describe } from "mocha";
import { expect } from "chai";
import { capitalize } from "../src/caseswitcher";

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
