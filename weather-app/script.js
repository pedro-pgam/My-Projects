async function getWeather() {
  const city = document.getElementById('city').value;
  const apiKey = "SUA_API_KEY"; // Coloque sua chave da OpenWeatherMap
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  document.getElementById('result').innerText =
    `${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
}