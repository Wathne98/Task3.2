"use strict";
import { initPrintOut, printOut, newLine } from "../../common/script/utils.mjs";
initPrintOut(document.getElementById("txtOut"));

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let up = '';
let down = '';

for (let i = 1; i <= 10; i++) {
    up += i + ' ';
}

for (let i = 10; i >= 1; i--) {
    down += i + ' ';
}

printOut(up.trim()); // Print the counting up
printOut(newLine);
printOut(down.trim()); // Print the counting down
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let targetNumber = 45; // This can be any number between 1 and 60
let guessedNumber;

do {
    guessedNumber = Math.floor(Math.random() * 60) + 1; // Generates a random number between 1 and 60
} while (guessedNumber !== targetNumber);

printOut(`The guessed number is: ${guessedNumber}`);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
targetNumber = Math.floor(Math.random() * 1000000) + 1; // Target number between 1 and 1,000,000
guessedNumber = 0;
let guesses = 0;
const startTime = Date.now();

do {
    guessedNumber = Math.floor(Math.random() * 1000000) + 1; // Generate random number
    guesses++;
} while (guessedNumber !== targetNumber);

const endTime = Date.now();
const timeTaken = endTime - startTime; // Time in milliseconds

printOut(`Guessed number: ${guessedNumber}`);
printOut(`Number of guesses: ${guesses}`);
printOut(`Time taken: ${timeTaken} milliseconds`);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primeNumbers = [];
for (let num = 2; num < 200; num++) {
    let isPrime = true;
    for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
        if (num % divisor === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primeNumbers.push(num);
    }
}
printOut(`Prime numbers between 1 and 200: ${primeNumbers.join(', ')}`);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++) {
    let output = '';
    for (let col = 1; col <= 9; col++) {
        output += `K${col}R${row} `;
    }
    printOut(output.trim()); // Print each row
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let i = 0; i < 5; i++) {
    let grade = Math.floor(Math.random() * 236) + 1; // Random grade from 1 to 236
    let letterGrade;

    if (grade >= 212) letterGrade = 'A';
    else if (grade >= 182) letterGrade = 'B';
    else if (grade >= 154) letterGrade = 'C';
    else if (grade >= 125) letterGrade = 'D';
    else if (grade >= 97) letterGrade = 'E';
    else letterGrade = 'F';

    printOut(`Student ${i + 1} grade: ${grade} (${letterGrade})`);
}

// Bonus: Sorting grades in descending order without arrays
let grades = [];
for (let i = 0; i < 5; i++) {
    let grade = Math.floor(Math.random() * 236) + 1;
    let letterGrade;

    if (grade >= 212) letterGrade = 'A';
    else if (grade >= 182) letterGrade = 'B';
    else if (grade >= 154) letterGrade = 'C';
    else if (grade >= 125) letterGrade = 'D';
    else if (grade >= 97) letterGrade = 'E';
    else letterGrade = 'F';

    grades.push(letterGrade);
}

let sortedGrades = '';
for (let letter of ['A', 'B', 'C', 'D', 'E', 'F']) {
    for (let grade of grades) {
        if (grade === letter) {
            sortedGrades += grade + ' ';
        }
    }
}
printOut(`Sorted grades: ${sortedGrades.trim()}`);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function rollDice() {
    return Math.floor(Math.random() * 6) + 1; // Simulate a dice roll (1 to 6)
}

let throws = 0;
let diceResults = new Array(6).fill(0);

while (true) {
    throws++;
    const rolledDice = [rollDice(), rollDice(), rollDice(), rollDice(), rollDice(), rollDice()];

    rolledDice.forEach(die => {
        diceResults[die - 1]++;
    });

    // Check for full straight (1, 2, 3, 4, 5, 6)
    if (diceResults.every(count => count > 0)) break; // Exit if all numbers are rolled at least once
}

printOut(`Total throws to get full straight: ${throws}`);
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with your answer!");
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with your answer!");
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Replace this with your answer!");
printOut(newLine);
