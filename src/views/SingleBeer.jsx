import React, { Component } from 'react';
import { ironBeer } from './../services/ironBeers-api';
import NavBar from '../NavBar';
export default class SingleBeer extends Component {
  state = {
    beer: [],
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
    const id = this.props.match.params.id;
    const beer = await ironBeer(id);
    this.setState({
      beer,
    });
  }
  render() {
    const beer = this.state.beer;
    return (
      <div>
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
