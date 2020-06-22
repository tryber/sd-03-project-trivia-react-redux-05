import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Teladeinicio from './pages/TeladeInicio';
import TeladoJogo from './pages/TeladoJogo';
import Config from './pages/Config'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Teladeinicio} />
          <Route exact path="/TeladoJogo" component={TeladoJogo} />
          <Route exact path="/Settings" component={Config} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
