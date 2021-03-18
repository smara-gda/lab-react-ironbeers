import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Beers from './views/Beers';
import RandomBeers from './views/RandomBeers';
import NewBeer from './views/NewBeer';
import Home from './views/Home';
import SingleBeer from './views/SingleBeer';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/beers" component={Beers} exact />
        <Route path="/random-beer" component={RandomBeers} exact />
        <Route path="/new-beer" component={NewBeer} exact />
        <Route path="/beer/:id" component={SingleBeer} exact />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
