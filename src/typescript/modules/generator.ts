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
let passwordConfig: { [key: string]: () => number | boolean } = {
  length: () => {
    return parseInt(lengthSlider.element.value);
  },
  includeLetters: () => {
    return (document.getElementById("letters-checkbox") as HTMLInputElement)
      .checked;
  },
  includeNumbers: () => {
    return (document.getElementById("numbers-checkbox") as HTMLInputElement)
      .checked;
  },
  includeSymbols: () => {
    return (document.getElementById("symbols-checkbox") as HTMLInputElement)
      .checked;
  },
  includeAmbiguous: () => {
    return (document.getElementById("ambiguous-checkbox") as HTMLInputElement)
      .checked;
  },
};

// Updating length slider value
export function updateSliderValue(): void {
  lengthSlider.valueDisplay.innerHTML = lengthSlider.element.value;
}

// Ensures that at least one checkbox is checked at all times.
// Returns true if the checkbox can be unchecked, false if it cannot.
export function canUncheck(checkbox: HTMLInputElement): boolean {
  // if the passed element is not a checkbox, throw an error
  if (!(checkbox.type === "checkbox")) {
    throw new Error("canUncheck() must be passed a checkbox element.");
  }

  // if the checkbox is already unchecked, return true
  if (!checkbox.checked) {
    return true;
  }

  // amount of checked checkboxes
  let checkedCount: number = 0;

  // count the amount of checked checkboxes
  for (const key in passwordConfig) {
    if (typeof passwordConfig[key]() === "boolean") {
      if (passwordConfig[key]()) {
        checkedCount++;
      }
    }
  }

  // if there are at least two checked checkboxes, return true
  if (checkedCount >= 2) {
    return true;
  }

  return false;
}

// Main password generation algorithm
export function generatePassword(): void {
  let password: string = "";
  let applicableValues: Array<string> = [];

  applicableValues = getApplicableValues();
  for (let i = 0; i < (passwordConfig.length() as number); i++) {
    password +=
      applicableValues[Math.floor(Math.random() * applicableValues.length)];
  }

  displayPassword(password);
}

// Returns an array with all applicable password values, based on passwordConfig.
function getApplicableValues(): Array<string> {
  let applicableValues: Array<string> = [];

  if (passwordConfig.includeLetters()) {
    applicableValues = [...applicableValues, ...values.letters];
  }
  if (passwordConfig.includeNumbers()) {
    applicableValues = [...applicableValues, ...values.numbers];
  }
  if (passwordConfig.includeSymbols()) {
    applicableValues = [...applicableValues, ...values.symbols];
  }
  if (passwordConfig.includeAmbiguous()) {
    applicableValues = [...applicableValues, ...values.ambiguous];
  }

  return applicableValues;
}

// Updates the value of the password display text input element.
function displayPassword(password: string): void {
  pwdDisplayText.value = password;
}
