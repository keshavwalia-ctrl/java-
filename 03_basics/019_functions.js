// function saymyname(){
//     console.log("K");
//     console.log("E");
//     console.log("S");
//     console.log("H");
//     console.log("A");
//     console.log("V");
// }
// saymyname()
// saymyname() is used to declare function 

// function addtwonumber(number1,number2){
//     console.log(number1+number2)
// }

// addtwonumber(3,null)
//num1 and num2 is parameter
// 3 and null is arguments 
// after return no code work 


function addtwonumber(num1,num2){
    let result = num1+num2
    return result
}

const result = addtwonumber(2,4)

console.log("result:",result)


function logusermessage(username="sam"){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in `

}


// logusermessage("keshav")
console.log(logusermessage("hitesh"))
// if we do not write keshav then it will give
//undefined value

