import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './User.css';

const User = ({userInfo}) => {
  const {
    photo,
    name,
    surname,
    email,
    region
  } = userInfo;

  return (
    <div styleName='container'>
      <img src={photo} alt={name} styleName='avatar' />
        <h1 styleName='fullName'>{name} {surname}</h1>
        <p>{region}</p>
        <p>{email}</p>

    </div>
  )
}




User.propTypes = {
  userInfo: PropTypes.object
}

export default CSSModules(User, styles, { allowMultiple: true });
