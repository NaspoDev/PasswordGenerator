// Manages the feature swap buttons and the feature swap logic

// Capturing elements
const generatorButton: HTMLButtonElement = document.getElementById(
  "generator-button"
) as HTMLButtonElement;
const validatorButton: HTMLButtonElement = document.getElementById(
  "validator-button"
) as HTMLButtonElement;

const hiddenClass: string = "hidden"; // applied to hide elements
const buttonSelectedClass: string = "selected"; // applied to selected button

export function generatorButtonClicked(): void {}

export function validatorButtonClicked(): void {}
