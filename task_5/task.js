// Группировка объектов по значению свойства
// Напишите функцию groupBy, которая принимает массив объектов и строку — имя свойства, по которому нужно сгруппировать объекты.
// Функция должна возвращать объект, где ключами будут значения указанного свойства, а значениями — массивы объектов, имеющих это значение.


const users = [
    { id: 1, name: "Alice", group: "A" },
    { id: 2, name: "Bob", group: "B" },
    { id: 3, name: "Charlie", group: "A" },
    { id: 4, name: "David", group: "B" },
    { id: 5, name: "Eve", group: "C" }
];

groupBy(users, 'group')
/*
{
  A: [
    { id: 1, name: "Alice", group: "A" },
    { id: 3, name: "Charlie", group: "A" }
  ],
  B: [
    { id: 2, name: "Bob", group: "B" },
    { id: 4, name: "David", group: "B" }
  ],
  C: [
    { id: 5, name: "Eve", group: "C" }
  ]
}
*/
