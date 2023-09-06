// Password Generator Module

// Capturing Elements
let lengthSlider: {
  element: HTMLInputElement;
  valueDisplay: HTMLElement;
} = {
  element: document.getElementById("length-slider") as HTMLInputElement,
  valueDisplay: document.getElementById(
    "length-slider-value-display"
  ) as HTMLInputElement,
};

// Updating length slider value
export function updateSliderValue(): void {
  lengthSlider.valueDisplay.innerHTML = lengthSlider.element.value;
}
