import React from 'react';
import {
  Container,
  TitleDiv,
  Title,
  Body,
  Message,
} from './styles';

export default function Activity() {
  return(
    <Container>
      <TitleDiv>
        <Title> Atividade recente </Title>
      </TitleDiv>
      <Body>
        <Message>
          Ainda não houve atividade em sua conta.
        </Message>
          <Message> Tente adicionar uma despesa. </Message>
      </Body>
    </Container>
  );
}