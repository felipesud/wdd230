// Select HTML Elements in the document

const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption-desc');
const windSpeedValue = document.querySelector('#wind-speed-value')

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Caçapava&appid=eb27a1d54695327f5edbb0e8b12c6e4d&units=imperial';

async function apiFetch(){
    try {
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data); //this is for testing call
            displayResults(data);

        }else {
            throw Error(await response.text());
        }
    }catch(error){
        console.log(error);
    }
}

apiFetch();







function  displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeedValue.innerHTML = `${weatherData.wind.speed.toFixed(1)} km/h`; //weatherData.wind.speed.toFixed(1)
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    //WindChill
    const temperature = currentTemp.textContent;
    console.log(temperature)

    const input2 = windSpeedValue;
    const windSpeed = input2.textContent;
    console.log(windSpeed)

    // Convert to float

    let temp = parseFloat(temperature);
    let speed = parseFloat(windSpeed);

    let total = getWindChill(temp, speed);

    document.getElementById("wind-chill-value").innerHTML = total
    

  }




  function getWindChill(t, s){
    if(t <= 50 && s > 3){    
        let f = 35.74 + 0.6215 * t - 35.75 * s ** 0.16 + 0.4275 * t * s ** 0.16;
        console.log(f);
        let rounded = Math.round(f)
        console.log(rounded)
        return rounded
    }else {
        return 'N/A'
    }
}

