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
  flex: 1;
  align-items: center;
  background: #fff;
`;

export const Message = styled.Text`
  font-size: 16px;
  color: #474a51;
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