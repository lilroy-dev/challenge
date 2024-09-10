// Задача 15: Функция для создания "функции памяти"
// Напишите функцию memoize, которая принимает другую функцию в качестве аргумента и возвращает новую функцию, которая кэширует результаты вызовов исходной функции. Если мемоизированная функция вызывается с теми же аргументами, что и раньше, она должна вернуть сохраненное значение, не выполняя исходную функцию.


const slowFunction = (num) => {
    console.log('Computing...');
    return num * 2;
};

const memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5)); // Computing... 10
console.log(memoizedFunction(5)); // 10 (из кэша)
console.log(memoizedFunction(10)); // Computing... 20
console.log(memoizedFunction(10)); // 20 (из кэша)
