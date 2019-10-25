import React from 'react';
import LeaderRow from './LeaderRow';

import {
  Container,
  Header,
  LinkButton,
  Countdown,
  SmallCard
} from './styles';

function getRandomPoints() {
  let max = 1000;
  let min = 100;
  return Math.floor((Math.random() * (max - min) + min)) * 10;
}

const RANK = ['0th', '1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'];
function toPos(n) {
  if (n <= 10) 
    return RANK[n];
  return `${n}th`;
}

function toPoints(p) {
  return p.toLocaleString();
}

function ResultsPage(props) {
  let playerName = sessionStorage.getItem('player_name') || 'JK';
  let playerScore = parseInt(sessionStorage.getItem('player_score')) || 0;
  let results = [
    { name: playerName, points: playerScore },
    { name: 'Aung', points: getRandomPoints() },
    { name: 'Chris', points: getRandomPoints() },
    { name: 'EJ', points: getRandomPoints() },
    { name: 'Ron', points: getRandomPoints() },
  ];

  results = results.sort((a, b) => b.points - a.points);

  let pos = 0;
  let p = results.find((r, i) => {
    if (r.name === playerName) {
      pos = i + 1;
      return true;
    }
    return false;
  });

  return (
    <Container>
      <Header>You did it! <span role='img' aria-label="up">👍</span></Header>
      <Countdown>{toPos(pos)}</Countdown>
      <Header>{toPoints(p.points)} points</Header>
      <SmallCard>
        <Header dark>Leaderboard <span role='img' aria-label="trophy">🏆</span></Header>
        {results.map((r, i) => {
          return <LeaderRow place={i + 1} name={r.name} points={toPoints(r.points)} />
        })}
        <br />
      </SmallCard>
      <LinkButton to="/">Done</LinkButton>
    </Container>
  );
}

export default ResultsPage
