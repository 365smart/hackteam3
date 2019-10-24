import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container, Header, Logo, Input, Label, Button } from './styles';

class LobbyPage extends React.Component {
  render() {
    return (
      <Container>
        <Header>Lobby Page</Header>
        <Logo src="whitelogo.png"/>
        <Label>Enter your name</Label>
        <Input/>
        <Button>Next</Button>
        <Link to="/quiz">Quiz Page</Link>
      </Container>
    );
  }
}

export default LobbyPage
