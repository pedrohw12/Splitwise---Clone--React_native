const initialState = {
  name: "Rua Gergelim 123",
};

export default (state = initialState, action) => {
  
  switch(action.type) {
    case 'SET_NAME':
      return {...state, name:action.payload.name};
      break;  
  }
  
  return state;
};