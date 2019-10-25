import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player'

import {
  Container,
  Header,
  Logo,
  Input,
  Label,
  Button,
  Countdown,
  RoundButton,
} from './styles';

function toMMSS(seconds) {
  let mm = parseInt(seconds / 60);
  if (mm < 10) {
    mm = '0' + mm
  }
  let ss = seconds % 60;
  if (ss < 10) {
    ss = '0' + ss
  }
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
      } else {
        console.log('todo: go to quizz page');
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
        {!done ?
          <Header>Welcome! <span role='img' aria-label="up">👋</span></Header>
          :
          <Header>Welcome back, {name}! <span role='img' aria-label="up">👋</span></Header>
        }
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
            <ReactPlayer style={{opacity: '0', userSelect: 'none'}} url='https://www.youtube.com/watch?v=Z6ih1aKeETk' playing />
          </React.Fragment>
        }
        <Link to="/quiz/1">Quiz Page</Link>
        <RoundButton to="/leaders"><span role="img" aria-label="trophy">🏆</span></RoundButton>
      </Container>
    );
  }
}

export default LobbyPage
