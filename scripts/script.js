const length_button = document.querySelector("#lengthButton");
const weight_button = document.querySelector("#weightButton");
const temperature_button = document.querySelector("#temperatureButton");
let active_button = null

length_button.addEventListener("click", () => {change_converter(length_button)})
weight_button.addEventListener("click", () => {change_converter(weight_button)})
temperature_button.addEventListener("click", () => {change_converter(temperature_button)})


function change_converter(pressed) {
    //Cambio de color boton
    if (pressed == active_button) {return}
    if (active_button != null) {active_button.classList.toggle("active");}
    active_button = pressed;
    pressed.classList.toggle("active")
    
    //Cambio Form
    let units = []
    const label = document.querySelector("#quantityLabel");
    
    
    switch (pressed.getAttribute("id")) {
        case "lengthButton":
            label.textContent = "Enter the length to convert";
            units = [
                ["Milimiter (mm)", "mm"],
                ["Centimeter (cm)", "cm"],
                ["Meter (m)", "m"],
                ["Kilometer (km)", "km"],
                ["Inch (in)", "in"],
                ["Foot (ft)", "ft"],
                ["Yard (yd)", "yd"],
                ["Mile (mi)", "mi"],
            ]
            break
        
        case "weightButton":
            label.textContent = "Enter the weight to convert";
            units = [
                ["Miligram (mg)", "mg"],
                ["Gram (g)", "g"],
                ["Kilogram (kg)", "kg"],
                ["Ounce (oz)", "oz"],
                ["Pound (lb)", "lb"]
            ]
            break
        
        case "temperatureButton":
            label.textContent = "Enter the temperature to convert"
            units = [
                ["Celsius (°C)", "C"],
                ["Fahrenheit  (°F)", "F"],
                ["Kelvin (°K)", "K"]
            ]
            break
    }
    
    add_options(units)
}

function add_options(units) {
    const selectFrom = document.querySelector("#unitFrom");
    const selectTo = document.querySelector("#unitTo")
    
    // Limpiamos ambos Select
    selectFrom.innerHTML = "<option value='0'>-- Select an unit to convert from --</option>";
    selectTo.innerHTML = "<option value='0'>-- Select an unit to convert to --</option>";
    
    units.forEach((un) => {
        //Opcion para Select From
        const optionFrom = document.createElement("option");
        optionFrom.value = un[1];
        optionFrom.textContent = un[0];
        selectFrom.appendChild(optionFrom);
        
        //Opcion para Select To
        const optionTo = document.createElement("option");
        optionTo.value = un[1];
        optionTo.textContent = un[0];
        selectTo.appendChild(optionTo);
    })
}

change_converter(length_button)