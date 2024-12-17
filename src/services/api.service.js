import axios from "axios";

// const API_KEY = process.env.OPEN_WEATHER_API_KEY;
// const BASE_URL = process.env.BASE_URL;

const API_KEY = "d98d9acea541fe8bff32362c1693637c";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather/";

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
