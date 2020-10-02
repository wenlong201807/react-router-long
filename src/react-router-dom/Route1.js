import React from 'react';
import RouterContext from './context';
import { pathToRegexp } from'path-to-regexp'

export default class Route extends React.Component {
  static contextType = RouterContext
  render () {
    let { path, component: Component } = this.props
    let { location } = this.context
    // console.log(path)
    // console.log(localtion.pathname)
    // console.log(Component)
    if (path === location.pathname) {
      return <Component></Component>
    }
    return null
    // return 'asdf'
  }
}