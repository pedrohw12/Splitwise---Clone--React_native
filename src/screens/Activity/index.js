import React from 'react';
import { connect } from 'react-redux';
import {
  Container,
  TitleDiv,
  Title,
  Body,
  Message,
  ItemDiv,
  GroupList,
  ItemName,
} from './styles';

function Activity(props) {
  return(
    <Container>
      <TitleDiv>
        <Title> Atividade recente </Title>
      </TitleDiv>
      <Body>
        {!props.name  &&
        <>
        <Message>
          Ainda não houve atividade em sua conta.
        </Message>
        <Message> Tente adicionar uma despesa. </Message>
        </>
          }
      </Body>
      {props.name.lenght !== 0 &&
          <GroupList>
            <ItemDiv>
              <ItemName>
                {props.name}
              </ItemName>
            </ItemDiv>
          </GroupList>
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

export default connect(mapStateToProps, dispatchToProps)(Activity);