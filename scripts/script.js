// Elementos
const lengthButton = document.querySelector("#lengthButton");
const weightButton = document.querySelector("#weightButton");
const temperatureButton = document.querySelector("#temperatureButton");

const quantityLabel = document.querySelector("#quantityLabel")

const selectFrom = document.querySelector("#unitFrom");
const selectTo = document.querySelector("#unitTo")

// Estados
let activeButton = null

// Event Listeners
lengthButton.addEventListener("click", () => {change_converter(lengthButton)})
weightButton.addEventListener("click", () => {change_converter(weightButton)})
temperatureButton.addEventListener("click", () => {change_converter(temperatureButton)})

// Funciones

function change_converter(pressed) {
    //Cambio de color boton
    if (pressed == activeButton) {return}
    if (activeButton != null) {activeButton.classList.toggle("active");}
    activeButton = pressed;
    pressed.classList.toggle("active")
    
    //Cambio Form
    let units = []
    ;
    
    
    switch (pressed.getAttribute("id")) {
        case "lengthButton":
            quantityLabel.textContent = "Enter the length to convert";
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
            quantityLabel.textContent = "Enter the weight to convert";
            units = [
                ["Miligram (mg)", "mg"],
                ["Gram (g)", "g"],
                ["Kilogram (kg)", "kg"],
                ["Ounce (oz)", "oz"],
                ["Pound (lb)", "lb"]
            ]
            break
        
        case "temperatureButton":
            quantityLabel.textContent = "Enter the temperature to convert"
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

function edit_select() {
    
}

change_converter(lengthButton)