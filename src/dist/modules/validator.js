import { values } from "../utility/password-values.js";
const passwordInput = document.getElementById("password-input");
const strengthValueElement = document.getElementById("strength-value");
const strengthValueDescriptor = {
    [1]: "Weak",
    [2]: "Moderate",
    [3]: "Strong",
    [4]: "Very Strong",
};
const strengthValueClass = {
    [1]: "strength-value-1",
    [2]: "strength-value-2",
    [3]: "strength-value-3",
    [4]: "strength-value-4",
};
const strengthCriteria = {
    length: (password) => {
        return examineLength(password);
    },
    upperCase: (password) => {
        return examineUpperCase(password);
    },
    lowerCase: (password) => {
        return examineLowerCase(password);
    },
    numbers: (password) => {
        return examineNumbers(password);
    },
    symbols: (password) => {
        return examineSymbols(password);
    },
    ambiguous: (password) => {
        return examineAmbiguous(password);
    },
    repeated: (password) => {
        return examineRepeated(password);
    },
};
export function validatePassword() {
    let strengthScore = 0;
    let password = passwordInput.value;
    if (password.length === 0) {
        displayStrengthValue("...");
        return;
    }
    for (const criteria in strengthCriteria) {
        strengthScore += strengthCriteria[criteria](password);
    }
    strengthScore = Math.round(strengthScore / Object.keys(strengthCriteria).length);
    displayStrengthValue(strengthValueDescriptor[strengthScore], strengthValueClass[strengthScore]);
}
function displayStrengthValue(strengthValueDescriptor, strengthValueClass) {
    strengthValueElement.textContent = strengthValueDescriptor;
    strengthValueElement.className = "";
    if (strengthValueClass) {
        strengthValueElement.classList.add(strengthValueClass);
    }
}
function examineLength(password) {
    let length = password.length;
    switch (true) {
        case length <= 5:
            return 1;
        case length <= 8:
            return 2;
        case length <= 15:
            return 3;
        case length >= 16:
            return 4;
    }
    return 1;
}
function examineUpperCase(password) {
    let upperCaseLetters = password.match(/[A-Z]/g)?.length || 0;
    switch (true) {
        case upperCaseLetters === 0:
            return 1;
        case upperCaseLetters <= 2:
            return 2;
        case upperCaseLetters <= 4:
            return 3;
        case upperCaseLetters >= 5:
            return 4;
    }
    return 1;
}
function examineLowerCase(password) {
    let lowerCaseLetters = password.match(/[a-z]/g)?.length || 0;
    switch (true) {
        case lowerCaseLetters === 0:
            return 1;
        case lowerCaseLetters <= 2:
            return 2;
        case lowerCaseLetters <= 4:
            return 3;
        case lowerCaseLetters >= 5:
            return 4;
    }
    return 1;
}
function examineNumbers(password) {
    let numbers = password.match(/[0-9]/g)?.length || 0;
    switch (true) {
        case numbers === 0:
            return 1;
        case numbers <= 2:
            return 2;
        case numbers <= 4:
            return 3;
        case numbers >= 5:
            return 4;
    }
    return 1;
}
function examineSymbols(password) {
    let symbols = password.match(new RegExp(`[${values.symbols.join("")}]`, "g"))?.length ||
        0;
    switch (true) {
        case symbols === 0:
            return 1;
        case symbols <= 2:
            return 2;
        case symbols <= 4:
            return 3;
        case symbols >= 5:
            return 4;
    }
    return 1;
}
function examineAmbiguous(password) {
    let ambiguous = 0;
    for (const character of password) {
        if (values.ambiguous.includes(character)) {
            ambiguous++;
        }
    }
    switch (true) {
        case ambiguous === 0:
            return 1;
        case ambiguous <= 2:
            return 2;
        case ambiguous <= 4:
            return 3;
        case ambiguous >= 5:
            return 4;
    }
    return 1;
}
function examineRepeated(password) {
    let repeated = password.match(/(.)\1{1,}/g)?.length || 0;
    if (password.length >= 8) {
        switch (true) {
            case repeated > 3:
                return 1;
            case repeated > 2:
                return 2;
            case repeated > 1:
                return 3;
            case repeated == 0:
                return 4;
        }
    }
    return 1;
}
