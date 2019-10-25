import React from 'react';
import {
  Link, useParams
} from 'react-router-dom';
import Card from './Card';

import {
  Container,
  Header,
} from './styles';


function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

class QuizPage extends React.Component {
  render() {
    console.log('QuizPage props', this.props)
    // const { id } = useParams();
    const id = 1;
    const { users, points, quiz } = this.props;
    const data = quiz.questions.find(q => q.id === id);
    data.answers = quiz.answers.filter(a => a.questionId === id);
    shuffleArray(data.answers);

    return (
      <Container>
        <Header>Question {id} <span role='img' aria-label="up">🤔</span></Header>
        <Card
          users={users}
          points={points}
          data={data}
        ></Card>
        <Link to="/">About</Link>
      </Container>
    );
  }
}

export default QuizPage
