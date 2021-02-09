
// import React from "react";
// // import Button from "./components/Button";
// import Card from "./components/Card";
// import "./components/card.css";
// import "./App.css";

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       searchName: "",
//       countries: []
//     };

//     this.onCountryChange = this.onCountryChange.bind(this);
//   }

//   componentDidMount() {
//     this.getCountry("france");
//   }

//   getCountry(country) {
//     fetch(`https://restcountries.eu/rest/v2/name/${country}`)
//       .then((res) => res.json())
//       .then((laReponseDeCountriesAPI) => {
//         this.setState({
//           countries: laReponseDeCountriesAPI
//         });
//       });
//   }

//   onCountryChange(event) {
//     this.setState({
//       searchName: event.target.value
//     })
//   }

//   render() {
//     return (
//       <div className="container d-flex justify-content-center mt-5">
//         <div className="row">
//           <div className="col-12">
//             <h1>Country selector</h1>
//             <div><span>Country</span></div>
//             <input value={this.state.searchName} onChange={this.onCountryChange}></input>
//             <button className= "btn btn-primary" onClick={() => {this.getCountry(this.state.searchName)}}>Search</button>
//             {this.state.countries.map((country) => {
//              return <Card {...country} />})}
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default App;
