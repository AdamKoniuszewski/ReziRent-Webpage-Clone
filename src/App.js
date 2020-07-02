import React from 'react';
import './App.scss';
import {Component} from 'react';  

//* Components */
import LandingContainer from './Components/LandingContainer/LandingContainer-comp';
import SomeInfo from "./Components/SomeInfo/SomeInfo-comp";
import InfoNoBg from "./Components/InfoNoBG/InfoNoBg-comp";
import Footer from "./Components/Footer/Footer-comp";

//* app *// 
class App extends Component {

  constructor() {
    super();
    this.state = {
      text: "ello",

    };
  }

  render() {
    return (
      <div className="App">
        <LandingContainer />
        <SomeInfo />
        <InfoNoBg />
        <Footer />
      </div>
      
    );
  }
  
  
}

export default App;
