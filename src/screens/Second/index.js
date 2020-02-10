import React, { useState } from 'react';
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
  ModalBody,
  ModalClose,
  ModalBtnText,
  ModalHeader,
  ModalTitle,
  InputView,
  AddPhotoView,
  NameView,
  NameText,
  NameInput,
  OptionView,
  ViewTitle,
  BtnView,
  OptionButton,
  OptionBtnText,
} from './styles';

export default function Main() {
  const [ isVisible, setIsvisible ] = useState(true);

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
        <AddFriends onPress={()=> setIsvisible(!isVisible)}>
          <ButtonText> Começar um grupo </ButtonText>
        </AddFriends>
        <Logo source={require('../../assets/logo.png')} />
      </Body>
      {isVisible &&
        <ModalBody>
          <ModalHeader>
            <ModalClose onPress={()=> setIsvisible(!isVisible)}> 
              <ModalBtnText> cancel </ModalBtnText>
            </ModalClose>
            <ModalTitle> Criar um grupo </ModalTitle>
          </ModalHeader>
          <InputView>
            <AddPhotoView>
              <ModalBtnText> PHOTO </ModalBtnText>
            </AddPhotoView>
            <NameView>
              <NameText> Nome do grupo </NameText>
              <NameInput placeholder="Rua Gergelim 123" />
            </NameView>
          </InputView>
          <OptionView>
            <ViewTitle> Tipo de grupo </ViewTitle>
            <BtnView>
              <OptionButton>
                <OptionBtnText> Apartamento </OptionBtnText>
              </OptionButton>
              <OptionButton>
                <OptionBtnText> Casa </OptionBtnText>
              </OptionButton>
              <OptionButton>
                <OptionBtnText> Viagem </OptionBtnText>
              </OptionButton>
              <OptionButton>
                <OptionBtnText> Outros </OptionBtnText>
              </OptionButton>
            </BtnView>
          </OptionView>
        </ModalBody>
      }
    </Container>
  );
}