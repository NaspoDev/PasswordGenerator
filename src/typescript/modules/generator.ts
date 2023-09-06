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
  ) as HTMLInputElement,
};

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

  for (let i = 0; i < (passwordConfig.length as number); i++) {
    password += "a";
  }
}

// Returns a random value from applicable password values.
function getRandomValue(): string {
    let applicableValues: Array<string> = []; // DO I WANT TO REDEFINE THIS EVERY TIME?
    switch (true) {
        case passwordConfig.includeLetters -> applicableValues.concat(values.letters);

  for (let i = 0; i < values.length; i++) {
    if (passwordConfig.includeLetters) {
      return getRandomLetter();
    }
  }
  return "0";
}
