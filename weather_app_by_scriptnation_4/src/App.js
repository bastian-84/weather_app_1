import React from 'react';
import './App.css';


class App extends React.Component {

  // saving pos (componentDidMount fn) in state
  state = {
    coords: {
      latitude: 0,
      longitude: 0
    }
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
      })
    }else{
      console.log(`html5 geolocation is not supported`);
    }
  }

  render(){
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
