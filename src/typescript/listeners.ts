// Imports
// Feature swap manager
import { generatorButtonClicked } from "./modules/feature-swap-manager.js";
import { validatorButtonClicked } from "./modules/feature-swap-manager.js";
// Generator
import { updateSliderValue } from "./modules/generator.js";
import { generatePassword } from "./modules/generator.js";
import { canUncheck } from "./modules/generator.js";

// Element definitions
// Buttons
const buttonHandlers: { [id: string]: () => void } = {
  "generator-button": generatorButtonClicked,
  "validator-button": validatorButtonClicked,
};

// Sliders
const rangeInputHandlers: { [id: string]: () => void } = {
  "length-slider": updateSliderValue,
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
    // Range input
    if (event.target instanceof HTMLElement && event.target.id) {
      if (event.target.id in rangeInputHandlers) {
        rangeInputHandlers[event.target.id]();
      }
    }
  });

  // Change event
  addEventListener("change", (event) => {
    const target = event.target;

    // Generator form. Generate password on form update.
    if (target instanceof HTMLInputElement) {
      // if the target's form is the password generator form
      if (
        target.form &&
        target.form.id &&
        target.form.id === "password-generator-form"
      ) {
        // if the target is a checkbox and is checked
        if (target.type === "checkbox" && target.checked) {
          // if the target can be unchecked, generate a password
          if (canUncheck(target)) {
            generatePassword();
          } else {
            event.preventDefault();
            return;
          }
        }
        generatePassword();
      }
    }
  });
}
