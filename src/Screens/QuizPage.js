import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
`;

class QuizPage extends React.Component {
  render() {
    return (
      <Container>
        Quiz Page
        <Link to="/">About</Link>
      </Container>
    );
  }
}

export default QuizPage
