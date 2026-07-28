// array
// [] square bracket
// () parenthesis
// {} curley braces

// console.log(myarr)); 

// const umber =[1,23,233,4,4]
// console.log(typeof umber)

// array methods
// to add values in an array 
// myarr.push(6)
// console.log(myarr)
 
// console.log(myarr.pop(3))
// const myarr = [0,1,2,3,4,5]
// myarr.unshift(89)
// console.log(myarr)

// unshift add the value in starting of an array
const abc =[11,2,3,4,5,6,7]
// console.log(abc)

abc.shift()
console.log(abc)
// shift is use to remove the first element from the array 

//  console.log(abc.indexOf(23))
// index tell that value exist or not 

const newarr = abc.join()
// join converts an array into string 
console.log(newarr);

console.log(typeof newarr)


// slice, splice

console.log("a",abc);

const myn1= abc.slice(1,3)
console.log(myn1);

console.log("b",abc);



// slice- 
const myarr2= abc.splice(1,3)
console.log(myarr2)

// Feature	slice()	splice()
// Changes original array?	❌ No	✅ Yes
// Returns	A new array	Removed elements
// Purpose	Copy/extract elements	Add, remove, or replace elements