// Задача 16: Удаление falsy-значений из массива
// Напиши функцию, которая принимает массив и удаляет из него все "falsy"-значения (например, false, 0, "", null, undefined, NaN).
//

const removeFalsy1 = (arr) => {
    return arr.reduce((acc, cur) => {
        if(!!cur) {
            acc.push(cur);
        }
        return acc;
    },[]);
}

const removeFalsy2 = (arr) => {
   return arr.filter((item) => !!item)
}

const removeFalsy3 = (arr) => {
    if (arr.length === 0) return [];
    const [first, ...rest] = arr;
    return first ? [first, ...removeFalsy3(rest)] : removeFalsy3(rest);
};


const removeFalsy = (arr) => {
    return arr.filter(Boolean);
};



console.log(removeFalsy([0, 1, false, 2, '', 3, null, undefined])); // [1, 2, 3]
