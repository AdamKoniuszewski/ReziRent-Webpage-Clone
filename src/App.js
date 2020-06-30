import React from 'react';
import './App.scss';
import {Component} from 'react';  

//* Components */
import LandingContainer from './Components/LandingContainer/LandingContainer-comp';
import SomeInfo from "./Components/SomeInfo/SomeInfo-comp";
import InfoNoBg from "./Components/InfoNoBG/InfoNoBg-comp";


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
      </div>
      
    );
  }
  
  
}

export default App;
