import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import randomBeerImage from './../assets/random-beer.png';
class Beers extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Link to={'/random-beer'}>
          <h1>Random Beer</h1>
        </Link>
        <img src={randomBeerImage} alt="" />
      </div>
    );
  }
}
export default Beers;
