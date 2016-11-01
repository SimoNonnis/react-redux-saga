import React, { Component } from 'react';
import CSSModules from 'react-css-modules';

import Button from './Button';
import User from './User';

import styles from './App.css';


class App extends Component {
  constructor() {
    super();

    this.getUser = this.getUser.bind(this);

    this.state = {
      user: {},
      empty: true
    }
  }

  getUser () {
    const URL = 'http://uinames.com/api/?ext';

    fetch(URL)
      .then(response => response.json())
      .then(user => (
        this.setState({
          user: user,
          empty: false
        })
      ))
  }

  render () {
    return (
      <div styleName='container'>
          <h1 styleName='title'>Redux Saga</h1>
          <Button  getUser={this.getUser}/>
          {this.state.empty ? null : <User userInfo={this.state.user}/>}
      </div>
    )
  }
}



export default CSSModules(App, styles, { allowMultiple: true });
