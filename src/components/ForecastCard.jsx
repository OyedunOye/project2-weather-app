import { sun } from "../assets";

const WeatherCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 px-8">
      <p className="text-sm font-extrabold text-gray-500">6: 00AM</p>
      <img
        className="object-cover w-12 h-12"
        src={sun}
        alt="Bright golden sun"
      />
      <p className="font-semibold text-gray-300">20ºC</p>
    </div>
  );
};

const ForecastCard = () => {
  return (
    <div className="w-full h-full py-4 px-6 flex flex-col gap-y-3">
      <h5 className="text-xs font-extrabold text-gray-500 uppercase">
        Today's forecast
      </h5>
      <div className="flex items-center justify-between divide-x divide-gray-600">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
    </div>
  );
};

export default ForecastCard;
