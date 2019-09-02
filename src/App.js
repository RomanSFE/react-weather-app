import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './components/Weather';
import Form from './components/Forms'


const API_key = "4bb02fe7d1c8957964dabf1863cd57bd";

class App extends React.Component{
 
  constructor() {
    super();
    this.state = {
      city: '',
      country: '',
      main: '',
      icon: '',
      temp_celsius: '',
      temp_max: '',
      temp_min: '',
      description: ''
    }
    // this.getWeather()
  }
  calCelsius(temp){
    let cell = Math.floor(temp - 273.15)
    return cell
  }
  getWeather = async(e) =>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if(city && country){
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
    const response = await api_call.json();
    console.log(response);

    this.setState({
      city: response.name,
      country: response.sys.country,
      temp_celsius: this.calCelsius(response.main.temp),
      temp_max: this.calCelsius(response.main.temp_max),
      temp_min: this.calCelsius(response.main.temp_min),
      description: response.weather[0].description
    })
    } else {
      console.log('type city and country');
    }
  }
  render(){
    return (
      <div className="App">
         <h1 className="he-text py-5">Weather App using Weather API</h1>
        <Form loadweather={this.getWeather}/>
        <Weather 
          city={this.state.city} 
          country={this.state.country}
          temp_celsius={this.state.temp_celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min}
          description={this.state.description}
        />
      </div>
    );
  }
}

export default App;
