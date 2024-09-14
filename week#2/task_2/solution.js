const areAnagrams1 = (str1, str2) => {
    return str1.split('').sort().join('') === str2.split('').sort().join('')
}

const areAnagrams = (str1, str2) => {
    const arr_1 = str1.split('').sort();
    const arr_2 = str2.split('').sort();

    if (arr_1.length !== arr_2.length) return false;

    for (let i = 0; i < arr_1.length; i++) {
        if (arr_1[i] !== arr_2[i]) return false;
    }
    return true;
}



console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world')); // false
