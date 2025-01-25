import { BiLoaderCircle } from "react-icons/bi";
import { sun } from "../assets";
import AirConditionsCard from "./AirConditionsCard";
import ForecastCard from "./ForecastCard";
import Searchbar from "./Searchbar";

const ForecastContainer = ({
  textInput,
  onChangeText,
  handleGetCityWeather,
  isLoading,
  weatherData,
  imageSetter,
  weatherCondition
}) => {
  // console.log("LOGGING IN THE FORECAST_CONTAINER", weatherData);

  return (
    <section className="w-full h-full flex flex-col justify-between transition-all">
      <Searchbar
        textInput={textInput}
        onChangeText={onChangeText}
        handleGetCityWeather={handleGetCityWeather}
      />

      {isLoading ? (
        <div className="flex items-center justify-center">
          <BiLoaderCircle className="h-8 w-8 text-white animate-spin" />
        </div>
      ) : (
        <div className="h-[calc(82%/3.4)] w-full flex justify-between pl-6 pt-4 pr-12">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col gap-y-1">
              <h4 className="text-3xl font-extrabold text-gray-300 capitalize">
                {weatherData ? textInput : "Madrid"}
              </h4>
              <p className="text-sm text-gray-500">
                Chances of rain:{" "}
                {weatherData.length === 0 ? 0 : weatherData["daily"][0]["pop"]/1*100} %
              </p>
            </div>
            <h5 className="text-4xl font-extrabold text-gray-300">
              {weatherData.length === 0 ? 31 : weatherData["current"]["temp"]} °C
            </h5>
          </div>

          <div className="h-full">
            <img
              className="object-cover h-full"
              src={weatherData.length === 0 ? sun : imageSetter(weatherCondition = weatherData["current"]["weather"][0]["main"].toLowerCase())}
              alt="Bright golden sun"
            />
          </div>
        </div>
      )}

      <div className="h-[calc(82%/2.8)] bg-slate-800 rounded-[10px] ">
        <ForecastCard weatherData={weatherData} imageSetter={imageSetter} />
      </div>
      <div className="h-[calc(82%/2.6)] bg-slate-800 rounded-[10px] ">
        <AirConditionsCard weatherData={weatherData} imageSetter={imageSetter} />
      </div>
    </section>
  );
};

export default ForecastContainer;