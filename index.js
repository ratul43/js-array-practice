// No. 01

function calculateDifference(a,b){
    return a-b;
}
const result = calculateDifference(10, 5);
console.log(result)

// No. 02

function isOdd(a){
    return a%2!==0 ;
}
console.log(isOdd(5));
console.log(isOdd(4));

// No. 03

    function findMin(arr) {
        if (arr.length === 0){
            return undefined;
        }
    

    let min = arr [0];
    for (let i = 1; i< arr.length; i++) {
        if (arr[i]< min) {
            min = arr[i];
        }
    }
    return min;
}


    const numbers = [3, 6, 2, 7];
    console.log(findMin(numbers));

    // No. 04
    function filterEvenNumbers(arr) {
        return arr.filter(function (number) {
            return number % 2 === 0;
        });
    }

    const numeric = [1, 4, 6, 2, 7, 9];
    const evenNumbers = filterEvenNumbers(numeric);
    console.log(evenNumbers);

    // No. 05
    function sortArrayDescending(arr) {
        return arr.slice().sort(function(a, b){
            return b - a;
        });
    }
    const numb = [3, 1, 5, 6, 8, 9];
    const sortedNumbers= sortArrayDescending(numbers);
    console.log(sortedNumbers)

    // No. 06
    function lowercaseFirstLetter(str) {
        if (str.length === 0){
            return str;
        }
        return str.charAt(0).toLowerCase() + str.slice(1);
    }
    const firstlower = lowercaseFirstLetter("Hello World");
    console.log(firstlower);

    // No. 07
    function countVowels(str) {
        const vowels = 'aeiouAEIOU';
        let count = 0;

        for (let char of str) {
            if(vowels.includes(char)){
                count++;
            }
        }
        return count;
    }
    const letter= countVowels("Hello World");
    console.log(letter)

    // No. 08
    function findAverage(arr) {
        if (arr.length === 0) {
            return 0;
        }
        let sum = arr. reduce(function (total, num){
            return total + num;
        },0);
        
        return sum / arr.length;
    }
    const num = [4, 7, 22, 64, 34, 86];
    const average = findAverage(num);
    console.log(average);