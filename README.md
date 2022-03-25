<!--suppress HtmlDeprecatedAttribute -->
<div align=center>
<!-- Title: -->
  <h1>Case Switcher</h1>
  <h3>Change the casing of a string.</h3>
<!-- Labels: -->
  <!-- First row: -->
  <img src="https://img.shields.io/npm/l/case-switcher-js"
   height="20"
   alt="License">
  <img src="https://img.shields.io/npm/v/case-switcher-js"
   height="20"
   alt="npm version">
  <img src="https://img.shields.io/badge/coverage-100%25-success"
   height="20"
   alt="Code Coverage">
  <a href="https://www.codefactor.io/repository/github/matthew-burkard/case-switcher-js">
    <img
     src="https://www.codefactor.io/repository/github/matthew-burkard/case-switcher-js/badge"
     alt="CodeFactor" />
  </a>
</div>

This library provides functions to change the casing convention of a string.

Supported cases:

- camelCase
- dot.case
- kebab-case
- PascalCase
- snake_case
- Title Case
- UPPER.DOT.CASE
- UPPER-KEBAB-CASE
- UPPER_SNAKE_CASE

### Install

```shell
npm install case-switcher
```

```shell
yarn add case-switcher
```

### Demo

```javascript
import {
  toCamel,
  toDot,
  toKebab,
  toPascal,
  toSnake,
  toTitle,
  toUpperDot,
  toUpperKebab,
  toUpperSnake,
} from "case-switcher-js"

let sample = "avocado bagel-coffeeDONUTEclair_food.gravy"

toCamel(sample)  // -> "avocadoBagelCoffeeDONUTEclairFoodGravy"
toDot(sample)  // -> "avocado.bagel.coffee.donut.eclair.food.gravy"
toKebab(sample)  // -> "avocado-bagel-coffee-donut-eclair-food-gravy"
toPascal(sample)  // -> "AvocadoBagelCoffeeDONUTEclairFoodGravy"
toSnake(sample)  // -> "avocado_bagel_coffee_donut_eclair_food_gravy"
toTitle(sample)  // -> "Avocado Bagel Coffee DONUT Eclair Food Gravy"
toUpperDot(sample)  // -> "AVOCADO.BAGEL.COFFEE.DONUT.ECLAIR.FOOD.GRAVY"
toUpperKebab(sample)  // -> "AVOCADO-BAGEL-COFFEE-DONUT-ECLAIR-FOOD-GRAVY"
toUpperSnake(sample)  // -> "AVOCADO_BAGEL_COFFEE_DONUT_ECLAIR_FOOD_GRAVY"
```
