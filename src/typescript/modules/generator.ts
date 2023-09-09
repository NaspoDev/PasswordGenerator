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

// Other vars
let selectOptionPrompt: string = "Select at least one option.";

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

// Main password generation algorithm
export function generatePassword(): void {
  let password: string = "";
  let applicableValues: Array<string> = [];

  applicableValues = getApplicableValues();

  // if there are no options selected, prompt the user to select at least one option
  if (applicableValues.length === 0) {
    pwdDisplayText.value = selectOptionPrompt;
  } else {
    // generate a password
    for (let i = 0; i < (passwordConfig.length() as number); i++) {
      password +=
        applicableValues[Math.floor(Math.random() * applicableValues.length)];
    }

    displayPassword(password);
  }
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
