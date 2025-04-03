const currentTemp = document.querySelector('#current-temperature');
const weatherIcon = document.querySelector('#weather-icon');
const info = document.querySelector('figcaption');

const apiKey = '9bb1b0ec50091b17071b78f1160a32ee'; // Replace with your actual API key
const lat = 49.75238363550655;
const lon = 6.639761014206359;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log("Weather Data:", data);
            displayResults(data);  // Call displayResults function after fetching data
        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    info.textContent = `${desc}`; // Corrected line
}

apiFetch(); // Call the function to fetch and display weather data
