import React, { useState } from 'react';
// import TemperatureConverter from './TemperatureConverter';

// require('dotenv').config()
// console.log(process.env.REACT_APP_WEATHER_API_KEY)

const api = {
  key: process.env.REACT_APP_WEATHER_API_KEY,
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  } 

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", 
    "Thursday", "Friday", "Saturday"]; 

    let year = d.getFullYear();
    let month = months[d.getMonth()];
    let date = d.getDate();
    let day = days[d.getDay()];

    return `${day}, ${month} ${date}, ${year}`
  }

  // const celsiusChange = (e) => {
  //   const celsiusValue = {Math.round(weather.main.temp)};
  //   const fahrenheitValue = (celsiusValue * 9/5) + 32;
  // }

  return (
    <div className={
      (typeof weather.main != "undefined") 
      ? ((weather.main.temp > 16)? 'app_warm' 
        : 'app') 
      : 'app'}>
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Search"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>

        {(typeof weather.main != "undefined") ? (
        <div>
          <div className='location-box'>
            <div className='location'>{weather.name}, {weather.sys.country}</div>
            {/* <div className="location">New York </div> */}
            <div className='date'>{dateBuilder(new Date())} </div>
          </div>
          <div className="weather-box">
            {/* <div className="celsius-temp">15C</div> */}
            <div className="celsius-temp">{Math.round(weather.main.temp)}°C </div>
            <div className="celsius-temp">{(Math.round(weather.main.temp) * 9/5) + 32}°F </div>
            <div className="weather">{weather.weather[0].main} </div> 
          </div>
        </div>
        ) : ('')}
      </main>
   
    </div>
  );
}

export default App;
