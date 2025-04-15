const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');
const spotlight = document.querySelector('#spotlight');
const apiKey = '9bb1b0ec50091b17071b78f1160a32ee'; // Replace with your actual API key
const lat = 5.3244835390242065;
const lon = -4.013672742533932;
const units = "metric";


// this link below is to fetch data and the current weather from the api
const url = `https://pro.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

// but this is to get the forecats for the next days 
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;










async function getWeather() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        //console.log(data);
        const temp = data.main.temp;
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const todayDiv = document.getElementById('weather-day-1');
        todayDiv.innerHTML = `<strong>Now:</strong> ${temp}°C, ${description}`;
    }



}



async function getForeCats() {
    const response = await fetch(forecastUrl);
    if (response.ok) {
        const data = await response.json();
        //console.log(data);

        const days = [8, 16, 24]; // indices for approx 24h, 48h, 72h
        days.forEach((index, i) => {
            const forecast = data.list[index];
            const dayTemp = forecast.main.temp;
            const dayDesc = forecast.weather[0].description;
            document.getElementById(`weather-day-${i + 2}`).innerHTML =
                `<strong>Day ${i + 2}:</strong> ${dayTemp}°C, ${dayDesc}`;
        });
    }

}






async function membersLevel() {
    const response = await fetch(jsonData);
    if (response.ok) {
        const data = await response.json();
        //console.log(data);
        spotlight.id = data.level

    }

}

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("form-timestamp").value = new Date().toISOString();
});

getWeather();

getForeCats();

membersLevel();




