import axios from "axios";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const GEO_LOCATION_BASE_URL =
  import.meta.env.VITE_OPEN_WEATHER_ONE_CALL_GEOLOCATION_BASE_URL;
const UPDATED_BASE_URL = import.meta.env.VITE_OPEN_WEATHER_ONE_CALL_BASE_URL;

const getGeoLocation = async (city) => {
  const params = {
    q: city,
    limit: 1,
    appid: API_KEY,
  };

  try {
    const response = await axios.get(GEO_LOCATION_BASE_URL, { params: params });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getWeatherV2 = async (city) => {
  try {
    const getLatAndLong = await getGeoLocation(city);

    // https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

    if (getLatAndLong) {
      const params = {
        lat: getLatAndLong[0]?.lat,
        lon: getLatAndLong[0]?.lon,
        appid: API_KEY,
        units: "metric",
      };

      const response = await axios.get(UPDATED_BASE_URL, { params: params });
      return response.data;
    }

    return "Error: something went wrong";
  } catch (error) {
    console.log(error);
  }
};
