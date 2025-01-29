import React from "react";
import { FaSun, FaThermometerEmpty } from "react-icons/fa";
import { FaDroplet } from "react-icons/fa6";
import { FiWind } from "react-icons/fi";

const AirConditionsCard = ({weatherData}) => {
  return (
    <div className="w-full h-full py-3 px-6 gap-y-4">
      <div className="flex items-center justify-between">
        <h5 className="text-xs font-extrabold text-gray-500 uppercase pb-2">
          air conditions
        </h5>
        <button className="border-none outline-none rounded-full px-4 py-2 bg-blue-600 hover:bg-blue-500 text-xs">
          See more
        </button>
      </div>

      <div className="flex items-center gap-x-[40%]">
        <div className="flex flex-col gap-y-5">
          <div className="flex items-start gap-x-2">
            <FaThermometerEmpty className="w-6 h-6 text-gray-400" />
            <div className="flex flex-col gap-y-1">
              <p className="text-sm font-extrabold text-gray-400 -mt-1">
                Real Feel
              </p>
              <p className="text-lg font-bold text-gray-300">{weatherData.length===0? 30 : weatherData['current']['feels_like']} °C</p>
            </div>
          </div>
          <div className="flex items-start gap-x-2">
            <FaDroplet className="w-6 h-6 text-gray-400" />
            <div className="flex flex-col gap-y-1">
              <p className="text-sm font-extrabold text-gray-400 -mt-1">
                Chances of rain
              </p>
              <p className="text-lg font-bold text-gray-300">{weatherData.length===0? 0 : (weatherData['daily'][0]['pop']/1*100).toFixed(0)} %</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-5">
          <div className="flex items-start gap-x-2">
            <FiWind className="w-6 h-6 text-gray-400" />
            <div className="flex flex-col gap-y-1">
              <p className="text-sm font-extrabold text-gray-400">Wind</p>
              <p className="text-lg font-bold text-gray-300">{weatherData.length===0? 0.2 : weatherData['current']['wind_speed']} km/h</p>
            </div>
          </div>
          <div className="flex items-start gap-x-2">
            <FaSun className="w-6 h-6 text-gray-400" />
            <div className="flex flex-col gap-y-1">
              <p className="text-sm font-extrabold text-gray-400">UV Index</p>
              <p className="text-lg font-bold text-gray-300">{weatherData.length === 0 ? 3 : weatherData['current']['uvi']}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirConditionsCard;
