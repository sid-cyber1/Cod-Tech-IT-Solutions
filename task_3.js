let temperature = 0
let humidity = 0
let pressure = 0

// Read temperature, humidity, and pressure
basic.forever(function () {
    temperature = input.temperature()
    humidity = HTS221.humidity()
    pressure = BMP280.pressure()

    //Calculate dew point 
    let dewPoint = temperature - (100 - humidity) / 5

    // Display data on LED screen
    basic.clearScreen()
    basic.showString("T:" + Math.round(temperature) + " H:" + Math.round(humidity) + " P:" + Math.round(pressure / 100) + " D:" + Math.round(dewPoint))
    basic.pause(5000) // Pause for 5 seconds before updating again
})
