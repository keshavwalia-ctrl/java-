// object can be decalre literal and constructer 
// if a object declare by constructer then it is singleton

// object literals 
const mysm1 = Symbol("key1")
const jsuser= {
    name:"keshav",
    "full_name":"keshavwalia",
    age: 20,
    location:"jaipur",
    [mysm1]:"key1",
    email:"abc@gmail.com",
    isloggedin : false,
    lastlogindays: ["monday","saturday"],
}
// console.log(jsuser["email"])
// console.log(jsuser.email)
// console.log(jsuser["full_name"])
// name is key and keshav is value  
// console.log(jsuser[mysm1])


// jsuser.email = "hiesh@chatgpt.com"
// Object.freeze(jsuser)
// console.log(jsuser)
// by using = we can change the value in a object 
// by using freeze we cannot change values in object 
jsuser.greeting = function () {
  console.log( "hello js user");
};
console.log(jsuser.greeting());

jsuser.greeting2 = function(){
    console.log("bye bye");

}
console.log(jsuser.greeting2())
//object values are mostly accessed by . 

const target={name:"keshav",age:20}
const source={name:"rahul",age:40}

const return_target=Object.assign(target,source)
console.log(return_target)