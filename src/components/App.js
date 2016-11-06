import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import Button from './Button';
import User from './User';

import styles from './App.css';


const App = ({empty, getUser, user}) => (
  <div styleName='container'>
      <h1 styleName='title'>Redux Saga</h1>
      <Button getUser={getUser}/>
      {empty ? null : <User user={user} />}
  </div>
)


App.propTypes = {
  empty: PropTypes.bool,
  getUser: PropTypes.func,
  user: PropTypes.object
}


export default CSSModules(App, styles, { allowMultiple: true });
