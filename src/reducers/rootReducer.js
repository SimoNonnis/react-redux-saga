const initialState = {
  user: {},
  empty: true
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        empty: false
      }
    default:
      return state
  }
};

export default rootReducer;
