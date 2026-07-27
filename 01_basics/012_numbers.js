const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)
// explitly convert it to number data type

console.log(balance.toString())
console.log(typeof balance)

console.log(balance.toFixed(2))
// to fix-format the number 
// to a fixed number of decimal places 

const othernumber = 1014.2334
console.log(othernumber.toPrecision(3))
// gives the precise value

const hundred = 10000
console.log(hundred.toLocaleString("en-in"))

//--------------------------maths------------------- 
 console.log(Math)
 
 console.log(Math.abs(-4))
 // give the absolute value
 //converts -value to +value v 
 
 console.log(Math.round(4.4))
 console.log(Math.ceil(4.1))
 // ceil give the top value
 

 console.log(Math.floor(4.9))
 //floor give the lower value 

 console.log(Math.random())
 // random gives random value everytime between o and 1

// to get a random value between 1 to 10

console.log(Math.random()*10+1)
// +1 helps in to not get value in 0 

 
const min = 10
const max= 20
console.log(Math.floor((Math.random()* (max-min + 1) + min)))
// random()gives value between 0 and 1 
//  +min is used to get value above 10

console.log(Math.floor(Math.random()*(max-min+1)+min))