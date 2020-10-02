console.log('1a'.match(/\d(?=[a-z])a/)) // true
console.log('1@'.match(/\d(?![a-z])@/)) // true
console.log('a1'.match(/(?<=[a-z])\d/)) // true
console.log('1a'.match(/(?<![a-z])\d/)) // true

// 正则难点  前瞻后顾