import styled from 'styled-components'
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: center;
  padding: 16px;
  overflow-y: auto;
`;

const Header = styled.div`
  width: 100%;
  font-size: 24px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  color: ${props => props.dark ? '#22212D' : '#FFF'}
`;

const Logo = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 40px;
  margin-top: 16px;
  @media (max-width: 767px){
    height: 96px;
    width: 96px;
    margin-bottom: 16px;
    margin-top: 8px;
  }
`;

const Label = styled.label`
  line-height: 32px;
  font-size: 24px;
  font-weight: 400;
`;

const Input = styled.input`
  height: 64px;
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
  margin: 16px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif!important;
  box-sizing: border-box;
  text-transform: capitalize;
  &:focus {
    box-shadow: 0 0 0 0.2rem #22212D;
  }
  @media (max-width: 767px){
    height: 48px;
    line-height: 48px;
  }
`;

const Button = styled.button`
  border-radius: 45px;
  height: 64px;
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
  margin: 8px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif!important;
  box-shadow: 0 2px 4px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.24);
  &:focus {
    box-shadow: none;
  }
  @media (max-width: 767px){
    height: 48px;
    line-height: 48px;
  }
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
  width: 100%;
  display: flex;
  margin: 16px;
  height: auto;
  align-items: center;
  flex-direction: column;
  max-width: 480px;
  position: relative;
`;

const LinkButton = styled(Link)`
  border-radius: 45px;
  height: 64px;
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
  margin: 8px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif!important;
  text-decoration: none;
  line-height: 64px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.24);
  &:focus {
    box-shadow: none;
  }
  @media (max-width: 767px){
    height: 48px;
    line-height: 48px;
  }
`;

const RoundButton = styled(LinkButton)`
  width: 64px;
  height: 64px;
  align-items: center;
  justify-content: center;
  display: flex;
  position: absolute;
  bottom: 16px;
  right: 16px;
  line-height: 1;
  font-size: 32px;
  padding-top: 2px;
  @media (max-width: 767px){
    font-size: 24px;
    bottom: 80px;
    height: 64px;
    width: 64px;
    right: 0px;
  }
`
const SmallCard = styled(Container)`
  background: white;
  max-width: 540px;
  margin: 8px;
  width: 100%;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.24), 0 4px 4px rgba(0,0,0,0.12);

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
  LinkButton,
  RoundButton,
  SmallCard
}
