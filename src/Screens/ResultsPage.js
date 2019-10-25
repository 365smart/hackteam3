import React from 'react';
import LeaderRow from './LeaderRow';

import {
  Container,
  Header,
  LinkButton,
  Countdown,
  SmallCard
} from './styles';

class ResultsPage extends React.Component {
  render() {
    return (
      <Container>
        <Header>You did it! <span role='img' aria-label="up">👍</span></Header>
        <Countdown>1st</Countdown>
        <Header>10,000 points</Header>
        <SmallCard>
          <Header dark>Leaderboard <span role='img' aria-label="trophy">🏆</span></Header>
          <LeaderRow place="1st" name="Aung" points="10,000"/>
          <LeaderRow place="2nd" name="Chris" points="9,000"/>
          <LeaderRow place="3rd" name="EJ" points="8,000"/>
          <LeaderRow place="4th" name="Ron" points="7,000"/>
          <br/>
        </SmallCard>
        <LinkButton to="/">Done</LinkButton>
      </Container>
    );
  }
}

export default ResultsPage
