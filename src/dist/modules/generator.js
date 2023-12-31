import { values } from "../utility/password-values.js";
let lengthSlider = {
    element: document.getElementById("length-slider"),
    valueDisplay: document.getElementById("length-slider-value-display"),
};
let pwdDisplayText = document.getElementById("password-display-text");
let selectOptionPrompt = "Select at least one option.";
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
export function generatePassword() {
    let password = "";
    let applicableValues = [];
    applicableValues = getApplicableValues();
    if (applicableValues.length === 0) {
        pwdDisplayText.value = selectOptionPrompt;
    }
    else {
        for (let i = 0; i < passwordConfig.length(); i++) {
            password +=
                applicableValues[Math.floor(Math.random() * applicableValues.length)];
        }
        displayPassword(password);
    }
}
function getApplicableValues() {
    let applicableValues = [];
    if (passwordConfig.includeLetters()) {
        let letters = [...values.letters];
        for (let i = 0; i < letters.length; i++) {
            if (Math.random() < 0.5) {
                letters[i] = letters[i].toUpperCase();
            }
        }
        applicableValues = [...applicableValues, ...letters];
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
export function copyPasswordToClipboard() {
    navigator.clipboard.writeText(pwdDisplayText.value);
}
