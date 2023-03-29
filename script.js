// Assignment Code
var generateBtn = document.querySelector("#generate");

// when they click this button a prompt pops up which has multiple feilds (one feild for length,uppercase,lowercase,numbers,specialCharacters). And a submitt button
// when they hit the submit button, i will run a validate function which makes sure that the character length is between 8-128 and that at least one character type of chosen. At lease one of those checkboxes has to be true. 
// if the criteria is not met, dont offer the password and alert user. 
// if criteria is met generate a password. 

function generatePassword(
    length,
    uppercase,
    lowercase,
    numbers,
    specialCharacters,
    ) {

    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
    const numbersChars = "0123456789"
   const chars = "@#$%^&*()_+?><:{}[]'"

   var passwordLength = length;
   var password = '';

    for (var i = 8; i < passwordLength; i++) {
     var number = Math.floor(Math.random() * chars.length);
     return password;
}
}

    //  passsword += chars.substring(number, number +1);
    //  console.log(password);


// return "Generated Password";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password").passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


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