// Hamburger Button

let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.addEventListener('scroll', () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
});


// Weather API

const url = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad&appid=5911d56dc3aa7e23af0b603bf6fcc428&units=imperial'

async function apiFetch() {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.table(data)
            displayWeather(data)
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const today = new Date().getDay();
const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

function checkDay(day){
    if (day + today > 6){
        return day + today - 7
    } else{
        return day + today 
    }
}

function displayWeather(weatherData){
    for(i = 0; i < 3; i++){

        document.getElementById('day' + (i+1)).innerHTML = `${weekday[checkDay(i)]}` 
        
        document.getElementById("day" + (i+1) + 'Temp').innerHTML = `${Number(weatherData.list[i].main.temp).toFixed(1)} °F`;

        document.getElementById("img" + (i+1)).src="http://openweathermap.org/img/wn/" + weatherData.list[i].weather[0].icon + '.png';

        document.getElementById("day" + (i+1) + 'Hum').innerHTML = `Humidity: ${Number(weatherData.list[i].main.humidity).toFixed(0)}%`;

        document.getElementById("day" + (i+1) + 'Desc').innerHTML = `${weatherData.list[i].weather[0].description}`;
    }
}

apiFetch(url)

// Showing Current Year
const date = new Date();
const year = date.getFullYear();

function showCurrentYear() {
  document.getElementById("current-date").innerHTML = year;
}
// Last Modified
function lastModified() {
  const oLastModified = new Date(document.lastModified)
  document.getElementById("last-modified").innerHTML = oLastModified;
}

showCurrentYear();
lastModified();

let today2 = date.getDay();
let message1;
let message2;

function getWeekDay(today) {
  switch (today) {
    case 0:
      message2 = "Sunday";
      break;
    case 1:
      message2 = "Monday";
      break;
    case 2:
      message2 = "Tuesday";
      break;
    case 3:
      message2 = "Wednesday";
      break;
    case 4:
      message2 = "Thursday";
      break;
    case 5:
      message2 = "Friday";
      break;
    case 6:
      message2 = "Saturday";
      break;
    default:
      message2 = "Unknown - " + today;
      break;
  }
}