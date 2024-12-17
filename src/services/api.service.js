import axios from "axios";

const API_KEY = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
const BASE_URL = process.env.REACT_APP_BASE_URL;

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

  // const fullUrl = `${BASE_URL}q=${city}&appid=${API_KEY}&units=metric`
};
