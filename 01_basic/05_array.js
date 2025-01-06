let arr = [0,1,2,3,4,5]
// console.log(arr);


// ************************These are some method in the array*************************************************************
// console.log(arr.push(6));    it(push) add a value in the array

// console.log(arr.pop());   it(pop) delete  the last  value in the array

// console.log(arr.indexOf(4));   use to find the index of a element inthe array

// console.log(arr.length);


// console.log(arr.includes(4));   (maybe)use to find the element is present in the array or not.
// arr.shift(7)


// console.log(arr.unshift(9)); lnserts new elements at the start of an array, and returns the new length of the array.
// console.log(arr);


// const newarr = arr.join()
// console.log(newarr);
// console.log(typeof newarr)

// +++++++++++++++++++++++++++++++++++++++
 let school_friend = ["mohit","rajat","jetain"]
 let collage_friend = ["lavish","ritik","rohit"]

//  school_friend.push(collage_friend)
// console.log(school_friend);


// school_friend.concat(collage_friend)
// console.log(school_friend.concat(collage_friend));


// const newhero = [...collage_friend,...school_friend]
// console.log(newhero);

const  another_array = [1,2,[3,4],5,[6,7],8]

const new_another_array = another_array.flat(Infinity)//important
console.log(new_another_array);


