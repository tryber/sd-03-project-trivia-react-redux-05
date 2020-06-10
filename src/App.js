import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GamePage from './pages/GamePage';
import Teladeinicio from './pages/TeladeInicio';
import TeladoJogo from './pages/TeladoJogo';
import FeedBack from './pages/FeedBack';

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

      <BrowserRouter>
        <Switch>
          <Route exact path="/TeladoJogo" component={GamePage} />
          <Route path="/feedback" component={FeedBack} />
          <Route exact path="/" component={Teladeinicio} />
        </Switch>
      </BrowserRouter>
    </div>

  );
}
