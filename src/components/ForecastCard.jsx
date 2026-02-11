import { sun } from "../assets";

const ForecastCard = ({ weatherData, imageSetter, weatherCondition }) => {
  const threeHourlyDetails = [
    {
      time: "6:00 A.M",
      image: sun,
      temperature: 20,
      hourIndex: 6,
    },
    {
      time: "9:00 A.M",
      image: sun,
      temperature: 30,
      hourIndex: 9,
    },
    {
      time: "12:00 P.M",
      image: sun,
      temperature: 31,
      hourIndex: 12,
    },
    {
      time: "3:00 P.M",
      image: sun,
      temperature: 25,
      hourIndex: 15,
    },
    {
      time: "6:00 P.M",
      image: sun,
      temperature: 24,
      hourIndex: 18,
    },
    // {
    //   time: "9:00 P.M",
    //   image: sun,
    //   temperature: 21,
    //   hourIndex: 21
    // }
  ];

  return (
    <div className="w-full h-full py-4 px-6 flex flex-col gap-y-3 max-md:min-h-fit max-lg:p-2">
      <h5 className="text-xs font-extrabold text-gray-500 uppercase max-lg:py-2">
        Today's forecast
      </h5>
      <div className="flex items-center justify-between divide-x divide-gray-600">
        {threeHourlyDetails.map((threeHourlyDetail, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-y-2 px-6 max-md:px-1 max-md:gap-y-4"
          >
            {/* <p className="text-sm font-extrabold text-gray-500">{weatherData.length === 0 ? $`{6: 00AM}` : weatherData["current"]}</p> */}
            <p className="text-sm font-extrabold max-md:h-6 max-md:text-xs text-gray-500">
              {threeHourlyDetail.time}
            </p>
            <img
              className="object-cover w-12 h-12 max-md:w-8 max-md:h-8"
              src={
                weatherData.length === 0
                  ? sun
                  : imageSetter(
                      (weatherCondition =
                        weatherData["hourly"][threeHourlyDetail.hourIndex][
                          "weather"
                        ][0]["main"].toLowerCase()),
                    )
              }
              alt="Bright golden sun"
            />
            <p className="font-semibold max-md:text-xs text-gray-300">
              {weatherData.length === 0
                ? 20
                : weatherData["hourly"][threeHourlyDetail.hourIndex][
                    "temp"
                  ].toFixed(0)}{" "}
              ºC
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastCard;
