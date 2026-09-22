// ==========================================
// PART 1: PROGRAMMING LOGIC & CONTROL FLOW
// Q1 - Q12
// ==========================================


// Q1. FizzBuzz

function fizzBuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

console.log("Q1: FizzBuzz");
fizzBuzz(5);


// Q2. Grade Classifier

function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

console.log("\nQ2: Grade Classifier");
console.log(getGrade(95)); // A
console.log(getGrade(72)); // C
console.log(getGrade(46)); // F


// Q3. Day Type

function dayType(day) {
  switch (day) {
    case "Saturday":
    case "Sunday":
      return "Weekend";

    default:
      return "Weekday";
  }
}

console.log("\nQ3: Day Type");
console.log(dayType("Sunday")); // Weekend
console.log(dayType("Tuesday")); // Weekday


// Q4. Sum of Even Numbers

function sumEven(number) {
  let sum = 0;

  for (let i = 1; i <= number; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}

console.log("\nQ4: Sum of Even Numbers");
console.log(sumEven(10)); // 30


// Q5. Factorial

function factorial(number) {
  let result = 1;

  for (let i = 2; i <= number; i++) {
    result *= i;
  }

  return result;
}

console.log("\nQ5: Factorial");
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1


// Q6. Count Vowels

function countVowels(sentence) {
  let count = 0;
  const vowels = "aeiou";

  const lowercaseSentence = sentence.toLowerCase();

  for (const character of lowercaseSentence) {
    if (vowels.includes(character)) {
      count++;
    }
  }

  return count;
}

console.log("\nQ6: Count Vowels");
console.log(countVowels("JavaScript")); // 3


// Q7. Reverse a Number

function reverseNumber(number) {
  let reversed = 0;

  while (number > 0) {
    const lastDigit = number % 10;

    reversed = reversed * 10 + lastDigit;

    number = Math.floor(number / 10);
  }

  return reversed;
}

console.log("\nQ7: Reverse a Number");
console.log(reverseNumber(1234)); // 4321


// Q8. Find the Maximum

function findMax(numbers) {
  let maximum = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maximum) {
      maximum = numbers[i];
    }
  }

  return maximum;
}

console.log("\nQ8: Find the Maximum");
console.log(findMax([3, 9, 1, 7])); // 9


// Q9. Is Prime

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log("\nQ9: Is Prime");
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log(isPrime(1));  // false


// Q10. Temperature Converter
// Arrow Function

const cToF = (celsius) => (celsius * 9 / 5) + 32;

console.log("\nQ10: Temperature Converter");
console.log(cToF(0));   // 32
console.log(cToF(100)); // 212


// Q11. Counter with Scope

function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const next = makeCounter();

console.log("\nQ11: Counter with Scope");
console.log(next()); // 1
console.log(next()); // 2
console.log(next()); // 3


// Q12. Word Frequency Object

function wordCount(sentence) {
  const words = sentence.toLowerCase().split(" ");
  const wordFrequencies = {};

  for (const word of words) {
    wordFrequencies[word] = (wordFrequencies[word] || 0) + 1;
  }

  return wordFrequencies;
}

console.log("\nQ12: Word Frequency Object");
console.log(wordCount("a b a c a b"));
// { a: 3, b: 2, c: 1 }


// ==========================================
// END OF PART 1
// ==========================================