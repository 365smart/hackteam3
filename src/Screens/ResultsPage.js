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
  let max = 2000;
  let min = 100;
  return Math.floor((Math.random() * (max - min) + min)) * 10 ;
}

function toPos(i) {
  return i;
}

function toPoints(p) {
  return p.toLocaleString();
}

function ResultsPage(props) {
  console.log('result', props);
  let results = [
    {name: 'Aung', points: getRandomPoints()},
    {name: 'Chris', points: getRandomPoints()},
    {name: 'EJ', points: getRandomPoints()},
    {name: 'Ron', points: getRandomPoints()},
  ];

  results = results.sort((a, b) => b.points - a.points);
  let firstPoints = toPoints(results[0].points);

  return (
    <Container>
      <Header>You did it! <span role='img' aria-label="up">👍</span></Header>
      <Countdown>1st</Countdown>
      <Header>{firstPoints} points</Header>
      <SmallCard>
        <Header dark>Leaderboard <span role='img' aria-label="trophy">🏆</span></Header>
        {results.map((r, i) => {
            return <LeaderRow place={toPos(i+1)} name={r.name} points={toPoints(r.points)} />
        })}
        <br />
      </SmallCard>
      <LinkButton to="/">Done</LinkButton>
    </Container>
  );
}

export default ResultsPage
