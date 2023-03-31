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
   passwordLength = prompt("Put below how many characters you would like your passowrd to be. Password must be between 8 and 128 characters");
   
   if (passwordLength == null) return null;
   //console.log('passwordLength pre parsing', typeof passwordLength, passwordLength)
   passwordLength = parseInt(passwordLength);

   //console.log('passwordLength post parsing', typeof passwordLength, passwordLength)
   
   if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
      alert('Hey please select a proper length');
      // after the alert, run writePassword again
      writePassword();
      return null;
   } else {
      // this else code runs if the user selected a value between 8 and 128!
      // what code do you want to run in the event the user selected a proper length?
      wantsUpper = confirm('Do you want uppercase letters in your password?');
      wantsLower = confirm('Do you want lowercase letters in your password?');
      wantsNumbers = confirm('Do you want numbers in your password?');
      wantsChars = confirm('Do you want special characters in your password?');

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

// function grabPrompt() {
//    options = [];

//    if (confirm("Do you want to include lowercase letters in your password?")) (lowercaseChars = true); {
//       options = options + lowercaseChars;
//       console.log("options", options);
//    }
//    if (confirm("Do you want to include uppercase letters in your password?")) (uppercaseChars = true); {
//       options = options + uppercaseChars;
//       console.log("options", options);
//    }
//    if (confirm("Do you want to include numbers in your password?")) (numbersChars = true); {
//       options = options + numbersChars;
//       console.log("options", options);


//    } generateBtn.addEventListener("click", writePassword);


//    function writePassword() {
//       var promptP = grabPrompt();
//       var passwordInput = document.querySelector("#password")

//       if (promptsP) {
//          var updatedpassword = generatePassword();
//          var passwordInput.value = updatedpassword;
//       } else {
//          passwordInput = "";
//       }
//    }
// }


function writePassword() {
   var password = generatePassword();
   // If the returned value from generatePassword above happens to be null or undefined, then
   // in the line of code below, I check whether the value is null or undefined and if it's true then I set
   // the text content of my password element to 'Try again'; if it's NOT null or undefined, then I simply set
   // the text content to my variable password.
   passwordElement.textContent = password ?? 'Try again';
}

generateBtn.addEventListener('click', writePassword);











// when they click this button a prompt pops up which has multiple feilds (one feild for length,uppercase,lowercase,numbers,specialCharacters). And a submitt button
// when they hit the submit button, i will run a validate function which makes sure that the character length is between 8-128 and that at least one character type of chosen. At lease one of those checkboxes has to be true. 
// if the criteria is not met, dont offer the password and alert user. 
// if criteria is met generate a password. 
// have a const charOptions, which will be a combination of the const defined. Based on whether or not the given values are true. Add all the trues together to make one big string. 
// 


// function generatePassword(
//     length,
//     uppercase,
//     lowercase,
//     numbers,
//     specialCharacters,
//     ) {

   //  var charOptions = ""
   //  const uppercaseChars = "'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'"
   //  const lowercaseChars = "'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v,'w','x','y','z'"
   //  const numbersChars = "'0','1','2','3','4','5','6','7','8','9'"
   //  const chars = "'@','#','$','%','^','&','*','(',')','_','+','?','>,',':','{','}','[',']''"
   //  displayList









// create master list.


//     for (var i = 8; i < passwordLength; i++) {
//      var number = Math.floor(Math.random() * chars.length);
//     //  create variable char that is char options at index of the number. 
// }
// return password;
// }
// its chars*length because we are choosing a random number from our char options.
// random number is the index of the string we are trying to use. 

    //  passsword += chars.substring(number, number +1);
    //  console.log(password);


// return "Generated Password";

// Write password to the #password input

// Add event listener to generate button







//4.Display generated password on the page.


 //    defined the function by setting chars equal to all the character inputs that the password generator would pull from.

// set the max password length to be at 128 characters. Then set the variable of password equal to an empty string because Javascript will populate the value when the function is complete. 
// console.log("Clicked")

// setting i at its minimum length, and then setting the passwordLength to 128 at its max length. i followed some of the range function.
 // created a random number selection with Math.random() to select any random number from the list.

// use a substring to extract the characters from the string, while the math.random() randomly selected the characters.