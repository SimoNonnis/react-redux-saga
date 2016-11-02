import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import Button from './Button';
import User from './User';

import styles from './App.css';


const App = ({empty}) => {
  return (
    <div styleName='container'>
        <h1 styleName='title'>Redux Saga</h1>
        <Button/>
        {empty ? null : <User />}
    </div>
  )
};

App.propTypes = {
  empty: PropTypes.bool
}


export default CSSModules(App, styles, { allowMultiple: true });
