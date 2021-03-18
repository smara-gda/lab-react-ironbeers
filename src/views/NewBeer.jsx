import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import newBeerimg from './../assets/new-beer.png';
class Beers extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <img src={newBeerimg} alt="" />
        <Link to={'/new-beer'}>
          <h1>New Beer</h1>
        </Link>
      </div>
    );
  }
}
export default Beers;
