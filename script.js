// Assignment Code

var passwordLength = 128;
var choice = ""
var uppercaseChars = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var lowercaseChars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var numbersChars = ['0','1','2','3','4','5','6','7','8','9']
var chars = ['@','#','$','%','^','&','*','(',')','_','+','?','>,',':','{','}','[',']']

var generateBtn = document.querySelector("#generate");
// this button cooresponds with the id in the html and generates the write password function.

generateBtn.addEventListener("click", writePassword);

function writePassword() {
   var promptP = getPrompt() {
   var passWordInput = 
   }
}

var userChoice = prompt("How many characters would you like for your password to be included?");
for (var i = 8; i < passwordLength; i++) {
   var number = Math.floor(Math.random() * chars.length);

}


if (lowercase = true) {
   charOptions = charOptions + lowercaseChars;
}
if (uppercase = true) {
   charOptions = charOptions + uppercaseChars;
}
if (numbersChars = true) {
   charOptions = charOptions + numbersChars;
}
if (chars = true) {
   charOptions = charOptions + chars;
}






// when they click this button a prompt pops up which has multiple feilds (one feild for length,uppercase,lowercase,numbers,specialCharacters). And a submitt button
// when they hit the submit button, i will run a validate function which makes sure that the character length is between 8-128 and that at least one character type of chosen. At lease one of those checkboxes has to be true. 
// if the criteria is not met, dont offer the password and alert user. 
// if criteria is met generate a password. 
// have a const charOptions, which will be a combination of the const defined. Based on whether or not the given values are true. Add all the trues together to make one big string. 
// 


function generatePassword(
    length,
    uppercase,
    lowercase,
    numbers,
    specialCharacters,
    ) {

    var charOptions = ""
    const uppercaseChars = "'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'"
    const lowercaseChars = "'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v,'w','x','y','z'"
    const numbersChars = "'0','1','2','3','4','5','6','7','8','9'"
    const chars = "'@','#','$','%','^','&','*','(',')','_','+','?','>,',':','{','}','[',']''"
    displayList









// create master list.



   var passwordLength = length;
   var password = '';

    for (var i = 8; i < passwordLength; i++) {
     var number = Math.floor(Math.random() * chars.length);
    //  create variable char that is char options at index of the number. 
}
return password;
}
// its chars*length because we are choosing a random number from our char options.
// random number is the index of the string we are trying to use. 

    //  passsword += chars.substring(number, number +1);
    //  console.log(password);


// return "Generated Password";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password").passwordText.value = password;

}

// Add event listener to generate button




// 1. Prompt the user for the password criteria.
// (Password length between 8<128)
// (Lowercase, uppercase, special characters)
// 2. Validate the input
// 3. Generate Password




//4.Display generated password on the page.


 //    defined the function by setting chars equal to all the character inputs that the password generator would pull from. 

// set the max password length to be at 128 characters. Then set the variable of password equal to an empty string because Javascript will populate the value when the function is complete. 
// console.log("Clicked")

// setting i at its minimum length, and then setting the passwordLength to 128 at its max length. i followed some of the range function.
 // created a random number selection with Math.random() to select any random number from the list. 

// use a substring to extract the characters from the string, while the math.random() randomly selected the characters.