import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';

import beersimg from './../assets/beers.png';
class Beers extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <img src={beersimg} alt="" />
        <Link to={'/beers'}>
          <h1>All Beers</h1>
        </Link>
      </div>
    );
  }
}
export default Beers;
