function search(city) {
  let apiKey = "b590d66dc52ca21d7ebdfd47412549bf";
  let apiUrl =
    "api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric";
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}
let form = document.querySelector("search-form");
form.addEventListener("submit", handleSubmit);
