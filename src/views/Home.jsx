import React from 'react';
import { Link } from 'react-router-dom';

import newBeerimg from './../assets/new-beer.png';
import randomBeerImage from './../assets/random-beer.png';
import beersimg from './../assets/beers.png';
function Home() {
  return (
    <div>
      <nav>
        <img src={beersimg} alt="" />
        <br />
        <Link to="/beers"> Beers</Link>
        <img src={randomBeerImage} alt="" />
        <br />
        <Link to="/random-beer"> Random Beer</Link>
        <img src={newBeerimg} alt="" />
        <br />
        <Link to="/new-beer"> New Beer</Link>
      </nav>
    </div>
  );
}
export default Home;
