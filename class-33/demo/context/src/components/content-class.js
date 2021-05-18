import React, { Component } from 'react'
import {SettingsContext} from '../context/settings';
import {ThemeContext} from '../context/theme'

export default class Content extends Component {
  // when we are consuming multiple Contexts in a class we cant use 
  // static contextType = ....
  render() {
    return (
      <div>
        <h2>Rendered via class Component</h2>
        <SettingsContext.Consumer>
          {(siteContext)=>(
            <>
            <h1>{siteContext.title}</h1>
            <div>
              <a href={`https://www.twitter.com/${siteContext.twitter}`}>@{siteContext.twitter}</a>
            </div>
            </>
          )
          }
        </SettingsContext.Consumer>

        <hr />
        <ThemeContext.Consumer>
          {(themeContext)=><h2>Current Mode: {themeContext.mode}</h2>}
        </ThemeContext.Consumer>
      </div>
    )
  }
}
