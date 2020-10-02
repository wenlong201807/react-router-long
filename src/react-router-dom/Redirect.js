import React from 'react'
// import { pathToRegexp } from 'path-to-regexp'
import RouterContext from './context';
export default class Redirect extends React.Component { 
  static contextType = RouterContext
  
  render () {
    // 健壮性考虑 // 匹配上才能跳转
    if (!this.props.from || this.props.from === this.context.location.pathname) {
      this.context.history.push(this.props.to)
    }
      // this.context.history.push(this.props.to);
      return null;
  }
}