import React from 'react'
import RouterContext from './context';
export default class Link extends React.Component{
  static contextType = RouterContext // 传入全局应用的上下文 // 类型定义
  render () {
    // browerUrl  href中没有#
    // hashUrl  href中有# // 暂时使用这个方式
    return (
      <a href={`#${this.props.to}`} onClick={() => this.context.history.push(this.props.to)} >{this.props.children}</a>
    )
  }
}