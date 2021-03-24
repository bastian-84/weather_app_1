import React from 'react';
import './App.css';
import DisplayWeather from  './components/DisplayWeather.js';
import Navbar from './components/Navbar.js';
// import axios
import Axios from 'axios';


class App extends React.Component {

  // saving pos (componentDidMount fn) in state
  state = {
    coords: {
      latitude: 0,
      longitude: 0
    },
    data: {

    },
    inputData: ''
  }

  componentDidMount(){
    console.log(`Mounted`);
    // get device location via html5 core fn/API
    if(navigator.geolocation){
      console.log(`html5 geolocation is supported`);
      navigator.geolocation.getCurrentPosition( (paramPos) => {
        //console.log(paramPos.coords.longitude);
        let newCoords = {
          latitude: paramPos.coords.latitude,
          longitude: paramPos.coords.longitude
        }
        console.log(newCoords);

        // state wird umgeschrieben
        this.setState({coords: newCoords});

        // API call, axios
        // API key "Test vorab aus 06.1"
        // Axios.get(`http://api.weatherstack.com/current?access_key=02ba8c2b874b2834032f8e2e734ad677&query=berlin`);
        // Axios Abfrage, API, eigener API key, long lat von state
        Axios.get(`http://api.weatherstack.com/current?access_key=02ba8c2b874b2834032f8e2e734ad677&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(paramRes => {
          console.log(paramRes);

          let weatherData = {
            sLocation: paramRes.data.location.name,
            sTemperature: paramRes.data.current.temperature, 
            sDescription: paramRes.data.current.weather_descriptions[0],
            sRegion: paramRes.data.location.region, 
            sCountry: paramRes.data.location.country,
            sWind_speed: paramRes.data.current.wind_speed,
            sPressure: paramRes.data.current.pressure,
            sPrecip: paramRes.data.current.precip,
            sHumidity: paramRes.data.current.humidity, 
            sImg: paramRes.data.current.weather_icons
          }
          this.setState({ data: weatherData });
        });
      })
    }else{
      console.log(`html5 geolocation is not supported`);
    }
  }

  // track the input field
  change = (paramValue) => {
    /* console.log(paramValue); */
    this.setState({inputData:paramValue})
  }

  changeWeather = (paramEvent) => {
    // disabling form auto refresh by pressing submit (pressing ENTER or click submit button)
    paramEvent.preventDefault();

    // call API call by place name, axios
    //Axios.get(`http://api.weatherstack.com/current?access_key=02ba8c2b874b2834032f8e2e734ad677&query=berlin`)
    Axios.get(`http://api.weatherstack.com/current?access_key=02ba8c2b874b2834032f8e2e734ad677&query=${this.state.inputData}`).then(paramRes2 => {
      /* console.log(paramRes2) */
      // Updaten der Ausgabe
      let weatherData = {
        sLocation: paramRes2.data.location.name,
        sTemperature: paramRes2.data.current.temperature, 
        sDescription: paramRes2.data.current.weather_descriptions[0],
        sRegion: paramRes2.data.location.region, 
        sCountry: paramRes2.data.location.country,
        sWind_speed: paramRes2.data.current.wind_speed,
        sPressure: paramRes2.data.current.pressure,
        sPrecip: paramRes2.data.current.precip,
        sHumidity: paramRes2.data.current.humidity, 
        sImg: paramRes2.data.current.weather_icons
      }
      this.setState({ data: weatherData });
    })

  }

  render(){
    return (
      <div className="App">
        <div className='container'>
          <Navbar 
            changeWeather = {
              this.changeWeather
            }
            changeRegion = {
              this.change
            } 
          />
          <DisplayWeather weatherData= { this.state.data } />
        </div>
        
      </div>
    );
  }
}

export default App;
