import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState (null);
function handleResponse(response) {
setForecast(response.data.daily);
setLoaded(true);
}


if (loaded) {
      return (
        <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function(dailyForecast, index){
                if (index < 5) {return (
                    <div className="col" key={index}>
          <WeatherForecastDay data={dailyForecast} />
           </div>   
                   )} 
                
            })}
        
        </div>
        </div>
        )
} else {
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    let key = "bb44bab20a1to1942fe0345a55b0085e";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${key}&units=metric`
    axios.get(apiUrl).then(handleResponse);
    return null;
}
}