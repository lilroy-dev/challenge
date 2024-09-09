//solution #1

const mergeObjects = (obj1, obj2) => {
    const mergedMap = new Map([...Object.entries(obj1), ...Object.entries(obj2)]);
    return Object.fromEntries(mergedMap);
};

const mergeObjects1 = (obj1, obj2) => {
    return {...obj1, ...obj2 };
}

//solution #2
const mergeObjects2 = (obj1, obj2) => {
    const obj = {};
    for (const key in obj1) {
        obj[key] = obj1[key];
    }

    for (const key in obj2) {
        obj[key] = obj2[key];
    }
    return obj;
}


//solution #3
const mergeObjects3 = (obj1, obj2) => {
    return Object.assign({}, obj1, obj2);
};


console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 })); // { a: 1, b: 3, c: 4 }
console.log(mergeObjects({ name: 'Alice' }, { age: 25 })); // { name: 'Alice', age: 25 }
