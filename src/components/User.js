import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './User.css';

const User = ({userInfo}) => {
  const {
    photo,
    name,
    surname,
    gender,
    region
  } = userInfo;

  return (
    <div styleName='container'>
      <img src={photo} alt={name}/>
        <h1>{name} {surname}</h1>
        <p>{gender}</p>
        <p>{region}</p>
    </div>
  )
}




User.propTypes = {
  userInfo: PropTypes.object
}

export default CSSModules(User, styles, { allowMultiple: true });
