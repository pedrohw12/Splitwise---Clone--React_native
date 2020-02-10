import React from 'react';
import { 
  Container,
  TitleDiv,
  Title,
  Body,
  Welcome,
  Message,
  LastLine,
  AddFriends,
  ButtonText,
  Logo,
} from './styles';

export default function Main() {
  return(
    <Container>
      <TitleDiv>
        <Title> Grupos </Title>
      </TitleDiv>
      <Body>
        <Welcome> Você não possui grupos no momento. </Welcome>
        <Message> 
          Grupos facilitam a divisão de contas 
          de um apartamento, das despesas de uma 
        </Message>
        <LastLine> viagem e muito mais. </LastLine>
        <AddFriends>
          <ButtonText> Começar um grupo </ButtonText>
        </AddFriends>
        <Logo source={require('../../assets/logo.png')} />
      </Body>
    </Container>
  );
}