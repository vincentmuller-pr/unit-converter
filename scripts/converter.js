const conversionsObject = {
    length: {
        mm: 0.001,
        cm: 0.01,
        m: 1,
        km: 1000,
        in: 0.0254,
        ft: 0.3048,
        yd: 0.9144,
        mi: 1609.34
    },
    weight: {
        mg: 0.001,
        g: 1,
        kg: 1000,
        oz: 28.3495,
        lb: 453.592
    }
}

export function convert_temperature(value, unitFrom, unitTo) {
    //Primero paso a Celsius
    let celsiusValue
    switch (unitFrom) {
        case "C":
            celsiusValue = value;
            break
        case "F":
            celsiusValue = (value-32)*(5/9);
            break
        case "K":
            celsiusValue = (value-273.15)
            break
    }
    //Luego paso a Kelvin/Fah
    switch (unitTo) {
        case "C":
            return celsiusValue
        case "F":
            return ((9/5)*celsiusValue)+32
        case "K":
            return celsiusValue + 273.15
    }
}

export function convert_linear(magnitude, value, unitFrom, unitTo) {
    const fromProportion = conversionsObject[magnitude][unitFrom]
    const toProportion = conversionsObject[magnitude][unitTo]
    return value * (fromProportion/toProportion)
}