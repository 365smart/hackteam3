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
  background: #EAEAEB;
  color: #22212D;
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
  render() {
    const {
      users,
      points,
      question,
      answer1,
      answer2,
      answer3,
      answer4
    } = this.props;
    return (
      <QuestionCard>
        <TopSection>
          <div>{users} users</div>
          <div>{points} points</div>
        </TopSection>
        <Timer>30</Timer>
        <Question>What was the most purchased item in your office this month?</Question>
          <Answer>{answer1}</Answer>
          <Answer>{answer2}</Answer>
          <Answer>{answer3}</Answer>
          <Answer>{answer4}</Answer>
      </QuestionCard>
    );
  }
}

export default Card
