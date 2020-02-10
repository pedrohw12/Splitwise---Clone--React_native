import React from 'react';
import {
  Container,
  Title,
  SectionDiv,
  SectionTitle,
  ImageOption,
  Name,
  Email,
  OptionButton,
  OptionText,
  Footer,
  Logout,
  ButtonText,
  FooterMessage,
  FooterMessageDiv,
  CopyrightButton,
  LastBtnText,
} from './styles';

export default function Account() {
  return(
    <Container>
        <Title> Conta </Title>
        <SectionDiv>
          <SectionTitle> Configurações </SectionTitle>
        </SectionDiv>
          <ImageOption>
            <Name> Pedro Wanderley </Name>
            <Email> peu-zico@hotmail.com </Email>
          </ImageOption>
          <OptionButton>
            <OptionText> Digitalizar código </OptionText>
          </OptionButton>
          <OptionButton>
            <OptionText> Splitwise Pro </OptionText>
          </OptionButton>

        <SectionDiv>
          <SectionTitle> Comentários </SectionTitle>
        </SectionDiv>
        <OptionButton>
            <OptionText> Avalie o Splitwise </OptionText>
          </OptionButton>
          <OptionButton>
            <OptionText> Fale conosco </OptionText>
          </OptionButton>

        <SectionDiv>
          <SectionTitle> Comentários </SectionTitle>
        </SectionDiv>
        <OptionButton>
            <OptionText> Avalie o Splitwise </OptionText>
          </OptionButton>
          <OptionButton>
            <OptionText> Fale conosco </OptionText>
          </OptionButton>

          <Footer>
            <Logout>
              <ButtonText> Sair </ButtonText>
            </Logout>
            <CopyrightButton>
              <LastBtnText> Feito com :) em Providence, RI, USA </LastBtnText>
              <LastBtnText> Copyright @ 2020 Splitwise, Inc. </LastBtnText>
            </CopyrightButton>
          </Footer>
    </Container>
  );
}