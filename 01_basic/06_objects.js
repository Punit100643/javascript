let sym = Symbol("mykey")
const user = {
    name: "punit",
    [sym] : "mykey", //here "[]"  are use for declair symbols
    email : "punit@googole.com",
    location :"sanwar"
}

// console.log(user);

const user2 = {
    name  : "punit",
    location:{
        locallocation : "sanwar",
        global : "haryana",
    }
}

// console.log(user2.location.global);
// console.log(user2.location);

const obj1 = {a:1, b:2}
const obj2 = {c:3, d:4}

const obj3 = Object.assign(obj1,obj2)
console.log(obj3);

