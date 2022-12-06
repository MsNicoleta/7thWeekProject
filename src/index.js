// Main temperature Function
function displayTemperature(response) {
    console.log(response.data.temperature.current);
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = response.data.temperature.current;
}
let apiKey = `24b6dfe102oata11d30fb9f9e97168f3`;
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=London&key=24b6dfe102oata11d30fb9f9e97168f3&units=metric
`;
axios.get(apiUrl).then(displayTemperature);


//alert("Hello World")
  /*  function showUser(response) {
        alert(`The user name is ${response.data.name}`);
      } */