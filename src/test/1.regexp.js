const { pathToRegexp } = require('path-to-regexp')
// 官网参考 https://www.npmjs.com/package/path-to-regexp
// 正则匹配使用  https://jex.im/regulex/#!flags=&re=%5E(a%7Cb)*%3F%24
let regexp = pathToRegexp('/home',[],{end:false})

console.log(regexp) // end:true  /^\/home[\/#\?]?$/i
console.log(regexp) // end:false /^\/home(?:[\/#\?](?=[]|$))?(?=[\/#\?]|[]|$)/i

let str = '/home/'
let reg = /^\/home(\/)?$/i
console.log(str.match(regexp)) // [ '/home/', index: 0, input: '/home/', groups: undefined ]
console.log(str.match(reg)) // [ '/home/', '/', index: 0, input: '/home/', groups: undefined ]