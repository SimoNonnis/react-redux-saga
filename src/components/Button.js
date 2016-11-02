import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './Button.css';

const Button = ({ getUser }) => {
  function handleClick() {
    getUser
  }

  return (
    <button
      type='text'
      styleName='button'
      onClick={handleClick}
    >Get User</button>
  )
}


Button.propTypes = {
  getUser: PropTypes.func
}

export default CSSModules(Button, styles, { allowMultiple: true });
