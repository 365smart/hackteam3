import React from 'react';
import {
  HashRouter as Router,
  Switch,
  useRouteMatch,
  Route,
} from "react-router-dom";

import { LobbyPage, QuizPage, ResultsPage, Leaderboard } from './Screens';
import styled from 'styled-components';

const Global = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  overflow-y: auto;
  background: -moz-linear-gradient(-45deg, #2555d9 0%, #00bf6f 100%);
  background: -webkit-linear-gradient(-45deg, #2555d9 0%,#00bf6f 100%);
  background: linear-gradient(135deg, #2555d9 0%,#00bf6f;
  display: flex;
  color: white;
  * {
    font-family: 'Montserrat', sans-serif!important;
    box-sizing: border-box!important;
  }
`;

function Lobby(props) {
  return <LobbyPage {...props} />;
}

function Quiz(props) {
  console.log('Quiz: props', props);
  let match = useRouteMatch();
  console.log('Quiz: match', match);
  return (
    <Switch>
        <Route path="/quiz/:id" children={<QuizPage {...props} />} />
    </Switch>
  )
}

function Results(props) {
  return <ResultsPage {...props} />
}

function Leaders(props) {
  return <Leaderboard {...props} />
}

function App(props) {
  console.log('App: props', props);
  return (
    <Global>
      <Router>
        <Switch>
          <Route exact path="/">
            <Lobby />
          </Route>
          <Route path="/quiz/:id">
            <Quiz {...props} />
          </Route>
          <Route path="/results">
            <Results />
          </Route>
          <Route path="/leaders">
            <Leaders />
          </Route>
        </Switch>
      </Router>
    </Global>
  );
}

export default App;
