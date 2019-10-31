import React from 'react';
import {
  useParams, useHistory
} from 'react-router-dom';
import Card from './Card';
import {
  Container,
  Header,
} from './styles';
import {useSpring, animated} from 'react-spring'


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
  let { users, points, quiz } = props;
  quiz.questions = quiz.questions || [];
  quiz.answers = quiz.answers || [];
  let question = quiz.questions.find(q => q.id === id) || {};
  let answers = quiz.answers.filter(a => a.questionId === id) || [];
  let nextId = id + 1;
  if (nextId > quiz.questions.length) {
    history.push('/results')
  }
  shuffleArray(answers);

  let playerScore = parseInt(sessionStorage.getItem('player_score') || 0);
  points += playerScore;
  const slide = useSpring({right: '10px', from: {right: '-100vw'}});

  return (
    <Container>
      <Header>Question {id} <span role='img' aria-label="think">🤔</span></Header>
      <animated.div style={slide}>
      <Card
        users={users}
        points={points}
        question={question}
        answers={answers}
        nextId={nextId}
        history={history}
      ></Card>
      </animated.div>
      {/* <Link to="/">About</Link> */}
      {/* <Link to={"/quiz/" + nextId}>next</Link> */}
    </Container>
  );
}

export default QuizPage
