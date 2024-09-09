//solution #1

const mergeAndSort = (arr1,arr2) => {
    const result = [...arr1, ...arr2];

    return [...new Set(result)].sort();
}


console.log(mergeAndSort([1, 3, 5], [2, 3, 6])); // [1, 2, 3, 5, 6]
console.log(mergeAndSort([0, 2, 4], [1, 2, 3])); // [0, 1, 2, 3, 4]


//solution #2

const mergeAndSort = (arr1, arr2) => {
    const mergedArray = Array.from(new Set(arr1.concat(arr2)));
    return mergedArray.sort((a, b) => a - b);
}
