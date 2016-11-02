import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import * as actionCreators from './actions/actionCreators';
import { bindActionCreators } from 'redux';

import store from './store';
import App from './components/App';


const mapStateToProps = (state) => ({
  user: state.user,
  empty: state.empty
});
const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actionCreators, dispatch)
);

const WrapperApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

render(
  <Provider store={store} >
    <WrapperApp />
  </Provider>,
  document.getElementById('root')
);
