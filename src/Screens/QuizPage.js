import React from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

import {
  Container,
  Header,
} from './styles';


class QuizPage extends React.Component {
  render() {
    return (
      <Container>
        <Header>Question 1</Header>
        <Card
        users="4"
        points="1,000"
        question="What was the most purchased product this month?"
        answer1="Coke"
        answer2="Monster Energy"
        answer3="Pepsi"
        answer4="Snapple"
        ></Card>
        <Link to="/">About</Link>
      </Container>
    );
  }
}

export default QuizPage
