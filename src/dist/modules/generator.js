let lengthSlider = {
    element: document.getElementById("length-slider"),
    valueDisplay: document.getElementById("length-slider-value-display"),
};
export function updateSliderValue() {
    lengthSlider.valueDisplay.innerHTML = lengthSlider.element.value;
}
