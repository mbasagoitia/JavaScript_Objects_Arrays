console.log("Hello World!\n==========\n");

// Exercise 1 Section

const numbers = [2, 22, 12, 17, 18, 39, 129];

//Return the sum of the numbers in the array using forEach

function sumArray (array) {
    let sum = 0;
    array.forEach((num) => {
        sum += num;
    })
    return sum;
}

console.log(sumArray(numbers));

//Same solution using reduce

function sumArray2 (array) {
    let sum = array.reduce(function (acc, num) {
        return acc + num;
    }, 0);
    return sum;
}

console.log(sumArray2(numbers));

// Exercise 2 Section

const book = {};

book.title = "Watership Down";
book.author = "Richard Adams";
book.pages = 413;
book.readCount = 2;
book.info = function () {
    return `The book ${this.title} by ${this.author} has ${this.pages} pages, and I have read it ${this.readCount} times.`;
}

console.log(book.info());

//Exercise 3

let sentence = "The quick brown fox jumps over the lazy dog";

let reversedWordsArray = [];
let arrayOfWords = sentence.split(" ");

for (let word of arrayOfWords) {
    let reversedLettersArray = [];
    let arrayOfLetters = word.split("");
    for (let letter of arrayOfLetters) {
        reversedLettersArray.unshift(letter);
    }
    reversedWordsArray.push(reversedLettersArray.join(""));
}

let reversedSentence = reversedWordsArray.join(" ");

console.log(reversedSentence);

//using the built-in reverse method

let sentence2 = "The quick brown fox jumps over the lazy dog";

let arrayOfWords2 = sentence2.split(" ");
let reversedWordsArray2 = [];

for (let word of arrayOfWords2) {
    reversedWordsArray2.push(word.split("").reverse().join(""));
}
let reversedSentence2 = reversedWordsArray2.join(" ");
console.log(reversedSentence2);

//Exercise 4

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

let results = [];

let dataArray = csvData.split("\n");
let keysArray = dataArray.shift().split(",");
let valuesArray = [];

for (let value of dataArray) {
    let newArr = [];
    let newValue = value.split(",");
    newArr.push(newValue);
    valuesArray.push(newArr);
}

for (let pair of valuesArray) {
    let newObj = {};
    for (let item of pair) {
        newObj[keysArray[0]] = item[0];
        newObj[keysArray[1]] = parseInt(item[1]);
        results.push(newObj);
    }
}

console.log(results);
