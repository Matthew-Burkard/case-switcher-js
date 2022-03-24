/*
 * Return a version of the string in camelCase format.
 */
export function toCamel(str: string): string {
  return "";
}

/*
 * Return a version of the string in dot.case format.
 */
export function toDot(str: string): string {
  return "";
}

/*
 * Return a version of the string in kebab-case format.
 */
export function toKebab(str: string): string {
  return "";
}

/*
 * Return a version of the string in PascalCase format.
 */
export function toPascal(str: string): string {
  return "";
}

/*
 * Return a version of the string in snake_case format.
 */
export function toSnake(str: string): string {
  return "";
}

/*
 * Return a version of the string in Title Case format.
 */
export function toTitle(str: string): string {
  return "";
}

/*
 * Return a version of the string in UPPER.DOT.CASE format.
 */
export function toUpperDot(str: string): string {
  return "";
}

/*
 * Return a version of the string in UPPER-KEBAB-CASE format.
 */
export function toUpperKebab(str: string): string {
  return "";
}

/*
 * Return a version of the string in UPPER_SNAKE_CASE format.
 */
export function toUpperSnake(str: string): string {
  return "";
}

/*
 * Get an array of the words in a string in the order they appear.
 */
export function getWords(str: string): string {
  return "";
}

/*
 * Return a capitalized version of the string.
 */
export function capitalize(word: string): string {
  if (word.length < 2) {
    return word.toUpperCase();
  }
  return word[0].toUpperCase().concat(word.slice(1).toLowerCase());
}

/*
 * Return true if the string is an uppercase string, else false.
 */
function isUpper(str: string): boolean {
  return (str.match(/[A-Z]/) && !str.match(/[a-z]/)) ?? false;
}

function capitalizeOrAllCaps(word: string): string {
  return isUpper(word) ? word : capitalize(word);
}
