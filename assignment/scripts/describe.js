// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create string variable name and give it a value of Dane. 
// We check if name is equal to Mary. 
// If string variable name is equal to Mary then we will console log 'Hi, Mary!'. Else, if name is equal to anything other than Mary, then we will console log 'How do you do?'
// Due to the fact that string variable name is equal to Dane, then we console log 'How do you do'.
// 
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create variable secret and give it no value. We also create number variable code and give it the value of 123. 
// We check if the value of secret is 'super' and if we multiply the value of number variable code by two.
// If code is equal to exacly 123, the value of secret is set to 'super' and the value of code is multiplied by 2.
// Number variable code is equal to exactly 123, so variable secret is given the value of 'super' (making variable secret a string variable) and number variable code is now equal to 246.
// We check if the value of secret will change to 'duper'. 
// If the value of number variable code is more than 250, then the value of secret is change to 'duper'. 
// Number variable code is lees than 250, so the value of string variable secret stays as 'super'
// We console log the string variable secret which will read as 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create boolean variable isStudent and give it the value of true. 
// We create number variable age and givie it the value of 34.
// We create number variable zip and give it the value 55407.
// We check for a message to log based of the following conditionals.
// If isStudent is true and zip is more than 8000, we log 'You're a student on the West Coast!'
// If isStudent is false or age is less than 30, we log 'What are your hobbies?'
// If isStiudent is true, we log 'Welcome to Prime!'
// Else, we log 'How about the weather?'
// isStudent is true and zip being less than 8000
// We console.log 'Welcome to Prime!'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne value. Should be colorOne is equal to blue
let colorOne = 'red';

// FIX - colorTwo value. Should be colorTwo is equal to red
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
//FIX - colorTwo change is missing. Should add colorTwo is equal to 'purple'
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//FIX - Wrong compound conditional symbol. || should be &&
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX - conditional is set up incorrectly. Should be if(age >= minAge) {console.log('enter')} else {console.log('no entry')}
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

