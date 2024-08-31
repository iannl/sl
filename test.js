const length = require('./')

console.log(length('\u001B[4mtest\u001B[0m'))
// Output: 4

console.log(length('😀'))
// Output: 1

console.log(length('\u001B[4m😀\u001B[0m'))
// Output: 1