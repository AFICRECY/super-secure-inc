# Super-Secure-Inc


## Technology Used:
| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     | 
| Java | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)      | 

## Description: 

[Visit Deployed Site]: 

There are many companies that handle sensitive and maybe even top secret information. And within those companies, it is required that their employees can have access to and handle that information without risks. In a world full of hackers and threats to online security, it is important to have a super secure password. Super Secure Inc. is a website that can auto generate a safe and secure password with consideration to the users preferences. This website contains a feature that allows the user to place their character length, letter, and number preferences to then produce an auto generated super secure password. With our AI automatically generating a random password, employeers and employees can breathe easy knowing their information and data are safe. 


## Table of Contents: 
* Installation (Refactoring & Accessibility)
* Usage
* Credits 
* License


### Installation: 
 This project required a decent knowledge of JavaScript. The code in script.js facilitates the interactivity with the user as well as the arithmatic required to select a random secure password. To start off with, I declared multiple global scope variables at the top of the page of code. However, there are some variables which were intentionally left empty and would be given a value later on in the code. 
 
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
`
  password = password + finalCharactersArray[index]
`

More into the project I decided to use a document.queryselector which had handles (ids) registered within the HTML document. The queryselector 



### Usage: 



## Credits:
The below links helped as a reference to creating this web page:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
https://dev.to/ycmjason/how-to-create-range-in-javascript-539i
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
https://css-tricks.com/lots-of-ways-to-use-math-random-in-javascript/
https://www.w3schools.com/jsref/jsref_substring.asp#:~:text=Definition%20and%20Usage,not%20change%20the%20original%20string.
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
https://stackoverflow.com/questions/59904757/random-password-generator-javascript-not-returning-password
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
https://www.w3schools.com/jsref/prop_text_value.asp#:~:text=The%20value%20property%20sets%20or,value%20set%20by%20a%20script). 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN


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










