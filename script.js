"use script";

const input = document.getElementById("location");
const form = document.getElementById("form");
const details = document.getElementById("detail");
details.classList = "hidden";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(input.value);
  showData(input);

  //clear values
  input.value = "";
  details.innerHTML = "";
});

async function showData(location) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=25fc2096791de9258f2a8d6d53df7956&units=metric`
  );
  let data = await response.json();
  console.log(data);

  let city = document.createElement("p");
  city.classList = "city";
  city.innerHTML = `<ion-icon name="location-sharp"></ion-icon><span> ${data.name}, ${data.sys.country}</span>`;

  let time = document.createElement("p");
  time.classList = "time";
  time.textContent = new Date().toLocaleTimeString([], {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  let temperature = document.createElement("p");
  temperature.classList = "temperature";
  temperature.innerHTML = `${data.main.temp}<span>&#176</span>`;

  let description = document.createElement("p");
  description.classList = "description";
  description.textContent = data.weather[0].description;

  let feelsLike = document.createElement("p");
  feelsLike.classList = "feels-like";
  feelsLike.innerHTML = `Feels like ${data.main.feels_like}<span>&#176</span>`;

  // buttom grid
  let humidity = document.createElement("p");
  humidity.classList = "humidity";
  humidity.innerHTML = `<div><p><ion-icon name="water"></ion-icon>Humidity</p><span>${data.main.humidity}%</span></div>`;

  let windSpeed = document.createElement("p");
  windSpeed.classList = "wind-speed";
  windSpeed.innerHTML = `<div><p><ion-icon name="options"></ion-icon>Wind</p><span>${data.wind.speed} km/h</span></div>`;

  let sunrise = document.createElement("p");
  sunrise.classList = "sunrise";
  sunrise.innerHTML = `<div><p><ion-icon name="partly-sunny"></ion-icon>Sunrise</p><span>${formatTime(
    data.sys.sunrise
  )}</span></div>`;

  let sunset = document.createElement("p");
  sunset.classList = "sunset";
  sunset.innerHTML = `<div><p><ion-icon name="partly-sunny"></ion-icon>Sunset</p><span>${formatTime(
    data.sys.sunset
  )}</span></div>`;

  let div = document.createElement("div");
  // image.classList = "icon";
  // image.alt = "weather description";
  const iconCode = data.weather[0].icon;

  if (data.weather[0].main === "Clear") {
    div.innerHTML = `<img class="icon" src="https://openweathermap.org/img/wn/${iconCode}@2x.png" />`;
  } else if (data.weather[0].main === "Rain") {
    div.innerHTML = `<img class="icon" src="https://openweathermap.org/img/wn/${iconCode}@2x.png" />`;
  } else if (
    data.weather[0].main === "Clouds" ||
    data.weather[0].main === "Smoke"
  ) {
    div.innerHTML = `<img class="icon" src="https://openweathermap.org/img/wn/${iconCode}@2x.png" />`;
  } else {
    div.innerHTML = `<img class="icon" src="https://openweathermap.org/img/wn/${iconCode}@2x.png" />`;
  }

  function formatTime(unix) {
    return new Date(unix * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  // let condition = data.weather[0].main;

  // div.innerHTML = `<ion-icon class="icon" name="${condition}"></ion-icon>`;

  details.classList.remove("hidden");
  // details.appendChild(image);
  details.appendChild(city);
  details.appendChild(time);
  details.appendChild(description);
  details.appendChild(div);
  details.appendChild(temperature);
  details.appendChild(feelsLike);
  details.appendChild(humidity);
  details.appendChild(windSpeed);
  details.appendChild(sunrise);
  details.appendChild(sunset);
}
