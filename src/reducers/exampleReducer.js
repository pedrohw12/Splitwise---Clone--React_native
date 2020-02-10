const initialState = {
  favorito: true,
};

export default (state = initialState, action) => {
  
  switch(action.type) {
    case 'SET_FAVORITO':
      return {...state, favorito:action.payload.favorito};
      break;  
  }
  
  return state;
};