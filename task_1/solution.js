// solution #1

const arr= [1,8,3,9,12,13,2,5,6];

const sortEvents = (arr) => {
    const events = [];

    arr.forEach(element => {
        if(element % 2 === 0) events.push(element);
    })

    events.sort((a,b) => a - b);

    return arr.map(element => {
        if(element % 2 === 0) return events.shift();
        return element;
    });
}

console.log(sortEvents(arr));


// solution #2

let arr_2 = [1, 8, 3, 9, 12, 13, 2, 5, 6];

// Извлекаем и сортируем четные числа
let evenNumbers = arr_2.filter(num => num % 2 === 0).sort((a, b) => a - b);

// Используем замыкание для замены четных чисел на отсортированные
let result = arr_2.map(num => {
    return num % 2 === 0 ? evenNumbers.shift() : num;
});

console.log(result); // [1, 2, 3, 9, 6, 13, 8, 5, 12]
