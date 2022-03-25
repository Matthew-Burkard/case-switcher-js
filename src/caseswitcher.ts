/*
 * Return a version of the string in camelCase format.
 */
export function toCamel(str: string): string {
  let words = getWords(str);
  let firstWord = "";
  if (words.length > 0) {
    firstWord = isUpper(words[0]) ? words[0] : words[0].toLowerCase();
  }
  return (
    firstWord + words.slice(1, words.length).map(capitalizeOrAllCaps).join("")
  );
}

/*
 * Return a version of the string in dot.case format.
 */
export function toDot(str: string): string {
  return getWords(str).map(w => w.toLowerCase()).join(".");
}

/*
 * Return a version of the string in kebab-case format.
 */
export function toKebab(str: string): string {
  return getWords(str).map(w => w.toLowerCase()).join("-");
}

/*
 * Return a version of the string in PascalCase format.
 */
export function toPascal(str: string): string {
  return getWords(str).map(capitalizeOrAllCaps).join("");
}

/*
 * Return a version of the string in snake_case format.
 */
export function toSnake(str: string): string {
  return getWords(str).map(w => w.toLowerCase()).join("_");
}

/*
 * Return a version of the string in Title Case format.
 */
export function toTitle(str: string): string {
  return str;
}

/*
 * Return a version of the string in UPPER.DOT.CASE format.
 */
export function toUpperDot(str: string): string {
  return str;
}

/*
 * Return a version of the string in UPPER-KEBAB-CASE format.
 */
export function toUpperKebab(str: string): string {
  return str;
}

/*
 * Return a version of the string in UPPER_SNAKE_CASE format.
 */
export function toUpperSnake(str: string): string {
  return str;
}

/*
 * Get an array of the words in a string in the order they appear.
 */
export function getWords(str: string): string[] {
  let words = str
    .split(/\b|_/)
    .filter((s) => !["", ".", " ", "-", "_"].includes(s));
  // Split on lower then upper: "oneTwo" -> ["one", "Two"]
  words = splitWordsOnRegex(words, /(?<=[a-z])(?=[A-Z])/);
  // Split on upper then upper + lower: "JSONWord" -> ["JSON", "Word"]
  words = splitWordsOnRegex(words, /(?<=[A-Z])(?=[A-Z][a-z])/);
  // Split on number + letter: "TO1Cat23dog" -> ["TO1", "Cat23", "dog"]
  words = splitWordsOnRegex(words, /(?<=\d)(?=[A-Za-z])/);
  return words;
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
export function isUpper(str: string): boolean {
  return (str.match(/[A-Z]/) && !str.match(/[a-z]/)) ?? false;
}

function splitWordsOnRegex(words: string[], regExp: RegExp): string[] {
  let copiedWords = words.map((it) => it);
  for (const [index, word] of copiedWords.entries()) {
    let splitWords = word.split(regExp);
    if (splitWords.length > 1) {
      copiedWords.splice(index, 1);
      for (const [swIndex, splitWord] of splitWords.entries()) {
        copiedWords.splice(index + swIndex, 0, splitWord);
      }
    }
  }
  return copiedWords;
}

function capitalizeOrAllCaps(word: string): string {
  return isUpper(word) ? word : capitalize(word);
}
