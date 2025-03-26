// Requirements:

// Data Fetching:
// fetch weather data from the OpenWeatherMap API.
// Handle potential errors during data fetching (e.g., network errors, API rate limits).
// Display a loading state while the data is being fetched.
// Display an error message if the API request fails.
//  Data Display:
// Display the following weather information:
// City name
// Temperature (in Celsius or Fahrenheit)
// Weather description (e.g., "Clear", "Cloudy", "Rainy")
// Display additional information like Visibility, humidity, wind speed, etc.
//     User Interaction:
// Allow the user to enter a city name in an input field.
// Fetch weather data for the entered city on input change or button click.
// Provide a way for the user to select/toggle temperature units (Celsius or Fahrenheit).
// Styling:
// Basic styling is required to make the component visually appealing.
// Use CSS or a CSS framework like Bulma, Tailwind CSS for styling.
// TypeScript:
// Write the component using TypeScript
// Define types for data, props, and methods.

// Bonus:
// Weather Forecast: Showing weather forecast for 8 days.
// Example: https://openweathermap.org/city/4460243
// Chart: Consider using any third-party to visualize the weather data
// Caching: Cache the fetched weather data to improve performance for subsequent requests for the same city.

// API Details:
// https://openweathermap.org/api/geocoding-api (to get geo coordinates by city name)
// curl --location 'http://api.openweathermap.org/geo/1.0/direct?q=charlotte&limit=1&appid={ask-for-appid}'
// https://openweathermap.org/current (to get weather data by geo coordinates)
// curl --location 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={ask-for-appid}'
// Optional: https://openweathermap.org/forecast5 (to get weather forecast data for 7 days by geo coordinates)
// curl --location 'api.openweathermap.org/data/2.5/forecast/daily?lat=44.34&lon=10.99&cnt=7&appid={ask-for-appid}'

// Additional Notes:
// List of all API parameters with units openweathermap.org/weather-data
// Temperature is available in Fahrenheit, Celsius and Kelvin units.
// For temperature in Fahrenheit use units=imperial
// For temperature in Celsius use units=metric
// Temperature in Kelvin is used by default, no need to use units parameter in API call
