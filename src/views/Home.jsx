import React from 'react';
import { Link } from 'react-router-dom';
import { randomBeer } from './../services/ironBeers-api';
import newBeerimg from './../assets/new-beer.png';
import randomBeerImage from './../assets/random-beer.png';
import beersimg from './../assets/beers.png';

class Home extends React.Component {
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
      <div>
        <nav>
          <img src={beersimg} alt="" />
          <br />
          <Link to="/beers"> Beers</Link>
          <img src={randomBeerImage} alt="" />
          <br />
          <Link to={`/random-beer/${beer._id}`}> Random Beer</Link>
          <img src={newBeerimg} alt="" />
          <br />
          <Link to="/new-beer"> New Beer</Link>
        </nav>
      </div>
    );
  }
}

export default Home;
