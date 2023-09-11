// Imports
// Feature swap manager
import { generatorButtonClicked } from "./modules/feature-swap-manager.js";
import { validatorButtonClicked } from "./modules/feature-swap-manager.js";
// Generator
import { updateSliderValue } from "./modules/generator.js";
import { generatePassword } from "./modules/generator.js";
import { copyPasswordToClipboard } from "./modules/generator.js";
// Validator
import { validatePassword } from "./modules/validator.js";

// Element definitions
// Buttons
const buttonHandlers: { [id: string]: () => void } = {
  "generator-button": generatorButtonClicked,
  "validator-button": validatorButtonClicked,
  "copy-password-button": copyPasswordToClipboard,
  "refresh-password-button": generatePassword,
};

// Input elements
const inputHandlers: { [id: string]: () => void } = {
  "length-slider": updateSliderValue,
  "password-input": validatePassword,
};

export function addListeners() {
  // Click event
  addEventListener("click", (event) => {
    // if the target is an HTML element and has an id
    if (event.target instanceof HTMLElement && event.target.id) {
      // Button handlers
      if (event.target.id in buttonHandlers) {
        buttonHandlers[event.target.id]();
      }
    }
  });

  // Input event
  addEventListener("input", (event) => {
    let target = event.target;

    if (target instanceof HTMLElement && target.id) {
      // Input handlers
      if (target.id in inputHandlers) {
        inputHandlers[target.id]();
      }
    }
  });

  // Change event
  addEventListener("change", (event) => {
    const target = event.target;

    // Generator form. Generate password on form update.
    if (target instanceof HTMLInputElement) {
      // if the target's form is the password generator form
      if (target.form === document.getElementById("password-generator-form")) {
        generatePassword();
      }
    }
  });

  // DOMContentLoaded event
  addEventListener("DOMContentLoaded", () => {
    generatePassword();
  });
}
