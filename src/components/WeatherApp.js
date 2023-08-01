import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudSun, faMapMarkerAlt, faThermometerHalf, faCloud, faTint, faWind } from '@fortawesome/free-solid-svg-icons';

export const WeatherApp = () => {
    const [city,setCity]=useState("");
    const [result,setResult]=useState({})
    const changeHandler=e=>{
        setCity(e.target.value)
    }
    const submitHandler=e=>{
        e.preventDefault()
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=078b7516c1866e2ec8c9bd252d1970e8`)
        .then(response =>{
        setResult(response.data)
       
    })
    .catch((error) => {
        console.error("Error:", error);
      });
    setCity("")
    }
    return (
        <div class="all">
        <div class="get">
            <h1> Weather App</h1>
            <form onSubmit={submitHandler}>
                <input type="text" name="city" value={city} onChange={changeHandler} placeholder='Search'/>
                <input type="submit" value="Get Temperature"></input>
            </form>
            </div>
    <div class="weather-info">
  <div class="weather-item">
  <div class="icon">
    <FontAwesomeIcon icon={faMapMarkerAlt} size="3x"/>
    </div>
    <h3>Location</h3><h2>{result.name}</h2>
  </div>
  <div class="weather-item">
    <div class="icon" >
      <FontAwesomeIcon icon={faThermometerHalf} size="3x"/>
    </div>
    <h3>Temperature</h3><h2>{result.main ? result.main.temp.toFixed() + "°C" : null}</h2>
  </div>
  <div class="weather-item">
    <div class="icon">
      <FontAwesomeIcon icon={faTint} size="3x" />
    </div>
    <h3>Humidity</h3><h2>{result.main ? result.main.humidity.toFixed() + "%" : null}</h2>
  </div>
  <div class="weather-item">
    <div class="icon">
      <FontAwesomeIcon icon={faCloud} size="3x"/>
    </div>
    <h3>Weather</h3><h2>{result.weather ? result.weather[0].main : null}</h2>
  </div>
  <div class="weather-item">
    <div class="icon">
      <FontAwesomeIcon icon={faWind} size="3x" />
    </div>
    <h3>Wind speed</h3><h2>{result.wind ? result.wind.speed.toFixed() + "m/s" : null}</h2>
  </div>
</div>

</div>

    )
}
