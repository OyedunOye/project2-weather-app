import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { getWeather } from "../services/api.service";

const Searchbar = () => {
  const [textInput, setTextInput] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  const handleGetCityWeather = async (e) => {
    e.preventDefault();

    const data = await getWeather(textInput);
    setWeatherData(data);
  };

  console.log(weatherData);

  return (
    <form className="w-full relative">
      <input
        type="text"
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        className="w-full py-2 px-6 bg-slate-800 rounded-[10px] border-none outline-none"
        placeholder="Search city...."
      />

      <button
        onClick={handleGetCityWeather}
        className="absolute h-5 w-5 right-6 top-1/2 -translate-y-1/2"
      >
        <FaSearch className="w-full h-full opacity-80 hover:opacity-100" />
      </button>
    </form>
  );
};

export default Searchbar;
