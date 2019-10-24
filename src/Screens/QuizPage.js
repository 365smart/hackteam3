import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

import {
  Container,
  Header,
} from './styles';


class QuizPage extends React.Component {
  render() {
    const users = 4;
    const points = "1,000";
    const quiz = {
      question: "What was the most purchased product this month?",
      answers: [
        "Coke",
        "Monster Energy",
        "Pepsi",
        "Snapple",
      ],
      correctAnswer: 0
    };

    return (
      <Container>
        <Header>Question 1</Header>
        <Card
          users={users}
          points={points}
          quiz={quiz}
        ></Card>
        <Link to="/">About</Link>
      </Container>
    );
  }
}

export default QuizPage
