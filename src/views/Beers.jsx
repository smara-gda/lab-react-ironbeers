import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import { ironBeers } from './../services/ironBeers-api';

import beersimg from './../assets/beers.png';
class Beers extends Component {
  state = {
    list: [],
  };

  componentDidMount() {
    this.loadIronBeers();
  }

  async loadIronBeers() {
    const list = await ironBeers();
    this.setState({
      list,
    });
  }
  render() {
    return (
      <div>
        <NavBar />

        <ul>
          {this.state.list.map((beer) => (
            <li key={beer._id} style={{ listStyle: 'none' }}>
              <img src={beer.image_url} alt="" style={{ width: '4em' }} />
              <Link to={'/beers/:id'}>
                <h1>{beer.name}</h1>
              </Link>
              <h3>{beer.tagline}</h3>
              <h4>Created by: {beer.contributed_by}</h4>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Beers;
