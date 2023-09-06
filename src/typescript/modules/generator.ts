// Password Generator Module

import { values } from "./values.js";

// Capturing Elements
let lengthSlider: {
  element: HTMLInputElement;
  valueDisplay: HTMLElement;
} = {
  element: document.getElementById("length-slider") as HTMLInputElement,
  valueDisplay: document.getElementById(
    "length-slider-value-display"
  ) as HTMLElement,
};

let pwdDisplayText: HTMLInputElement = document.getElementById(
  "password-display-text"
) as HTMLInputElement;

// Password configuration settings
let passwordConfig: { [key: string]: number | boolean } = {
  length: parseInt(lengthSlider.element.value),
  includeLetters: (
    document.getElementById("letters-checkbox") as HTMLInputElement
  ).checked,
  includeNumbers: (
    document.getElementById("numbers-checkbox") as HTMLInputElement
  ).checked,
  includeSymbols: (
    document.getElementById("symbols-checkbox") as HTMLInputElement
  ).checked,
  includeAmbiguous: (
    document.getElementById("ambiguous-checkbox") as HTMLInputElement
  ).checked,
};

// Updating length slider value
export function updateSliderValue(): void {
  lengthSlider.valueDisplay.innerHTML = lengthSlider.element.value;
}

// Main password generation algorithm
export function generatePassword(): void {
  let password: string = "";
  let applicableValues: Array<string> = [];

  applicableValues = getApplicableValues();
  for (let i = 0; i < (passwordConfig.length as number); i++) {
    password += (Math.random() * applicableValues.length).toString();
  }

  displayPassword(password);
}

// Returns an array with all applicable password values, based on passwordConfig.
function getApplicableValues(): Array<string> {
  let applicableValues: Array<string> = [];

  if (passwordConfig.includeLetters) {
    applicableValues.concat(values.letters);
  }
  if (passwordConfig.includeNumbers) {
    applicableValues.concat(values.numbers);
  }
  if (passwordConfig.includeSymbols) {
    applicableValues.concat(values.symbols);
  }
  if (passwordConfig.includeAmbiguous) {
    applicableValues.concat(values.ambiguous);
  }

  return applicableValues;
}

// Updates the value of the password display text input element.
function displayPassword(password: string): void {
  pwdDisplayText.value = password;
}
