async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = "YOUR_API_KEY"; // Put your OpenWeatherMap API key here
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  document.getElementById('result').innerText =
    `${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
}
