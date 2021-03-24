import React from 'react'


export default function DisplayWeather(props) {
    /* console.log(props.weatherData); */
    const {
        sLocation, sTemperature, sDescription, sRegion, sCountry, sWind_speed, sPressure, sPrecip, sHumidity, sImg
    } = props.weatherData;

    return (
        <div className="user-weather">
            <div className="row">
                <div className="col-md-3 weather-temp">
                    <h1>{sTemperature}<sup>o</sup>C , {sDescription}</h1>
                    <h4>{sLocation}</h4>
                    <p>{sRegion} , {sCountry}</p>
                </div>

                <div className="col-md-9">
                    <img className="mainImg" src={sImg} alt="weather-img" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-3 weather-info">
                    <p><b>Wind Speed</b>(km/hr)</p>
                    <h2>{sWind_speed}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Preassure</b>(millibar)</p>
                    <h2>{sPressure}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Precipitation</b>(mm)</p>
                    <h2>{sPrecip}</h2>
                </div>

                <div className="col-md-3 weather-info">
                    <p><b>Humidity</b>(%)</p>
                    <h2>{sHumidity}</h2>
                </div>

            </div>
        </div>
    )
}

