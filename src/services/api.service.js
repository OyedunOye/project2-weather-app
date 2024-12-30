import axios from "axios";

const API_KEY = "790e1a9e109239e9d1cadcdc5f665ed8";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

//d98d9acea541fe8bff32362c1693637c
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
