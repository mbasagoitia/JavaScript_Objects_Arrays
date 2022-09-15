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

//Same solution using reduce

function sumArray2 (array) {
    let sum = array.reduce((acc, num) => {
        return acc + num;
    }, 0);
    return sum;
}

//Same solution using a for loop

function sumArray3 (array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
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

//using the built-in reverse method (I have this commented out to avoid errors with below solution)

// let wordArray = sentence.split(" ");
// let resultArr = [];
// wordArray.forEach((word) => {
//     let reversedWord = word.split("").reverse().join("");
//     resultArr.push(reversedWord);
// })
// let result = resultArr.join(" ");
// console.log(result);

//another try using my own reverse method

function myReverse (array) {
    //will take an array of split letters ex) ["a", "r", "r", "a", "y"]
    let reversedArr = [];
    array.forEach((letter) => {
        reversedArr.unshift(letter);
    })
    let reversedString = reversedArr.join("");
    return reversedString;
}

let wordArray = sentence.split(" ");
let resultArr = [];
wordArray.forEach((word) => {
    let splitWord = word.split("");
    let reversedWord = myReverse(splitWord);
    resultArr.push(reversedWord);
})
let result = resultArr.join(" ");
console.log(result);

//Exercise 4

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";

//I made a test case to see if it still works with a header of more than 2 values
let csvData2 = "name,age,height\nFrodo,50,3ft\nSam,38,3ft\nMerry,36,3ft";

function parseData (csv) {
    
    let results = [];

    let dataArray = csv.split("\n");
    let keysArray = dataArray.shift().split(","); 
    let valuesArray = [];

    for (let value of dataArray) {
        let newArr = [];
        let newValue = value.split(",");
        newArr.push(newValue);
        valuesArray.push(newArr);
    }

    for (let dataSet of valuesArray) {
        let newObj = {};
        for (let item of dataSet) {
            for (let i = 0; i < keysArray.length; i++) {
                newObj[keysArray[i]] = item[i];
            }
            results.push(newObj);
        }
    }

    return results;

}

parseData(csvData);