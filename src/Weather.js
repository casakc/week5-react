import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import "./Weather1.css";


export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });

function handleResponse(response) {
    const today = response.data.daily[0];
    setWeatherData({
        ready: true,
        city: response.data.city,
        description: today.condition.description,
        iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
        date: new Date(today.time*1000),
        temperature: today.temperature.day,
        humidity: today.temperature.humidity,
        wind: Math.round(today.wind.speed),
        });
        }

    if (weatherData.ready) {
        return <div className="weather1">
        <form>
            <div className="row">
            <div className="col-9">
            <input type="search" placeholder="Enter a location" autoFocus="on" className="form"/>
            </div>
            <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100"/></div>
            </div>
            </form>
        <h1>{weatherData.city}</h1>
        <ul><li><FormattedDate date={weatherData.date} /></li>
        <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
                <img src={weatherData.iconUrl} alt={weatherData.description} className="float-left"/>
                <div className="float-left"><span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">ºC</span></div>
             </div>
             </div>
    
    
             <div className="col-6"><ul>
             <li>Humidity: {weatherData.humidity}%</li>
             <li>Wind: {weatherData.wind} km/h</li></ul></div>
        </div>
    
        </div>
} else {const key = "bb44bab20a1to1942fe0345a55b0085e";
  
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.defaultQuery}&key=${key}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
return "Loading..."}
}

    
    