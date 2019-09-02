import React from 'react';

const Weather = (props)=>{
    return(
        <div className="container">
            <div className="cards py-3">
                <div className="weather-home py-3">
                    <h2 className="city-con py-2">{props.city}, {props.country}</h2>
                    <span className="mr-2"><i className="fas fa-cloud-sun-rain"></i></span>
                    <h1 className="main-temp py-2">{props.temp_celsius}&deg;</h1>

                    <h5><span className="min mx-2">Min Temp</span><span className="max mx-2">Max Temp</span></h5>
                    {minmaxTemperature(props.temp_min, props.temp_max)}
                    <h3 className="details text-capitalize py-3">{props.description}</h3>
                </div>
            </div>
        </div>
    )
}

function minmaxTemperature(min,max){
   if(min && max){
    return(
        <h3>
            <span className="px-3">{min}&deg;</span>
            <span className="px-3">{max}&deg;</span>
        </h3>
    )
   }
}

export default Weather;