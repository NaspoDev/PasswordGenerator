import { generatorButtonClicked } from "./modules/feature-swap-manager.js";
import { validatorButtonClicked } from "./modules/feature-swap-manager.js";
import { updateSliderValue } from "./modules/generator.js";
import { generatePassword } from "./modules/generator.js";
import { canUncheck } from "./modules/generator.js";
const buttonHandlers = {
    "generator-button": generatorButtonClicked,
    "validator-button": validatorButtonClicked,
};
const rangeInputHandlers = {
    "length-slider": updateSliderValue,
};
export function addListeners() {
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
    addEventListener("change", (event) => {
        const target = event.target;
        if (target instanceof HTMLInputElement) {
            if (target.form &&
                target.form.id &&
                target.form.id === "password-generator-form") {
                if (target.type === "checkbox" && target.checked) {
                    if (canUncheck(target)) {
                        generatePassword();
                    }
                    else {
                        event.preventDefault();
                        return;
                    }
                }
                generatePassword();
            }
        }
    });
}
