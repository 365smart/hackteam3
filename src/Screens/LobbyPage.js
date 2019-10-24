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
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      done: false,
    };
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleNextClick() {
    const { name } = this.state;
    //console.log('next clicked ' + name);
    if (name) {
      this.setState({ done: true });
    }
  }

  render() {
    const { name, done } = this.state;
    return (
      <Container>
        <Header>Welcome!</Header>
        <Logo src="whitelogo.png"/>
        {!done ?
          <div>
            <Label>Enter your name</Label>
            <Input onChange={this.handleNameChange} />
            <Button onClick={this.handleNextClick}>Next</Button>
          </div>
          :
          <div>
            <Label>Starting in</Label>
            <Countdown>10:00</Countdown>
          </div>
        }
        <Link to="/quiz">Quiz Page</Link>
      </Container>
    );
  }
}

export default LobbyPage
