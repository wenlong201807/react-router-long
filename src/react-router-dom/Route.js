import React from 'react';
import RouterContext from './context';
import { pathToRegexp } from 'path-to-regexp'

export default class Route extends React.Component {
  static contextType = RouterContext
  render () {
    let { path,exact=false, component: Component } = this.props
    let { location } = this.context
    let paramNames = []
    let regexp = pathToRegexp(path, paramNames, { end: exact })
    let result = location.pathname.match(regexp)
    if (result) {
      return <Component></Component>
    }
    return null
    // return 'asdf'
  }
}