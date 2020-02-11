import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
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

import AddPhoto from 'react-native-vector-icons/MaterialIcons';

function Main() {
  const [ isVisible, setIsvisible ] = useState(true);
  const [ btnShow, setBtnshow ] = useState(false);
  const [ inputValue, setInputvalue ] = useState("");

  useEffect(()=>{
    console.log(inputValue)
  },[inputValue])

  function saveInput(t) {
    setInputvalue(t)
  }

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
            {btnShow &&
              <ModalClose onPress={()=> {}}> 
                <ModalTitle style={{marginLeft: 50}}> feito </ModalTitle>
              </ModalClose>
            }
          </ModalHeader>
          <InputView>
            <AddPhotoView>
              <ModalBtnText> 
                <AddPhoto name="add-a-photo" size={30} color="#fff" />  
              </ModalBtnText>
            </AddPhotoView>
            <NameView>
              <NameText> Nome do grupo </NameText>
              <NameInput placeholder="Rua Gergelim 123" onChangeText={(t)=>  [setBtnshow(true), saveInput(t)] } />
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

const mapStateToProps = (state) => {
  return {
    name:state.nameReducer.name,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    setName: (name)=> dispatch({type: 'SET_NAME', payload: {name}})
  };
};

export default connect(mapStateToProps, dispatchToProps)(Main);