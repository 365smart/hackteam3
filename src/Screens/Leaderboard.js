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

class Leaderboard extends React.Component {
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
        <Header><span role='img' alt="trophy">🏆</span> Leaderboard</Header>
        <LeaderRow place="1st" name="Aung" points="10,000"/>
        <LeaderRow place="2nd" name="Chris" points="9,000"/>
        <LeaderRow place="3rd" name="EJ" points="8,000"/>
        <LeaderRow place="4th" name="Ron" points="7,000"/>
        <br/>
        <LinkButton to="/">Back</LinkButton>
      </Container>
    );
  }
}

export default Leaderboard
