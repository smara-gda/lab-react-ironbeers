import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Beers extends Component {
  render() {
    return (
      <div>
        <h1>Random Beer</h1>
        <Link to={'/random-beer'}>Random Beer</Link>
      </div>
    );
  }
}
export default Beers;
