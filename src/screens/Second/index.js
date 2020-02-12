import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
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
  NewGroupDiv,
  NewGroupTitle,
  AddGroupBtn,
  AddGroupBtnTxt,
  GroupList,
  ItemDiv,
  ItemName,
  ClearBtn,
  ClearBtnTxt,
} from './styles';

import AddPhoto from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-picker';

function Main(props) {
  const [ isVisible, setIsvisible ] = useState(false);
  const [ btnShow, setBtnshow ] = useState(false);
  const [ inputValue, setInputvalue ] = useState("");

  useEffect(()=>{
    console.log(inputValue)
  },[inputValue])

  function saveInput(t) {
    setInputvalue(t)
  }

  function handleDone() {
    props.setName(inputValue);
    setIsvisible(!isVisible);
    if (inputValue.length <= 1) {
      alert('você precisa colocar um nome')
    }
    return;
  }

  const [ avatarSource, setAvatarsource ] = useState();
  const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  function getPhoto() {
  ImagePicker.showImagePicker(options, (response) => {
    console.log('Response = ', response);
  
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
    } else {
      const source = { uri: response.uri };
  
      setAvatarsource({
        avatarSource: source,
      });
    }
  });
}

  return(
    <Container>
      <TitleDiv>
        <Title> Grupos </Title>
      </TitleDiv>
      {props.name.length === 0 && 
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
      }
      {isVisible && 
        <ModalBody>
          <ModalHeader>
            <ModalClose onPress={()=> setIsvisible(!isVisible)}> 
              <ModalBtnText> cancel </ModalBtnText>
            </ModalClose>
            <ModalTitle> Criar um grupo </ModalTitle>
            {btnShow && 
              <ModalClose onPress={()=> { handleDone() }}> 
                <ModalTitle style={{marginLeft: 50}}> feito </ModalTitle>
              </ModalClose>
            }
          </ModalHeader>
          <InputView>
            <AddPhotoView onPress={()=> getPhoto()}>
              <ModalBtnText> 
                <Image source={avatarSource} style={{ width: 80, height: 80, borderRadius: 40}} />  
              </ModalBtnText>
            </AddPhotoView>
            <NameView>
              <NameText> Nome do grupo </NameText>
              <NameInput placeholder="Rua Gergelim 123" onChangeText={(t)=>  [setBtnshow(true), saveInput(t) ] } />
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
      {props.name.length > 0 && !isVisible &&
        <>
          <NewGroupDiv>
            <NewGroupTitle> Novo grupo </NewGroupTitle>
            <AddGroupBtn onPress={()=> setIsvisible(!isVisible)}>
              <AddGroupBtnTxt> Adicionar grupos </AddGroupBtnTxt>
            </AddGroupBtn>
          </NewGroupDiv>
          <GroupList>
            <ItemDiv>
              <ItemName>
                {props.name}
              </ItemName>
            </ItemDiv>
            <ClearBtn onPress={()=> {props.setName("")}}>
            </ClearBtn>
          </GroupList>
        </>
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