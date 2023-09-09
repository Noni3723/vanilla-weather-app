function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temeprature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let speedElement = document.querySelector("#speed");
  let windElement = document.querySelector("#wind");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);

  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
let apiKey = "b590d66dc52ca21d7ebdfd47412549bf";
let apiUrl =
  "api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric";

axios.get(apiUrl).then(displayTemperature);
