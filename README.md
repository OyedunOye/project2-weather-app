# Weather App

A simple weather app to build knowledge of Frontend development and also usage of APIs

## API Reference

#### Get weather info

```http
  GET {weather_url}/api/...
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

## Authors

- [@shade](https://github.com/OyedunOye)
- [@odo](https://github.com/Peter-Odo)

## Features

- Colors - [primary color (#000000), secondary color (slate-800)]
- Project setup [✔]
- Project layout [✔]
- Implement Sidebar UI [✔]
- Implement Forecast Container UI [✔]
- Implement Advance Forecast UI [✔]

## Run Locally

Clone the project

```bash
  git clone https://github.com/OyedunOye/project2-weather-app
```

Go to the project directory

```bash
  cd project2-weather-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

## Screenshots

![App Screenshot](https://uizard.io/static/89cb1d30cdee9c19b0ce72efe004ff49/a8e47/f5e31989f816c5b15c47cd54b0eb0b30b210b6f0-1440x835.png)

## Tech Stack

**Client:** React, TailwindCSS

**Server:** OpenWeather API

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`OPEN_WEATHER_API_KEY`
