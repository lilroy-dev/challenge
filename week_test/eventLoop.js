const customPromise = delay => new Promise(resolve => setTimeout(resolve, delay));

setTimeout(() => console.log('setTimeout1'), 1000);
setTimeout(() => console.log('setTimeout3'), 2000);
setTimeout(() => console.log('setTimeout2'), 500);
setTimeout(() => console.log('setTimeout4'), 1000);

customPromise(0).then(result => console.log('Promise 1'));
Promise.resolve(console.log('Promise 2'));
customPromise(2000).then(result => console.log('Promise 3'));
customPromise(1000).then(result => console.log('Promise 4'));
