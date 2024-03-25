import PromptSync from "prompt-sync";
const prompt = PromptSync();
let userInput = prompt("Please Enter Your Name Here: ");
console.log("Hello " + userInput + ', nice to meet you!');
let num1 = parseInt(prompt('Please Enter your first number: '));
let num2 = parseInt(prompt('Enter your second number: '));
console.log(num1 + num2);
console.log('Here is your answer ThankYou!');
