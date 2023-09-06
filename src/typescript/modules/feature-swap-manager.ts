// Manages the feature swap buttons and the feature swap logic

// Capturing elements
const generatorButton: HTMLButtonElement = document.getElementById(
  "generator-button"
) as HTMLButtonElement;
const validatorButton: HTMLButtonElement = document.getElementById(
  "validator-button"
) as HTMLButtonElement;
const passwordGenerator: HTMLDivElement = document.getElementById(
  "password-generator"
) as HTMLDivElement;
const passwordValidator: HTMLDivElement = document.getElementById(
  "password-validator"
) as HTMLDivElement;

const hiddenClass: string = "hidden"; // applied to hide elements
const buttonSelectedClass: string = "selected"; // applied to selected button

// Checks and swaps clicked status of buttons (if necessary), calls swapFeature()
export function generatorButtonClicked(): void {
  if (generatorButton.classList.contains(buttonSelectedClass)) {
    return;
  }
  validatorButton.classList.remove(buttonSelectedClass);
  generatorButton.classList.add(buttonSelectedClass);
  swapFeature();
}

// Checks and swaps clicked status of buttons (if necessary), calls swapFeature()
export function validatorButtonClicked(): void {
  if (validatorButton.classList.contains(buttonSelectedClass)) {
    return;
  }
  generatorButton.classList.remove(buttonSelectedClass);
  validatorButton.classList.add(buttonSelectedClass);
  swapFeature();
}

// Swaps the features
function swapFeature(): void {
  // Show generator if it's hidden, and hide validator
  if (passwordGenerator.classList.contains(hiddenClass)) {
    passwordValidator.classList.add(hiddenClass);
    passwordGenerator.classList.remove(hiddenClass);
    // Show validator if it's hidden, and hide generator
  } else {
    passwordGenerator.classList.add(hiddenClass);
    passwordValidator.classList.remove(hiddenClass);
  }
}
