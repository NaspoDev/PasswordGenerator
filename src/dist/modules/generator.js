import { values } from "./values.js";
let lengthSlider = {
    element: document.getElementById("length-slider"),
    valueDisplay: document.getElementById("length-slider-value-display"),
};
let pwdDisplayText = document.getElementById("password-display-text");
let passwordConfig = {
    length: () => {
        return parseInt(lengthSlider.element.value);
    },
    includeLetters: () => {
        return document.getElementById("letters-checkbox")
            .checked;
    },
    includeNumbers: () => {
        return document.getElementById("numbers-checkbox")
            .checked;
    },
    includeSymbols: () => {
        return document.getElementById("symbols-checkbox")
            .checked;
    },
    includeAmbiguous: () => {
        return document.getElementById("ambiguous-checkbox")
            .checked;
    },
};
export function updateSliderValue() {
    lengthSlider.valueDisplay.innerHTML = lengthSlider.element.value;
}
export function canUncheck(checkbox) {
    if (!(checkbox.type === "checkbox")) {
        throw new Error("canUncheck() must be passed a checkbox element.");
    }
    if (!checkbox.checked) {
        return true;
    }
    let checkedCount = 0;
    for (const key in passwordConfig) {
        if (typeof passwordConfig[key]() === "boolean") {
            if (passwordConfig[key]()) {
                checkedCount++;
            }
        }
    }
    if (checkedCount >= 2) {
        return true;
    }
    return false;
}
export function generatePassword() {
    let password = "";
    let applicableValues = [];
    applicableValues = getApplicableValues();
    for (let i = 0; i < passwordConfig.length(); i++) {
        password +=
            applicableValues[Math.floor(Math.random() * applicableValues.length)];
    }
    displayPassword(password);
}
function getApplicableValues() {
    let applicableValues = [];
    if (passwordConfig.includeLetters()) {
        applicableValues = [...applicableValues, ...values.letters];
    }
    if (passwordConfig.includeNumbers()) {
        applicableValues = [...applicableValues, ...values.numbers];
    }
    if (passwordConfig.includeSymbols()) {
        applicableValues = [...applicableValues, ...values.symbols];
    }
    if (passwordConfig.includeAmbiguous()) {
        applicableValues = [...applicableValues, ...values.ambiguous];
    }
    return applicableValues;
}
function displayPassword(password) {
    pwdDisplayText.value = password;
}
