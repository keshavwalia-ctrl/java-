const target={user:"keshav",id:20}
const source={name:"raj",age:40}

// const return_target=Object.assign(target,source)
const obj3= {...target,...source}
// console.log(return_target)
console.log(obj3)