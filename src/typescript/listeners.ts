// Imports
// Feature swap manager
import { generatorButtonClicked } from "./modules/feature-swap-manager.js";
import { validatorButtonClicked } from "./modules/feature-swap-manager.js";
// Generator
import { updateSliderValue } from "./modules/generator.js";
import { generatePassword } from "./modules/generator.js";

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

export function initializeListeners() {
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

  // Generator form: Generate password when form is updated.
  addEventListener("change", (event) => {
    if (event.target instanceof HTMLInputElement) {
      if (
        event.target.form &&
        event.target.form.id &&
        event.target.form.id === "password-generator-form"
      ) {
        generatePassword();
      }
    }
  });
}
