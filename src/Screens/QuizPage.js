import React from 'react';
import {
  Link, useParams, useHistory
} from 'react-router-dom';
import Card from './Card';
import {
  Container,
  Header,
  LinkButton
} from './styles';


function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}


function QuizPage(props) {
  let { id } = useParams();
  let history = useHistory();
  id = parseInt(id);
  // console.log('QuizPage', id,  props)
  const { users, points, quiz } = props;
  quiz.questions = quiz.questions || [];
  quiz.answers = quiz.answers || [];
  let question = quiz.questions.find(q => q.id === id) || {};
  let answers = quiz.answers.filter(a => a.questionId === id) || [];
  let nextId = id + 1;
  if (nextId > quiz.questions.length) {
    history.push('/results')
  }
  shuffleArray(answers);

  return (
    <Container>
      <Header>Question {id} <span role='img' aria-label="think">🤔</span></Header>
      <Card
        users={users}
        points={points}
        question={question}
        answers={answers}
        nextId={nextId}
        history={history}
      ></Card>
      {/* <LinkButton to={"/quiz/" + nextId}>Next Question</LinkButton>*/}
    </Container>
  );
}

export default QuizPage
