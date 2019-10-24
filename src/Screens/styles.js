import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  padding: 8px;
`;

const Header = styled.div`
  width: 100%;
  font-size: 24px;
  height: 48px;
  line-height: 48px;
  text-align: center;
`;

const Logo = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 40px;
`;

const Label = styled.label`
  line-height: 32px;
  font-size: 24px;
  font-weight: 400;
`;

const Input = styled.input`
  height: 48px;
  background: white;
  color: #22212D;
  font-size: 24px;
  text-align: center;
  border: none;
  outline: none;
  box-shadow: none;
  border-radius: 45px;
  width: 100%;
  max-width: 420px;
  margin: 8px 16px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif!important;
`;

const Button = styled.button`
  border-radius: 45px;
  height: 48px;
  background: #22212D;
  color: white;
  font-size: 24px;
  text-align: center;
  border: none;
  outline: none;
  box-shadow: none;
  border-radius: 45px;
  width: 100%;
  max-width: 420px;
  margin: 8px 16px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif!important;
`;

const Countdown = styled.div`
  font-size: 80px;
  font-weight: 700;
  line-height: 96px;
`;

const QuestionCard = styled.div`
  background: white;
  padding: 16px;
  border-radius: 16px;
  width: calc(100% - 48px);
  display: flex;
  margin: 16px;
  height: auto;
  align-items: center;
  flex-direction: column;
  max-width: 480px;
`;

const LinkButton = styled(Link)`
  border-radius: 45px;
  height: 48px;
  background: #22212D;
  color: white;
  font-size: 24px;
  text-align: center;
  border: none;
  outline: none;
  box-shadow: none;
  border-radius: 45px;
  width: 100%;
  max-width: 420px;
  margin: 8px 16px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif!important;
  text-decoration: none;
  line-height: 48px;
`;

export {
  Container,
  Header,
  Logo,
  Label,
  Input,
  Button,
  Countdown,
  QuestionCard,
  LinkButton
}
