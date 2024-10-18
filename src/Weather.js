import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather1.css";


export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const[query, setQuery] = useState(props.defaultQuery);

function handleResponse(response) {
    const today = response.data.daily[0];
    setWeatherData({
        ready: true,
        city: response.data.city,
        description: today.condition.description,
        icon: today.condition.icon,
        date: new Date(today.time*1000),
        temperature: today.temperature.day,
        humidity: today.temperature.humidity,
        wind: Math.round(today.wind.speed),
        });
        }

        
          

function search() {
    const key = "bb44bab20a1to1942fe0345a55b0085e";
  
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

        function handleSubmit(event) {
           event.preventDefault();
           search();
        }

        function handleCityChange(event){
setQuery(event.target.value);
        }

    if (weatherData.ready) {
        return <div className="weather1">
        <form onSubmit={handleSubmit}>
            <div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a location" autoFocus="on" onChange={handleCityChange} className="form"/>
            </div>
            <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100"/></div>
            </div>
            </form>
            <WeatherInfo data={weatherData} />
    </div>
} else {
    search();
return "Loading..."}
}

    
    