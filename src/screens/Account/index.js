import React, { useState } from 'react';
import { Image } from 'react-native';
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
  CopyrightButton,
  LastBtnText,
  AddPhotoView,
  GroupView,
} from './styles';

import ImagePicker from 'react-native-image-picker';

export default function Account() {
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
        <Title> Conta </Title>
        <SectionDiv>
          <SectionTitle> Configurações </SectionTitle>
        </SectionDiv>

          <GroupView>
          <AddPhotoView onPress={()=> getPhoto()}>
            <Image source={avatarSource} style={{ width: 60, height: 60, borderRadius: 30}} />
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