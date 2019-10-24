import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  Container,
  Header,
  Logo,
  Input,
  Label,
  Button,
  Countdown
} from './styles';

class LobbyPage extends React.Component {
  render() {
    return (
      <Container>
        <Header>Welcome!</Header>
        <Logo src="whitelogo.png"/>
        <Label>Enter your name</Label>
        <Input/>
        <Button>Next</Button>

        <Label>Starting in</Label>
        <Countdown>10:00</Countdown>


        <Link to="/quiz">Quiz Page</Link>
      </Container>
    );
  }
}

export default LobbyPage
