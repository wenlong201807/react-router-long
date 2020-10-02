const { pathToRegexp } = require('path-to-regexp')
let paramNames = []
let regexp = pathToRegexp('/user/:name/:id',paramNames,{end:true})
console.log(regexp) // /^\/user(?:\/([^\/#\?]+?))(?:\/([^\/#\?]+?))[\/#\?]?$/i
// console.log('paramNames:', paramNames)
/**路径转成正则的方式
 * /user/:name/:id
 paramNames: [
  {
    name: 'name',
    prefix: '/',
    suffix: '',
    pattern: '[^\\/#\\?]+?',
    modifier: ''
  },
  {
    name: 'id',
    prefix: '/',
    suffix: '',
    pattern: '[^\\/#\\?]+?',
    modifier: ''
  }
]
*/

let getParamsNameArr = paramNames.map(item => item.name)
// console.log(getParamsNameArr) // [ 'name', 'id' ]

let url = '/user/wenlong/16'
let result = url.match(regexp)
// console.log(result)
/**
 [
  '/user/wenlong/16',
  'wenlong',
  '16',
  index: 0,
  input: '/user/wenlong/16',
  groups: undefined
]
*/

let params = getParamsNameArr.reduce((memo, key, index) => {
  memo[key] = result[index + 1]
  return memo
}, {})

console.log('params:',params) // { name: 'wenlong', id: '16' }