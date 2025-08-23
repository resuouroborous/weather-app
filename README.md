# 🌦️ Weather App

A simple and responsive weather application built with **HTML, CSS, and JavaScript**.  
This app allows users to search for any city and get the current temperature, humidity, wind speed, and weather condition with matching icons.  

---

## 🚀 Features
- Search weather by **city name** 🏙️  
- Displays:
  - 🌡️ Temperature (°C)  
  - 💧 Humidity (%)  
  - 🌬️ Wind Speed (km/h)  
  - ⛅ Weather condition with icons  
- **Responsive design** for desktop and mobile 📱💻  
- Supports **Enter key search** for faster interaction  
- Error handling for invalid city names  

---

## 🛠️ Tech Stack
- **HTML5** – Structure  
- **CSS3** – Styling & Responsive Design  
- **JavaScript (Vanilla JS)** – API calls & DOM manipulation  
- **[Open-Meteo API](https://open-meteo.com/)** – Weather and geocoding data  

---

## 📸 Preview
  ![Weather App screenshot](https://github.com/resuouroborous/weather-app/blob/main/images/weather-app-ss.png?raw=true)

---

## 📂 Project Setup
1. Clone the repository:
   ```bash
   git clone [https://github.com/your-username/weather-app.git](https://github.com/resuouroborous/weather-app.git)

2. Navigate to the project folder:
   ```bash
   cd weather-app
   
 3. Open index.html in your browser 🚀
(No build tools required, pure HTML/CSS/JS!)

## 🔑 How it Works
- The Geocoding API converts the entered city name into latitude & longitude.
- The Weather API fetches weather details using those coordinates.
- The app dynamically updates the UI with the retrieved data.

## 📌 Future Improvements
- Add 5-day forecast
- Detect weather automatically using current location (Geolocation API)
- Dark / Light theme toggle
- Better weather icons and animations

## 🤝 Contributing
- Contributions, issues, and feature requests are welcome!
- Feel free to fork this repo and submit a pull request.

## 📜 License
- This project is licensed under the MIT License.
