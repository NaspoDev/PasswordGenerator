import { values } from "./values.js";
let lengthSlider = {
    element: document.getElementById("length-slider"),
    valueDisplay: document.getElementById("length-slider-value-display"),
};
let pwdDisplayText = document.getElementById("password-display-text");
let passwordConfig = {
    length: parseInt(lengthSlider.element.value),
    includeLetters: document.getElementById("letters-checkbox").checked,
    includeNumbers: document.getElementById("numbers-checkbox").checked,
    includeSymbols: document.getElementById("symbols-checkbox").checked,
    includeAmbiguous: document.getElementById("ambiguous-checkbox").checked,
};
export function updateSliderValue() {
    lengthSlider.valueDisplay.innerHTML = lengthSlider.element.value;
}
export function generatePassword() {
    let password = "";
    let applicableValues = [];
    applicableValues = getApplicableValues();
    for (let i = 0; i < passwordConfig.length; i++) {
        password += (Math.random() * applicableValues.length).toString();
    }
    displayPassword(password);
}
function getApplicableValues() {
    let applicableValues = [];
    if (passwordConfig.includeLetters) {
        applicableValues.concat(values.letters);
    }
    if (passwordConfig.includeNumbers) {
        applicableValues.concat(values.numbers);
    }
    if (passwordConfig.includeSymbols) {
        applicableValues.concat(values.symbols);
    }
    if (passwordConfig.includeAmbiguous) {
        applicableValues.concat(values.ambiguous);
    }
    return applicableValues;
}
function displayPassword(password) {
    pwdDisplayText.value = password;
}
