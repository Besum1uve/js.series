const A=new String('hello')
const newString=A.substring(0,3)
console.log(newString)
const B=A.slice(-4,3)
console.log(B)

const C="   anindita   "
console.log(C)
console.log(C.trim());


const url="https://hello.com/hello%20joy"
console.log(url.replace('%20','-'))

console.log(url.includes('world'))


const P="hello-world-bye"
console.log(P.split('-'));
