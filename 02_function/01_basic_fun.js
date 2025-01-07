// syntex of function
/*
function name(params) {
    body....
}
*/


function addNumbers(number1 ,number2) {
    return number1 +number2
}
//  console.log("result: ",addNumbers(30,5));


 function user(username= "you" ){
    if(username === undefined){
        console.log("please enter a user name");
        }
      return `${username} just loggin now`
 }
//  user()
 console.log(user("punit singh"))

