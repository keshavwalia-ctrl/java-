let name="keshav"
let repcount =50

console.log(`my name is ${name}and my rep count is ${repcount}`);  



const gamename = new String('keshavic new game ')

console.log(gamename)

console.log(gamename[0]) // to find key value

console.log(gamename.__proto__)  // tell the object values

console.log(gamename.length)

console.log(gamename.toLocaleUpperCase())
console.log(gamename.charAt(2));
console.log(gamename.indexOf("i"))
console.log(gamename.substring(0,6)) 
// in the sub string   the last value is not counted
 


const anthorstring= gamename.slice(-8,4)

console.log(anthorstring)

const newstring= "   hitesh   "
console.log(newstring.trim());
// removes the unwanted space 

const url = "https://keshav.com/keshav%20walia"

console.log(url.replace("%20","-"))
// replace the word in the string 

const a = "keshavewalia"

console.log(a.includes("wal"))
// to find that the word exist in the string 

console.log(gamename.split("-"))