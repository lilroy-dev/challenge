// Реализация функции для перевода строки в "змеиный_регистр" (snake_case).

const toSnakeCase = (str) => {
    let formatedStr = str.replace(/[^a-zA-Zа-яА-Я0-9\s]/g, '');
    let result = ''

    for (let i = 0; i < formatedStr.length; i++) {
        if (formatedStr[i].toUpperCase() === formatedStr[i] || formatedStr[i] === ' ') {
            result +=  i > 0  ? `_${formatedStr[i]}` : formatedStr[i];
        }else {
            result += `${formatedStr[i]}`;
        }
    }

    return result;
}

console.log(toSnakeCase("Hello World!")); // "hello_world"
console.log(toSnakeCase("JavaScriptIsAwesome")); // "javascript_is_awesome"


// 1. Убрать все символы
// 2. делить слова до большой буквы или до рпобела на масси Элементов
// 3. Отдать все слово в нижнем регистре
