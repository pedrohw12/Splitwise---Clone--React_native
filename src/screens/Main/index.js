import React from 'react';
import { 
  Container,
  TitleDiv,
  Title,
  Body,
  Welcome,
  Message,
  AddFriends,
  ButtonText,
  Logo,
} from './styles';

export default function Main() {
  return(
    <Container>
      <TitleDiv>
        <Title> Amigos </Title>
      </TitleDiv>
      <Body>
        <Welcome> Bem-vindo ao Splitwise </Welcome>
        <Message> Você não adicionou amigos ainda. </Message>
        <AddFriends onPress={()=> getContact()}>
          <ButtonText> Adicionar amigos no Splitwise </ButtonText>
        </AddFriends>
        <Logo source={require('../../assets/logo.png')} />
      </Body>
    </Container>
  );
}