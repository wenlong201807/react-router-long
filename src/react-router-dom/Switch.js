import React from 'react'
import { pathToRegexp } from 'path-to-regexp'
import RouterContext from './context';
export default class Switch extends React.Component {
  static contextType = RouterContext // 传入全局应用的上下文 // 类型定义
  render () {

    let children = Array.isArray(this.props.children) ? this.props.children : [this.props.children]
    let pathname = this.context.location.pathname
    // console.log(children,pathname)
    for (let i = 0; i < children.length; i++) {
      let child = children[i]
      let { path = "/", exact = false } = child.props;
      let paramNames = [];
      let regexp = pathToRegexp(path, paramNames, { end: exact });
      let result = pathname.match(regexp);
      if (result) {
        return child;// a 组件类型  b 组件的实例 c 虚拟DOM=d React元素
      }
    }
    return null;
  }
}