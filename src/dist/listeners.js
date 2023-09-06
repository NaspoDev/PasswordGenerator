import { generatorButtonClicked } from "./modules/feature-swap-manager.js";
import { validatorButtonClicked } from "./modules/feature-swap-manager.js";
import { updateSliderValue } from "./modules/generator.js";
const buttonHandlers = {
    "generator-button": generatorButtonClicked,
    "validator-button": validatorButtonClicked,
};
const rangeInputHandlers = {
    "length-slider": updateSliderValue,
};
export function initializeListeners() {
    addEventListener("click", (event) => {
        if (event.target instanceof HTMLElement && event.target.id) {
            if (event.target.id in buttonHandlers) {
                buttonHandlers[event.target.id]();
            }
        }
    });
    addEventListener("input", (event) => {
        if (event.target instanceof HTMLElement && event.target.id) {
            if (event.target.id in rangeInputHandlers) {
                rangeInputHandlers[event.target.id]();
            }
        }
    });
}
