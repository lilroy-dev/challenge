// my solution
const countVowels1 = (str) => {
    const w = ["a", "e", "i", "o", "u"];
    let count = 0;
    str.split('').forEach((word) => {
        if (w.includes(word)) {
            count++
        }
    })

    return count;
}

// my solution
const countVowels = (str) => {
    const w = ["a", "e", "i", "o", "u"];
    return str.split('').reduce((acc, el) => {
        if (w.includes(el)) {
            acc++
        }
        return acc;
    },0)
}


// gpt solution

const countVowels = (str) => {
    return (str.match(/[aeiou]/gi) || []).length;
};

// gpt solution
// Здесь мы можем использовать Set для более быстрого поиска гласных:
const countVowels = (str) => {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    return str.toLowerCase().split('').reduce((acc, el) => {
        if (vowels.has(el)) acc++;
        return acc;
    }, 0);
};

// gpt solution filter
const countVowels = (str) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').filter(char => vowels.includes(char)).length;
};


console.log(countVowels("hello world")) // 3
console.log(countVowels("javascript")); // 3
