import { cloudysun, sun, rainycloud, wind, storm } from '../assets'

const FutureForecasts = ({weatherData, imageSetter, weatherCondition}) => {

    const upcomingForecasts = [
        {
            day: "Today",
            image: sun,
            weather: "Sunny",
            minTemp: "36",
            maxTemp:"22"
        },
        {
            day: "Tue",
            image: sun,
            weather: "Sunny",
            minTemp: "37",
            maxTemp:"21"
        },
        {
            day: "Wed",
            image: sun,
            weather: "Sunny",
            minTemp: "37",
            maxTemp:"23"
        },
        {
            day: "Thu",
            image: cloudysun,
            weather: "Cloudy",
            minTemp: "28",
            maxTemp:"20"
        },
        {
            day: "Fri",
            image: rainycloud,
            weather: "Rainy",
            minTemp: "36",
            maxTemp:"29"
        },
        {
            day: "Sat",
            image: wind,
            weather: "Windy",
            minTemp: "36",
            maxTemp:"22"
        },
        {
            day: "Sun",
            image: storm,
            weather: "Storm",
            minTemp: "29",
            maxTemp:"21"
        }
    ]

    const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const weekDay = (timeStamp) => {
        return shortDays[new Date(timeStamp * 1000).getDay()]
    }

  return (
    <div className="flex flex-col h-full rounded-2xl p-4">
        <h3 className="flex text-xs text-slate-400 px-6 py-4">7-DAY FORECAST</h3>
        <div className="flex flex-col h-full  px-6 divide-y divide-slate-600">
            {upcomingForecasts.map((forecast, index) => (
                <div key={index} className="h-[20%] flex items-center justify-between">
                    <p className="w-7 text-slate-400">{weatherData.length === 0 ? forecast.day : weekDay(weatherData["daily"][index+1]["dt"])}</p>
                    <img className="w-12 h-12" src={weatherData.length === 0 ? forecast.image: imageSetter(weatherCondition=weatherData["daily"][index+1]["weather"][0]["main"].toLowerCase())} alt={forecast.weather} />
                    <p className="text-[12px] w-6 font-bold capitalize flex justify-center items-center">{weatherData.length === 0 ?forecast.weather : weatherCondition}</p>
                    <div className='flex flex-2 items-center justify-start'>
                        <p className="text-[14px]  text-slate-400">{weatherData.length === 0 ?forecast.minTemp: weatherData["daily"][index+1]["temp"]["min"].toFixed(2)} °C/ </p>
                        <p className="text-[14px]  text-slate-400">{weatherData.length === 0 ?forecast.maxTemp: weatherData["daily"][index+1]["temp"]["max"].toFixed(2)} °C</p>
                    </div>
                </div>
            ))}
      </div>
    </div>
  )
}

export default FutureForecasts