// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
   const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*()_+?><:{}[]’"
//    defined the function by setting chars equal to all the character inputs that the password generator would pull from. 
   var passwordLength = 128;
   var password = '';
// set the max password length to be at 128 characters. Then set the variable of password equal to an empty string because Javascript will populate the value when the function is complete. 
console.log("Clicked")



// 1. Prompt the user for the password criteria.
// (Password length between 8<128)
// (Lowercase, uppercase, special characters)
// 2. Validate the input
// 3. Generate Password




//4.Display generated password on the page.


return "Generated Password";
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);