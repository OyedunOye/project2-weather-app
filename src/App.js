import { useState } from "react";
// import { getWeather } from "./services/api.service";
import { sun, wind, storm, clearsky, snow, rain, cloud } from "./assets";
import { ForecastContainer, FutureForecasts, Sidebar } from "./components";
import { getWeatherV2 } from "./services/api-v2.service";

function App() {
  const [textInput, setTextInput] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetCityWeather = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = await getWeatherV2(textInput);
      setWeatherData(data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeText = (e) => {
    setTextInput(e.target.value);
  };

  const imageSetter = (weatherCondition) => {
    // const weatherCondition = weatherData["weather"]["daily"]["weather"][0]["main"].toLowerCase();
    if (
      weatherCondition.includes("cloud") &&
      weatherCondition.includes("sun")
    ) {
      let weatherImage = clearsky;
      return weatherImage;
    } else if (weatherCondition.includes("cloud")) {
      let weatherImage = cloud;
      return weatherImage;
    } else if (weatherCondition.includes("rain")) {
      let weatherImage = rain;
      return weatherImage;
    } else if (weatherCondition.includes("snow")) {
      let weatherImage = snow;
      return weatherImage;
    } else if (weatherCondition.includes("wind")) {
      let weatherImage = wind;
      return weatherImage;
    } else if (weatherCondition.includes("storm")) {
      let weatherImage = storm;
      return weatherImage;
    } else {
      let weatherImage = sun;
      return weatherImage;
    }
  };

  return (
    <main className="h-screen w-full bg-slate-950 text-white flex flex-col gap-4 p-4 overflow-hidden">
      <div className="h-full w-full min-xl:px-[20vw] flex justify-center gap-x-6">
        <div className="w-[8%] rounded-xl bg-slate-800">
          <Sidebar />
        </div>
        <div className="w-[58%]">
          <ForecastContainer
            textInput={textInput}
            onChangeText={onChangeText}
            handleGetCityWeather={(e) => handleGetCityWeather(e)}
            weatherData={weatherData}
            isLoading={isLoading}
            imageSetter={imageSetter}
          />
        </div>
        <div className="w-[32%] rounded-xl bg-slate-800 mt-20">
          <FutureForecasts
          imageSetter={imageSetter}
          weatherData={weatherData}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
