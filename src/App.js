import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import "./style.css";
import Home from './views/home';
import Hotel from './views/hotel';
import Hotels from './views/hotels';

const App = () => {
  return (
    <BrowserRouter>
      <Home />
      <Hotels />
      {/* <Switch>
        <Route exact path="/" component={Hotels} />
        <Route exact path="/hotel" component={Hotel} />
      </Switch> */}
    </BrowserRouter>
  )
}

export default App;