// let str = 'ab'
let str = 'abcd'
let reg1 = /a(?=b)b/ // ？后面要么是等于这个b 要么就不存在
let reg1 = /a(?!b)b/ // ？要么没有，要么是不等于b的字符
let result = str.match(reg1)
console.log(result) // [ 'a', index: 0, input: 'ab', groups: undefined ]