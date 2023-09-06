// Password values module. Holds letters, numbers, and symbols arrays.

// prettier-ignore
const letters: string[] = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
    "p","q","r","s","t","u","v","w","x","y","z"
];

const numbers: string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const symbols: string[] = ["@", "#", "$", "%", "&"];

const ambiguous: string[] = ["!", "^", "*", "(", ")", "-", "_", "=", "+", "["];

// Values object, holds all the value arrays
const values: { [key: string]: Array<string> } = {
  letters: letters,
  numbers: numbers,
  symbols: symbols,
  ambiguous: ambiguous,
};

export { values };
