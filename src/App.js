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
      anim1: null,
      

    }
  }

  

  componentDidMount() {
    
    setInterval(()=>
      {
        var animatedEl = document.getElementById('test');
        var viewPortOffset = animatedEl.getBoundingClientRect();
        var elDistance = window.innerHeight/2;
        var doAnim = null;
        viewPortOffset.top < elDistance? (doAnim=true):(doAnim=false);
        if(doAnim !== this.state.anim1) {this.setState({anim1:doAnim})}
    }
    ,
    2)
    
    
    
  }


  render() {
    return (
      <div className="App" >
        <LandingContainer />
        <SomeInfo />
        <InfoNoBg anim={this.state.anim1}/>
        <Footer />
      </div>
      
    );
  }
  
  
}

export default App;
