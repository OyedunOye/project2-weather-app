import { sun } from "../assets";
import AirConditionsCard from "./AirConditionsCard";
import ForecastCard from "./ForecastCard";
import Searchbar from "./Searchbar";

const ForecastContainer = () => {
  return (
    <section className="w-full h-full flex flex-col justify-between">
      <Searchbar />

      <div className="h-[calc(82%/3.4)] w-full flex justify-between pl-6 pt-4 pr-12">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-y-1">
            <h4 className="text-3xl font-extrabold text-gray-300">Madrid</h4>
            <p className="text-sm text-gray-500">Chances of rain: 0%</p>
          </div>
          <h5 className="text-4xl font-extrabold text-gray-300">31ºC</h5>
        </div>

        <div className="h-full">
          <img
            className="object-cover h-full"
            src={sun}
            alt="Bright golden sun"
          />
        </div>
      </div>

      <div className="h-[calc(82%/2.8)] bg-slate-800 rounded-[10px] ">
        <ForecastCard />
      </div>
      <div className="h-[calc(82%/2.6)] bg-slate-800 rounded-[10px] ">
        <AirConditionsCard />
      </div>
    </section>
  );
};

export default ForecastContainer;
