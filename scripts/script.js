const length_button = document.querySelector("#lengthButton");
const weight_button = document.querySelector("#weightButton");
const temperature_button = document.querySelector("#temperatureButton");
let active_button = length_button;

length_button.addEventListener("click", () => {change_converter(length_button)})
weight_button.addEventListener("click", () => {change_converter(weight_button)})
temperature_button.addEventListener("click", () => {change_converter(temperature_button)})

function change_converter(pressed) {
    if (pressed == active_button) {return}
    active_button.classList.toggle("active");
    active_button = pressed
    pressed.classList.toggle("active")

    
}