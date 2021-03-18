import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Beers from './Beers';
import RandomBeers from './RandomBeers';
import NewBeer from './NewBeer';
function Home() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/beers" component={Beers} exact />
          <Route path="/random-beer" component={RandomBeers} />
          <Route path="/new-beer" component={NewBeer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default Home;
