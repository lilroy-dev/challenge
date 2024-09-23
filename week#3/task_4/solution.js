// Найти второй по величине элемент массива
// Напиши функцию, которая принимает массив чисел и возвращает второй по величине элемент.

const secondLargest = (arr) => {
    // Если в массиве меньше 2 элементов, вернуть undefined
    if (arr.length < 2) {
        return undefined;
    }

    let max = -Infinity; // Начальное значение для максимума
    let secondMax = -Infinity; // Начальное значение для второго максимума

    // Перебираем массив
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max; // Второй максимум становится предыдущим максимумом
            max = arr[i]; // Новый максимум
        } else if (arr[i] > secondMax && arr[i] !== max) {
            secondMax = arr[i]; // Обновляем второй максимум, если текущее значение больше второго максимума
        }
    }

    // Если второй максимум не обновлялся, возвращаем undefined
    return secondMax === -Infinity ? undefined : secondMax;
}

console.log(secondLargest([10, 5, 8, 12, 3])); // 10
console.log(secondLargest([1, 1, 1, 1])); // undefined (все элементы одинаковы)
console.log(secondLargest([1,5, 1,6,2, 3])); // 3 (все элементы одинаковы)
console.log(secondLargest([-5, -2, -9, -3])); // -3 (все элементы одинаковы)
