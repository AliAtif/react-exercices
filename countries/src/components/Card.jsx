import React from "react";
// import "./card.css"

class Card extends React.Component {
  render() {
    return (
      <div className="countryInfo">
        <img
          className="countryImage"
          src={this.props.flag}
          alt={`Drapeau de la ${this.props.name}`}
        />
        <div>
          <p>Name: {this.props.name}</p>
          <p>Capital: {this.props.capital}</p>
          <p>Population: {this.props.population}</p>
          <p>Region: {this.props.region}</p>
        </div>  
      </div>
    );
  }
}

export default Card;