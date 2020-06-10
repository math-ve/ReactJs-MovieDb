import React from 'react';
import './css/App.css';
import { Switch, Route } from 'react-router-dom';

import Header from './comps/Header';
import Home from './pages/Home';
import ResultsPage from './pages/ResultsPage';
import MoviePage from './pages/MoviePage';



const App = () => {

  return (
    <div className="app-main-container">
      <Header />
      <Switch>
        <Route exact path = '/' component={Home} />
        <Route path='/movies/:search' component={ResultsPage} />
        <Route path='/movie/:id' component={MoviePage} />
      </Switch>
      
      <ul className="page-transition">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>

  )

}

export default App;
