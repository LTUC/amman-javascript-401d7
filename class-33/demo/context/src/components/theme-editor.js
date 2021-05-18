import React, { Component } from 'react';
import { ThemeContext } from '../context/theme';

export default class Theme extends Component {
  // this will only work if I only have 1 context to consume

  static contextType = ThemeContext;
  // by doing the line above we can access the context from (this.context)
  render() {
    return (
      <>
        <h2>Design Settings</h2>
        <button onClick={this.context.toggleMode}>
          {this.context.mode === 'dark' ? 'light' : 'dark'}
        </button>
      </>
    );
  }
}
