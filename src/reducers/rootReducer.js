const initialState = {
  user: {},
  empty: true
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return state
    default:
      return state
  }
};

export default rootReducer;




// getUser () {
//   const URL = 'http://uinames.com/api/?ext';
//
//   fetch(URL)
//     .then(response => response.json())
//     .then(user => (
//       this.setState({
//         user: user,
//         empty: false
//       })
//     ))
// }
