import React from "react";
import "./Weather1.css";

export default function Weather() {return <div className="weather1">
    <form>
        <div className="row">
        <div className="col-9">
        <input type="search" placeholder="Enter a location" autoFocus="on" className="form"/>
        </div>
        <div className="col-3"><input type="submit" value="Search" className="btn btn-primary w-100"/></div>
        </div>
        </form>
    <h1>New York</h1>
    <ul><li>Wednesday 07:00</li>
    <li>Mostly Cloudy</li>
    </ul>
    <div className="row mt-3">
        <div className="col-6">
            <div className="clearfix">
            <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" className="float-left"></img>
            <div className="float-left"><span className="temperature">6</span><span className="unit">ºC</span></div>
         </div>
         </div>


         <div className="col-6"><ul><li>Precipitation: 15%</li>
         <li>Humidity: 72%</li>
         <li>Wind: 13 km/h</li></ul></div>
    </div>

    </div>}