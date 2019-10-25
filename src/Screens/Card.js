import React from 'react';
import styled from 'styled-components';
import {
  QuestionCard,
  Button,
} from './styles';

const TopSection = styled.div`
  height: 32px;
  line-height: 32px;
  color: #999;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 18px;
  padding: 0px 16px;
`;

const Timer = styled.div`
  background: ${props => props.wrong ? '#D13F4B' : props.right ? '#00BF6F' : '#22212D'}
  height: 64px;
  width: 64px;
  color: white;
  font-size: 32px;
  border-radius: 45px;
  text-align: center;
  line-height: 64px;
  margin: 8px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Question = styled.div`
  padding: 8px 24px;
  color: #22212D;
  font-size: 18px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 24px;
`;

const Answer = styled.button`
  width: calc(100% - 16px);
  border-radius: 45px;
  background: ${props => props.wrong ? '#D13F4B' : props.right ? '#00BF6F' : props.pick ? '#22212D' : '#EAEAEB' }
  color: ${props => props.wrong ? '#FFF' : props.right ? '#FFF' : props.pick ? '#FFF' : '#22212D'}
  height: 48px;
  line-height: 48px;
  padding: 0px 16px;
  margin: 8px;
  outline: none;
  border: none;
  font-size: 18px;
  text-align: left;
  transition-duration: 500ms;
  &:focus {
    background: #22212D;
    color: white;
  }
`;

// in seconds
const DEFAULT_TIMER = 10;
const WAIT_TIME = 5;

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: DEFAULT_TIMER,
      myAnswer: null,
      showNext: false,
    }
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  componentDidMount() {
    this.countdownTimer();
  }

  reset() {
    this.setState({
      showNext: false,
      myAnswer: null,
      timer: DEFAULT_TIMER,
    }, () => {
      this.countdownTimer();
    });
  }

  countdownTimer() {
    const { history, nextId } = this.props;
    let { timer } = this.state;
    setTimeout(() => {
      timer = timer - 1;
      this.setState({ timer });
      if (timer) {
        this.countdownTimer();
      } else {
        setTimeout(() => {
          history.push(`/quiz/${nextId}`);
          this.reset();
        }, WAIT_TIME * 1000);
      }
    }, 1000)
  }

  handleNextClick() {
    const { history, nextId } = this.props;
    history.push(`/quiz/${nextId}`);
    this.reset();
  }

  handleAnswerClick(id) {
    console.log('history', this.props.history)
    console.log(`answer ${id} click`)
    const { answerId } = this.props;
    if (id === answerId) {
      console.log('correct answer');
    } else {
      console.log('wrong answer');
    }
    this.setState({ myAnswer: id });
    // setTimeout(() => {
    //   this.setState({showNext: true})
    // }, WAIT_TIME * 1000);
  }

  render() {
    const {
      users,
      points,
      question,
      answers,
    } = this.props;

    const answerId = question.answerId;
    const { timer, myAnswer, showNext } = this.state;

    return (
      <QuestionCard>
        <TopSection>
          <div>{users} users</div>
          <div>{points} points</div>
        </TopSection>

        {timer === 0 && myAnswer === answerId && <Timer right><ion-icon name="checkmark"></ion-icon></Timer>}
        {timer === 0 && myAnswer !== answerId && <Timer wrong><ion-icon name="close"></ion-icon></Timer>}
        {timer > 0 && <Timer>{timer}</Timer>}
        <Question>{question.question}</Question>
        {answers.map((answer) => {
          const id = answer.id;
          const wrong = timer === 0 && myAnswer === id && myAnswer !== answerId;
          const right = timer === 0 && id === answerId;
          const pick = timer !== 0 && id === myAnswer;
          return <Answer key={answer.id}
            disabled={myAnswer != null} pick={pick} wrong={wrong} right={right}
            onClick={this.handleAnswerClick.bind(this, id)}>{answer.answer}</Answer>
        })}
        {showNext && <Button onClick={this.handleNextClick}>Next</Button>}
      </QuestionCard>
    );
  }
}

export default Card
