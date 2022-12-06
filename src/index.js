//Date Formating Function
function formatDate(timestamp) {
    //Will calculate the time & date 
    let date = new Date(timestamp);
    let hours = date.getHours(); 
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = days[date.getDay()];
    return `${day} ${hours}: ${minutes}`;
}

// Main data Function
function displayTemperature(response) {
    console.log(response.data);
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    let iconElement = document.querySelector("#icon");

    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = response.data.temperature.humidity;
    windElement.innerHTML = Math.round (response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.time*1000);
    iconElement.setAttribute ("src",`http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${response.data.condition.icon}.png`);
  
}
let apiKey = `24b6dfe102oata11d30fb9f9e97168f3`;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=London&key=24b6dfe102oata11d30fb9f9e97168f3&units=metric
`;
axios.get(apiUrl).then(displayTemperature);