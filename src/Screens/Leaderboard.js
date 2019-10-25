import React from 'react';
import LeaderRow from './LeaderRow';

import {
  Container,
  Header,
  LinkButton,
  SmallCard
} from './styles';

function getRandomPoints() {
  let max = 9000;
  let min = 100;
  return Math.floor((Math.random() * (max - min) + min)) * 10;
}

function toPoints(p) {
  return p.toLocaleString();
}

function Leaderboard(props) {
  let playerName = sessionStorage.getItem('player_name') || 'JK';
  let playerScore = parseInt(sessionStorage.getItem('player_score'));
  let results = [
    { name: playerName, points: playerScore },
    { name: 'Aung', points: getRandomPoints() },
    { name: 'Chris', points: getRandomPoints() },
    { name: 'EJ', points: getRandomPoints() },
    { name: 'Ron', points: getRandomPoints() },
  ];

  results = results.sort((a, b) => b.points - a.points);

  return (
    <Container>
      <SmallCard>
        <Header dark>Hack Team 3 Leaderboard <span role='img' aria-label="trophy">🏆</span></Header>
        {results.map((r, i) => {
            return <LeaderRow place={i+1} name={r.name} points={toPoints(r.points)} />
        })}
        <br />
      </SmallCard>
      <LinkButton to="/">Back</LinkButton>

    </Container>
  );
}

export default Leaderboard
