const marvel =["tony","thor","spiderman"]
const dc = ["superman","flash","batman"]

// marvel.push(dc)

// console.log(marvel)

// console.log(marvel.indexOf(3))


// to access a value from the array 
// to access flash in the array 
// console.log(marvel[3][1])

// const all_hero = marvel.concat(dc)
// console.log(all_hero)

// by using spread method 
const newhero = [...marvel,...dc]
console.log(newhero)

// THE SPREAD METHOD IS USED WE CAN COMBINE
// TWO OR MORE ARRAY 

const anthor_array = [1,23,23,4,3,4,[132,23,4,324,234],1342,3,[2323,[342]]]

const combined_array = anthor_array.flat(Infinity)
console.log(combined_array);
// in this we use flat array because there are array in array 
const keshav = "array"
console.log(Array.from(keshav))
// array.from is used to convert a string into an array 

console.log(Array.from({name:"keshav"}))
// this will give empty array because we have define key(name) first 

let score1= 100
let score2 =200
let score3 = 500
console.log(Array.of(score1,score2,score3))
//array.of is used to make an array 

