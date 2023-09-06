// Imports
import { generatorButtonClicked } from "./modules/feature-swap-manager.js";
import { validatorButtonClicked } from "./modules/feature-swap-manager.js";
import { updateSliderValue } from "./modules/generator.js";

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
    // Range input handlers
    if (event.target instanceof HTMLElement && event.target.id) {
      if (event.target.id in rangeInputHandlers) {
        rangeInputHandlers[event.target.id]();
      }
    }
  });
}
