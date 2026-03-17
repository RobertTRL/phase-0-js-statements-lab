const temperature = 90;
const timeOfDay = "morning";
let soilMoisture = 30;

(temperature > 80) ? console.log("Watering on") : console.log("Watering off");
(timeOfDay === "evening" || timeOfDay === "night") ? console.log("Lights on") : console.log("Lights off");

while (soilMoisture < 40) {
    console.log(soilMoisture)
    soilMoisture += 5
}
console.log(soilMoisture)

