
const removeDuplicates1 = (arr) => {
    return [...new Set(arr)];
}


const removeDuplicates2 = (arr) => {
    return arr.filter((item, index) => arr.indexOf(item) === index);
};

const removeDuplicates3 = (arr) => {
    return arr.reduce((unique, item) => {
        if (!unique.includes(item)) {
            unique.push(item);
        }
        return unique;
    }, []);
};

removeDuplicates([1, 2, 3, 1, 2, 4, 5]);
// Ожидаемый результат: [1, 2, 3, 4, 5]

