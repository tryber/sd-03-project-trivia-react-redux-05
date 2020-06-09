import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GamePage from './pages/GamePage';
import Teladeinicio from './pages/TeladeInicio';
import TeladoJogo from './pages/TeladoJogo';

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       SUA VEZ
//     </p>
//   </header>
// </div>

export default function App() {
  return (
    <div className="App">
      <GamePage />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Teladeinicio} />
          <Route exact path="/TeladoJogo" component={TeladoJogo} />
        </Switch>
      </BrowserRouter>
    </div>

  );
}
