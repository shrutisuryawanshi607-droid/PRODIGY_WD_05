const apiKey = "YOUR_REAL_API_KEY"; // 👈 Replace with your actual OpenWeatherMap key

// Load Mumbai on start
window.onload = () => {
  getWeather("Mumbai");
};

// Search city
async function getWeatherByCity() {
  const city = document.getElementById("cityInput").value.trim();
  if (!city) {
    alert("Please enter a city name");
    return;
  }
  getWeather(city);
}

// Fetch weather
async function getWeather(city) {
  try {
    const url ='https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=YOUR_REAL_API_KEY&units=metric';
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      throw new Error(data.message);
    }

    // Update UI
    document.getElementById("cityName").innerText = data.name;
    document.getElementById("description").innerText = data.weather[0].description;
    document.getElementById("temperature").innerText = data.main.temp;
    document.getElementById("humidity").innerText = data.main.humidity;
    document.getElementById("wind").innerText = data.wind.speed;

  } catch (error) {
    alert("Error: " + error.message);
  }
}
