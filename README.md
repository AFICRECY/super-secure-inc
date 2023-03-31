# Super-Secure-Inc


## Technology Used:
| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     | 
| Java | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)      | 

## Description: 

[Visit Deployed Site]: https://aficrecy.github.io/super-secure-inc/

There are many companies that handle sensitive and maybe even top secret information. And within those companies, it is required that their employees can have access to and handle that information without risks. In a world full of hackers and threats to online security, it is important to have a super secure password. Super Secure Inc. is a website that can auto generate a safe and secure password with consideration to the users preferences. This website contains a feature that allows the user to place their character length, letter, and number preferences to then produce an auto generated super secure password. With our AI automatically generating a random password, employeers and employees can breathe easy knowing their information and data are safe. 


## Table of Contents: 
* Installation (JavaScript, Functions Alert/Confirm/Prompt, IsNaN, and QuerySelectors)
* Usage
* Credits 
* License


### Installation: 
 This project required a decent knowledge of JavaScript. The code in script.js facilitates the interactivity with the user as well as the arithmetic required to select a random secure password. To start off with, I declare multiple global scope variables at the top of the page of code. However, there are some variables which were intentionally left empty and would be given a value later on in the code.
(The example below is of the empty variable at the top)
```
var finalCharactersArray = [];
var passwordLength;
```

(The example below is the last assigned value of those variables)
```
 passwordLength = prompt("How long would you like for your password to be? (Must be between 8 and 128 characters)");
 
  if (passwordLength == null) return null;
  //console.log('passwordLength pre parsing', typeof passwordLength, passwordLength)
  passwordLength = parseInt(passwordLength);
```

(the value of finalCharactersArray)
```
 password = password + finalCharactersArray(index)
```

More into the project I decided to use a document.queryselector which had handles (ids) registered within the HTML document. There were two ids (generate) and (password) that were placed on the button. When clicked, the variable (passwordElement)  and (generateBtn) will run the write password function at the bottom of the page where the (passwordElement.textContent) and (add.EventListener) are applied initiating the next step (alerts)


(The below code is the initial query selectors and their handles)
```
var generateBtn = document.querySelector("#generate");

var passwordElement = document.querySelector("#password");
```

(Here is where they are applied below.)
```
function writePassword() {
  var password = generatePassword();

  passwordElement.textContent = password ?? 'Try again';
}

generateBtn.addEventListener('click', writePassword);
```


Furthermore, once the user does press “generate button”, I installed a Windows.prompt() Method. The user is prompted to choose a character length, within a given range. For any value that is not within the characters and I also not within the character range, I had to create an “if/else” statement. I decided to use the IsNaN function within the generatePassword function. The IsNan function would come into play only if the user decides to input any other value except for a number. On the other end, if the user decides to put in a number that is outside of the range limit (8-128 characters) then in either (or, | |) situation they would receive a Windows.alert() Method. The alert should tell them to try again. The else portion of the statement is if the user decided to actually select a value between 8-128. For the else portion, I used the Windows.confirm() Method to bring up all of the other criteria options for the user. 

(The code below shows the “If/Else Statement, the “IsNaN function, and the prompt(), alert(), and confirm() methods). 
```
if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
     alert('Hey please select a proper length.');
     // after the alert, run writePassword again
     writePassword();
     return null;
  } else {
     // this else code runs if the user selected a value between 8 and 128!
     wantsUpper = confirm('Do you want uppercase letters in your password?');
     wantsLower = confirm('Do you want lowercase letters in your password?');
     wantsNumbers = confirm('Do you want numbers in your password?');
     wantsChars = confirm('Do you want special characters in your password?');
```


The next section of my code adds together and tracks the users preferences.They will be given a confirm() window which will ask them “If they want uppercase, lowercase, numbers, or special characters in their password. Once they make their decisions, the .concat method is used to track their inputs and set it equal to the variable of final “charactersArray”. 

(The resulting code is below)
```
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
```


Lastly, I used the “Math.floor(Math.random()” in order to initiate a random selection for the password to be assembled from, considering all of the users criteria. The Math.random method should keep running and selecting random characters until the password length is reached. (

The respective code is below.) 
```
for (var i = 0; i < passwordLength; i++) {
        var index = Math.floor(Math.random() * finalCharactersArray.length);
        password = password + finalCharactersArray[index]
```

### Usage: 

There are many reasons that a person or company would like to ultilize this software. Having the ability to have an unhackable and secure password is the next step in protecting your data and sensitive information. Having a password generator is key in having employees who work for governmental organizations handling either client data/ or top-secret information. Even more, in hospitals patient data should be protected with secure passwords. The most prevelent hackers can break through computer software and systems if passwords are chosen too laxly.

This software at Super Secure Inc. will guarantee a randomly selected, safe, and strong password. By having an option of numbers Uppercase, Lowercase, and Special Characters, users will get an opportunity to make passwords that could never be replicated or guessed. Aside from the positive features this website provides, it does not require installation, but instead a visit to our site! 


## Credits:
The below links helped as a reference to creating this web page:

* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
* https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
* https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
* https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/
* https://www.w3schools.com/jsref/jsref_substring.asp#:~:text=Definition%20and%20Usage,not%20change%20the%20original%20string.
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
* https://stackoverflow.com/questions/59904757/random-password-generator-javascript-not-returning-password
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
* https://www.w3schools.com/jsref/prop_text_value.asp#:~:text=The%20value%20property%20sets%20or,value%20set%20by%20a%20script). 
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN


### License:
MIT License

Copyright (c) [2023] [Afi Nkhume-Crecy]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 










