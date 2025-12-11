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
  city.textContent = data.name;

  let temperature = document.createElement("p");
  temperature.classList = "temperature";
  temperature.innerHTML = `${data.main.temp}<span>&#176</span>`;

  let description = document.createElement("p");
  description.classList = "description";
  description.textContent = data.weather[0].description;

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
  // let condition = data.weather[0].main;

  // div.innerHTML = `<ion-icon class="icon" name="${condition}"></ion-icon>`;

  details.classList.remove("hidden");
  // details.appendChild(image);
  details.appendChild(div);
  details.appendChild(temperature);
  details.appendChild(city);
  details.appendChild(description);
}
