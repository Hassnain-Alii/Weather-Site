// hirigeh563@codverts.com
// weather$123
const apiKey = "015b1ba8b441c054fb40d44eaabc2a5a";
const BaseURL =
  "https://api.openweathermap.org/data/2.5/weather?appid=015b1ba8b441c054fb40d44eaabc2a5a&units=metric&q=";

const search = document.querySelector(".search-bar input");
const searchBtn = document.querySelector(".search-bar button");
const humidity = document.querySelector("#humidity-per");
const wind = document.querySelector("#wind-speed");
const temp = document.querySelector("#temp");
const town = document.querySelector("#city");
const weatherImg = document.querySelector(".weather-img");
const container = document.querySelector(".container");

const checkWeather = async (city) => {
  let response = await fetch(BaseURL + city);

  if (response.status == 404) {
    document.querySelector(".invalid-city").style.display = "block";
    document.querySelector(".weather-container").style.display = "none";
  } else {
    document.querySelector(".invalid-city").style.display = "none";
  }
  let data = await response.json();
  let weather = await data.weather[0].main;

  temp.innerText = `${Math.round(data.main.temp)}°C`;
  town.innerText = data.name;
  humidity.innerText = `${data.main.humidity}%`;
  wind.innerText = `${data.wind.speed} KM/h`;

  if (weather === "Clouds") {
    weatherImg.src = "images/clouds.png";
    container.style.backgroundImage =
      "linear-gradient(135deg,#C5CAE9, #B1B2FF)";
  } else if (weather === "Rain") {
    weatherImg.src = "images/rain.png";
    container.style.backgroundImage =
      " linear-gradient(135deg, #4D90FE, #2F4F7F)";
  } else if (weather === "Clear") {
    weatherImg.src = "images/clear.png";
    container.style.backgroundImage =
      " linear-gradient(135deg, #87CEEB,rgb(180, 171, 70))";
  } else if (weather === "Drizzle") {
    weatherImg.src = "images/drizzle.png";
    container.style.backgroundImage =
      " linear-gradient(135deg, #66CCCC, #3B3F54);";
  } else if (weather === "Humidity") {
    weatherImg.src = "images/humidity.png";
    container.style.backgroundImage =
      " linear-gradient(135deg, #6495ED, #2F4F4F)";
  } else if (weather === "Smoke") {
    weatherImg.src = "images/mist.png";
    container.style.backgroundImage =
      " linear-gradient(135deg #C7C5B8, #333333)";
  } else if (weather === "Snow") {
    weatherImg.src = "images/snow.png";
    container.style.backgroundImage =
      " linear-gradient(135deg,rgb(232, 250, 232),rgb(46, 123, 162))";
  } else if (weather === "Wind") {
    weatherImg.src = "images/wind.png";
    container.style.backgroundImage =
      "linear-gradient(135deg, #8BC34A,rgb(62, 142, 65))";
  }
  document.querySelector(".weather-container").style = "display:block";
};

searchBtn.addEventListener("click", () => {
  checkWeather(search.value);
});
search.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkWeather(search.value);
  }
});
