// solution #1
const slowFunction = (num) => {
    console.log('Computing...');
    return num * 2;
};

function memoize (func) {
    const cache = new Map();
    return function (...arg) {
       const key = JSON.stringify(arg);
       if (cache.has(key)) {
           console.log('from cache');
           return cache.get(key);
       }
       const result = func(...arg);
       cache.set(key, result);
       return result;
    }
}

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); // Computing... 10
console.log(memoizedFunction(5)); // 10 (из кэша)
console.log(memoizedFunction(10)); // Computing... 20
console.log(memoizedFunction(10)); // 20 (из кэша)
