
const input1 = document.querySelector('#temperature');
const temperature = input1.textContent;
// console.log(temperature)

const input2 = document.querySelector('#wind-speed-value');
const windSpeed = input2.textContent;

// Convert to float

let temp = parseFloat(temperature);
let speed = parseFloat(windSpeed);

let total = getWindChill(temp, speed);

document.getElementById("wind-chill-value").innerHTML = total

function getWindChill(t, s){
    let f = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
    console.log(f);
    let rounded = Math.round(f)
    console.log(rounded)
    return rounded
}