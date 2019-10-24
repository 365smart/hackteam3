import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { LobbyPage, QuizPage, ResultsPage, Leaderboard } from './Screens';
import styled from 'styled-components';

const Global = styled.div`
  height: 100vh;
  width: 100vw;
  background: -moz-linear-gradient(-45deg, #2555d9 0%, #00bf6f 100%);
  background: -webkit-linear-gradient(-45deg, #2555d9 0%,#00bf6f 100%);
  background: linear-gradient(135deg, #2555d9 0%,#00bf6f;
  display: flex;
  color: white;
  * {
    font-family: 'Montserrat', sans-serif!important;
    box-sizing: border-box;
  }
`;

function Lobby() {
  return <LobbyPage/>;
}

function Quiz() {
  return <QuizPage/>
}

function Results() {
  return <ResultsPage/>
}

function Leaders() {
  return <Leaderboard/>
}

function App() {
  return (
    <Global>
      <Router>
        <Switch>
          <Route exact path="/">
            <Lobby />
          </Route>
          <Switch>
            <Route path="/quiz/:id" children={<Quiz />} />
          </Switch>>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/leaderboard">
            <Leaders />
          </Route>
        </Switch>
      </Router>
    </Global>
  );
}

export default App;
