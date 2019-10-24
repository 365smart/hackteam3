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

function toMMSS(seconds) {
  let mm = parseInt(seconds / 60);
  if (mm < 10) {
    mm = '0' + mm
  }
  const ss = seconds % 60;
  return `${mm}:${ss}`
}

class LobbyPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      done: false,
      countdownSec: 10 * 60,
    };
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  componentDidMount() {
    this.countdown();
  }

  countdown() {
    let { countdownSec } = this.state;
    setTimeout(() => {
      countdownSec = countdownSec - 1;
      this.setState({ countdownSec });
      if (countdownSec) {
        this.countdown();
      }
    }, 1000);
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
    const { name, done, countdownSec } = this.state;
    const countdown = toMMSS(countdownSec);
    return (
      <Container>
        <Header>Welcome!</Header>
        <Logo src="whitelogo.png" />
        {!done ?
          <React.Fragment>
            <Label>Enter your name</Label>
            <Input onChange={this.handleNameChange} />
            <Button onClick={this.handleNextClick}>Next</Button>
          </React.Fragment>
          :
          <React.Fragment>
            <Label>Starting in</Label>
            <Countdown>{countdown}</Countdown>
          </React.Fragment>
        }
        <Link to="/quiz">Quiz Page</Link>
      </Container>
    );
  }
}

export default LobbyPage
