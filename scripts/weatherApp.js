const country = document.querySelector('#countryName');
const icon = document.querySelector('#Icon');
const temperature = document.querySelector('#temperature');//
//const descrip = document.querySelector('#descrip');

const descri = document.querySelector('figcaption');

const myKey = '9bb1b0ec50091b17071b78f1160a32ee';
const lat = 5.324952112309737;
const lon = -4.02131353252128;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${myKey}`;


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log("Weather Data:", data);

            display(data);


        } else {
            throw new Error(await response.text());
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);

    }

}


function display(data) {
    country.textContent = `${data.name}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    let temp = data.main.temp;

    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', desc);
    descri.textContent = `${desc}`
    temperature.textContent = `${temp}`;


}

apiFetch();
