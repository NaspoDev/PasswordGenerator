// Validator module. Handles validator logic.

// Imports
import { values } from "../utility/password-values.js";

// Elements
const passwordInput: HTMLInputElement = document.getElementById(
  "password-input"
) as HTMLInputElement;

const strengthValueElement: HTMLSpanElement = document.getElementById(
  "strength-value"
) as HTMLSpanElement;

// Strength value enums
const enum StrengthValue {
  Weak = 1,
  Moderate = 2,
  Strong = 3,
  VeryStrong = 4,
}

// Strength value descriptors
const strengthValueDescriptor: { [key in StrengthValue]: string } = {
  [StrengthValue.Weak]: "Weak",
  [StrengthValue.Moderate]: "Moderate",
  [StrengthValue.Strong]: "Strong",
  [StrengthValue.VeryStrong]: "Very Strong",
};

// Strength criteria to examine, with their respective functions.
const strengthCriteria: { [key: string]: (password: string) => number } = {
  length: (password: string): number => {
    return examineLength(password);
  },
  upperCase: (password: string): number => {
    return examineUpperCase(password);
  },
  lowerCase: (password: string): number => {
    return examineLowerCase(password);
  },
  numbers: (password: string): number => {
    return examineNumbers(password);
  },
  symbols: (password: string): number => {
    return examineSymbols(password);
  },
  ambiguous: (password: string): number => {
    return examineAmbiguous(password);
  },
  repeated: (password: string): number => {
    return examineRepeated(password);
  },
};

// Run logic to create a strength value for the password
export function validatePassword(): void {
  let strengthScore: number = 0;
  let password: string = passwordInput.value;

  // Examine each criteria and add to the strength score
  for (const criteria in strengthCriteria) {
    strengthScore += strengthCriteria[criteria](password);
  }

  // Calculate the strength score and display it as a strength value.
  strengthScore = Math.ceil(
    strengthScore / Object.keys(strengthCriteria).length
  );
  displayStrengthValue(strengthValueDescriptor[strengthScore as StrengthValue]);
}

function displayStrengthValue(strengthValue: string): void {
  strengthValueElement.textContent = strengthValue;
}

// === Strength criteria examine functions ===

// Examine the length of the password, return a strength value.
function examineLength(password: string): StrengthValue {
  let length: number = password.length;
  switch (true) {
    case length <= 5:
      return StrengthValue.Weak;
    case length <= 8:
      return StrengthValue.Moderate;
    case length <= 15:
      return StrengthValue.Strong;
    case length >= 16:
      return StrengthValue.VeryStrong;
  }
  return StrengthValue.Weak;
}

// Examine the upper case letters of the password, return a strength value.
function examineUpperCase(password: string): StrengthValue {
  let upperCaseLetters: number = password.match(/[A-Z]/g)?.length || 0;
  switch (true) {
    case upperCaseLetters === 0:
      return StrengthValue.Weak;
    case upperCaseLetters <= 2:
      return StrengthValue.Moderate;
    case upperCaseLetters <= 4:
      return StrengthValue.Strong;
    case upperCaseLetters >= 5:
      return StrengthValue.VeryStrong;
  }
  return StrengthValue.Weak;
}

// Examine the lower case letters of the password, return a strength value.
function examineLowerCase(password: string): StrengthValue {
  let lowerCaseLetters: number = password.match(/[a-z]/g)?.length || 0;
  switch (true) {
    case lowerCaseLetters === 0:
      return StrengthValue.Weak;
    case lowerCaseLetters <= 2:
      return StrengthValue.Moderate;
    case lowerCaseLetters <= 4:
      return StrengthValue.Strong;
    case lowerCaseLetters >= 5:
      return StrengthValue.VeryStrong;
  }
  return StrengthValue.Weak;
}

// Examine the numbers of the password, return a strength value.
function examineNumbers(password: string): StrengthValue {
  let numbers: number = password.match(/[0-9]/g)?.length || 0;
  switch (true) {
    case numbers === 0:
      return StrengthValue.Weak;
    case numbers <= 2:
      return StrengthValue.Moderate;
    case numbers <= 4:
      return StrengthValue.Strong;
    case numbers >= 5:
      return StrengthValue.VeryStrong;
  }
  return StrengthValue.Weak;
}

// Examine the symbols of the password, return a strength value.
function examineSymbols(password: string): StrengthValue {
  let symbols: number =
    password.match(new RegExp(`[${values.symbols.join("")}]`, "g"))?.length ||
    0;
  switch (true) {
    case symbols === 0:
      return StrengthValue.Weak;
    case symbols <= 2:
      return StrengthValue.Moderate;
    case symbols <= 4:
      return StrengthValue.Strong;
    case symbols >= 5:
      return StrengthValue.VeryStrong;
  }
  return StrengthValue.Weak;
}

// Examine the ambiguous characters of the password, return a strength value.
function examineAmbiguous(password: string): StrengthValue {
  let ambiguous: number =
    password.match(new RegExp(`[${values.ambiguous.join("")}]`, "g"))?.length ||
    0;
  switch (true) {
    case ambiguous === 0:
      return StrengthValue.Weak;
    case ambiguous <= 2:
      return StrengthValue.Moderate;
    case ambiguous <= 4:
      return StrengthValue.Strong;
    case ambiguous >= 5:
      return StrengthValue.VeryStrong;
  }
  return StrengthValue.Weak;
}

// Examine the repeated characters of the password, return a strength value.
function examineRepeated(password: string): StrengthValue {
  let repeated: number = password.match(/(.)\1{1,}/g)?.length || 0;
  switch (true) {
    case repeated > 3:
      return StrengthValue.Weak;
    case repeated > 2:
      return StrengthValue.Moderate;
    case repeated > 1:
      return StrengthValue.Strong;
    case repeated == 0:
      return StrengthValue.VeryStrong;
  }
  return StrengthValue.Weak;
}
