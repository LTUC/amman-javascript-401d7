import React, { Component } from 'react'
import {LoginContext} from '../context/auth';
import {If} from 'react-if'
export default class acl extends Component {
  static contextType = LoginContext
  render() {
    let okToRender = false;
    try {
      okToRender = this.context.loggedIn && this.props.capability ? this.context.user.capabilities.includes(this.props.capability):false;
    } catch (error) {
      console.log('NOT AUTHORIZED',error.message)
    }
    return (
      <If condition={okToRender}>
        {this.props.children}
      </If>
    )
  }
}
