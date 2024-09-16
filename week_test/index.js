console.log(1); // 1

Promise.resolve().then(() => {
    console.log(3); //3
});

Promise.resolve().then(() => {
    setTimeout(() => {
        console.log(4);
    },0)
})

setTimeout(() => {
    console.log(5);
},0)

setTimeout(() => {
   setTimeout(() => {
       console.log(6);
   })
},0)

Promise.resolve().then(() => {
    console.log(7);
})

console.log(2); //2

