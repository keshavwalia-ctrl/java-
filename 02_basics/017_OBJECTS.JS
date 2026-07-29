// const tinderuser = new object()
// new object is singleton 

const tinderuser =[]
// this is not a singelton object 
tinderuser.name= "keshav"
tinderuser.id= 123231
tinderuser.isloggedin=false 
console.log(tinderuser)

const regularuser={
    email:"abc@gmail.com",
    fullname:{
        userfullname:"keshav walia " 
       }
}
console.log(regularuser.fullname.userfullname)
// to create object in a object 
const target={name:"keshav",age:20}
const source={name:"raj",age:40}

// const return_target=Object.assign(target,source)
const obj3= {...target,...source}
// console.log(return_target)
console.log(obj3)



const db = [
    {
        id:1,
        email:"email@gmail.com"
    },
     {
        id:1,
        email:"email@gmail.com"
    }, 
    {
        id:1,
        email:"email@gmail.com"
    }

]
db[1].email
// this will get the array second object 

 

console.log(Object.entries(tinderuser))
// entries is used to convert object into arrat 


const course={
    coursename:"js tutorial",
    price:"999",
    courseinstructer:"hitesh"
}
const {courseinstructer} = course 
console.log(courseinstructer)
