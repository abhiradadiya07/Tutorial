const {readFileSync,writeFileSync} = require('fs')
const first = readFileSync('./Module/first.txt','utf8')
const second = readFileSync('./Module/second.txt','utf8')
console.log(first,second)
writeFileSync('./Module/third.txt',`Here is  : ${first},${second}`,{flag:'a'})