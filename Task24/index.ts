let personName: string = "Usama Qazi";
console.log("My name is 'Usama Qazi'? I predict True.");
console.log(personName == 'Usama Qazi');

console.log("\nMy name is not 'Usama Qazi'? I predict False.");
console.log(personName !== 'Usama Qazi');

let word: string = "Hello World";
word.slice().toLowerCase();
console.log(`\nIs word == 'hello world'? I predict True.`);
console.log(word == 'Hello World');

let digitTen: number = 10;
console.log("\nIs digitTen == 5? I predict False.");
console.log(digitTen == 5);

console.log("\nIs digitTen > 3? I predict True.");
console.log(digitTen > 3);

console.log("\nIs digitTen <= 8? I predict False.");
console.log(digitTen <= 8);

let age: number = 25;
let isStudent = true;
let hasExperience = false;
console.log("\nIs the age between 20 and 30, and the person is a student? I predict True.");
console.log(age >= 20 && age <= 30 && isStudent);

console.log("\nIs the age less than 18 or the person has work experience? I predict False.");
console.log(age < 18 || hasExperience);

let digits: number[] = [4, 5, 6];
console.log("\nIs 5 in the digits array? I predict True.");
console.log(digits.includes(5));

console.log("\nIs 12 in the digits array? I predict False.");
console.log(!digits.includes(5));
