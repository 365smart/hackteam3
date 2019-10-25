import React from 'react';
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
  background: ${props => props.wrong ? '#D13F4B' : props.right ? '#00BF6F' : '#EAEAEB'}
  color: ${props => props.wrong ? '#FFF' : props.right ? '#FFF' : '#22212D'}
  opacity: ${props => props.pick ? '.5' : '1'}
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
      timer: 5,
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
      this.setState({ timer });
      if (timer) {
        this.countdown();
      } else {

      }
    }, 1000)
  }

  handleAnswerClick(id) {
    console.log(`answer ${id} click`)
    const { answerId } = this.props;
    if (id === answerId) {
      console.log('correct answer');
    } else {
      console.log('wrong answer');
    }
    this.setState({ myAnswer: id });
  }

  render() {
    const {
      users,
      points,
      data,
    } = this.props;

    const { answers, question, answerId } = data;
    const { timer, myAnswer } = this.state;

    return (
      <QuestionCard>
        <TopSection>
          <div>{users} users</div>
          <div>{points} points</div>
        </TopSection>

        {timer === 0 && myAnswer === answerId && <Timer><ion-icon name="rocket"></ion-icon></Timer>}
        {timer === 0 && myAnswer !== answerId && <Timer><ion-icon name="rocket"></ion-icon></Timer>}
        {timer > 0 && <Timer>{timer}</Timer>}
        <Question>{question}</Question>
        {answers.map((answer) => {
          const id = answer.id;
          const wrong = timer === 0 && myAnswer === id && myAnswer !== answerId;
          const right = timer === 0 && id === answerId;
          const pick = timer !== 0 && id === myAnswer;
          return <Answer
            disabled={myAnswer != null} pick={pick} wrong={wrong} right={right}
            onClick={this.handleAnswerClick.bind(this, id)}>{answer.answer}</Answer>
        })}
      </QuestionCard>
    );
  }
}

export default Card
