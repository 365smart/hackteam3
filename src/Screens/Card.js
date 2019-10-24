import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  QuestionCard
} from './styles';

const TopSection = styled.div`
  height: 32px;
  line-height: 32px;
  color: #999;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Timer = styled.div`
  background: #22212D;
  height: 64px;
  width: 64px;
  color: white;
  font-size: 24px;
  border-radius: 45px;
  text-align: center;
  line-height: 64px;
  margin-bottom: 8px;
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
  background: ${props => props.wrong ? '#D13F4B' : '#EAEAEB'}
  color: ${props => props.wrong ? '#FFF' : '#22212D'}
  opacity: ${props => props.fade ? '.5' : '1'}
  height: 48px;
  line-height: 48px;
  padding: 0px 16px;
  margin: 8px;
  outline: none;
  border: none;
  font-size: 18px;
  text-align: left;
  &:focus {
    background: #22212D;
    color: white;
  }
`;

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 30,
      myAnswer: null,
    }
    this.handleAnswerClick = this.handleAnswerClick.bind(this);
  }

  componentDidMount() {
    this.countdown();
  }

  countdown() {
    let { timer } = this.state;
    setTimeout(() => {
      timer = timer - 1;
      this.setState({timer});
      if (timer) {
        this.countdown();
      } else {

      }
    }, 1000)
  }

  handleAnswerClick(value) {
    console.log(`answer ${value} click`)
    const { correctAnswer } = this.props;
    if (value === correctAnswer) {
      console.log('correct answer');
    } else {
      console.log('wrong answer');
    }
    this.setState({myAnswer: value});
  }

  render() {
    const {
      users,
      points,
      quiz,
    } = this.props;

    const { answers, question, correctAnswer } = quiz;
    const { timer, myAnswer } = this.state;

    return (
      <QuestionCard>
        <TopSection>
          <div>{users} users</div>
          <div>{points} points</div>
        </TopSection>
        <Timer>{timer}</Timer>
        <Question>{question}</Question>
        {answers.map((answer, i) => {
            const fade = myAnswer === i && myAnswer === correctAnswer;
            const wrong = myAnswer === i && myAnswer !== correctAnswer;
            return <Answer disabled={myAnswer != null} fade={fade} wrong={wrong} onClick={this.handleAnswerClick.bind(this, i)}>{answer}</Answer>
        })}
      </QuestionCard>
    );
  }
}

export default Card
