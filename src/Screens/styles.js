import styled from 'styled-components'

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
  height: 64px;
  line-height: 64px;
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
`;

const Input = styled.input`
  height: 48px;
  background: white;
  color: black;
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
  background: black;
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

export {
  Container,
  Header,
  Logo,
  Label,
  Input,
  Button,
  Countdown
}
