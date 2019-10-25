import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';

import {
  Container,
  Header,
  Logo,
  Input,
  Label,
  Button,
  Countdown,
  RoundButton,
  LinkButton
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
      countdownSec: 4 * 60,
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
          <Header>Welcome back, <span style={{textTransform: 'capitalize'}}>{name}</span>! <span role='img' aria-label="up">👋</span></Header>
        }
        <Logo src="whitelogo.png" />
        {!done ?
          <React.Fragment>
            <Label htmlfor="name">Enter your name</Label>
            <Input id="name" onChange={this.handleNameChange} autoFocus="autofocus"/>
            <Button onClick={this.handleNextClick}>Next</Button>
          </React.Fragment>
          :
          <React.Fragment>
            <Label>Starting in</Label>
            <Countdown>{countdown}</Countdown>
            <LinkButton to="/quiz/1" style={{opacity: '0'}}>Start Now</LinkButton>
            <ReactPlayer volume={.1} style={{opacity: '0', pointerEvents: 'none'}} url='https://www.youtube.com/watch?v=w64hc_uHysA' playing />
        </React.Fragment>
        }
        <RoundButton to="/leaders"><span role="img" aria-label="trophy">🏆</span></RoundButton>
      </Container>
    );
  }
}

export default LobbyPage
