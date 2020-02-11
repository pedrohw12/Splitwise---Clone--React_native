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
  AddPhotoView,
  GroupView,
} from './styles';

import Icon from 'react-native-vector-icons/MaterialIcons';
import CameraRoll from "react-native-photo-library";

export default function Account() {
  function handleButtonPress() {
    CameraRoll.getPhotos({
        first: 20,
        assetType: 'Photos',
      })
      .then(r => {
        this.setState({ photos: r.edges });
      })
      .catch((err) => {
         //Error Loading Images
      });
    };

  return(
    <Container>
        <Title> Conta </Title>
        <SectionDiv>
          <SectionTitle> Configurações </SectionTitle>
        </SectionDiv>

          <GroupView>
          <AddPhotoView onPress={()=> handleButtonPress()}>
            <Icon name="person" size={25} color="#fff" />
          </AddPhotoView>
          <ImageOption>
            <Name> Pedro Wanderley </Name>
            <Email> peu-zico@hotmail.com </Email>
          </ImageOption>
          </GroupView>
          
          <OptionButton>
            <OptionText> Digitalizar código </OptionText>
          </OptionButton>
          <OptionButton>
            <OptionText style={{color: "#0097e6"}}> Splitwise Pro </OptionText>
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
          <OptionButton style={{borderBottomWidth: 0.17}}>
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