# weather-app


## Introduction
The Weather App is a simple and user-friendly web application that provides real-time weather information for locations around the world.
With this app, you can quickly check the current weather conditions, temperature, humidity, and more for any city.


## Features
- Real-time weather data retrieval.
- Display of current weather conditions including temperature, humidity, and wind speed.
- User-friendly interface with simple navigation.
- Search for weather information by city or location name.
- Responsive design for a seamless experience on desktop and mobile devices.


## Live - Preview
[Click here to view live preview](https://resuouroborous.github.io/weather-app/)


## Getting Started
  ###Prerequisites
  Before you can run the Weather App locally or deploy it, you'll need the following:
  - VS code and a browser ( chrome is preferred ) on your machine.
  - An API key from your preferred weather data provider (e.g., OpenWeatherMap, AccuWeather).
  - Follow the API provider's documentation to obtain an API key.

 
## Usage
    1. Open your web browser and navigate to `http://localhost:3000` ( or another port if specified during installation) or just click on the live server option after you have installed the live server extension on VS code.
    2. Enter the name of a city in the search bar.
    3. Click the "Search" button to retrieve and display the current weather information for the specified location.

   
## API Integration
The Weather App integrates with the OpenWeatherMap API to fetch weather data. To use a different weather data provider, you can modify the API integration code in the project.
In the index.js line: 15, replace the http of fetch and update the API request parameters as needed to work with your chosen weather data provider.

```javascript
fetch(`https://https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
```
## Contributing
We welcome contributions from the community! If you'd like to contribute to the Weather App.
please follow the general community guidelines.


## License
This Weather App is open-source and available under the MIT license.


## Warning
You need to get your own API Key and replace it in index.js file on line 9:

```javascript
const APIKey = 'Your Api Key';
```


