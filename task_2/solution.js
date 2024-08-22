const uniqueElements1 = (arr) => {
    const countMap = new Map();

    // Шаг 1: Подсчёт вхождений каждого элемента
    arr.forEach(el => {
        if (countMap.has(el)) {
            const value = countMap.get(el);
            countMap.set(el, value + 1);
        } else {
            countMap.set(el, 1);
        }
    });

    // Шаг 2: Фильтрация элементов, которые встречаются только один раз
    const uniqueArray = [];
    for (const [key, value] of countMap) {
        if (value === 1) {
            uniqueArray.push(key);
        }
    }

    return uniqueArray;
}


const uniqueElements = (arr) => {
    return arr.filter((el, index) => arr.indexOf(el) === arr.lastIndexOf(el));
}

console.log(uniqueElements([1, 2, 2, 2, 3, 4, 4, 5])); // [1, 3, 5]
console.log(uniqueElements([7, 7, 8, 8, 9, 9]));    // []
console.log(uniqueElements(['a', 'b', 'b', 'c']));   // ['a', 'c']
console.log(uniqueElements([]));                     // []
