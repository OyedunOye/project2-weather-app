import { useState } from "react";
import { getWeather } from "./services/api.service";
import { ForecastContainer, FutureForecasts, Sidebar } from "./components";

function App() {
  const [textInput, setTextInput] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetCityWeather = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = await getWeather(textInput);
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

  return (
    <main className="h-screen w-full bg-slate-950 text-white flex flex-col gap-4 p-4 overflow-hidden">
      <div className="h-full w-full flex justify-center gap-x-6">
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
          />
        </div>
        <div className="w-[32%] rounded-xl bg-slate-800 mt-20">
          <FutureForecasts />
        </div>
      </div>
    </main>
  );
}

export default App;
