import React, { Component } from 'react'
import ContentFunction from '../content-function';
import ContentClass from '../content-class';
import SiteEditor from '../settings-editor';
import ThemeEditor from '../theme-editor'
import {ThemeContext} from '../../context/theme'
import './main.scss'
export default class Main extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <main className={this.context.mode}>
        <section>
          <ContentClass/>
          <ContentFunction/>
          <aside>
            <SiteEditor/>
            <ThemeEditor/>
          </aside>
        </section>
      </main>
    )
  }
}
