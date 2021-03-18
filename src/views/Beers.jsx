import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Beers extends Component {
  render() {
    return (
      <div>
        <h1>All Beers</h1>
        <Link to={'/beers'}>All Beers</Link>
      </div>
    );
  }
}
export default Beers;
