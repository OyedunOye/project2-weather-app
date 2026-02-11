import axios from "axios";

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getWeather = async (city) => {
  const params = {
    q: city,
    appid: API_KEY,
    units: "metric",
  };

  try {
    const response = await axios.get(BASE_URL, { params: params });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
