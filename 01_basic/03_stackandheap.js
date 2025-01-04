//stack(primitive) and heap(non-primitive)

let employe = "punitsingh"

let employe2 = employe
employe2  =  "rititk"

console.log(employe2);
console.log(employe);

// console.log(employe === employe2); just for  check
 let user = {
    email : "punit@google.com",
    id : 123,
 }

let seconduser = user
seconduser.email = "singh@google.com"
console.log(seconduser.email);
console.log(user.email);
