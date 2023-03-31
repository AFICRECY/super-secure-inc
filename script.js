// Assignment Code

// Pseudo-Code:
// 1. when the user clicks the button "Generate Password"
// 2. A prompt pops up that asks her how many characters they want to include and telling them there is a limit 8-128
// 3. User a)types in entry or b)selects an amount either too big or too small.
// 4. If b)another prompt pops up telling them they need to re choose another number a) the confirm button pops up for a choice 
// to include uppercase letters 
// 5. Another conirm button pops up for lowercase characters 
// 6. Another confirm button pops up for numbers 
// 7. Another window pops up for special characters. 
// 8. There is a function that adds up all the persons preferences and does a .mathrandom() to randomly select (within the character 
// length) what their auto generated password is. 
// 9. password pops up in the input box. 

// Initial pseudo code
// 1. Prompt the user for the password criteria.
// (Password length between 8<128)
// (Lowercase, uppercase, special characters)
// 2. Validate the input
// 3. Generate Password



var uppercaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lowercaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var numbersChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
var chars = ['@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '?', '>,', ':', '{', '}', '[', ']']
var finalCharactersArray = [];
var passwordLength;
var options = "";
var wantsUppercase;
var wantsLowercase;
var wantsNumbers;
var wantsChars;

var generateBtn = document.querySelector("#generate");
// this button cooresponds with the id in the html and generates the write password function.
var passwordElement = document.querySelector("#password");

console.log("options", options);

function generatePassword() {
   // password will change as characters are added to it down below
   var password = "";

   // prompt the user for password length. How?
   passwordLength = prompt("How long would you like for your password to be? (Must be between 8 and 128 characters)");
   
   if (passwordLength == null) return null;
   //console.log('passwordLength pre parsing', typeof passwordLength, passwordLength)
   passwordLength = parseInt(passwordLength);

   //console.log('passwordLength post parsing', typeof passwordLength, passwordLength)
   
   // if the user does not input a number, the isNaN function will run and will bring up the alert, write password will be 
   // initiated again and bring the user back to the prompt.
   if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert('Hey please select a proper length');
      // after the alert, run writePassword again
      writePassword();
      return null;
   } else {
      // this else code runs if the user selected a value between 8 and 128!
      wantsUpper = confirm('Do you want uppercase letters in your password?');
      wantsLower = confirm('Do you want lowercase letters in your password?');
      wantsNumbers = confirm('Do you want numbers in your password?');
      wantsChars = confirm('Do you want special characters in your password?');


      // if the user presses okay to any of the above variables (wantsUpper,wantsLower,wantsNumbers, or wantsChars) 
      // their input is stored in in the empty variables at the top of the page and added to the finalCharactersArray through concat.(concatenation)
      if (wantsUpper) {
         finalCharactersArray = finalCharactersArray.concat(uppercaseChars);
         console.log('finalCharactersArray looks like ', finalCharactersArray);
      };
      if (wantsLower) {
         finalCharactersArray = finalCharactersArray.concat(lowercaseChars);
         console.log('finalCharactersArray looks like ', finalCharactersArray);
      };
      if (wantsNumbers) {
         finalCharactersArray = finalCharactersArray.concat(numbersChars);
         console.log('finalCharactersArray looks like ', finalCharactersArray);
      };
      if (wantsChars) {
         finalCharactersArray = finalCharactersArray.concat(chars);
         console.log('finalCharactersArray looks like ', finalCharactersArray);
      }

      // now that you have an array of all the possible characters the user wants
      // randomly select a character, add it to some string, and repeat this as many times
      // as you need to reach the length desired by the user
      for (var i = 0; i < passwordLength; i++) {
         var index = Math.floor(Math.random() * finalCharactersArray.length);
         password = password + finalCharactersArray[index]
      }
      console.log("password", password)
      return password;

   }

}

function writePassword() {
   var password = generatePassword();
   // If the returned value from generatePassword above happens to be null or undefined, then
   // in the line of code below, I check whether the value is null or undefined and if it's true then I set
   // the text content of my password element to 'Try again'; if it's NOT null or undefined, then I simply set
   // the text content to my variable password.
   passwordElement.textContent = password ?? 'Try again';
}

generateBtn.addEventListener('click', writePassword);







