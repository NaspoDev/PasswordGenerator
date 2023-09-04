// Manages the feature swap buttons and the feature swap logic

// Capturing elements
const generatorButton: HTMLButtonElement = document.getElementById(
  "generator-button"
) as HTMLButtonElement;
const validatorButton: HTMLButtonElement = document.getElementById(
  "validator-button"
) as HTMLButtonElement;

const hiddenClass: String = "hidden"; // applied to hide elements
const buttonSelectedClass: String = "selected"; // applied to selected button
