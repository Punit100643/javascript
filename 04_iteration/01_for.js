for (let i = 0; i <=10; i++) {
    // const element = array[i];
    console.log(i);
}

for (let i = 2; i <=10; i++) {
    console.log(`inner loop ${i}`);
    
    for (let j = 0; j <=10; j++) {
        console.log(i + `*` + j + `=` + i*j);
    } 
}