// #1 my solution

const groupBy1 = (arr, nameGroup) => {
    const obj = {};
    arr.forEach(item => {
        if (item.hasOwnProperty(nameGroup)) {
            obj[item[nameGroup]] = obj[item[nameGroup]] ? [...obj[item[nameGroup]]] : [];
            if (obj[item[nameGroup]]) {
                obj[item[nameGroup]].push(item);
            }
        }
    })
    return obj;
}


// #2 my solution
const groupBy2 = (arr, nameGroup) => {
    const obj = new Map();
    arr.forEach(item => {
        if(obj.has(item[nameGroup])) {
            const value = obj.get(item[nameGroup]);
            obj.set(item[nameGroup], [...value, item] )
        } else {
            obj.set(item[nameGroup], [item]);
        }
    })
    return obj
}


// #3 my solution
const groupBy = (arr, nameGroup) => {
   return arr.reduce((acc, item) => {
       if (acc.hasOwnProperty(item[nameGroup])) {
           acc[item[nameGroup]] = [...acc[item[nameGroup]], item];
       } else {
           acc[item[nameGroup]] =  [item]
       }
       return acc;
    },{})
}

const users = [
    { id: 1, name: "Alice", group: "A" },
    { id: 2, name: "Bob", group: "B" },
    { id: 3, name: "Charlie", group: "A" },
    { id: 4, name: "David", group: "B" },
    { id: 5, name: "Eve", group: "C" },
];

console.log(groupBy2(users, 'group'));
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
