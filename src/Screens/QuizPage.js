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
      question: "What former Franciscan mission was laid siege to over 13 day period in 1836?",
      answers: [
        "A. Chapel De la Sacramente",
        "B. The Alamo",
        "C. The Vera Pierre",
        "D. Ultima Verdardi",
      ],
      correctAnswer: 1, // B
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
