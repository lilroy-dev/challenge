// Задача 15: Уникальные значения из двух массивов
// Напиши функцию, которая принимает два массива и возвращает новый массив, содержащий только уникальные элементы из обоих массивов (без повторений).


const uniqueValues1 = (arr1, arr2) => {
   return [...arr1, ...arr2].filter((el, index, array) => array.indexOf(el) === array.lastIndexOf(el));
}



const uniqueValues = (arr1, arr2) => {
    return [...arr1, ...arr2].reduce((acc, el) => {
        if (!acc.includes(el)) {
            acc.push(el);
        } else {
            const index = acc.indexOf(el);
            acc.splice(index, 1);
        }
       return acc
    },[])
}


console.log(uniqueValues([1, 2, 3], [2, 3, 4])); // [1, 4]
console.log(uniqueValues([5, 6], [5, 7, 8])); // [6, 7, 8]
