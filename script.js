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
});

async function showData(location) {
  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location.value}&appid=25fc2096791de9258f2a8d6d53df7956&units=metric`
  );
  let data = await response.json();
  console.log(data, data.name, data.main.temp);

  let city = document.createElement("p");
  city.classList = "city";
  city.textContent = data.name;

  details.classList.remove("hidden");
  details.appendChild(city);
}
