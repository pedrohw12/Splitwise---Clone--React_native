import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text`
  margin-top: 40px;
  margin-left: 10px;
  font-weight: bold;
  font-size: 23px;
`;

export const SectionDiv = styled.View`
  background: #ddd;
  padding: 5px;
  padding-left: 13px;
`;

export const SectionTitle = styled.Text`
  font-weight: bold;
`;

export const SectionOptions = styled.View`
  background: #ff0;
`;

export const ImageOption = styled.TouchableOpacity`
  justify-content: center;
  padding: 20px;
`;

export const AddPhotoView = styled.TouchableOpacity`
  background: #0097e6;
  border-radius: 30px;
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
`;

export const GroupView = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

export const Name = styled.Text`
  font-weight: bold;
`;

export const Email = styled.Text`
  color: #aaa;
`;

export const OptionButton = styled.TouchableOpacity`
  padding: 10px;
  border-top-width: 0.17px;
  border-color: #aaa;
`;

export const OptionText = styled.Text``;

export const Logout = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #0097e6;
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
`;

export const CopyrightButton = styled.TouchableOpacity`
  width: 100%;
  height: 100px;
  background: #fff;
  justify-content: center;
  align-items: center;
`;

export const LastBtnText = styled.Text``;