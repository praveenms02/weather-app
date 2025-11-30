const APIKey = "278adda35039128f8caf14608537cd90";
const APIUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityInput = document.getElementById("cityInput");
const searchButton = document.getElementById("search-button");
 

async function checkWeather(cityInput) {
  const response = await fetch(APIUrl + cityInput + `&appid=${APIKey}`);
  var data = await response.json();
  console.log(data);
  if(data.cod === "404") {
    document.querySelector(".weather").style.display = "none";
    document.querySelector(".error").style.display = "block";
    return;
  }
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

  //changing weather icon based on weather condition
  if(data.weather[0].main == "Clouds") {
    document.getElementById("weatherIcon").src = "images/clouds.png";
  }
  else if(data.weather[0].main == "Clear") {
    document.getElementById("weatherIcon").src = "images/clear.png";
  }
  else if(data.weather[0].main == "Rain") {
    document.getElementById("weatherIcon").src = "images/rain.png";
  }
  else if(data.weather[0].main == "Drizzle") {
    document.getElementById("weatherIcon").src = "images/drizzle.png";
  }
  else if(data.weather[0].main == "Mist") {
    document.getElementById("weatherIcon").src = "images/mist.png";
  }
  document.querySelector(".weather").style.display = "block";
}
searchButton.addEventListener("click", () => {
  const city = cityInput.value;
  checkWeather(city);

});


