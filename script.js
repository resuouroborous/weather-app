const geocodingApiUrl = "https://geocoding-api.open-meteo.com/v1/search?name=";
const weatherApiUrl = "https://api.open-meteo.com/v1/forecast?";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

// ✅ Add event listener for button click
searchBtn.addEventListener("click", () => {
    const city = searchBox.value.trim();
    if (city) {
        checkWeather(city);
    } else {
        alert("Please enter a city name");
    }
});

// ✅ Trigger search when pressing Enter key
searchBox.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const city = searchBox.value.trim();
        if (city) {
            checkWeather(city);
        } else {
            alert("Please enter a city name");
        }
    }
});


async function checkWeather(city) {
    try {
        // Step 1: Fetch coordinates from Geocoding API
        const geoResponse = await fetch(geocodingApiUrl + city);
        const geoData = await geoResponse.json();

        if (geoData.results && geoData.results.length > 0) {
            const lat = geoData.results[0].latitude;
            const lon = geoData.results[0].longitude;

            // Step 2: Fetch weather data
            const weatherResponse = await fetch(
                weatherApiUrl +
                `latitude=${lat}&longitude=${lon}&current=temperature_2m,weathercode,wind_speed_10m,relative_humidity_2m&temperature_unit=celsius&wind_speed_unit=kmh`
            );
            const weatherData = await weatherResponse.json();

            console.log(weatherData);

            // Update HTML
            document.querySelector(".city").innerHTML = geoData.results[0].name;
            document.querySelector(".temp").innerHTML =
                Math.round(weatherData.current.temperature_2m) + "°c";
            document.querySelector(".humidity").innerHTML =
                weatherData.current.relative_humidity_2m + "%";
            document.querySelector(".wind").innerHTML =
                weatherData.current.wind_speed_10m + " km/h";

            // Weather icon logic
            const weatherCode = weatherData.current.weathercode;
            if (weatherCode >= 0 && weatherCode <= 3) {
                weatherIcon.src = "images/sun.png";
            } else if (weatherCode >= 51 && weatherCode <= 67) {
                weatherIcon.src = "images/heavy-rain.png";
            } else if (weatherCode >= 71 && weatherCode <= 86) {
                weatherIcon.src = "images/snow.png";
            } else if (weatherCode >= 95 && weatherCode <= 99) {
                weatherIcon.src = "images/thunderstorm.png";
            } else {
                weatherIcon.src = "images/cloudy.png"; // ✅ match your HTML
            }

            // Show weather section
            document.querySelector(".weather").classList.add("show");

        } else {
            alert("City not found.");
            document.querySelector(".weather").style.display = "none";
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("An error occurred while fetching weather data.");
        document.querySelector(".weather").style.display = "none";
    }
}
