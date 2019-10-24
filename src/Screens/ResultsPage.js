import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LeaderRow from './LeaderRow';

import {
  Container,
  Header,
  Logo,
  Input,
  Label,
  LinkButton,
  Countdown
} from './styles';

class LobbyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  componentDidMount() {

  }



  handleDoneClick() {

  }

  render() {
    const { name, done, countdownSec } = this.state;
    return (
      <Container>
        <Header>You did it! <span role='img' alt="up">👍</span></Header>
        <Countdown>1st</Countdown>
        <Header>10,000 points</Header>
        <Header>Leaderboard</Header>
        <LeaderRow place="1st" name="Aung" points="10,000"/>
        <LeaderRow place="2nd" name="Ron" points="9,000"/>
        <LeaderRow place="3rd" name="EJ" points="8,000"/>
        <LeaderRow place="4th" name="Chris" points="7,000"/>
        <br/>
        <LinkButton to="/">Done</LinkButton>
      </Container>
    );
  }
}

export default LobbyPage
