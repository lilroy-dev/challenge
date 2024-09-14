// Есть два сервиса которые возвращает список активных заявок на кредит
// отсортировать по возрастанию по id
// id сквозное для обоих сервисов
// неоходимо вернуть список из k последних заявок на кредит с наилучим н айбыстрым алгоритмом

const getDecisions1 = [
    {id:1, result: 'approved'},
    {id:3, result: 'waiting'},
    {id:15, result: 'approved'},
    {id:20, result: 'approved'},
    {id:26, result: 'waiting'},
    {id:30, result: 'approved'},
]


const getDecisions2 = [
    {id:2, result: 'approved'},
    {id:4, result: 'waiting'},
    {id:14, result: 'approved'},
    {id:16, result: 'approved'},
    {id:23, result: 'waiting'},
    {id:32, result: 'approved'},
]


const getLastDecisions = (decision1, decision2, k) => {


}


console.log(getLastDecisions(getDecisions1, getDecisions2, 5));

// [
//     { id: 32, result: 'approved' },
//     { id: 30, result: 'approved' },
//     { id: 26, result: 'waiting' },
//     { id: 23, result: 'waiting' },
//     { id: 20, result: 'approved' }
// ]

