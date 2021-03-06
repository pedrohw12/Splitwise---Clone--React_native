import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const TitleDiv = styled.View`
  flex: 1;
  background: #fff;
`;

export const Title = styled.Text`
  margin-top: 40px;
  margin-left: 10px;
  font-weight: bold;
  font-size: 23px;
`;

export const Body = styled.View`
  flex: 2;
  align-items: center;
  background: #fff;
`;

export const Welcome = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const Message = styled.Text`
  margin-top: 10px;
  margin-left: 14px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 18px;
`;

export const LastLine = styled.Text`
  font-size: 18px;
  margin-bottom: 30px;
`;

export const AddFriends = styled.TouchableOpacity`
  width: 86%;
  height: 40px;
  border-radius: 4px;
  background: #0097e6;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export const Logo = styled.Image`
  width: 80px;
  height: 80px;
  margin-top: 30px;
`;

export const ModalBody = styled.View`
  padding: 10px;
  background: #fff;
  z-index: 5;
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const ModalHeader = styled.View`
  flex-direction: row;
  background: #0097e6;
  border-radius: 4px;
  padding: 5px;
`;

export const ModalTitle = styled.Text`
  margin-left: 18%;
  font-size: 17px;
  color: #fff;
`;

export const InputView = styled.View`
  flex-direction: row;
  margin-top: 5%;
`;

export const AddPhotoView = styled.TouchableOpacity`
  background: #0097e6;
  border-radius: 40px;
  width: 80px;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

export const NameView = styled.View`
  margin-left: 10%;
  margin-top: 5%;
`;

export const NameText = styled.Text``;

export const NameInput = styled.TextInput`
  padding: 5px;
  width: 120%;
  height: 40px;
`;

export const OptionView = styled.View`
  margin-top: 5%;
`;

export const ViewTitle = styled.Text`
  font-weight: bold;
`;

export const BtnView = styled.View`
  flex-direction: row;
  border-width: 1px;
  border-radius: 4px;
  padding: 10px;
  margin-top: 10px;
  justify-content: space-between;
`;

export const OptionButton = styled.TouchableOpacity``;

export const OptionBtnText = styled.Text``;

export const ModalClose = styled.TouchableOpacity`
  background: #0097e6;
  border-radius: 4px;
`;

export const ModalBtnText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const NewGroupDiv = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  background: #fff;
`;

export const NewGroupTitle = styled.Text`
  font-size: 23px;
`;

export const AddGroupBtn = styled.TouchableOpacity`
  background: #0097e6;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 150px;
  height: 40px;
`;

export const AddGroupBtnTxt = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const GroupList = styled.ScrollView`
  flex: 2;
  margin-top: -70px;
  background: #fff;
  margin: 10px;
`;

export const ItemDiv = styled.View`
  background: #0097e6;
  padding-left: 10px;
  justify-content: center;
  height: 60px;
  width: 100%;
  border-bottom-width: 0.8px;
  border-radius: 4px;
`;

export const ItemName = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ClearBtn = styled.TouchableOpacity`
  background: #f00;
  z-index: 10;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-left: 80%;
  margin-top: 100px;
`;

export const ClearBtnTxt = styled.Text``;