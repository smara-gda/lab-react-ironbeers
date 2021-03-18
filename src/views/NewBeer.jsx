import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Beers extends Component {
  render() {
    return (
      <div>
        <h1>New Beer</h1>
        <Link to={'/new-beer'}>New beer</Link>
      </div>
    );
  }
}
export default Beers;
