const generatorButton = document.getElementById("generator-button");
const validatorButton = document.getElementById("validator-button");
const passwordGenerator = document.getElementById("password-generator");
const passwordValidator = document.getElementById("password-validator");
const hiddenClass = "hidden";
const buttonSelectedClass = "selected";
export function generatorButtonClicked() {
    if (generatorButton.classList.contains(buttonSelectedClass)) {
        return;
    }
    validatorButton.classList.remove(buttonSelectedClass);
    generatorButton.classList.add(buttonSelectedClass);
    swapFeature();
}
export function validatorButtonClicked() {
    if (validatorButton.classList.contains(buttonSelectedClass)) {
        return;
    }
    generatorButton.classList.remove(buttonSelectedClass);
    validatorButton.classList.add(buttonSelectedClass);
    swapFeature();
}
function swapFeature() {
    if (passwordGenerator.classList.contains(hiddenClass)) {
        passwordValidator.classList.add(hiddenClass);
        passwordGenerator.classList.remove(hiddenClass);
    }
    else {
        passwordGenerator.classList.add(hiddenClass);
        passwordValidator.classList.remove(hiddenClass);
    }
}
