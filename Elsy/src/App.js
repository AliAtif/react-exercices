
import React from "react";
import Box from "./components/Box";
import "./styles/global.css"
import './App.css'; 

const tempMin = -20; 
const tempMax = 40; 
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000

export class App extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      water : 0,
      heart : 120,
      temperature: -10,
      steps: 3000
    };
  };

  
  onCalculateWater() {
    let water = this.state.water;
    if (this.state.temperature > 20) {
      const nbSup20 = this.state.temperature - 20
      const nbLiterToAdd = 0.02 * nbSup20;
      water = water + nbLiterToAdd;
    }

    if (this.state.heart > 120) {
      const nbHeartBeatSup = this.state.heart - 120;
      const nbLiterToAdd = 0.0008 * nbHeartBeatSup
      water = water + nbLiterToAdd
      // console.log('waterHeart', water)
    }

    if (this.state.steps > 10000) {
      const nbHeartBeatSup = this.state.steps - 10000;
      const nbLiterToAdd = 0.00002 * nbHeartBeatSup
      water = water + nbLiterToAdd
    }
    this.setState({
      water
    })
  }

  onHeartChange = (value) =>{
    // console.log(value.target.value);
    this.setState({
      heart : value.target.value,
    });
    this.onCalculateWater()
   
  };

  onStepsChange= value =>{
    // console.log(value.target.value)
    this.setState({ 
      steps:value.target.value
    });
    this.onCalculateWater()
  };

  onTemperatureChange = (value) =>{
    // console.log(value.target.value);
    this.setState({
      temperature : value.target.value,
    });
    this.onCalculateWater()
   
  };

  render() {

    return (
      <div className="container-fluid" >
        <div className="row">

          <p> heart:{heartMin}</p>
          <p> Temperature :{tempMin}</p>
          <p> Steps:{stepsMin}</p>

        < Box icon ={"local_drink"} color={"#3A85FF"} value={this.state.water} unit={"L"}  />
        < Box icon ={"directions_walk"} color= "#000000" value = {this.state.steps} unit = {"steps"} min={stepsMin} max={stepsMax} onChange = {this. onStepsChange} />
        < Box icon = {"favorite"} color = {"#ff0000"}value= {this.state.heart} unit ={"bpm"} min={heartMin} max= {heartMax} onChange = {this.onHeartChange} />
        < Box icon = {"wb_sunny"} color = {"#ffff00"} value = {this.state.temperature} unit ={"°C"} min={tempMin} max= {tempMax} onChange = {this.onTemperatureChange} />

        </div>
       
      </div>
    );

  }
};

export default App;