import React from 'react';
import LeaderRow from './LeaderRow';

import {
  Container,
  Header,
  LinkButton,
  SmallCard
} from './styles';

class Leaderboard extends React.Component {
  render() {
    return (
      <Container>
        <SmallCard>
          <Header dark>Leaderboard <span role='img' aria-label="trophy">🏆</span></Header>
          <LeaderRow place="1st" name="Aung" points="10,000"/>
          <LeaderRow place="2nd" name="Chris" points="9,000"/>
          <LeaderRow place="3rd" name="EJ" points="8,000"/>
          <LeaderRow place="4th" name="Ron" points="7,000"/>
          <br/>
        </SmallCard>
        <LinkButton to="/">Back</LinkButton>

      </Container>
    );
  }
}

export default Leaderboard
