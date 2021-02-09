
import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import "./components/card.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      capital: "",
      population: "",
      region: "",
      flag: "",
    };
  }

  componentDidMount() {
    this.getCountry("france");
  }

  getCountry(country) {
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
      .then((res) => res.json())
      .then((response) => {
        this.setState({
          name:response[0].name,
          capital: response[0].capital,
          population: response[0].population,
          region: response[0].region,
          flag: response[0].flag,
        });
      });
  }

  render() {
    return (
      <div className="container d-flex justify-content-center mt-5">
        <div className="row">
          <div className="col-12">
          <h1>Country Selector</h1>

            <Button
               onClick={() => {
               this.getCountry("france") }}> 
                France
            </Button>

            <Button
               onClick={() => {
              this.getCountry("croatia") }} >
                Croatia
            </Button>

            <Button
             onClick={() => {
              this.getCountry("brazil")}} >
                Brazil
            </Button>
            
            <Card 
              flag={this.state.flag}
              name={this.state.name}
              capital={this.state.capital}
              region={this.state.region}
              population={this.state.population}
            />

                   {/* <Card {...this.state}/> */}

          </div>  

        </div>   
      </div>
    );
  }
}

export default App;