const reverseString1 = (string) => {
    return string.split('').reverse().join('');
}


const reverseString2 = (string) => {
    const arrWords = string.split('');
    const result = arrWords.reduceRight((acc, word) => {
        return acc.concat(word);
    },[])

    return result.join();
}

const reverseString3 = (string) => {
    const arrWords = string.split('');
    const result = [];

    for (let i = arrWords.length -1; i >= 0; i--) {
        result.push(arrWords[i])
    }

    return result.join('');
}

const reverseString = (string) => {
    let result = '';
    for (let i = string.length - 1; i >= 0; i--) {
        result += string[i];
    }
    return result;
};


console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
