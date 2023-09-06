// Imports
import { generatorButtonClicked } from "./modules/feature-swap-manager.js";
import { validatorButtonClicked } from "./modules/feature-swap-manager.js";

// Element definitions
const buttonHandlers: { [id: string]: () => void } = {
  "generator-button": generatorButtonClicked,
  "validator-button": validatorButtonClicked,
};

export function initializeListeners() {
  // Click event
  addEventListener("click", (event) => {
    // if the target is an HTML element and has an id
    if (event.target instanceof HTMLElement && event.target.id) {
      if (event.target.id in buttonHandlers) {
        buttonHandlers[event.target.id]();
      }
    }
  });
}
