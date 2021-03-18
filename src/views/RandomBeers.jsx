import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';

import { randomBeer } from './../services/ironBeers-api';
class RandomBeer extends Component {
  state = {
    beer: {},
  };

  componentDidMount() {
    this.loadIronBeer();
  }

  componentDidUpdate(previousProps) {
    if (previousProps.match.params.id !== this.props.match.params.id) {
      this.loadIronBeer();
    }
  }

  async loadIronBeer() {
    const beer = await randomBeer();
    this.setState({
      beer,
    });
  }
  render() {
    const beer = this.state.beer;
    return (
      <div key={this.state.beer._id}>
        <NavBar />
        <img src={beer.image_url} alt="" style={{ width: '4em' }} />
        <h4>{beer.name}</h4>
        <span>{beer.tagline}</span>
        <small>{beer.first_brewed}</small>
        <aside>{beer.attenuation_level}</aside>
        <p>{beer.description}</p>
        <span>Created by: {beer.contributed_by}</span>
      </div>
    );
  }
}
export default RandomBeer;
