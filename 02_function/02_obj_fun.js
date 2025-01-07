// this is the first way to define obj in function 

let obj= {
    name  : "punit",
    email : "punit@gmail.com",
 }
function user(anyobject){
        console.log(`user name is ${obj.name} and email is ${obj.email}`);
        
}
 console.log(user())

 
// this is the second way to define obj in function.  both are correct 
// console.log(user(obj = {name : " punit", email :"singh @google.com"}));


function number(...num1){
    return num1
}

console.log(number(200,300,345,500));

 
// console.log(number(200,300,345,500).toString());  => just try to convert  array into string and its work

