import { cloudysun, sun, rainycloud, wind, storm } from '../assets'

const upcomingForecasts = [
    {
        day: "Today",
        image: sun,
        weather: "Sunny",
        temperature: "36°C/22°C"
    },
    {
        day: "Tue",
        image: sun,
        weather: "Sunny",
        temperature: "37°C/21°C"
    },
    {
        day: "Wed",
        image: sun,
        weather: "Sunny",
        temperature: "37°C/23°C"
    },
    {
        day: "Thu",
        image: cloudysun,
        weather: "Cloudy",
        temperature: "28°C/20°C"
    },
    {
        day: "Fri",
        image: rainycloud,
        weather: "Rainy",
        temperature: "36°C/29°C"
    },
    {
        day: "Sat",
        image: wind,
        weather: "Windy",
        temperature: "36°C/22°C"
    },
    {
        day: "Sun",
        image: storm,
        weather: "Storm",
        temperature: "29°C/21°C"
    }
]


const FutureForecasts = () => {
  return (
    <div className="flex flex-col h-full rounded-2xl p-4">
        <h3 className="flex text-xs text-slate-400 px-6 py-4">7-DAY FORECAST</h3>
        <div className="flex flex-col h-full  px-6 divide-y divide-slate-600">
            {upcomingForecasts.map((forecast, index) => (
                <div key={index} className="h-[20%] flex items-center justify-between hover:cursor-pointer hover:bg-slate-500">
                    <p className="w-7 text-slate-400">{forecast.day}</p>
                    <img className="w-12 h-12" src={forecast.image} alt={forecast.weather} />
                    <p className="text-[12px] w-6 font-bold">{forecast.weather}</p>
                    <p className="text-[14px]  text-slate-400">{forecast.temperature}</p>
                </div>
            ))}
      </div>
    </div>
  )
}

export default FutureForecasts