import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {

 function maxTemperature() {
 let temperature = Math.round(props.data.temperature.maximum);
return `${temperature}º`;
}

function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
   return `${temperature}º`;
   }

function day() {
 let date = new Date(props.data.time * 1000);
 let day = date.getDay();
 let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
 return days[day];
}
    
return (
<div>
<div className="WeatherForecast-Day">{day()}</div>
<WeatherIcon code={props.data.condition.icon} size={36} />
<div className="WeatherForecast-Temperatures">
<span className="WeatherForecast-Temperature-Max">{maxTemperature()}</span>
<span className="WeatherForecast-Temperature-Min">{minTemperature()}</span>
</div>
</div>
 );
}


