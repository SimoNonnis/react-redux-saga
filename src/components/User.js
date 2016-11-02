import React, { PropTypes } from 'react';
import CSSModules from 'react-css-modules';

import styles from './User.css';

const User = ({user}) => {
  const {
    photo,
    name,
    surname,
    email,
    region
  } = user;

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
  user: PropTypes.object
}

export default CSSModules(User, styles, { allowMultiple: true });
