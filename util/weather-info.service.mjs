export async function getWeatherData(location) {
  if (! location) {
    return Promise.reject("No location specified.");
  }
  try {
    const response = await axios.get('http://localhost:5000/weather-api?q=' + location);
    const data = await response.data;
    return Promise.resolve({
      location: `${data.location.name}, ${data.location.region}`,
      temp: data.current.temp_f,
      condition: data.current.condition.text.toLowerCase(),
      updated: data.current.last_updated
    });
  } catch (error) {
    Promise.reject(`Invalid location queried: ${location}. ${error.message}`);
  }
}