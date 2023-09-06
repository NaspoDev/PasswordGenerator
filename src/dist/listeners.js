import { generatorButtonClicked } from "./modules/feature-swap-manager.js";
import { validatorButtonClicked } from "./modules/feature-swap-manager.js";
const buttonHandlers = {
    "generator-button": generatorButtonClicked,
    "validator-button": validatorButtonClicked,
};
export function initializeListeners() {
    addEventListener("click", (event) => {
        if (event.target instanceof HTMLElement && event.target.id) {
            if (event.target.id in buttonHandlers) {
                buttonHandlers[event.target.id]();
            }
        }
    });
}
