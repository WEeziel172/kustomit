import React, { Component } from 'react';
import './App.css';
import Navbar from '../src/components/navbar/navbar.js';
import Li from '../src/components/listItem/listItem.js';
import Search from '../src/components/search/search.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <div className="logo-div">
            <img src={require('./logo.png')} width="500px" height="500px" />   
          </div>
          <h1 className="logo-heading">Of Superior Design</h1> 
          <div className="navbar">
            <Navbar>

              <Li name="Pants" />
              <Li name="Shirts" />
              <Li name="Shoes" />
              <Li name="Accessories" />
              <Li name="Jackets" />
            </Navbar>
          </div>
        </div>
        <div className="body">
        <h1 className="body-heading">Greatness is not born with. It's made.</h1>
        </div>
        <div className="footer">
        </div>
      </div>
    );
  }
}

export default App;
